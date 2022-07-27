var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1970 = root || request.c( 'UnityEngine.JointSpring' )
  var i1971 = data
  i1970.spring = i1971[0]
  i1970.damper = i1971[1]
  i1970.targetPosition = i1971[2]
  return i1970
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1972 = root || request.c( 'UnityEngine.JointMotor' )
  var i1973 = data
  i1972.m_TargetVelocity = i1973[0]
  i1972.m_Force = i1973[1]
  i1972.m_FreeSpin = i1973[2]
  return i1972
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1974 = root || request.c( 'UnityEngine.JointLimits' )
  var i1975 = data
  i1974.m_Min = i1975[0]
  i1974.m_Max = i1975[1]
  i1974.m_Bounciness = i1975[2]
  i1974.m_BounceMinVelocity = i1975[3]
  i1974.m_ContactDistance = i1975[4]
  i1974.minBounce = i1975[5]
  i1974.maxBounce = i1975[6]
  return i1974
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.JointDrive' )
  var i1977 = data
  i1976.m_PositionSpring = i1977[0]
  i1976.m_PositionDamper = i1977[1]
  i1976.m_MaximumForce = i1977[2]
  return i1976
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1978 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1979 = data
  i1978.m_Spring = i1979[0]
  i1978.m_Damper = i1979[1]
  return i1978
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1981 = data
  i1980.m_Limit = i1981[0]
  i1980.m_Bounciness = i1981[1]
  i1980.m_ContactDistance = i1981[2]
  return i1980
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1983 = data
  i1982.m_ExtremumSlip = i1983[0]
  i1982.m_ExtremumValue = i1983[1]
  i1982.m_AsymptoteSlip = i1983[2]
  i1982.m_AsymptoteValue = i1983[3]
  i1982.m_Stiffness = i1983[4]
  return i1982
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1985 = data
  i1984.m_LowerAngle = i1985[0]
  i1984.m_UpperAngle = i1985[1]
  return i1984
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1986 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1987 = data
  i1986.m_MotorSpeed = i1987[0]
  i1986.m_MaximumMotorTorque = i1987[1]
  return i1986
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1988 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1989 = data
  i1988.m_DampingRatio = i1989[0]
  i1988.m_Frequency = i1989[1]
  i1988.m_Angle = i1989[2]
  return i1988
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1990 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1991 = data
  i1990.m_LowerTranslation = i1991[0]
  i1990.m_UpperTranslation = i1991[1]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1992 = root || new pc.UnityMaterial()
  var i1993 = data
  i1992.name = i1993[0]
  request.r(i1993[1], i1993[2], 0, i1992, 'shader')
  i1992.renderQueue = i1993[3]
  i1992.enableInstancing = !!i1993[4]
  var i1995 = i1993[5]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 1) {
    i1994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1995[i + 0]) );
  }
  i1992.floatParameters = i1994
  var i1997 = i1993[6]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1997[i + 0]) );
  }
  i1992.colorParameters = i1996
  var i1999 = i1993[7]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1999[i + 0]) );
  }
  i1992.vectorParameters = i1998
  var i2001 = i1993[8]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2001[i + 0]) );
  }
  i1992.textureParameters = i2000
  var i2003 = i1993[9]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2003[i + 0]) );
  }
  i1992.materialFlags = i2002
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2007 = data
  i2006.name = i2007[0]
  i2006.value = i2007[1]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2011 = data
  i2010.name = i2011[0]
  i2010.value = new pc.Color(i2011[1], i2011[2], i2011[3], i2011[4])
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2015 = data
  i2014.name = i2015[0]
  i2014.value = new pc.Vec4( i2015[1], i2015[2], i2015[3], i2015[4] )
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2019 = data
  i2018.name = i2019[0]
  request.r(i2019[1], i2019[2], 0, i2018, 'value')
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2023 = data
  i2022.name = i2023[0]
  i2022.enabled = !!i2023[1]
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2025 = data
  i2024.name = i2025[0]
  i2024.width = i2025[1]
  i2024.height = i2025[2]
  i2024.mipmapCount = i2025[3]
  i2024.anisoLevel = i2025[4]
  i2024.filterMode = i2025[5]
  i2024.hdr = !!i2025[6]
  i2024.format = i2025[7]
  i2024.wrapMode = i2025[8]
  i2024.alphaIsTransparency = !!i2025[9]
  i2024.alphaSource = i2025[10]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2027 = data
  i2026.position = new pc.Vec3( i2027[0], i2027[1], i2027[2] )
  i2026.scale = new pc.Vec3( i2027[3], i2027[4], i2027[5] )
  i2026.rotation = new pc.Quat(i2027[6], i2027[7], i2027[8], i2027[9])
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2029 = data
  i2028.enabled = !!i2029[0]
  request.r(i2029[1], i2029[2], 0, i2028, 'sharedMaterial')
  var i2031 = i2029[3]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 2) {
  request.r(i2031[i + 0], i2031[i + 1], 2, i2030, '')
  }
  i2028.sharedMaterials = i2030
  i2028.receiveShadows = !!i2029[4]
  i2028.shadowCastingMode = i2029[5]
  i2028.sortingLayerID = i2029[6]
  i2028.sortingOrder = i2029[7]
  i2028.lightmapIndex = i2029[8]
  i2028.lightmapSceneIndex = i2029[9]
  i2028.lightmapScaleOffset = new pc.Vec4( i2029[10], i2029[11], i2029[12], i2029[13] )
  i2028.lightProbeUsage = i2029[14]
  i2028.reflectionProbeUsage = i2029[15]
  i2028.color = new pc.Color(i2029[16], i2029[17], i2029[18], i2029[19])
  request.r(i2029[20], i2029[21], 0, i2028, 'sprite')
  i2028.flipX = !!i2029[22]
  i2028.flipY = !!i2029[23]
  i2028.drawMode = i2029[24]
  i2028.size = new pc.Vec2( i2029[25], i2029[26] )
  i2028.tileMode = i2029[27]
  i2028.adaptiveModeThreshold = i2029[28]
  i2028.maskInteraction = i2029[29]
  i2028.spriteSortPoint = i2029[30]
  return i2028
}

