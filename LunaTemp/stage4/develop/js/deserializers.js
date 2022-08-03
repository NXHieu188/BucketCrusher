var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1998 = root || request.c( 'UnityEngine.JointSpring' )
  var i1999 = data
  i1998.spring = i1999[0]
  i1998.damper = i1999[1]
  i1998.targetPosition = i1999[2]
  return i1998
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2000 = root || request.c( 'UnityEngine.JointMotor' )
  var i2001 = data
  i2000.m_TargetVelocity = i2001[0]
  i2000.m_Force = i2001[1]
  i2000.m_FreeSpin = i2001[2]
  return i2000
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2002 = root || request.c( 'UnityEngine.JointLimits' )
  var i2003 = data
  i2002.m_Min = i2003[0]
  i2002.m_Max = i2003[1]
  i2002.m_Bounciness = i2003[2]
  i2002.m_BounceMinVelocity = i2003[3]
  i2002.m_ContactDistance = i2003[4]
  i2002.minBounce = i2003[5]
  i2002.maxBounce = i2003[6]
  return i2002
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2004 = root || request.c( 'UnityEngine.JointDrive' )
  var i2005 = data
  i2004.m_PositionSpring = i2005[0]
  i2004.m_PositionDamper = i2005[1]
  i2004.m_MaximumForce = i2005[2]
  return i2004
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2006 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2007 = data
  i2006.m_Spring = i2007[0]
  i2006.m_Damper = i2007[1]
  return i2006
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2008 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2009 = data
  i2008.m_Limit = i2009[0]
  i2008.m_Bounciness = i2009[1]
  i2008.m_ContactDistance = i2009[2]
  return i2008
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2010 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2011 = data
  i2010.m_ExtremumSlip = i2011[0]
  i2010.m_ExtremumValue = i2011[1]
  i2010.m_AsymptoteSlip = i2011[2]
  i2010.m_AsymptoteValue = i2011[3]
  i2010.m_Stiffness = i2011[4]
  return i2010
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2012 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2013 = data
  i2012.m_LowerAngle = i2013[0]
  i2012.m_UpperAngle = i2013[1]
  return i2012
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2014 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2015 = data
  i2014.m_MotorSpeed = i2015[0]
  i2014.m_MaximumMotorTorque = i2015[1]
  return i2014
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2016 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2017 = data
  i2016.m_DampingRatio = i2017[0]
  i2016.m_Frequency = i2017[1]
  i2016.m_Angle = i2017[2]
  return i2016
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2018 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2019 = data
  i2018.m_LowerTranslation = i2019[0]
  i2018.m_UpperTranslation = i2019[1]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2020 = root || new pc.UnityMaterial()
  var i2021 = data
  i2020.name = i2021[0]
  request.r(i2021[1], i2021[2], 0, i2020, 'shader')
  i2020.renderQueue = i2021[3]
  i2020.enableInstancing = !!i2021[4]
  var i2023 = i2021[5]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2023[i + 0]) );
  }
  i2020.floatParameters = i2022
  var i2025 = i2021[6]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2025[i + 0]) );
  }
  i2020.colorParameters = i2024
  var i2027 = i2021[7]
  var i2026 = []
  for(var i = 0; i < i2027.length; i += 1) {
    i2026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2027[i + 0]) );
  }
  i2020.vectorParameters = i2026
  var i2029 = i2021[8]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2029[i + 0]) );
  }
  i2020.textureParameters = i2028
  var i2031 = i2021[9]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2031[i + 0]) );
  }
  i2020.materialFlags = i2030
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2035 = data
  i2034.name = i2035[0]
  i2034.value = i2035[1]
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2039 = data
  i2038.name = i2039[0]
  i2038.value = new pc.Color(i2039[1], i2039[2], i2039[3], i2039[4])
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2043 = data
  i2042.name = i2043[0]
  i2042.value = new pc.Vec4( i2043[1], i2043[2], i2043[3], i2043[4] )
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2047 = data
  i2046.name = i2047[0]
  request.r(i2047[1], i2047[2], 0, i2046, 'value')
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2051 = data
  i2050.name = i2051[0]
  i2050.enabled = !!i2051[1]
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2053 = data
  i2052.name = i2053[0]
  i2052.width = i2053[1]
  i2052.height = i2053[2]
  i2052.mipmapCount = i2053[3]
  i2052.anisoLevel = i2053[4]
  i2052.filterMode = i2053[5]
  i2052.hdr = !!i2053[6]
  i2052.format = i2053[7]
  i2052.wrapMode = i2053[8]
  i2052.alphaIsTransparency = !!i2053[9]
  i2052.alphaSource = i2053[10]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2055 = data
  i2054.name = i2055[0]
  i2054.halfPrecision = !!i2055[1]
  i2054.vertexCount = i2055[2]
  i2054.aabb = i2055[3]
  var i2057 = i2055[4]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( !!i2057[i + 0] );
  }
  i2054.streams = i2056
  i2054.vertices = i2055[5]
  var i2059 = i2055[6]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2059[i + 0]) );
  }
  i2054.subMeshes = i2058
  var i2061 = i2055[7]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 16) {
    i2060.push( new pc.Mat4().setData(i2061[i + 0], i2061[i + 1], i2061[i + 2], i2061[i + 3],  i2061[i + 4], i2061[i + 5], i2061[i + 6], i2061[i + 7],  i2061[i + 8], i2061[i + 9], i2061[i + 10], i2061[i + 11],  i2061[i + 12], i2061[i + 13], i2061[i + 14], i2061[i + 15]) );
  }
  i2054.bindposes = i2060
  var i2063 = i2055[8]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2063[i + 0]) );
  }
  i2054.blendShapes = i2062
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2069 = data
  i2068.triangles = i2069[0]
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2075 = data
  i2074.name = i2075[0]
  var i2077 = i2075[1]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2077[i + 0]) );
  }
  i2074.frames = i2076
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2079 = data
  i2078.position = new pc.Vec3( i2079[0], i2079[1], i2079[2] )
  i2078.scale = new pc.Vec3( i2079[3], i2079[4], i2079[5] )
  i2078.rotation = new pc.Quat(i2079[6], i2079[7], i2079[8], i2079[9])
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2081 = data
  i2080.mass = i2081[0]
  i2080.drag = i2081[1]
  i2080.angularDrag = i2081[2]
  i2080.useGravity = !!i2081[3]
  i2080.isKinematic = !!i2081[4]
  i2080.constraints = i2081[5]
  i2080.maxAngularVelocity = i2081[6]
  i2080.collisionDetectionMode = i2081[7]
  i2080.interpolation = i2081[8]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2083 = data
  i2082.enabled = !!i2083[0]
  i2082.isTrigger = !!i2083[1]
  request.r(i2083[2], i2083[3], 0, i2082, 'material')
  i2082.center = new pc.Vec3( i2083[4], i2083[5], i2083[6] )
  i2082.radius = i2083[7]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2085 = data
  request.r(i2085[0], i2085[1], 0, i2084, 'sharedMesh')
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2087 = data
  request.r(i2087[0], i2087[1], 0, i2086, 'additionalVertexStreams')
  i2086.enabled = !!i2087[2]
  request.r(i2087[3], i2087[4], 0, i2086, 'sharedMaterial')
  var i2089 = i2087[5]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 2) {
  request.r(i2089[i + 0], i2089[i + 1], 2, i2088, '')
  }
  i2086.sharedMaterials = i2088
  i2086.receiveShadows = !!i2087[6]
  i2086.shadowCastingMode = i2087[7]
  i2086.sortingLayerID = i2087[8]
  i2086.sortingOrder = i2087[9]
  i2086.lightmapIndex = i2087[10]
  i2086.lightmapSceneIndex = i2087[11]
  i2086.lightmapScaleOffset = new pc.Vec4( i2087[12], i2087[13], i2087[14], i2087[15] )
  i2086.lightProbeUsage = i2087[16]
  i2086.reflectionProbeUsage = i2087[17]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2093 = data
  i2092.name = i2093[0]
  i2092.tag = i2093[1]
  i2092.enabled = !!i2093[2]
  i2092.isStatic = !!i2093[3]
  i2092.layer = i2093[4]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2095 = data
  i2094.center = new pc.Vec3( i2095[0], i2095[1], i2095[2] )
  i2094.size = new pc.Vec3( i2095[3], i2095[4], i2095[5] )
  i2094.enabled = !!i2095[6]
  i2094.isTrigger = !!i2095[7]
  request.r(i2095[8], i2095[9], 0, i2094, 'material')
  return i2094
}

