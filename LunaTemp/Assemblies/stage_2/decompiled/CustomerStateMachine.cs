using System.Collections.Generic;
using UnityEngine;

public class CustomerStateMachine : MonoBehaviour
{
	public CustomerController customerController;

	private CustomerBaseState currentState;

	[SerializeField]
	private CustomerStateType currentStateType;

	private Dictionary<CustomerStateType, CustomerBaseState> states;

	public CustomerStateType CurrentStateType => currentStateType;

	private void Awake()
	{
		customerController = GetComponent<CustomerController>();
		states = new Dictionary<CustomerStateType, CustomerBaseState>
		{
			{
				CustomerStateType.MovingToBaggageQueue,
				new MovingToBaggageQueue(this)
			},
			{
				CustomerStateType.IdleInBaggageQueue,
				new IdleInBaggageQueue(this)
			},
			{
				CustomerStateType.MovingToStairs,
				new MovingToStairs(this)
			},
			{
				CustomerStateType.IdleOnStairs,
				new IdleOnStairs(this)
			},
			{
				CustomerStateType.MovingToPlaneQueue,
				new MovingToPlaneQueue(this)
			},
			{
				CustomerStateType.IdleInPlaneQueue,
				new IdleInPlaneQueue(this)
			},
			{
				CustomerStateType.MovingToPlane,
				new MovingToPlane(this)
			},
			{
				CustomerStateType.Released,
				new Released(this)
			}
		};
	}

	private void Update()
	{
		currentState?.UpdateState();
	}

	private void OnCustomerChangeState(GameObject target, CustomerStateType stateType)
	{
		if (!(target != base.gameObject) && states.TryGetValue(stateType, out var newState))
		{
			currentState?.ExitState();
			currentState = newState;
			currentStateType = stateType;
			currentState?.EnterState();
		}
	}

	private void OnEnable()
	{
		EventManager.AddHandler<GameObject, CustomerStateType>(GameEvent.OnCustomerChangeState, OnCustomerChangeState);
	}

	private void OnDisable()
	{
		EventManager.RemoveHandler<GameObject, CustomerStateType>(GameEvent.OnCustomerChangeState, OnCustomerChangeState);
	}
}