Deserializers["Brick"] = function (request, data, root) {
  var i2034 = root || request.c( 'Brick' )
  var i2035 = data
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2037 = data
  i2036.name = i2037[0]
  i2036.tag = i2037[1]
  i2036.enabled = !!i2037[2]
  i2036.isStatic = !!i2037[3]
  i2036.layer = i2037[4]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2039 = data
  i2038.name = i2039[0]
  i2038.halfPrecision = !!i2039[1]
  i2038.vertexCount = i2039[2]
  i2038.aabb = i2039[3]
  var i2041 = i2039[4]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( !!i2041[i + 0] );
  }
  i2038.streams = i2040
  i2038.vertices = i2039[5]
  var i2043 = i2039[6]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2043[i + 0]) );
  }
  i2038.subMeshes = i2042
  var i2045 = i2039[7]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 16) {
    i2044.push( new pc.Mat4().setData(i2045[i + 0], i2045[i + 1], i2045[i + 2], i2045[i + 3],  i2045[i + 4], i2045[i + 5], i2045[i + 6], i2045[i + 7],  i2045[i + 8], i2045[i + 9], i2045[i + 10], i2045[i + 11],  i2045[i + 12], i2045[i + 13], i2045[i + 14], i2045[i + 15]) );
  }
  i2038.bindposes = i2044
  var i2047 = i2039[8]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2047[i + 0]) );
  }
  i2038.blendShapes = i2046
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2053 = data
  i2052.triangles = i2053[0]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2059 = data
  i2058.name = i2059[0]
  var i2061 = i2059[1]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2061[i + 0]) );
  }
  i2058.frames = i2060
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2063 = data
  i2062.name = i2063[0]
  i2062.atlasId = i2063[1]
  i2062.mipmapCount = i2063[2]
  i2062.hdr = !!i2063[3]
  i2062.size = i2063[4]
  i2062.anisoLevel = i2063[5]
  i2062.filterMode = i2063[6]
  i2062.wrapMode = i2063[7]
  var i2065 = i2063[8]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 4) {
    i2064.push( UnityEngine.Rect.MinMaxRect(i2065[i + 0], i2065[i + 1], i2065[i + 2], i2065[i + 3]) );
  }
  i2062.rects = i2064
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2069 = data
  i2068.name = i2069[0]
  i2068.index = i2069[1]
  i2068.startup = !!i2069[2]
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2071 = data
  i2070.enabled = !!i2071[0]
  i2070.aspect = i2071[1]
  i2070.orthographic = !!i2071[2]
  i2070.orthographicSize = i2071[3]
  i2070.backgroundColor = new pc.Color(i2071[4], i2071[5], i2071[6], i2071[7])
  i2070.nearClipPlane = i2071[8]
  i2070.farClipPlane = i2071[9]
  i2070.fieldOfView = i2071[10]
  i2070.depth = i2071[11]
  i2070.clearFlags = i2071[12]
  i2070.cullingMask = i2071[13]
  i2070.rect = i2071[14]
  request.r(i2071[15], i2071[16], 0, i2070, 'targetTexture')
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2073 = data
  i2072.enabled = !!i2073[0]
  i2072.type = i2073[1]
  i2072.color = new pc.Color(i2073[2], i2073[3], i2073[4], i2073[5])
  i2072.cullingMask = i2073[6]
  i2072.intensity = i2073[7]
  i2072.range = i2073[8]
  i2072.spotAngle = i2073[9]
  i2072.shadows = i2073[10]
  i2072.shadowNormalBias = i2073[11]
  i2072.shadowBias = i2073[12]
  i2072.shadowStrength = i2073[13]
  i2072.lightmapBakeType = i2073[14]
  i2072.renderMode = i2073[15]
  request.r(i2073[16], i2073[17], 0, i2072, 'cookie')
  i2072.cookieSize = i2073[18]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2075 = data
  i2074.pivot = new pc.Vec2( i2075[0], i2075[1] )
  i2074.anchorMin = new pc.Vec2( i2075[2], i2075[3] )
  i2074.anchorMax = new pc.Vec2( i2075[4], i2075[5] )
  i2074.sizeDelta = new pc.Vec2( i2075[6], i2075[7] )
  i2074.anchoredPosition3D = new pc.Vec3( i2075[8], i2075[9], i2075[10] )
  i2074.rotation = new pc.Quat(i2075[11], i2075[12], i2075[13], i2075[14])
  i2074.scale = new pc.Vec3( i2075[15], i2075[16], i2075[17] )
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2077 = data
  i2076.enabled = !!i2077[0]
  i2076.planeDistance = i2077[1]
  i2076.referencePixelsPerUnit = i2077[2]
  i2076.isFallbackOverlay = !!i2077[3]
  i2076.renderMode = i2077[4]
  i2076.renderOrder = i2077[5]
  i2076.sortingLayerName = i2077[6]
  i2076.sortingOrder = i2077[7]
  i2076.scaleFactor = i2077[8]
  request.r(i2077[9], i2077[10], 0, i2076, 'worldCamera')
  i2076.overrideSorting = !!i2077[11]
  i2076.pixelPerfect = !!i2077[12]
  i2076.targetDisplay = i2077[13]
  i2076.overridePixelPerfect = !!i2077[14]
  return i2076
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2078 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2079 = data
  i2078.m_UiScaleMode = i2079[0]
  i2078.m_ReferencePixelsPerUnit = i2079[1]
  i2078.m_ScaleFactor = i2079[2]
  i2078.m_ReferenceResolution = new pc.Vec2( i2079[3], i2079[4] )
  i2078.m_ScreenMatchMode = i2079[5]
  i2078.m_MatchWidthOrHeight = i2079[6]
  i2078.m_PhysicalUnit = i2079[7]
  i2078.m_FallbackScreenDPI = i2079[8]
  i2078.m_DefaultSpriteDPI = i2079[9]
  i2078.m_DynamicPixelsPerUnit = i2079[10]
  i2078.m_PresetInfoIsWorld = !!i2079[11]
  return i2078
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2080 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2081 = data
  i2080.m_IgnoreReversedGraphics = !!i2081[0]
  i2080.m_BlockingObjects = i2081[1]
  i2080.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2081[2] )
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2083 = data
  i2082.cullTransparentMesh = !!i2083[0]
  return i2082
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2084 = root || request.c( 'UnityEngine.UI.Image' )
  var i2085 = data
  request.r(i2085[0], i2085[1], 0, i2084, 'm_Sprite')
  i2084.m_Type = i2085[2]
  i2084.m_PreserveAspect = !!i2085[3]
  i2084.m_FillCenter = !!i2085[4]
  i2084.m_FillMethod = i2085[5]
  i2084.m_FillAmount = i2085[6]
  i2084.m_FillClockwise = !!i2085[7]
  i2084.m_FillOrigin = i2085[8]
  i2084.m_UseSpriteMesh = !!i2085[9]
  i2084.m_PixelsPerUnitMultiplier = i2085[10]
  request.r(i2085[11], i2085[12], 0, i2084, 'm_Material')
  i2084.m_Maskable = !!i2085[13]
  i2084.m_Color = new pc.Color(i2085[14], i2085[15], i2085[16], i2085[17])
  i2084.m_RaycastTarget = !!i2085[18]
  i2084.m_RaycastPadding = new pc.Vec4( i2085[19], i2085[20], i2085[21], i2085[22] )
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2087 = data
  request.r(i2087[0], i2087[1], 0, i2086, 'animatorController')
  i2086.updateMode = i2087[2]
  var i2089 = i2087[3]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 2) {
  request.r(i2089[i + 0], i2089[i + 1], 2, i2088, '')
  }
  i2086.humanBones = i2088
  i2086.enabled = !!i2087[4]
  return i2086
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2092 = root || request.c( 'UnityEngine.UI.Button' )
  var i2093 = data
  i2092.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2093[0], i2092.m_OnClick)
  i2092.m_Navigation = request.d('UnityEngine.UI.Navigation', i2093[1], i2092.m_Navigation)
  i2092.m_Transition = i2093[2]
  i2092.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2093[3], i2092.m_Colors)
  i2092.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2093[4], i2092.m_SpriteState)
  i2092.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2093[5], i2092.m_AnimationTriggers)
  i2092.m_Interactable = !!i2093[6]
  request.r(i2093[7], i2093[8], 0, i2092, 'm_TargetGraphic')
  return i2092
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2094 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2095 = data
  i2094.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2095[0], i2094.m_PersistentCalls)
  return i2094
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2097 = data
  var i2099 = i2097[0]
  var i2098 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.add(request.d('UnityEngine.Events.PersistentCall', i2099[i + 0]));
  }
  i2096.m_Calls = i2098
  return i2096
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2102 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2103 = data
  request.r(i2103[0], i2103[1], 0, i2102, 'm_Target')
  i2102.m_TargetAssemblyTypeName = i2103[2]
  i2102.m_MethodName = i2103[3]
  i2102.m_Mode = i2103[4]
  i2102.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2103[5], i2102.m_Arguments)
  i2102.m_CallState = i2103[6]
  return i2102
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2104 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2105 = data
  request.r(i2105[0], i2105[1], 0, i2104, 'm_ObjectArgument')
  i2104.m_ObjectArgumentAssemblyTypeName = i2105[2]
  i2104.m_IntArgument = i2105[3]
  i2104.m_FloatArgument = i2105[4]
  i2104.m_StringArgument = i2105[5]
  i2104.m_BoolArgument = !!i2105[6]
  return i2104
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2106 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2107 = data
  i2106.m_Mode = i2107[0]
  i2106.m_WrapAround = !!i2107[1]
  request.r(i2107[2], i2107[3], 0, i2106, 'm_SelectOnUp')
  request.r(i2107[4], i2107[5], 0, i2106, 'm_SelectOnDown')
  request.r(i2107[6], i2107[7], 0, i2106, 'm_SelectOnLeft')
  request.r(i2107[8], i2107[9], 0, i2106, 'm_SelectOnRight')
  return i2106
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2108 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2109 = data
  i2108.m_NormalColor = new pc.Color(i2109[0], i2109[1], i2109[2], i2109[3])
  i2108.m_HighlightedColor = new pc.Color(i2109[4], i2109[5], i2109[6], i2109[7])
  i2108.m_PressedColor = new pc.Color(i2109[8], i2109[9], i2109[10], i2109[11])
  i2108.m_SelectedColor = new pc.Color(i2109[12], i2109[13], i2109[14], i2109[15])
  i2108.m_DisabledColor = new pc.Color(i2109[16], i2109[17], i2109[18], i2109[19])
  i2108.m_ColorMultiplier = i2109[20]
  i2108.m_FadeDuration = i2109[21]
  return i2108
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2110 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2111 = data
  request.r(i2111[0], i2111[1], 0, i2110, 'm_HighlightedSprite')
  request.r(i2111[2], i2111[3], 0, i2110, 'm_PressedSprite')
  request.r(i2111[4], i2111[5], 0, i2110, 'm_SelectedSprite')
  request.r(i2111[6], i2111[7], 0, i2110, 'm_DisabledSprite')
  return i2110
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2112 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2113 = data
  i2112.m_NormalTrigger = i2113[0]
  i2112.m_HighlightedTrigger = i2113[1]
  i2112.m_PressedTrigger = i2113[2]
  i2112.m_SelectedTrigger = i2113[3]
  i2112.m_DisabledTrigger = i2113[4]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i2115 = data
  i2114.playAutomatically = !!i2115[0]
  request.r(i2115[1], i2115[2], 0, i2114, 'clip')
  var i2117 = i2115[3]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 2) {
  request.r(i2117[i + 0], i2117[i + 1], 2, i2116, '')
  }
  i2114.clips = i2116
  i2114.wrapMode = i2115[4]
  i2114.enabled = !!i2115[5]
  return i2114
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2121 = data
  request.r(i2121[0], i2121[1], 0, i2120, 'm_FirstSelected')
  i2120.m_sendNavigationEvents = !!i2121[2]
  i2120.m_DragThreshold = i2121[3]
  return i2120
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2123 = data
  i2122.m_HorizontalAxis = i2123[0]
  i2122.m_VerticalAxis = i2123[1]
  i2122.m_SubmitButton = i2123[2]
  i2122.m_CancelButton = i2123[3]
  i2122.m_InputActionsPerSecond = i2123[4]
  i2122.m_RepeatDelay = i2123[5]
  i2122.m_ForceModuleActive = !!i2123[6]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2125 = data
  request.r(i2125[0], i2125[1], 0, i2124, 'sharedMesh')
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2127 = data
  request.r(i2127[0], i2127[1], 0, i2126, 'additionalVertexStreams')
  i2126.enabled = !!i2127[2]
  request.r(i2127[3], i2127[4], 0, i2126, 'sharedMaterial')
  var i2129 = i2127[5]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 2) {
  request.r(i2129[i + 0], i2129[i + 1], 2, i2128, '')
  }
  i2126.sharedMaterials = i2128
  i2126.receiveShadows = !!i2127[6]
  i2126.shadowCastingMode = i2127[7]
  i2126.sortingLayerID = i2127[8]
  i2126.sortingOrder = i2127[9]
  i2126.lightmapIndex = i2127[10]
  i2126.lightmapSceneIndex = i2127[11]
  i2126.lightmapScaleOffset = new pc.Vec4( i2127[12], i2127[13], i2127[14], i2127[15] )
  i2126.lightProbeUsage = i2127[16]
  i2126.reflectionProbeUsage = i2127[17]
  return i2126
}