Deserializers["Brick"] = function (request, data, root) {
  var i2096 = root || request.c( 'Brick' )
  var i2097 = data
  i2096.broken = !!i2097[0]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2099 = data
  i2098.name = i2099[0]
  i2098.atlasId = i2099[1]
  i2098.mipmapCount = i2099[2]
  i2098.hdr = !!i2099[3]
  i2098.size = i2099[4]
  i2098.anisoLevel = i2099[5]
  i2098.filterMode = i2099[6]
  i2098.wrapMode = i2099[7]
  var i2101 = i2099[8]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 4) {
    i2100.push( UnityEngine.Rect.MinMaxRect(i2101[i + 0], i2101[i + 1], i2101[i + 2], i2101[i + 3]) );
  }
  i2098.rects = i2100
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2105 = data
  i2104.name = i2105[0]
  i2104.index = i2105[1]
  i2104.startup = !!i2105[2]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2107 = data
  i2106.enabled = !!i2107[0]
  i2106.aspect = i2107[1]
  i2106.orthographic = !!i2107[2]
  i2106.orthographicSize = i2107[3]
  i2106.backgroundColor = new pc.Color(i2107[4], i2107[5], i2107[6], i2107[7])
  i2106.nearClipPlane = i2107[8]
  i2106.farClipPlane = i2107[9]
  i2106.fieldOfView = i2107[10]
  i2106.depth = i2107[11]
  i2106.clearFlags = i2107[12]
  i2106.cullingMask = i2107[13]
  i2106.rect = i2107[14]
  request.r(i2107[15], i2107[16], 0, i2106, 'targetTexture')
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2109 = data
  i2108.enabled = !!i2109[0]
  i2108.type = i2109[1]
  i2108.color = new pc.Color(i2109[2], i2109[3], i2109[4], i2109[5])
  i2108.cullingMask = i2109[6]
  i2108.intensity = i2109[7]
  i2108.range = i2109[8]
  i2108.spotAngle = i2109[9]
  i2108.shadows = i2109[10]
  i2108.shadowNormalBias = i2109[11]
  i2108.shadowBias = i2109[12]
  i2108.shadowStrength = i2109[13]
  i2108.lightmapBakeType = i2109[14]
  i2108.renderMode = i2109[15]
  request.r(i2109[16], i2109[17], 0, i2108, 'cookie')
  i2108.cookieSize = i2109[18]
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2111 = data
  i2110.pivot = new pc.Vec2( i2111[0], i2111[1] )
  i2110.anchorMin = new pc.Vec2( i2111[2], i2111[3] )
  i2110.anchorMax = new pc.Vec2( i2111[4], i2111[5] )
  i2110.sizeDelta = new pc.Vec2( i2111[6], i2111[7] )
  i2110.anchoredPosition3D = new pc.Vec3( i2111[8], i2111[9], i2111[10] )
  i2110.rotation = new pc.Quat(i2111[11], i2111[12], i2111[13], i2111[14])
  i2110.scale = new pc.Vec3( i2111[15], i2111[16], i2111[17] )
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2113 = data
  i2112.enabled = !!i2113[0]
  i2112.planeDistance = i2113[1]
  i2112.referencePixelsPerUnit = i2113[2]
  i2112.isFallbackOverlay = !!i2113[3]
  i2112.renderMode = i2113[4]
  i2112.renderOrder = i2113[5]
  i2112.sortingLayerName = i2113[6]
  i2112.sortingOrder = i2113[7]
  i2112.scaleFactor = i2113[8]
  request.r(i2113[9], i2113[10], 0, i2112, 'worldCamera')
  i2112.overrideSorting = !!i2113[11]
  i2112.pixelPerfect = !!i2113[12]
  i2112.targetDisplay = i2113[13]
  i2112.overridePixelPerfect = !!i2113[14]
  return i2112
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2114 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2115 = data
  i2114.m_UiScaleMode = i2115[0]
  i2114.m_ReferencePixelsPerUnit = i2115[1]
  i2114.m_ScaleFactor = i2115[2]
  i2114.m_ReferenceResolution = new pc.Vec2( i2115[3], i2115[4] )
  i2114.m_ScreenMatchMode = i2115[5]
  i2114.m_MatchWidthOrHeight = i2115[6]
  i2114.m_PhysicalUnit = i2115[7]
  i2114.m_FallbackScreenDPI = i2115[8]
  i2114.m_DefaultSpriteDPI = i2115[9]
  i2114.m_DynamicPixelsPerUnit = i2115[10]
  i2114.m_PresetInfoIsWorld = !!i2115[11]
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2117 = data
  i2116.cullTransparentMesh = !!i2117[0]
  return i2116
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2118 = root || request.c( 'UnityEngine.UI.Image' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'm_Sprite')
  i2118.m_Type = i2119[2]
  i2118.m_PreserveAspect = !!i2119[3]
  i2118.m_FillCenter = !!i2119[4]
  i2118.m_FillMethod = i2119[5]
  i2118.m_FillAmount = i2119[6]
  i2118.m_FillClockwise = !!i2119[7]
  i2118.m_FillOrigin = i2119[8]
  i2118.m_UseSpriteMesh = !!i2119[9]
  i2118.m_PixelsPerUnitMultiplier = i2119[10]
  request.r(i2119[11], i2119[12], 0, i2118, 'm_Material')
  i2118.m_Maskable = !!i2119[13]
  i2118.m_Color = new pc.Color(i2119[14], i2119[15], i2119[16], i2119[17])
  i2118.m_RaycastTarget = !!i2119[18]
  i2118.m_RaycastPadding = new pc.Vec4( i2119[19], i2119[20], i2119[21], i2119[22] )
  return i2118
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2121 = data
  i2120.m_IgnoreReversedGraphics = !!i2121[0]
  i2120.m_BlockingObjects = i2121[1]
  i2120.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2121[2] )
  return i2120
}

