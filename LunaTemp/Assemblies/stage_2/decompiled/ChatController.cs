using System;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ChatController : MonoBehaviour
{
	public TMP_InputField ChatInputField;

	public TMP_Text ChatDisplayOutput;

	public Scrollbar ChatScrollbar;

	private void OnEnable()
	{
		ChatInputField.onSubmit.AddListener(AddToChatOutput);
	}

	private void OnDisable()
	{
		ChatInputField.onSubmit.RemoveListener(AddToChatOutput);
	}

	private void AddToChatOutput(string newText)
	{
		ChatInputField.text = string.Empty;
		DateTime timeNow = DateTime.Now;
		string formattedInput = "[<#FFFF80>" + timeNow.Hour.ToString("d2") + ":" + timeNow.Minute.ToString("d2") + ":" + timeNow.Second.ToString("d2") + "</color>] " + newText;
		if (ChatDisplayOutput != null)
		{
			if (ChatDisplayOutput.text == string.Empty)
			{
				ChatDisplayOutput.text = formattedInput;
			}
			else
			{
				TMP_Text chatDisplayOutput = ChatDisplayOutput;
				chatDisplayOutput.text = chatDisplayOutput.text + "\n" + formattedInput;
			}
		}
		ChatInputField.ActivateInputField();
		ChatScrollbar.value = 0f;
	}
}