Deserializers["BucketCrusher2"] = function (request, data, root) {
  var i2130 = root || request.c( 'BucketCrusher2' )
  var i2131 = data
  request.r(i2131[0], i2131[1], 0, i2130, 'brickManager')
  var i2133 = i2131[2]
  var i2132 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2133.length; i += 2) {
  request.r(i2133[i + 0], i2133[i + 1], 1, i2132, '')
  }
  i2130.lstSaw = i2132
  var i2135 = i2131[3]
  var i2134 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.MeshRenderer')))
  for(var i = 0; i < i2135.length; i += 2) {
  request.r(i2135[i + 0], i2135[i + 1], 1, i2134, '')
  }
  i2130.lstTruc = i2134
  var i2137 = i2131[4]
  var i2136 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.MeshRenderer')))
  for(var i = 0; i < i2137.length; i += 2) {
  request.r(i2137[i + 0], i2137[i + 1], 1, i2136, '')
  }
  i2130.lstTam = i2136
  var i2139 = i2131[5]
  var i2138 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.MeshRenderer')))
  for(var i = 0; i < i2139.length; i += 2) {
  request.r(i2139[i + 0], i2139[i + 1], 1, i2138, '')
  }
  i2130.lstBorder = i2138
  var i2141 = i2131[6]
  var i2140 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i2141.length; i += 2) {
  request.r(i2141[i + 0], i2141[i + 1], 1, i2140, '')
  }
  i2130.lstMateCaptain = i2140
  var i2143 = i2131[7]
  var i2142 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i2143.length; i += 2) {
  request.r(i2143[i + 0], i2143[i + 1], 1, i2142, '')
  }
  i2130.lstMateCandy = i2142
  var i2145 = i2131[8]
  var i2144 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i2145.length; i += 2) {
  request.r(i2145[i + 0], i2145[i + 1], 1, i2144, '')
  }
  i2130.lstWindMill = i2144
  request.r(i2131[9], i2131[10], 0, i2130, 'soundControll')
  request.r(i2131[11], i2131[12], 0, i2130, 'guideChooseGroup')
  request.r(i2131[13], i2131[14], 0, i2130, 'guideDrag')
  return i2130
}