Deserializers["UltimateJoystick"] = function (request, data, root) {
  var i2122 = root || request.c( 'UltimateJoystick' )
  var i2123 = data
  request.r(i2123[0], i2123[1], 0, i2122, 'joystick')
  request.r(i2123[2], i2123[3], 0, i2122, 'joystickSizeFolder')
  request.r(i2123[4], i2123[5], 0, i2122, 'joystickBase')
  request.r(i2123[6], i2123[7], 0, i2122, 'highlightBase')
  request.r(i2123[8], i2123[9], 0, i2122, 'highlightJoystick')
  request.r(i2123[10], i2123[11], 0, i2122, 'tensionAccentUp')
  request.r(i2123[12], i2123[13], 0, i2122, 'tensionAccentDown')
  request.r(i2123[14], i2123[15], 0, i2122, 'tensionAccentLeft')
  request.r(i2123[16], i2123[17], 0, i2122, 'tensionAccentRight')
  i2122.scalingAxis = i2123[18]
  i2122.anchor = i2123[19]
  i2122.joystickTouchSize = i2123[20]
  i2122.joystickSize = i2123[21]
  i2122.radiusModifier = i2123[22]
  i2122.dynamicPositioning = !!i2123[23]
  i2122.customTouchSize_X = i2123[24]
  i2122.customTouchSize_Y = i2123[25]
  i2122.customTouchSizePos_X = i2123[26]
  i2122.customTouchSizePos_Y = i2123[27]
  i2122.customSpacing_X = i2123[28]
  i2122.customSpacing_Y = i2123[29]
  i2122.gravity = i2123[30]
  i2122.extendRadius = !!i2123[31]
  i2122.axis = i2123[32]
  i2122.boundary = i2123[33]
  i2122.tapCountOption = i2123[34]
  i2122.tapCountDuration = i2123[35]
  i2122.targetTapCount = i2123[36]
  i2122.deadZone = i2123[37]
  i2122.disableVisuals = !!i2123[38]
  i2122.useFade = !!i2123[39]
  i2122.fadeUntouched = i2123[40]
  i2122.fadeTouched = i2123[41]
  i2122.fadeInDuration = i2123[42]
  i2122.fadeOutDuration = i2123[43]
  i2122.useAnimation = !!i2123[44]
  request.r(i2123[45], i2123[46], 0, i2122, 'joystickAnimator')
  i2122.showHighlight = !!i2123[47]
  i2122.highlightColor = new pc.Color(i2123[48], i2123[49], i2123[50], i2123[51])
  i2122.showTension = !!i2123[52]
  i2122.tensionColorNone = new pc.Color(i2123[53], i2123[54], i2123[55], i2123[56])
  i2122.tensionColorFull = new pc.Color(i2123[57], i2123[58], i2123[59], i2123[60])
  i2122.joystickName = i2123[61]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2125 = data
  request.r(i2125[0], i2125[1], 0, i2124, 'animatorController')
  i2124.updateMode = i2125[2]
  var i2127 = i2125[3]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 2) {
  request.r(i2127[i + 0], i2127[i + 1], 2, i2126, '')
  }
  i2124.humanBones = i2126
  i2124.enabled = !!i2125[4]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2131 = data
  i2130.m_Alpha = i2131[0]
  i2130.m_Interactable = !!i2131[1]
  i2130.m_BlocksRaycasts = !!i2131[2]
  i2130.m_IgnoreParentGroups = !!i2131[3]
  i2130.enabled = !!i2131[4]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i2133 = data
  i2132.playAutomatically = !!i2133[0]
  request.r(i2133[1], i2133[2], 0, i2132, 'clip')
  var i2135 = i2133[3]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 2) {
  request.r(i2135[i + 0], i2135[i + 1], 2, i2134, '')
  }
  i2132.clips = i2134
  i2132.wrapMode = i2133[4]
  i2132.enabled = !!i2133[5]
  return i2132
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.UI.Button' )
  var i2139 = data
  i2138.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2139[0], i2138.m_OnClick)
  i2138.m_Navigation = request.d('UnityEngine.UI.Navigation', i2139[1], i2138.m_Navigation)
  i2138.m_Transition = i2139[2]
  i2138.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2139[3], i2138.m_Colors)
  i2138.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2139[4], i2138.m_SpriteState)
  i2138.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2139[5], i2138.m_AnimationTriggers)
  i2138.m_Interactable = !!i2139[6]
  request.r(i2139[7], i2139[8], 0, i2138, 'm_TargetGraphic')
  return i2138
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2141 = data
  i2140.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2141[0], i2140.m_PersistentCalls)
  return i2140
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2142 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2143 = data
  var i2145 = i2143[0]
  var i2144 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.add(request.d('UnityEngine.Events.PersistentCall', i2145[i + 0]));
  }
  i2142.m_Calls = i2144
  return i2142
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2149 = data
  request.r(i2149[0], i2149[1], 0, i2148, 'm_Target')
  i2148.m_TargetAssemblyTypeName = i2149[2]
  i2148.m_MethodName = i2149[3]
  i2148.m_Mode = i2149[4]
  i2148.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2149[5], i2148.m_Arguments)
  i2148.m_CallState = i2149[6]
  return i2148
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2151 = data
  request.r(i2151[0], i2151[1], 0, i2150, 'm_ObjectArgument')
  i2150.m_ObjectArgumentAssemblyTypeName = i2151[2]
  i2150.m_IntArgument = i2151[3]
  i2150.m_FloatArgument = i2151[4]
  i2150.m_StringArgument = i2151[5]
  i2150.m_BoolArgument = !!i2151[6]
  return i2150
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2153 = data
  i2152.m_Mode = i2153[0]
  i2152.m_WrapAround = !!i2153[1]
  request.r(i2153[2], i2153[3], 0, i2152, 'm_SelectOnUp')
  request.r(i2153[4], i2153[5], 0, i2152, 'm_SelectOnDown')
  request.r(i2153[6], i2153[7], 0, i2152, 'm_SelectOnLeft')
  request.r(i2153[8], i2153[9], 0, i2152, 'm_SelectOnRight')
  return i2152
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2155 = data
  i2154.m_NormalColor = new pc.Color(i2155[0], i2155[1], i2155[2], i2155[3])
  i2154.m_HighlightedColor = new pc.Color(i2155[4], i2155[5], i2155[6], i2155[7])
  i2154.m_PressedColor = new pc.Color(i2155[8], i2155[9], i2155[10], i2155[11])
  i2154.m_SelectedColor = new pc.Color(i2155[12], i2155[13], i2155[14], i2155[15])
  i2154.m_DisabledColor = new pc.Color(i2155[16], i2155[17], i2155[18], i2155[19])
  i2154.m_ColorMultiplier = i2155[20]
  i2154.m_FadeDuration = i2155[21]
  return i2154
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2157 = data
  request.r(i2157[0], i2157[1], 0, i2156, 'm_HighlightedSprite')
  request.r(i2157[2], i2157[3], 0, i2156, 'm_PressedSprite')
  request.r(i2157[4], i2157[5], 0, i2156, 'm_SelectedSprite')
  request.r(i2157[6], i2157[7], 0, i2156, 'm_DisabledSprite')
  return i2156
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2159 = data
  i2158.m_NormalTrigger = i2159[0]
  i2158.m_HighlightedTrigger = i2159[1]
  i2158.m_PressedTrigger = i2159[2]
  i2158.m_SelectedTrigger = i2159[3]
  i2158.m_DisabledTrigger = i2159[4]
  return i2158
}

