Shader "Custom/PaintShader"
{
    Properties
    {
        _MainTex ("Base (RGB)", 2D) = "white" {}
        _BrushTex ("Brush", 2D) = "white" {}
        _BrushColor ("Brush Color", Color) = (1,1,1,1)
        _BrushUV ("Brush UV", Vector) = (0,0,0,0)
        _BrushSize ("Brush Size", Float) = 0.05
    }
    SubShader
    {
        Tags { "RenderType"="Opaque" }
        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            sampler2D _MainTex;
            sampler2D _BrushTex;
            float4 _BrushColor;
            float4 _BrushUV;
            float _BrushSize;

            struct appdata
            {
                float4 vertex : POSITION;
                float2 uv : TEXCOORD0;
            };

            struct v2f
            {
                float2 uv : TEXCOORD0;
                float4 vertex : SV_POSITION;
            };

            v2f vert(appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = v.uv;
                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                // Ana texture’dan oku
                fixed4 col = tex2D(_MainTex, i.uv);

                // Brush merkezinden uzaklığı hesapla
                float2 diff = (i.uv - _BrushUV.xy) / _BrushSize;
                float dist = length(diff);

                // Brush texture’ünü oku
                fixed4 b = tex2D(_BrushTex, diff * 0.5 + 0.5);

                // Eğer brush içindeyse boyayı uygula
                if (dist < 0.5)
                {
                    col = lerp(col, _BrushColor, b.a);
                }

                return col;
            }
            ENDCG
        }
    }
}