Deserializers["BrickManager"] = function (request, data, root) {
  var i2152 = root || request.c( 'BrickManager' )
  var i2153 = data
  request.r(i2153[0], i2153[1], 0, i2152, 'imageLoader')
  request.r(i2153[2], i2153[3], 0, i2152, 'brickPrefab')
  request.r(i2153[4], i2153[5], 0, i2152, 'brickHolder')
  i2152.positionBrickHold = new pc.Vec3( i2153[6], i2153[7], i2153[8] )
  i2152.brickSize = i2153[9]
  i2152.brickHealth = i2153[10]
  i2152.xOffset = i2153[11]
  return i2152
}

Deserializers["SoundController"] = function (request, data, root) {
  var i2154 = root || request.c( 'SoundController' )
  var i2155 = data
  request.r(i2155[0], i2155[1], 0, i2154, 'audioSourceFX')
  request.r(i2155[2], i2155[3], 0, i2154, 'audioSourceBG')
  request.r(i2155[4], i2155[5], 0, i2154, 'clipClick')
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2157 = data
  request.r(i2157[0], i2157[1], 0, i2156, 'clip')
  request.r(i2157[2], i2157[3], 0, i2156, 'outputAudioMixerGroup')
  i2156.playOnAwake = !!i2157[4]
  i2156.loop = !!i2157[5]
  i2156.time = i2157[6]
  i2156.volume = i2157[7]
  i2156.pitch = i2157[8]
  i2156.enabled = !!i2157[9]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2159 = data
  i2158.ambientIntensity = i2159[0]
  i2158.reflectionIntensity = i2159[1]
  i2158.ambientMode = i2159[2]
  i2158.ambientLight = new pc.Color(i2159[3], i2159[4], i2159[5], i2159[6])
  i2158.ambientSkyColor = new pc.Color(i2159[7], i2159[8], i2159[9], i2159[10])
  i2158.ambientGroundColor = new pc.Color(i2159[11], i2159[12], i2159[13], i2159[14])
  i2158.ambientEquatorColor = new pc.Color(i2159[15], i2159[16], i2159[17], i2159[18])
  i2158.fogColor = new pc.Color(i2159[19], i2159[20], i2159[21], i2159[22])
  i2158.fogEndDistance = i2159[23]
  i2158.fogStartDistance = i2159[24]
  i2158.fogDensity = i2159[25]
  i2158.fog = !!i2159[26]
  request.r(i2159[27], i2159[28], 0, i2158, 'skybox')
  i2158.fogMode = i2159[29]
  var i2161 = i2159[30]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2161[i + 0]) );
  }
  i2158.lightmaps = i2160
  i2158.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2159[31], i2158.lightProbes)
  i2158.lightmapsMode = i2159[32]
  i2158.environmentLightingMode = i2159[33]
  i2158.ambientProbe = new pc.SphericalHarmonicsL2(i2159[34])
  request.r(i2159[35], i2159[36], 0, i2158, 'customReflection')
  request.r(i2159[37], i2159[38], 0, i2158, 'defaultReflection')
  i2158.defaultReflectionMode = i2159[39]
  i2158.defaultReflectionResolution = i2159[40]
  i2158.sunLightObjectId = i2159[41]
  i2158.pixelLightCount = i2159[42]
  i2158.defaultReflectionHDR = !!i2159[43]
  i2158.hasLightDataAsset = !!i2159[44]
  i2158.hasManualGenerate = !!i2159[45]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'lightmapColor')
  request.r(i2165[2], i2165[3], 0, i2164, 'lightmapDirection')
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2166 = root || new UnityEngine.LightProbes()
  var i2167 = data
  return i2166
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2174 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2175 = data
  i2174.useSafeMode = !!i2175[0]
  i2174.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2175[1], i2174.safeModeOptions)
  i2174.timeScale = i2175[2]
  i2174.useSmoothDeltaTime = !!i2175[3]
  i2174.maxSmoothUnscaledTime = i2175[4]
  i2174.rewindCallbackMode = i2175[5]
  i2174.showUnityEditorReport = !!i2175[6]
  i2174.logBehaviour = i2175[7]
  i2174.drawGizmos = !!i2175[8]
  i2174.defaultRecyclable = !!i2175[9]
  i2174.defaultAutoPlay = i2175[10]
  i2174.defaultUpdateType = i2175[11]
  i2174.defaultTimeScaleIndependent = !!i2175[12]
  i2174.defaultEaseType = i2175[13]
  i2174.defaultEaseOvershootOrAmplitude = i2175[14]
  i2174.defaultEasePeriod = i2175[15]
  i2174.defaultAutoKill = !!i2175[16]
  i2174.defaultLoopType = i2175[17]
  i2174.debugMode = !!i2175[18]
  i2174.debugStoreTargetId = !!i2175[19]
  i2174.showPreviewPanel = !!i2175[20]
  i2174.storeSettingsLocation = i2175[21]
  i2174.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2175[22], i2174.modules)
  i2174.createASMDEF = !!i2175[23]
  i2174.showPlayingTweens = !!i2175[24]
  i2174.showPausedTweens = !!i2175[25]
  return i2174
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2176 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2177 = data
  i2176.logBehaviour = i2177[0]
  i2176.nestedTweenFailureBehaviour = i2177[1]
  return i2176
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2178 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2179 = data
  i2178.showPanel = !!i2179[0]
  i2178.audioEnabled = !!i2179[1]
  i2178.physicsEnabled = !!i2179[2]
  i2178.physics2DEnabled = !!i2179[3]
  i2178.spriteEnabled = !!i2179[4]
  i2178.uiEnabled = !!i2179[5]
  i2178.textMeshProEnabled = !!i2179[6]
  i2178.tk2DEnabled = !!i2179[7]
  i2178.deAudioEnabled = !!i2179[8]
  i2178.deUnityExtendedEnabled = !!i2179[9]
  i2178.epoOutlineEnabled = !!i2179[10]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2181 = data
  var i2183 = i2181[0]
  var i2182 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.add(i2183[i + 0]);
  }
  i2180.invalidShaderVariants = i2182
  i2180.name = i2181[1]
  i2180.guid = i2181[2]
  var i2185 = i2181[3]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( i2185[i + 0] );
  }
  i2180.shaderDefinedKeywords = i2184
  var i2187 = i2181[4]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2187[i + 0]) );
  }
  i2180.passes = i2186
  var i2189 = i2181[5]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2189[i + 0]) );
  }
  i2180.usePasses = i2188
  var i2191 = i2181[6]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2191[i + 0]) );
  }
  i2180.defaultParameterValues = i2190
  request.r(i2181[7], i2181[8], 0, i2180, 'unityFallbackShader')
  i2180.readDepth = !!i2181[9]
  i2180.isCreatedByShaderGraph = !!i2181[10]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2198 = root || new pc.UnityShaderPass()
  var i2199 = data
  i2198.id = i2199[0]
  i2198.subShaderIndex = i2199[1]
  i2198.name = i2199[2]
  i2198.passType = i2199[3]
  i2198.usePass = !!i2199[4]
  i2198.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[5], i2198.zTest)
  i2198.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[6], i2198.zWrite)
  i2198.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[7], i2198.culling)
  i2198.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2199[8], i2198.blending)
  i2198.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2199[9], i2198.alphaBlending)
  i2198.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[10], i2198.colorWriteMask)
  i2198.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[11], i2198.offsetUnits)
  i2198.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[12], i2198.offsetFactor)
  i2198.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[13], i2198.stencilRef)
  i2198.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[14], i2198.stencilReadMask)
  i2198.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2199[15], i2198.stencilWriteMask)
  i2198.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2199[16], i2198.stencilOp)
  i2198.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2199[17], i2198.stencilOpFront)
  i2198.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2199[18], i2198.stencilOpBack)
  var i2201 = i2199[19]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2201[i + 0]) );
  }
  i2198.tags = i2200
  var i2203 = i2199[20]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( i2203[i + 0] );
  }
  i2198.passDefinedKeywords = i2202
  var i2205 = i2199[21]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2205[i + 0]) );
  }
  i2198.variants = i2204
  var i2207 = i2199[22]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 1) {
    i2206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2207[i + 0]) );
  }
  i2198.excludedVariants = i2206
  i2198.hasDepthReader = !!i2199[23]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2209 = data
  i2208.val = i2209[0]
  i2208.name = i2209[1]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2211 = data
  i2210.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2211[0], i2210.src)
  i2210.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2211[1], i2210.dst)
  i2210.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2211[2], i2210.op)
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2213 = data
  i2212.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2213[0], i2212.pass)
  i2212.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2213[1], i2212.fail)
  i2212.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2213[2], i2212.zFail)
  i2212.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2213[3], i2212.comp)
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2217 = data
  i2216.name = i2217[0]
  i2216.value = i2217[1]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2221 = data
  i2220.passId = i2221[0]
  i2220.subShaderIndex = i2221[1]
  var i2223 = i2221[2]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( i2223[i + 0] );
  }
  i2220.keywords = i2222
  i2220.vertexProgram = i2221[3]
  i2220.fragmentProgram = i2221[4]
  i2220.readDepth = !!i2221[5]
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2227 = data
  request.r(i2227[0], i2227[1], 0, i2226, 'shader')
  i2226.pass = i2227[2]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2231 = data
  i2230.name = i2231[0]
  i2230.type = i2231[1]
  i2230.value = new pc.Vec4( i2231[2], i2231[3], i2231[4], i2231[5] )
  i2230.textureValue = i2231[6]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2233 = data
  i2232.name = i2233[0]
  request.r(i2233[1], i2233[2], 0, i2232, 'texture')
  i2232.aabb = i2233[3]
  i2232.vertices = i2233[4]
  i2232.triangles = i2233[5]
  i2232.textureRect = UnityEngine.Rect.MinMaxRect(i2233[6], i2233[7], i2233[8], i2233[9])
  i2232.packedRect = UnityEngine.Rect.MinMaxRect(i2233[10], i2233[11], i2233[12], i2233[13])
  i2232.border = new pc.Vec4( i2233[14], i2233[15], i2233[16], i2233[17] )
  i2232.transparency = i2233[18]
  i2232.bounds = i2233[19]
  i2232.pixelsPerUnit = i2233[20]
  i2232.textureWidth = i2233[21]
  i2232.textureHeight = i2233[22]
  i2232.nativeSize = new pc.Vec2( i2233[23], i2233[24] )
  i2232.pivot = new pc.Vec2( i2233[25], i2233[26] )
  i2232.textureRectOffset = new pc.Vec2( i2233[27], i2233[28] )
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2235 = data
  i2234.name = i2235[0]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2237 = data
  i2236.name = i2237[0]
  i2236.wrapMode = i2237[1]
  i2236.isLooping = !!i2237[2]
  i2236.length = i2237[3]
  var i2239 = i2237[4]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2239[i + 0]) );
  }
  i2236.curves = i2238
  var i2241 = i2237[5]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2241[i + 0]) );
  }
  i2236.events = i2240
  i2236.halfPrecision = !!i2237[6]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2245 = data
  i2244.path = i2245[0]
  i2244.componentType = i2245[1]
  i2244.property = i2245[2]
  i2244.keys = i2245[3]
  var i2247 = i2245[4]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2247[i + 0]) );
  }
  i2244.objectReferenceKeys = i2246
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2251 = data
  i2250.time = i2251[0]
  request.r(i2251[1], i2251[2], 0, i2250, 'value')
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2255 = data
  i2254.functionName = i2255[0]
  i2254.floatParameter = i2255[1]
  i2254.intParameter = i2255[2]
  i2254.stringParameter = i2255[3]
  request.r(i2255[4], i2255[5], 0, i2254, 'objectReferenceParameter')
  i2254.time = i2255[6]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2257 = data
  i2256.name = i2257[0]
  var i2259 = i2257[1]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2259[i + 0]) );
  }
  i2256.states = i2258
  var i2261 = i2257[2]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2261[i + 0]) );
  }
  i2256.layers = i2260
  var i2263 = i2257[3]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2263[i + 0]) );
  }
  i2256.parameters = i2262
  var i2265 = i2257[4]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( i2265[i + 0] );
  }
  i2256.animationClips = i2264
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2269 = data
  i2268.cycleOffset = i2269[0]
  i2268.cycleOffsetParameter = i2269[1]
  i2268.cycleOffsetParameterActive = !!i2269[2]
  i2268.mirror = !!i2269[3]
  i2268.mirrorParameter = i2269[4]
  i2268.mirrorParameterActive = !!i2269[5]
  i2268.motionId = i2269[6]
  i2268.nameHash = i2269[7]
  i2268.fullPathHash = i2269[8]
  i2268.speed = i2269[9]
  i2268.speedParameter = i2269[10]
  i2268.speedParameterActive = !!i2269[11]
  i2268.tag = i2269[12]
  i2268.name = i2269[13]
  i2268.writeDefaultValues = !!i2269[14]
  var i2271 = i2269[15]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2271[i + 0]) );
  }
  i2268.transitions = i2270
  var i2273 = i2269[16]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 2) {
  request.r(i2273[i + 0], i2273[i + 1], 2, i2272, '')
  }
  i2268.behaviours = i2272
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2277 = data
  i2276.fullPath = i2277[0]
  i2276.canTransitionToSelf = !!i2277[1]
  i2276.duration = i2277[2]
  i2276.exitTime = i2277[3]
  i2276.hasExitTime = !!i2277[4]
  i2276.hasFixedDuration = !!i2277[5]
  i2276.interruptionSource = i2277[6]
  i2276.offset = i2277[7]
  i2276.orderedInterruption = !!i2277[8]
  i2276.destinationStateNameHash = i2277[9]
  i2276.destinationStateMachineId = i2277[10]
  i2276.isExit = !!i2277[11]
  i2276.mute = !!i2277[12]
  i2276.solo = !!i2277[13]
  var i2279 = i2277[14]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2279[i + 0]) );
  }
  i2276.conditions = i2278
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2285 = data
  i2284.blendingMode = i2285[0]
  i2284.defaultWeight = i2285[1]
  i2284.name = i2285[2]
  i2284.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2285[3], i2284.stateMachine)
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2287 = data
  i2286.id = i2287[0]
  i2286.defaultStateNameHash = i2287[1]
  var i2289 = i2287[2]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2289[i + 0]) );
  }
  i2286.entryTransitions = i2288
  var i2291 = i2287[3]
  var i2290 = []
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2291[i + 0]) );
  }
  i2286.anyStateTransitions = i2290
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2295 = data
  i2294.destinationStateNameHash = i2295[0]
  i2294.destinationStateMachineId = i2295[1]
  i2294.isExit = !!i2295[2]
  i2294.mute = !!i2295[3]
  i2294.solo = !!i2295[4]
  var i2297 = i2295[5]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2297[i + 0]) );
  }
  i2294.conditions = i2296
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2301 = data
  i2300.defaultBool = !!i2301[0]
  i2300.defaultFloat = i2301[1]
  i2300.defaultInt = i2301[2]
  i2300.name = i2301[3]
  i2300.nameHash = i2301[4]
  i2300.type = i2301[5]
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2303 = data
  var i2305 = i2303[0]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2305[i + 0]) );
  }
  i2302.files = i2304
  i2302.componentToPrefabIds = i2303[1]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2309 = data
  i2308.path = i2309[0]
  request.r(i2309[1], i2309[2], 0, i2308, 'unityObject')
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2311 = data
  var i2313 = i2311[0]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2313[i + 0]) );
  }
  i2310.scriptsExecutionOrder = i2312
  var i2315 = i2311[1]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2315[i + 0]) );
  }
  i2310.sortingLayers = i2314
  var i2317 = i2311[2]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2317[i + 0]) );
  }
  i2310.cullingLayers = i2316
  i2310.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2311[3], i2310.timeSettings)
  i2310.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2311[4], i2310.physicsSettings)
  i2310.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2311[5], i2310.physics2DSettings)
  i2310.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2311[6], i2310.qualitySettings)
  i2310.removeShadows = !!i2311[7]
  i2310.autoInstantiatePrefabs = !!i2311[8]
  i2310.enableAutoInstancing = !!i2311[9]
  i2310.lightmapEncodingQuality = i2311[10]
  i2310.desiredColorSpace = i2311[11]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2321 = data
  i2320.name = i2321[0]
  i2320.value = i2321[1]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2325 = data
  i2324.id = i2325[0]
  i2324.name = i2325[1]
  i2324.value = i2325[2]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2329 = data
  i2328.id = i2329[0]
  i2328.name = i2329[1]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2331 = data
  i2330.fixedDeltaTime = i2331[0]
  i2330.maximumDeltaTime = i2331[1]
  i2330.timeScale = i2331[2]
  i2330.maximumParticleTimestep = i2331[3]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2333 = data
  i2332.gravity = new pc.Vec3( i2333[0], i2333[1], i2333[2] )
  i2332.defaultSolverIterations = i2333[3]
  i2332.bounceThreshold = i2333[4]
  i2332.autoSyncTransforms = !!i2333[5]
  i2332.autoSimulation = !!i2333[6]
  var i2335 = i2333[7]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2335[i + 0]) );
  }
  i2332.collisionMatrix = i2334
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2339 = data
  i2338.enabled = !!i2339[0]
  i2338.layerId = i2339[1]
  i2338.otherLayerId = i2339[2]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2341 = data
  request.r(i2341[0], i2341[1], 0, i2340, 'material')
  i2340.gravity = new pc.Vec2( i2341[2], i2341[3] )
  i2340.positionIterations = i2341[4]
  i2340.velocityIterations = i2341[5]
  i2340.velocityThreshold = i2341[6]
  i2340.maxLinearCorrection = i2341[7]
  i2340.maxAngularCorrection = i2341[8]
  i2340.maxTranslationSpeed = i2341[9]
  i2340.maxRotationSpeed = i2341[10]
  i2340.timeToSleep = i2341[11]
  i2340.linearSleepTolerance = i2341[12]
  i2340.angularSleepTolerance = i2341[13]
  i2340.defaultContactOffset = i2341[14]
  i2340.autoSimulation = !!i2341[15]
  i2340.queriesHitTriggers = !!i2341[16]
  i2340.queriesStartInColliders = !!i2341[17]
  i2340.callbacksOnDisable = !!i2341[18]
  i2340.reuseCollisionCallbacks = !!i2341[19]
  i2340.autoSyncTransforms = !!i2341[20]
  var i2343 = i2341[21]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2343[i + 0]) );
  }
  i2340.collisionMatrix = i2342
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2347 = data
  i2346.enabled = !!i2347[0]
  i2346.layerId = i2347[1]
  i2346.otherLayerId = i2347[2]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2349 = data
  var i2351 = i2349[0]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2351[i + 0]) );
  }
  i2348.qualityLevels = i2350
  var i2353 = i2349[1]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( i2353[i + 0] );
  }
  i2348.names = i2352
  i2348.shadows = i2349[2]
  i2348.anisotropicFiltering = i2349[3]
  i2348.antiAliasing = i2349[4]
  i2348.lodBias = i2349[5]
  i2348.shadowCascades = i2349[6]
  i2348.shadowDistance = i2349[7]
  i2348.shadowmaskMode = i2349[8]
  i2348.shadowProjection = i2349[9]
  i2348.shadowResolution = i2349[10]
  i2348.softParticles = !!i2349[11]
  i2348.softVegetation = !!i2349[12]
  i2348.activeColorSpace = i2349[13]
  i2348.desiredColorSpace = i2349[14]
  i2348.masterTextureLimit = i2349[15]
  i2348.maxQueuedFrames = i2349[16]
  i2348.particleRaycastBudget = i2349[17]
  i2348.pixelLightCount = i2349[18]
  i2348.realtimeReflectionProbes = !!i2349[19]
  i2348.shadowCascade2Split = i2349[20]
  i2348.shadowCascade4Split = new pc.Vec3( i2349[21], i2349[22], i2349[23] )
  i2348.streamingMipmapsActive = !!i2349[24]
  i2348.vSyncCount = i2349[25]
  i2348.asyncUploadBufferSize = i2349[26]
  i2348.asyncUploadTimeSlice = i2349[27]
  i2348.billboardsFaceCameraPosition = !!i2349[28]
  i2348.shadowNearPlaneOffset = i2349[29]
  i2348.streamingMipmapsMemoryBudget = i2349[30]
  i2348.maximumLODLevel = i2349[31]
  i2348.streamingMipmapsAddAllCameras = !!i2349[32]
  i2348.streamingMipmapsMaxLevelReduction = i2349[33]
  i2348.streamingMipmapsRenderersPerFrame = i2349[34]
  i2348.resolutionScalingFixedDPIFactor = i2349[35]
  i2348.streamingMipmapsMaxFileIORequests = i2349[36]
  i2348.currentQualityLevel = i2349[37]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2359 = data
  i2358.weight = i2359[0]
  i2358.vertices = i2359[1]
  i2358.normals = i2359[2]
  i2358.tangents = i2359[3]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2363 = data
  i2362.mode = i2363[0]
  i2362.parameter = i2363[1]
  i2362.threshold = i2363[2]
  return i2362
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"36":[37],"38":[37],"39":[37],"40":[37],"41":[37],"42":[37],"43":[44],"45":[8],"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[47],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[55],"63":[55],"64":[55],"65":[55],"66":[55],"67":[55],"68":[8],"69":[28],"70":[71],"72":[71],"12":[11],"73":[11],"74":[16,11],"75":[28],"76":[16,11],"77":[11],"78":[28,11],"79":[11,16],"80":[11],"81":[11],"82":[11],"15":[12],"17":[16,11],"83":[11],"14":[12],"84":[11],"85":[11],"86":[11],"87":[11],"88":[11],"89":[11],"90":[11],"91":[11],"92":[11],"93":[16,11],"94":[11],"95":[11],"96":[11],"97":[11],"98":[16,11],"99":[11],"100":[24],"101":[24],"25":[24],"102":[24],"103":[8],"104":[8]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Brick","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Button","BucketCrusher2","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","BrickManager","UnityEngine.GameObject","SoundController","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.29f1";