Deserializers["Joint"] = function (request, data, root) {
  var i2160 = root || request.c( 'Joint' )
  var i2161 = data
  request.r(i2161[0], i2161[1], 0, i2160, 'm_child')
  return i2160
}

Deserializers["Saw"] = function (request, data, root) {
  var i2162 = root || request.c( 'Saw' )
  var i2163 = data
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2165 = data
  i2164.enabled = !!i2165[0]
  i2164.isTrigger = !!i2165[1]
  request.r(i2165[2], i2165[3], 0, i2164, 'material')
  request.r(i2165[4], i2165[5], 0, i2164, 'sharedMesh')
  i2164.convex = !!i2165[6]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2167 = data
  i2166.usedByComposite = !!i2167[0]
  i2166.autoTiling = !!i2167[1]
  i2166.size = new pc.Vec2( i2167[2], i2167[3] )
  i2166.edgeRadius = i2167[4]
  i2166.enabled = !!i2167[5]
  i2166.isTrigger = !!i2167[6]
  i2166.usedByEffector = !!i2167[7]
  i2166.density = i2167[8]
  i2166.offset = new pc.Vec2( i2167[9], i2167[10] )
  request.r(i2167[11], i2167[12], 0, i2166, 'material')
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2169 = data
  i2168.bodyType = i2169[0]
  request.r(i2169[1], i2169[2], 0, i2168, 'material')
  i2168.simulated = !!i2169[3]
  i2168.useAutoMass = !!i2169[4]
  i2168.mass = i2169[5]
  i2168.drag = i2169[6]
  i2168.angularDrag = i2169[7]
  i2168.gravityScale = i2169[8]
  i2168.collisionDetectionMode = i2169[9]
  i2168.sleepMode = i2169[10]
  i2168.constraints = i2169[11]
  return i2168
}

Deserializers["Conveyor"] = function (request, data, root) {
  var i2170 = root || request.c( 'Conveyor' )
  var i2171 = data
  request.r(i2171[0], i2171[1], 0, i2170, 'conveyor')
  i2170.length = i2171[2]
  return i2170
}

Deserializers["RotateObject"] = function (request, data, root) {
  var i2172 = root || request.c( 'RotateObject' )
  var i2173 = data
  i2172.duration = i2173[0]
  i2172.angle = i2173[1]
  return i2172
}

Deserializers["SpawnCoin"] = function (request, data, root) {
  var i2174 = root || request.c( 'SpawnCoin' )
  var i2175 = data
  request.r(i2175[0], i2175[1], 0, i2174, 'prefCoin')
  return i2174
}

Deserializers["LKManager"] = function (request, data, root) {
  var i2176 = root || request.c( 'LKManager' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'm_root')
  request.r(i2177[2], i2177[3], 0, i2176, 'm_end')
  request.r(i2177[4], i2177[5], 0, i2176, 'm_target')
  i2176.m_thresHold = i2177[6]
  i2176.m_rate = i2177[7]
  i2176.m_Steps = i2177[8]
  return i2176
}

