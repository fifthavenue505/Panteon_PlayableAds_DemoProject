using System;
using System.Collections.Generic;

public enum GameEvent
{
    OnPlayerChangeState,
    OnPassengerChangeState,
}

public static class EventManager
{
    private static Dictionary<GameEvent, Delegate> eventTable = new();

    public static void AddHandler<T>(GameEvent evt, Action<T> handler)
    {
        if (eventTable.TryGetValue(evt, out var existing))
            eventTable[evt] = (Action<T>)existing + handler;
        else
            eventTable[evt] = handler;
    }

    public static void AddHandler<T1, T2>(GameEvent evt, Action<T1, T2> handler)
    {
        if (eventTable.TryGetValue(evt, out var existing))
            eventTable[evt] = (Action<T1, T2>)existing + handler;
        else
            eventTable[evt] = handler;
    }
    
    public static void RemoveHandler<T>(GameEvent evt, Action<T> handler)
    {
        if (eventTable.TryGetValue(evt, out var existing))
        {
            var current = (Action<T>)existing;
            current -= handler;

            if (current == null)
                eventTable.Remove(evt);
            else
                eventTable[evt] = current;
        }
    }

    public static void Broadcast<T>(GameEvent evt, T arg)
    {
        if (eventTable.TryGetValue(evt, out var del))
            (del as Action<T>)?.Invoke(arg);
    }

    public static void Broadcast<T1, T2>(GameEvent evt, T1 arg1, T2 arg2)
    {
        if (eventTable.TryGetValue(evt, out var del))
            (del as Action<T1, T2>)?.Invoke(arg1, arg2);
    }
}