Deserializers.productName = "BucketTemp";

Deserializers.lunaInitializationTime = "07/25/2022 07:15:45";

Deserializers.lunaVersion = "3.11.0";

Deserializers.lunaSHA = "bca344af70d69a797481d86a14a2bae415207c0c";

Deserializers.packagesInfo = "com.unity.collab-proxy: 1.15.12,com.unity.ide.rider: 2.0.7,com.unity.ide.visualstudio: 2.0.14,com.unity.ide.vscode: 1.2.4,com.unity.test-framework: 1.1.29,com.unity.textmeshpro: 3.0.6,com.unity.timeline: 1.4.8,com.unity.ugui: 1.0.0,uk.lunalabs.luna: file:E:/LunaDownload/3.11.0/scripts,com.unity.modules.ai: 1.0.0,com.unity.modules.androidjni: 1.0.0,com.unity.modules.animation: 1.0.0,com.unity.modules.assetbundle: 1.0.0,com.unity.modules.audio: 1.0.0,com.unity.modules.cloth: 1.0.0,com.unity.modules.director: 1.0.0,com.unity.modules.imageconversion: 1.0.0,com.unity.modules.imgui: 1.0.0,com.unity.modules.jsonserialize: 1.0.0,com.unity.modules.particlesystem: 1.0.0,com.unity.modules.physics: 1.0.0,com.unity.modules.physics2d: 1.0.0,com.unity.modules.screencapture: 1.0.0,com.unity.modules.terrain: 1.0.0,com.unity.modules.terrainphysics: 1.0.0,com.unity.modules.tilemap: 1.0.0,com.unity.modules.ui: 1.0.0,com.unity.modules.uielements: 1.0.0,com.unity.modules.umbra: 1.0.0,com.unity.modules.unityanalytics: 1.0.0,com.unity.modules.unitywebrequest: 1.0.0,com.unity.modules.unitywebrequestassetbundle: 1.0.0,com.unity.modules.unitywebrequestaudio: 1.0.0,com.unity.modules.unitywebrequesttexture: 1.0.0,com.unity.modules.unitywebrequestwww: 1.0.0,com.unity.modules.vehicles: 1.0.0,com.unity.modules.video: 1.0.0,com.unity.modules.vr: 1.0.0,com.unity.modules.wind: 1.0.0,com.unity.modules.xr: 1.0.0";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.BucketTemp";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "ccbed69a-9505-4ab0-82c8-44e3bbfafb1c";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

