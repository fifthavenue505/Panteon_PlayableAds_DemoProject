using System;
using System.Collections.Generic;

// Each event can be broadcast and listened to by multiple components
public enum GameEvent
{
    OnPlayerChangeState,
    OnCustomerChangeState,
    OnEnvironmentElementsActivated,
    OnBoardActivated,
    OnUpdateMoney,
    OnBringInCustomers,
    OnCustomerBoard,
    OnCustomerEnterPlane,
    OnMovePlane,
    OnSetPlayerAnimation,
    OnSetCustomerAnimation,
    OnStepRecycled,
    OnPaintProgressUpdated,
    OnPaintCompleted,
    OnBrushSizeChanged,
    OnTruckArrive,
    OnTutorialStepCompleted,
}

public static class EventManager
{
    // Dictionary that maps each event type
    private static readonly Dictionary<GameEvent, Delegate> eventTable = new();

    // Registers a new event handler for the specified event type
    public static void AddHandler<TDelegate>(GameEvent evt, TDelegate handler) where TDelegate : Delegate
    {
        if (eventTable.TryGetValue(evt, out var existing))
            eventTable[evt] = Delegate.Combine(existing, handler);
        else
            eventTable[evt] = handler;
    }

     // Removes a specific handler from the specified event
    public static void RemoveHandler<TDelegate>(GameEvent evt, TDelegate handler) where TDelegate : Delegate
    {
        if (eventTable.TryGetValue(evt, out var existing))
        {
            var current = Delegate.Remove(existing, handler);
            if (current == null) eventTable.Remove(evt);
            else eventTable[evt] = current;
        }
    }

    // Broadcasts an event to all subscribed listeners
    public static void Broadcast(GameEvent evt, params object[] args)
    {
        if (eventTable.TryGetValue(evt, out var del))
            del.DynamicInvoke(args);
    }
}