Deserializers["ATManager2"] = function (request, data, root) {
  var i2178 = root || request.c( 'ATManager2' )
  var i2179 = data
  request.r(i2179[0], i2179[1], 0, i2178, 'brickManager')
  request.r(i2179[2], i2179[3], 0, i2178, 'gameController')
  request.r(i2179[4], i2179[5], 0, i2178, 'handController')
  request.r(i2179[6], i2179[7], 0, i2178, 'joyStick')
  var i2181 = i2179[8]
  var i2180 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i2181.length; i += 2) {
  request.r(i2181[i + 0], i2181[i + 1], 1, i2180, '')
  }
  i2178.lstBrick = i2180
  request.r(i2179[9], i2179[10], 0, i2178, 'soundController')
  request.r(i2179[11], i2179[12], 0, i2178, 'spawnerCoin')
  var i2183 = i2179[13]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 2) {
  request.r(i2183[i + 0], i2183[i + 1], 2, i2182, '')
  }
  i2178.arrImageLoader = i2182
  request.r(i2179[14], i2179[15], 0, i2178, 'black')
  request.r(i2179[16], i2179[17], 0, i2178, 'guideChooseGroup')
  request.r(i2179[18], i2179[19], 0, i2178, 'guideDrag')
  i2178.isEndGame = !!i2179[20]
  i2178.typeShape = i2179[21]
  return i2178
}

Deserializers["BrickManager"] = function (request, data, root) {
  var i2188 = root || request.c( 'BrickManager' )
  var i2189 = data
  request.r(i2189[0], i2189[1], 0, i2188, 'imageLoader')
  request.r(i2189[2], i2189[3], 0, i2188, 'brickPrefab')
  request.r(i2189[4], i2189[5], 0, i2188, 'brickHolder')
  i2188.positionBrickHold = new pc.Vec3( i2189[6], i2189[7], i2189[8] )
  i2188.brickSize = i2189[9]
  i2188.brickScale = i2189[10]
  i2188.brickHealth = i2189[11]
  i2188.xOffset = i2189[12]
  return i2188
}

Deserializers["GameController"] = function (request, data, root) {
  var i2190 = root || request.c( 'GameController' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, 'ultiJoyStick')
  return i2190
}

Deserializers["HandController"] = function (request, data, root) {
  var i2192 = root || request.c( 'HandController' )
  var i2193 = data
  request.r(i2193[0], i2193[1], 0, i2192, 'target')
  i2192.speedMove = i2193[2]
  return i2192
}

