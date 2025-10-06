using System;
using System.Collections.Generic;

public static class EventManager
{
	private static readonly Dictionary<GameEvent, Delegate> eventTable = new Dictionary<GameEvent, Delegate>();

	public static void AddHandler(GameEvent evt, Action handler)
	{
		if (eventTable.TryGetValue(evt, out var existing))
		{
			eventTable[evt] = Delegate.Combine(existing, handler);
		}
		else
		{
			eventTable[evt] = handler;
		}
	}

	public static void AddHandler<T>(GameEvent evt, Action<T> handler)
	{
		if (eventTable.TryGetValue(evt, out var existing))
		{
			eventTable[evt] = Delegate.Combine(existing, handler);
		}
		else
		{
			eventTable[evt] = handler;
		}
	}

	public static void AddHandler<T1, T2>(GameEvent evt, Action<T1, T2> handler)
	{
		if (eventTable.TryGetValue(evt, out var existing))
		{
			eventTable[evt] = Delegate.Combine(existing, handler);
		}
		else
		{
			eventTable[evt] = handler;
		}
	}

	public static void AddHandler<T1, T2, T3>(GameEvent evt, Action<T1, T2, T3> handler)
	{
		if (eventTable.TryGetValue(evt, out var existing))
		{
			eventTable[evt] = Delegate.Combine(existing, handler);
		}
		else
		{
			eventTable[evt] = handler;
		}
	}

	public static void RemoveHandler(GameEvent evt, Action handler)
	{
		if (eventTable.TryGetValue(evt, out var existing))
		{
			Delegate current = Delegate.Remove(existing, handler);
			if ((object)current == null)
			{
				eventTable.Remove(evt);
			}
			else
			{
				eventTable[evt] = current;
			}
		}
	}

	public static void RemoveHandler<T>(GameEvent evt, Action<T> handler)
	{
		if (eventTable.TryGetValue(evt, out var existing))
		{
			Delegate current = Delegate.Remove(existing, handler);
			if ((object)current == null)
			{
				eventTable.Remove(evt);
			}
			else
			{
				eventTable[evt] = current;
			}
		}
	}

	public static void RemoveHandler<T1, T2>(GameEvent evt, Action<T1, T2> handler)
	{
		if (eventTable.TryGetValue(evt, out var existing))
		{
			Delegate current = Delegate.Remove(existing, handler);
			if ((object)current == null)
			{
				eventTable.Remove(evt);
			}
			else
			{
				eventTable[evt] = current;
			}
		}
	}

	public static void RemoveHandler<T1, T2, T3>(GameEvent evt, Action<T1, T2, T3> handler)
	{
		if (eventTable.TryGetValue(evt, out var existing))
		{
			Delegate current = Delegate.Remove(existing, handler);
			if ((object)current == null)
			{
				eventTable.Remove(evt);
			}
			else
			{
				eventTable[evt] = current;
			}
		}
	}

	public static void Broadcast(GameEvent evt)
	{
		if (eventTable.TryGetValue(evt, out var del) && del is Action action)
		{
			action();
		}
	}

	public static void Broadcast<T>(GameEvent evt, T arg)
	{
		if (eventTable.TryGetValue(evt, out var del) && del is Action<T> action)
		{
			action(arg);
		}
	}

	public static void Broadcast<T1, T2>(GameEvent evt, T1 arg1, T2 arg2)
	{
		if (eventTable.TryGetValue(evt, out var del) && del is Action<T1, T2> action)
		{
			action(arg1, arg2);
		}
	}

	public static void Broadcast<T1, T2, T3>(GameEvent evt, T1 arg1, T2 arg2, T3 arg3)
	{
		if (eventTable.TryGetValue(evt, out var del) && del is Action<T1, T2, T3> action)
		{
			action(arg1, arg2, arg3);
		}
	}
}
