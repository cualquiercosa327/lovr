#version 460
#extension GL_EXT_multiview : require
#extension GL_GOOGLE_include_directive : require

#include "lovr.glsl"

layout(set = 1, binding = 1) uniform texture2DArray ArrayTexture;

vec4 lovrmain() {
  vec2 uv = vec2(2 * UV.x, UV.y);
  vec3 uvw = vec3(uv, round(UV.x));
  return Color * getPixel(ArrayTexture, uvw);
}
