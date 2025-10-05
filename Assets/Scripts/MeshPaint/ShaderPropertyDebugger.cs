using Sirenix.OdinInspector;
using UnityEngine;

public class ShaderPropertyDebugger : MonoBehaviour
{
    [SerializeField] private Renderer rend;

    [Button]
    private void LogTextureProperties()
    {
        if (rend == null) rend = GetComponent<Renderer>();
        if (rend == null)
        {
            Debug.LogWarning("No renderer!");
            return;
        }

        for (int i = 0; i < rend.sharedMaterials.Length; i++)
        {
            var mat = rend.sharedMaterials[i];
            if (mat == null) continue;

            Debug.Log($"--- Material {i}: {mat.name} | Shader: {mat.shader.name} ---");

            foreach (string texName in mat.GetTexturePropertyNames())
            {
                Debug.Log($"Texture property: {texName}");
            }
        }
    }
}