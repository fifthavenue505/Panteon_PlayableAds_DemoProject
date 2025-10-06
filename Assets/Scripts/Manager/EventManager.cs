using System;
using System.Collections.Generic;

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
    private static readonly Dictionary<GameEvent, Delegate> eventTable = new();

    // -------------------------------
    // AddHandler (No param)
    // -------------------------------
    public static void AddHandler(GameEvent evt, Action handler)
    {
        if (eventTable.TryGetValue(evt, out var existing))
            eventTable[evt] = Delegate.Combine(existing, handler);
        else
            eventTable[evt] = handler;
    }

    // -------------------------------
    // AddHandler (1 param)
    // -------------------------------
    public static void AddHandler<T>(GameEvent evt, Action<T> handler)
    {
        if (eventTable.TryGetValue(evt, out var existing))
            eventTable[evt] = Delegate.Combine(existing, handler);
        else
            eventTable[evt] = handler;
    }

    // -------------------------------
    // AddHandler (2 params)
    // -------------------------------
    public static void AddHandler<T1, T2>(GameEvent evt, Action<T1, T2> handler)
    {
        if (eventTable.TryGetValue(evt, out var existing))
            eventTable[evt] = Delegate.Combine(existing, handler);
        else
            eventTable[evt] = handler;
    }

    // -------------------------------
    // AddHandler (3 params)
    // -------------------------------
    public static void AddHandler<T1, T2, T3>(GameEvent evt, Action<T1, T2, T3> handler)
    {
        if (eventTable.TryGetValue(evt, out var existing))
            eventTable[evt] = Delegate.Combine(existing, handler);
        else
            eventTable[evt] = handler;
    }

    // -------------------------------
    // RemoveHandler (No param)
    // -------------------------------
    public static void RemoveHandler(GameEvent evt, Action handler)
    {
        if (eventTable.TryGetValue(evt, out var existing))
        {
            var current = Delegate.Remove(existing, handler);
            if (current == null) eventTable.Remove(evt);
            else eventTable[evt] = current;
        }
    }

    // -------------------------------
    // RemoveHandler (1 param)
    // -------------------------------
    public static void RemoveHandler<T>(GameEvent evt, Action<T> handler)
    {
        if (eventTable.TryGetValue(evt, out var existing))
        {
            var current = Delegate.Remove(existing, handler);
            if (current == null) eventTable.Remove(evt);
            else eventTable[evt] = current;
        }
    }

    // -------------------------------
    // RemoveHandler (2 params)
    // -------------------------------
    public static void RemoveHandler<T1, T2>(GameEvent evt, Action<T1, T2> handler)
    {
        if (eventTable.TryGetValue(evt, out var existing))
        {
            var current = Delegate.Remove(existing, handler);
            if (current == null) eventTable.Remove(evt);
            else eventTable[evt] = current;
        }
    }

    // -------------------------------
    // RemoveHandler (3 params)
    // -------------------------------
    public static void RemoveHandler<T1, T2, T3>(GameEvent evt, Action<T1, T2, T3> handler)
    {
        if (eventTable.TryGetValue(evt, out var existing))
        {
            var current = Delegate.Remove(existing, handler);
            if (current == null) eventTable.Remove(evt);
            else eventTable[evt] = current;
        }
    }

    // -------------------------------
    // Broadcast (No param)
    // -------------------------------
    public static void Broadcast(GameEvent evt)
    {
        if (eventTable.TryGetValue(evt, out var del))
        {
            if (del is Action action)
                action.Invoke();
        }
    }

    // -------------------------------
    // Broadcast (1 param)
    // -------------------------------
    public static void Broadcast<T>(GameEvent evt, T arg)
    {
        if (eventTable.TryGetValue(evt, out var del))
        {
            if (del is Action<T> action)
                action.Invoke(arg);
        }
    }

    // -------------------------------
    // Broadcast (2 params)
    // -------------------------------
    public static void Broadcast<T1, T2>(GameEvent evt, T1 arg1, T2 arg2)
    {
        if (eventTable.TryGetValue(evt, out var del))
        {
            if (del is Action<T1, T2> action)
                action.Invoke(arg1, arg2);
        }
    }

    // -------------------------------
    // Broadcast (3 params)
    // -------------------------------
    public static void Broadcast<T1, T2, T3>(GameEvent evt, T1 arg1, T2 arg2, T3 arg3)
    {
        if (eventTable.TryGetValue(evt, out var del))
        {
            if (del is Action<T1, T2, T3> action)
                action.Invoke(arg1, arg2, arg3);
        }
    }
}