Deserializers["SoundController"] = function (request, data, root) {
  var i2194 = root || request.c( 'SoundController' )
  var i2195 = data
  request.r(i2195[0], i2195[1], 0, i2194, 'audioSourceFX')
  request.r(i2195[2], i2195[3], 0, i2194, 'audioSourceBG')
  request.r(i2195[4], i2195[5], 0, i2194, 'clipClick')
  request.r(i2195[6], i2195[7], 0, i2194, 'clipCrash')
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2197 = data
  request.r(i2197[0], i2197[1], 0, i2196, 'clip')
  request.r(i2197[2], i2197[3], 0, i2196, 'outputAudioMixerGroup')
  i2196.playOnAwake = !!i2197[4]
  i2196.loop = !!i2197[5]
  i2196.time = i2197[6]
  i2196.volume = i2197[7]
  i2196.pitch = i2197[8]
  i2196.enabled = !!i2197[9]
  return i2196
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'm_FirstSelected')
  i2198.m_sendNavigationEvents = !!i2199[2]
  i2198.m_DragThreshold = i2199[3]
  return i2198
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2200 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2201 = data
  i2200.m_HorizontalAxis = i2201[0]
  i2200.m_VerticalAxis = i2201[1]
  i2200.m_SubmitButton = i2201[2]
  i2200.m_CancelButton = i2201[3]
  i2200.m_InputActionsPerSecond = i2201[4]
  i2200.m_RepeatDelay = i2201[5]
  i2200.m_ForceModuleActive = !!i2201[6]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2203 = data
  i2202.ambientIntensity = i2203[0]
  i2202.reflectionIntensity = i2203[1]
  i2202.ambientMode = i2203[2]
  i2202.ambientLight = new pc.Color(i2203[3], i2203[4], i2203[5], i2203[6])
  i2202.ambientSkyColor = new pc.Color(i2203[7], i2203[8], i2203[9], i2203[10])
  i2202.ambientGroundColor = new pc.Color(i2203[11], i2203[12], i2203[13], i2203[14])
  i2202.ambientEquatorColor = new pc.Color(i2203[15], i2203[16], i2203[17], i2203[18])
  i2202.fogColor = new pc.Color(i2203[19], i2203[20], i2203[21], i2203[22])
  i2202.fogEndDistance = i2203[23]
  i2202.fogStartDistance = i2203[24]
  i2202.fogDensity = i2203[25]
  i2202.fog = !!i2203[26]
  request.r(i2203[27], i2203[28], 0, i2202, 'skybox')
  i2202.fogMode = i2203[29]
  var i2205 = i2203[30]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2205[i + 0]) );
  }
  i2202.lightmaps = i2204
  i2202.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2203[31], i2202.lightProbes)
  i2202.lightmapsMode = i2203[32]
  i2202.environmentLightingMode = i2203[33]
  i2202.ambientProbe = new pc.SphericalHarmonicsL2(i2203[34])
  request.r(i2203[35], i2203[36], 0, i2202, 'customReflection')
  request.r(i2203[37], i2203[38], 0, i2202, 'defaultReflection')
  i2202.defaultReflectionMode = i2203[39]
  i2202.defaultReflectionResolution = i2203[40]
  i2202.sunLightObjectId = i2203[41]
  i2202.pixelLightCount = i2203[42]
  i2202.defaultReflectionHDR = !!i2203[43]
  i2202.hasLightDataAsset = !!i2203[44]
  i2202.hasManualGenerate = !!i2203[45]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'lightmapColor')
  request.r(i2209[2], i2209[3], 0, i2208, 'lightmapDirection')
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2210 = root || new UnityEngine.LightProbes()
  var i2211 = data
  return i2210
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2218 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2219 = data
  i2218.useSafeMode = !!i2219[0]
  i2218.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2219[1], i2218.safeModeOptions)
  i2218.timeScale = i2219[2]
  i2218.useSmoothDeltaTime = !!i2219[3]
  i2218.maxSmoothUnscaledTime = i2219[4]
  i2218.rewindCallbackMode = i2219[5]
  i2218.showUnityEditorReport = !!i2219[6]
  i2218.logBehaviour = i2219[7]
  i2218.drawGizmos = !!i2219[8]
  i2218.defaultRecyclable = !!i2219[9]
  i2218.defaultAutoPlay = i2219[10]
  i2218.defaultUpdateType = i2219[11]
  i2218.defaultTimeScaleIndependent = !!i2219[12]
  i2218.defaultEaseType = i2219[13]
  i2218.defaultEaseOvershootOrAmplitude = i2219[14]
  i2218.defaultEasePeriod = i2219[15]
  i2218.defaultAutoKill = !!i2219[16]
  i2218.defaultLoopType = i2219[17]
  i2218.debugMode = !!i2219[18]
  i2218.debugStoreTargetId = !!i2219[19]
  i2218.showPreviewPanel = !!i2219[20]
  i2218.storeSettingsLocation = i2219[21]
  i2218.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2219[22], i2218.modules)
  i2218.createASMDEF = !!i2219[23]
  i2218.showPlayingTweens = !!i2219[24]
  i2218.showPausedTweens = !!i2219[25]
  return i2218
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2220 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2221 = data
  i2220.logBehaviour = i2221[0]
  i2220.nestedTweenFailureBehaviour = i2221[1]
  return i2220
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2222 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2223 = data
  i2222.showPanel = !!i2223[0]
  i2222.audioEnabled = !!i2223[1]
  i2222.physicsEnabled = !!i2223[2]
  i2222.physics2DEnabled = !!i2223[3]
  i2222.spriteEnabled = !!i2223[4]
  i2222.uiEnabled = !!i2223[5]
  i2222.textMeshProEnabled = !!i2223[6]
  i2222.tk2DEnabled = !!i2223[7]
  i2222.deAudioEnabled = !!i2223[8]
  i2222.deUnityExtendedEnabled = !!i2223[9]
  i2222.epoOutlineEnabled = !!i2223[10]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2225 = data
  var i2227 = i2225[0]
  var i2226 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.add(i2227[i + 0]);
  }
  i2224.invalidShaderVariants = i2226
  i2224.name = i2225[1]
  i2224.guid = i2225[2]
  var i2229 = i2225[3]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( i2229[i + 0] );
  }
  i2224.shaderDefinedKeywords = i2228
  var i2231 = i2225[4]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2231[i + 0]) );
  }
  i2224.passes = i2230
  var i2233 = i2225[5]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2233[i + 0]) );
  }
  i2224.usePasses = i2232
  var i2235 = i2225[6]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2235[i + 0]) );
  }
  i2224.defaultParameterValues = i2234
  request.r(i2225[7], i2225[8], 0, i2224, 'unityFallbackShader')
  i2224.readDepth = !!i2225[9]
  i2224.isCreatedByShaderGraph = !!i2225[10]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2242 = root || new pc.UnityShaderPass()
  var i2243 = data
  i2242.id = i2243[0]
  i2242.subShaderIndex = i2243[1]
  i2242.name = i2243[2]
  i2242.passType = i2243[3]
  i2242.usePass = !!i2243[4]
  i2242.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[5], i2242.zTest)
  i2242.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[6], i2242.zWrite)
  i2242.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[7], i2242.culling)
  i2242.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2243[8], i2242.blending)
  i2242.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2243[9], i2242.alphaBlending)
  i2242.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[10], i2242.colorWriteMask)
  i2242.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[11], i2242.offsetUnits)
  i2242.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[12], i2242.offsetFactor)
  i2242.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[13], i2242.stencilRef)
  i2242.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[14], i2242.stencilReadMask)
  i2242.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2243[15], i2242.stencilWriteMask)
  i2242.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2243[16], i2242.stencilOp)
  i2242.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2243[17], i2242.stencilOpFront)
  i2242.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2243[18], i2242.stencilOpBack)
  var i2245 = i2243[19]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2245[i + 0]) );
  }
  i2242.tags = i2244
  var i2247 = i2243[20]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( i2247[i + 0] );
  }
  i2242.passDefinedKeywords = i2246
  var i2249 = i2243[21]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2249[i + 0]) );
  }
  i2242.variants = i2248
  var i2251 = i2243[22]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2251[i + 0]) );
  }
  i2242.excludedVariants = i2250
  i2242.hasDepthReader = !!i2243[23]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2253 = data
  i2252.val = i2253[0]
  i2252.name = i2253[1]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2255 = data
  i2254.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[0], i2254.src)
  i2254.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[1], i2254.dst)
  i2254.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[2], i2254.op)
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2257 = data
  i2256.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2257[0], i2256.pass)
  i2256.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2257[1], i2256.fail)
  i2256.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2257[2], i2256.zFail)
  i2256.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2257[3], i2256.comp)
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2261 = data
  i2260.name = i2261[0]
  i2260.value = i2261[1]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2265 = data
  i2264.passId = i2265[0]
  i2264.subShaderIndex = i2265[1]
  var i2267 = i2265[2]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( i2267[i + 0] );
  }
  i2264.keywords = i2266
  i2264.vertexProgram = i2265[3]
  i2264.fragmentProgram = i2265[4]
  i2264.readDepth = !!i2265[5]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2271 = data
  request.r(i2271[0], i2271[1], 0, i2270, 'shader')
  i2270.pass = i2271[2]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2275 = data
  i2274.name = i2275[0]
  i2274.type = i2275[1]
  i2274.value = new pc.Vec4( i2275[2], i2275[3], i2275[4], i2275[5] )
  i2274.textureValue = i2275[6]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2277 = data
  i2276.name = i2277[0]
  request.r(i2277[1], i2277[2], 0, i2276, 'texture')
  i2276.aabb = i2277[3]
  i2276.vertices = i2277[4]
  i2276.triangles = i2277[5]
  i2276.textureRect = UnityEngine.Rect.MinMaxRect(i2277[6], i2277[7], i2277[8], i2277[9])
  i2276.packedRect = UnityEngine.Rect.MinMaxRect(i2277[10], i2277[11], i2277[12], i2277[13])
  i2276.border = new pc.Vec4( i2277[14], i2277[15], i2277[16], i2277[17] )
  i2276.transparency = i2277[18]
  i2276.bounds = i2277[19]
  i2276.pixelsPerUnit = i2277[20]
  i2276.textureWidth = i2277[21]
  i2276.textureHeight = i2277[22]
  i2276.nativeSize = new pc.Vec2( i2277[23], i2277[24] )
  i2276.pivot = new pc.Vec2( i2277[25], i2277[26] )
  i2276.textureRectOffset = new pc.Vec2( i2277[27], i2277[28] )
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2279 = data
  i2278.name = i2279[0]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2281 = data
  i2280.name = i2281[0]
  i2280.wrapMode = i2281[1]
  i2280.isLooping = !!i2281[2]
  i2280.length = i2281[3]
  var i2283 = i2281[4]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2283[i + 0]) );
  }
  i2280.curves = i2282
  var i2285 = i2281[5]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2285[i + 0]) );
  }
  i2280.events = i2284
  i2280.halfPrecision = !!i2281[6]
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2289 = data
  i2288.path = i2289[0]
  i2288.componentType = i2289[1]
  i2288.property = i2289[2]
  i2288.keys = i2289[3]
  var i2291 = i2289[4]
  var i2290 = []
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2291[i + 0]) );
  }
  i2288.objectReferenceKeys = i2290
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2295 = data
  i2294.functionName = i2295[0]
  i2294.floatParameter = i2295[1]
  i2294.intParameter = i2295[2]
  i2294.stringParameter = i2295[3]
  request.r(i2295[4], i2295[5], 0, i2294, 'objectReferenceParameter')
  i2294.time = i2295[6]
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2299 = data
  i2298.time = i2299[0]
  request.r(i2299[1], i2299[2], 0, i2298, 'value')
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2301 = data
  i2300.name = i2301[0]
  var i2303 = i2301[1]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2303[i + 0]) );
  }
  i2300.states = i2302
  var i2305 = i2301[2]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2305[i + 0]) );
  }
  i2300.layers = i2304
  var i2307 = i2301[3]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2307[i + 0]) );
  }
  i2300.parameters = i2306
  var i2309 = i2301[4]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( i2309[i + 0] );
  }
  i2300.animationClips = i2308
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2313 = data
  i2312.cycleOffset = i2313[0]
  i2312.cycleOffsetParameter = i2313[1]
  i2312.cycleOffsetParameterActive = !!i2313[2]
  i2312.mirror = !!i2313[3]
  i2312.mirrorParameter = i2313[4]
  i2312.mirrorParameterActive = !!i2313[5]
  i2312.motionId = i2313[6]
  i2312.nameHash = i2313[7]
  i2312.fullPathHash = i2313[8]
  i2312.speed = i2313[9]
  i2312.speedParameter = i2313[10]
  i2312.speedParameterActive = !!i2313[11]
  i2312.tag = i2313[12]
  i2312.name = i2313[13]
  i2312.writeDefaultValues = !!i2313[14]
  var i2315 = i2313[15]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2315[i + 0]) );
  }
  i2312.transitions = i2314
  var i2317 = i2313[16]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 2, i2316, '')
  }
  i2312.behaviours = i2316
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2321 = data
  i2320.fullPath = i2321[0]
  i2320.canTransitionToSelf = !!i2321[1]
  i2320.duration = i2321[2]
  i2320.exitTime = i2321[3]
  i2320.hasExitTime = !!i2321[4]
  i2320.hasFixedDuration = !!i2321[5]
  i2320.interruptionSource = i2321[6]
  i2320.offset = i2321[7]
  i2320.orderedInterruption = !!i2321[8]
  i2320.destinationStateNameHash = i2321[9]
  i2320.destinationStateMachineId = i2321[10]
  i2320.isExit = !!i2321[11]
  i2320.mute = !!i2321[12]
  i2320.solo = !!i2321[13]
  var i2323 = i2321[14]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2323[i + 0]) );
  }
  i2320.conditions = i2322
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2327 = data
  i2326.mode = i2327[0]
  i2326.parameter = i2327[1]
  i2326.threshold = i2327[2]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2333 = data
  i2332.blendingMode = i2333[0]
  i2332.defaultWeight = i2333[1]
  i2332.name = i2333[2]
  i2332.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2333[3], i2332.stateMachine)
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2335 = data
  i2334.id = i2335[0]
  i2334.defaultStateNameHash = i2335[1]
  var i2337 = i2335[2]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 1) {
    i2336.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2337[i + 0]) );
  }
  i2334.entryTransitions = i2336
  var i2339 = i2335[3]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2339[i + 0]) );
  }
  i2334.anyStateTransitions = i2338
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2343 = data
  i2342.destinationStateNameHash = i2343[0]
  i2342.destinationStateMachineId = i2343[1]
  i2342.isExit = !!i2343[2]
  i2342.mute = !!i2343[3]
  i2342.solo = !!i2343[4]
  var i2345 = i2343[5]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2345[i + 0]) );
  }
  i2342.conditions = i2344
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2349 = data
  i2348.defaultBool = !!i2349[0]
  i2348.defaultFloat = i2349[1]
  i2348.defaultInt = i2349[2]
  i2348.name = i2349[3]
  i2348.nameHash = i2349[4]
  i2348.type = i2349[5]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2351 = data
  var i2353 = i2351[0]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2353[i + 0]) );
  }
  i2350.files = i2352
  i2350.componentToPrefabIds = i2351[1]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2357 = data
  i2356.path = i2357[0]
  request.r(i2357[1], i2357[2], 0, i2356, 'unityObject')
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2359 = data
  var i2361 = i2359[0]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2361[i + 0]) );
  }
  i2358.scriptsExecutionOrder = i2360
  var i2363 = i2359[1]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2363[i + 0]) );
  }
  i2358.sortingLayers = i2362
  var i2365 = i2359[2]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2365[i + 0]) );
  }
  i2358.cullingLayers = i2364
  i2358.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2359[3], i2358.timeSettings)
  i2358.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2359[4], i2358.physicsSettings)
  i2358.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2359[5], i2358.physics2DSettings)
  i2358.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2359[6], i2358.qualitySettings)
  i2358.removeShadows = !!i2359[7]
  i2358.autoInstantiatePrefabs = !!i2359[8]
  i2358.enableAutoInstancing = !!i2359[9]
  i2358.lightmapEncodingQuality = i2359[10]
  i2358.desiredColorSpace = i2359[11]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2369 = data
  i2368.name = i2369[0]
  i2368.value = i2369[1]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2373 = data
  i2372.id = i2373[0]
  i2372.name = i2373[1]
  i2372.value = i2373[2]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2377 = data
  i2376.id = i2377[0]
  i2376.name = i2377[1]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2379 = data
  i2378.fixedDeltaTime = i2379[0]
  i2378.maximumDeltaTime = i2379[1]
  i2378.timeScale = i2379[2]
  i2378.maximumParticleTimestep = i2379[3]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2381 = data
  i2380.gravity = new pc.Vec3( i2381[0], i2381[1], i2381[2] )
  i2380.defaultSolverIterations = i2381[3]
  i2380.bounceThreshold = i2381[4]
  i2380.autoSyncTransforms = !!i2381[5]
  i2380.autoSimulation = !!i2381[6]
  var i2383 = i2381[7]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2383[i + 0]) );
  }
  i2380.collisionMatrix = i2382
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2387 = data
  i2386.enabled = !!i2387[0]
  i2386.layerId = i2387[1]
  i2386.otherLayerId = i2387[2]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'material')
  i2388.gravity = new pc.Vec2( i2389[2], i2389[3] )
  i2388.positionIterations = i2389[4]
  i2388.velocityIterations = i2389[5]
  i2388.velocityThreshold = i2389[6]
  i2388.maxLinearCorrection = i2389[7]
  i2388.maxAngularCorrection = i2389[8]
  i2388.maxTranslationSpeed = i2389[9]
  i2388.maxRotationSpeed = i2389[10]
  i2388.timeToSleep = i2389[11]
  i2388.linearSleepTolerance = i2389[12]
  i2388.angularSleepTolerance = i2389[13]
  i2388.defaultContactOffset = i2389[14]
  i2388.autoSimulation = !!i2389[15]
  i2388.queriesHitTriggers = !!i2389[16]
  i2388.queriesStartInColliders = !!i2389[17]
  i2388.callbacksOnDisable = !!i2389[18]
  i2388.reuseCollisionCallbacks = !!i2389[19]
  i2388.autoSyncTransforms = !!i2389[20]
  var i2391 = i2389[21]
  var i2390 = []
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2391[i + 0]) );
  }
  i2388.collisionMatrix = i2390
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2395 = data
  i2394.enabled = !!i2395[0]
  i2394.layerId = i2395[1]
  i2394.otherLayerId = i2395[2]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2397 = data
  var i2399 = i2397[0]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2399[i + 0]) );
  }
  i2396.qualityLevels = i2398
  var i2401 = i2397[1]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( i2401[i + 0] );
  }
  i2396.names = i2400
  i2396.shadows = i2397[2]
  i2396.anisotropicFiltering = i2397[3]
  i2396.antiAliasing = i2397[4]
  i2396.lodBias = i2397[5]
  i2396.shadowCascades = i2397[6]
  i2396.shadowDistance = i2397[7]
  i2396.shadowmaskMode = i2397[8]
  i2396.shadowProjection = i2397[9]
  i2396.shadowResolution = i2397[10]
  i2396.softParticles = !!i2397[11]
  i2396.softVegetation = !!i2397[12]
  i2396.activeColorSpace = i2397[13]
  i2396.desiredColorSpace = i2397[14]
  i2396.masterTextureLimit = i2397[15]
  i2396.maxQueuedFrames = i2397[16]
  i2396.particleRaycastBudget = i2397[17]
  i2396.pixelLightCount = i2397[18]
  i2396.realtimeReflectionProbes = !!i2397[19]
  i2396.shadowCascade2Split = i2397[20]
  i2396.shadowCascade4Split = new pc.Vec3( i2397[21], i2397[22], i2397[23] )
  i2396.streamingMipmapsActive = !!i2397[24]
  i2396.vSyncCount = i2397[25]
  i2396.asyncUploadBufferSize = i2397[26]
  i2396.asyncUploadTimeSlice = i2397[27]
  i2396.billboardsFaceCameraPosition = !!i2397[28]
  i2396.shadowNearPlaneOffset = i2397[29]
  i2396.streamingMipmapsMemoryBudget = i2397[30]
  i2396.maximumLODLevel = i2397[31]
  i2396.streamingMipmapsAddAllCameras = !!i2397[32]
  i2396.streamingMipmapsMaxLevelReduction = i2397[33]
  i2396.streamingMipmapsRenderersPerFrame = i2397[34]
  i2396.resolutionScalingFixedDPIFactor = i2397[35]
  i2396.streamingMipmapsMaxFileIORequests = i2397[36]
  i2396.currentQualityLevel = i2397[37]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2407 = data
  i2406.weight = i2407[0]
  i2406.vertices = i2407[1]
  i2406.normals = i2407[2]
  i2406.tangents = i2407[3]
  return i2406
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[12],"61":[3],"62":[3],"63":[3],"64":[3],"65":[3],"66":[3],"67":[3],"68":[34],"69":[34],"70":[34],"71":[34],"72":[34],"73":[34],"74":[34],"75":[34],"76":[34],"77":[34],"78":[34],"79":[34],"80":[34],"81":[12],"82":[7],"83":[84],"85":[84],"16":[15],"86":[15],"87":[19,15],"88":[7],"89":[19,15],"90":[15],"91":[7,15],"92":[15,19],"93":[15],"94":[15],"95":[15],"22":[16],"20":[19,15],"96":[15],"18":[16],"97":[15],"98":[15],"99":[15],"100":[15],"101":[15],"102":[15],"103":[15],"104":[15],"105":[15],"106":[19,15],"107":[15],"108":[15],"109":[15],"110":[15],"111":[19,15],"112":[15],"113":[47],"114":[47],"48":[47],"115":[47],"116":[12],"117":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.SphereCollider","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","Brick","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.GraphicRaycaster","UltimateJoystick","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasGroup","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.UI.Button","Joint","Saw","UnityEngine.MeshCollider","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","Conveyor","UnityEngine.GameObject","RotateObject","SpawnCoin","LKManager","ATManager2","BrickManager","GameController","HandController","SoundController","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.29f1";

Deserializers.productName = "BucketTemp";

Deserializers.lunaInitializationTime = "07/25/2022 07:15:45";

Deserializers.lunaDaysRunning = "8.9";

Deserializers.lunaVersion = "3.12.0";

Deserializers.lunaSHA = "b6890f1f3fae46d6aab4282328914da691d139da";

Deserializers.creativeName = "MonsterCrusher-HieuNX-PLY1";

Deserializers.lunaAppID = "13050";

Deserializers.projectId = "9b18bd58-01ec-4dc1-8077-7f305e1fd3f0";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.4.8\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = "https://play.google.com/store/apps/details?id=com.tas.statue.crasher";

Deserializers.iosLink = "";

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isAutoInstantiatePrefabsEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1162";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3498";

Deserializers.runtimeAnalysisExcludedModules = "particle-system, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.BucketTemp";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "36339780-16a1-426b-91fe-f4b083c4e371";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

