var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i264 = root || request.c( 'UnityEngine.JointSpring' )
  var i265 = data
  i264.spring = i265[0]
  i264.damper = i265[1]
  i264.targetPosition = i265[2]
  return i264
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i266 = root || request.c( 'UnityEngine.JointMotor' )
  var i267 = data
  i266.m_TargetVelocity = i267[0]
  i266.m_Force = i267[1]
  i266.m_FreeSpin = i267[2]
  return i266
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i268 = root || request.c( 'UnityEngine.JointLimits' )
  var i269 = data
  i268.m_Min = i269[0]
  i268.m_Max = i269[1]
  i268.m_Bounciness = i269[2]
  i268.m_BounceMinVelocity = i269[3]
  i268.m_ContactDistance = i269[4]
  i268.minBounce = i269[5]
  i268.maxBounce = i269[6]
  return i268
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i270 = root || request.c( 'UnityEngine.JointDrive' )
  var i271 = data
  i270.m_PositionSpring = i271[0]
  i270.m_PositionDamper = i271[1]
  i270.m_MaximumForce = i271[2]
  return i270
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i272 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i273 = data
  i272.m_Spring = i273[0]
  i272.m_Damper = i273[1]
  return i272
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i274 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i275 = data
  i274.m_Limit = i275[0]
  i274.m_Bounciness = i275[1]
  i274.m_ContactDistance = i275[2]
  return i274
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i277 = data
  i276.m_ExtremumSlip = i277[0]
  i276.m_ExtremumValue = i277[1]
  i276.m_AsymptoteSlip = i277[2]
  i276.m_AsymptoteValue = i277[3]
  i276.m_Stiffness = i277[4]
  return i276
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i279 = data
  i278.m_LowerAngle = i279[0]
  i278.m_UpperAngle = i279[1]
  return i278
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i280 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i281 = data
  i280.m_MotorSpeed = i281[0]
  i280.m_MaximumMotorTorque = i281[1]
  return i280
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i282 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i283 = data
  i282.m_DampingRatio = i283[0]
  i282.m_Frequency = i283[1]
  i282.m_Angle = i283[2]
  return i282
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i284 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i285 = data
  i284.m_LowerTranslation = i285[0]
  i284.m_UpperTranslation = i285[1]
  return i284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i286 = root || new pc.UnityMaterial()
  var i287 = data
  i286.name = i287[0]
  request.r(i287[1], i287[2], 0, i286, 'shader')
  i286.renderQueue = i287[3]
  i286.enableInstancing = !!i287[4]
  var i289 = i287[5]
  var i288 = []
  for(var i = 0; i < i289.length; i += 1) {
    i288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i289[i + 0]) );
  }
  i286.floatParameters = i288
  var i291 = i287[6]
  var i290 = []
  for(var i = 0; i < i291.length; i += 1) {
    i290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i291[i + 0]) );
  }
  i286.colorParameters = i290
  var i293 = i287[7]
  var i292 = []
  for(var i = 0; i < i293.length; i += 1) {
    i292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i293[i + 0]) );
  }
  i286.vectorParameters = i292
  var i295 = i287[8]
  var i294 = []
  for(var i = 0; i < i295.length; i += 1) {
    i294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i295[i + 0]) );
  }
  i286.textureParameters = i294
  var i297 = i287[9]
  var i296 = []
  for(var i = 0; i < i297.length; i += 1) {
    i296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i297[i + 0]) );
  }
  i286.materialFlags = i296
  return i286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i301 = data
  i300.name = i301[0]
  i300.value = i301[1]
  return i300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i305 = data
  i304.name = i305[0]
  i304.value = new pc.Color(i305[1], i305[2], i305[3], i305[4])
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i309 = data
  i308.name = i309[0]
  i308.value = new pc.Vec4( i309[1], i309[2], i309[3], i309[4] )
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i313 = data
  i312.name = i313[0]
  request.r(i313[1], i313[2], 0, i312, 'value')
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i317 = data
  i316.name = i317[0]
  i316.enabled = !!i317[1]
  return i316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i319 = data
  i318.name = i319[0]
  i318.width = i319[1]
  i318.height = i319[2]
  i318.mipmapCount = i319[3]
  i318.anisoLevel = i319[4]
  i318.filterMode = i319[5]
  i318.hdr = !!i319[6]
  i318.format = i319[7]
  i318.wrapMode = i319[8]
  i318.alphaIsTransparency = !!i319[9]
  i318.alphaSource = i319[10]
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i321 = data
  i320.name = i321[0]
  i320.halfPrecision = !!i321[1]
  i320.vertexCount = i321[2]
  i320.aabb = i321[3]
  var i323 = i321[4]
  var i322 = []
  for(var i = 0; i < i323.length; i += 1) {
    i322.push( !!i323[i + 0] );
  }
  i320.streams = i322
  i320.vertices = i321[5]
  var i325 = i321[6]
  var i324 = []
  for(var i = 0; i < i325.length; i += 1) {
    i324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i325[i + 0]) );
  }
  i320.subMeshes = i324
  var i327 = i321[7]
  var i326 = []
  for(var i = 0; i < i327.length; i += 16) {
    i326.push( new pc.Mat4().setData(i327[i + 0], i327[i + 1], i327[i + 2], i327[i + 3],  i327[i + 4], i327[i + 5], i327[i + 6], i327[i + 7],  i327[i + 8], i327[i + 9], i327[i + 10], i327[i + 11],  i327[i + 12], i327[i + 13], i327[i + 14], i327[i + 15]) );
  }
  i320.bindposes = i326
  var i329 = i321[8]
  var i328 = []
  for(var i = 0; i < i329.length; i += 1) {
    i328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i329[i + 0]) );
  }
  i320.blendShapes = i328
  return i320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i335 = data
  i334.triangles = i335[0]
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i341 = data
  i340.name = i341[0]
  var i343 = i341[1]
  var i342 = []
  for(var i = 0; i < i343.length; i += 1) {
    i342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i343[i + 0]) );
  }
  i340.frames = i342
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i345 = data
  i344.position = new pc.Vec3( i345[0], i345[1], i345[2] )
  i344.scale = new pc.Vec3( i345[3], i345[4], i345[5] )
  i344.rotation = new pc.Quat(i345[6], i345[7], i345[8], i345[9])
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i347 = data
  i346.enabled = !!i347[0]
  request.r(i347[1], i347[2], 0, i346, 'sharedMaterial')
  var i349 = i347[3]
  var i348 = []
  for(var i = 0; i < i349.length; i += 2) {
  request.r(i349[i + 0], i349[i + 1], 2, i348, '')
  }
  i346.sharedMaterials = i348
  i346.receiveShadows = !!i347[4]
  i346.shadowCastingMode = i347[5]
  i346.sortingLayerID = i347[6]
  i346.sortingOrder = i347[7]
  i346.lightmapIndex = i347[8]
  i346.lightmapSceneIndex = i347[9]
  i346.lightmapScaleOffset = new pc.Vec4( i347[10], i347[11], i347[12], i347[13] )
  i346.lightProbeUsage = i347[14]
  i346.reflectionProbeUsage = i347[15]
  i346.color = new pc.Color(i347[16], i347[17], i347[18], i347[19])
  request.r(i347[20], i347[21], 0, i346, 'sprite')
  i346.flipX = !!i347[22]
  i346.flipY = !!i347[23]
  i346.drawMode = i347[24]
  i346.size = new pc.Vec2( i347[25], i347[26] )
  i346.tileMode = i347[27]
  i346.adaptiveModeThreshold = i347[28]
  i346.maskInteraction = i347[29]
  i346.spriteSortPoint = i347[30]
  return i346
}

Deserializers["Brick"] = function (request, data, root) {
  var i352 = root || request.c( 'Brick' )
  var i353 = data
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i355 = data
  i354.name = i355[0]
  i354.tag = i355[1]
  i354.enabled = !!i355[2]
  i354.isStatic = !!i355[3]
  i354.layer = i355[4]
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i357 = data
  i356.name = i357[0]
  i356.atlasId = i357[1]
  i356.mipmapCount = i357[2]
  i356.hdr = !!i357[3]
  i356.size = i357[4]
  i356.anisoLevel = i357[5]
  i356.filterMode = i357[6]
  i356.wrapMode = i357[7]
  var i359 = i357[8]
  var i358 = []
  for(var i = 0; i < i359.length; i += 4) {
    i358.push( UnityEngine.Rect.MinMaxRect(i359[i + 0], i359[i + 1], i359[i + 2], i359[i + 3]) );
  }
  i356.rects = i358
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i363 = data
  i362.name = i363[0]
  i362.index = i363[1]
  i362.startup = !!i363[2]
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i365 = data
  i364.enabled = !!i365[0]
  i364.aspect = i365[1]
  i364.orthographic = !!i365[2]
  i364.orthographicSize = i365[3]
  i364.backgroundColor = new pc.Color(i365[4], i365[5], i365[6], i365[7])
  i364.nearClipPlane = i365[8]
  i364.farClipPlane = i365[9]
  i364.fieldOfView = i365[10]
  i364.depth = i365[11]
  i364.clearFlags = i365[12]
  i364.cullingMask = i365[13]
  i364.rect = i365[14]
  request.r(i365[15], i365[16], 0, i364, 'targetTexture')
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i367 = data
  i366.enabled = !!i367[0]
  i366.type = i367[1]
  i366.color = new pc.Color(i367[2], i367[3], i367[4], i367[5])
  i366.cullingMask = i367[6]
  i366.intensity = i367[7]
  i366.range = i367[8]
  i366.spotAngle = i367[9]
  i366.shadows = i367[10]
  i366.shadowNormalBias = i367[11]
  i366.shadowBias = i367[12]
  i366.shadowStrength = i367[13]
  i366.lightmapBakeType = i367[14]
  i366.renderMode = i367[15]
  request.r(i367[16], i367[17], 0, i366, 'cookie')
  i366.cookieSize = i367[18]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i369 = data
  i368.pivot = new pc.Vec2( i369[0], i369[1] )
  i368.anchorMin = new pc.Vec2( i369[2], i369[3] )
  i368.anchorMax = new pc.Vec2( i369[4], i369[5] )
  i368.sizeDelta = new pc.Vec2( i369[6], i369[7] )
  i368.anchoredPosition3D = new pc.Vec3( i369[8], i369[9], i369[10] )
  i368.rotation = new pc.Quat(i369[11], i369[12], i369[13], i369[14])
  i368.scale = new pc.Vec3( i369[15], i369[16], i369[17] )
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i371 = data
  i370.enabled = !!i371[0]
  i370.planeDistance = i371[1]
  i370.referencePixelsPerUnit = i371[2]
  i370.isFallbackOverlay = !!i371[3]
  i370.renderMode = i371[4]
  i370.renderOrder = i371[5]
  i370.sortingLayerName = i371[6]
  i370.sortingOrder = i371[7]
  i370.scaleFactor = i371[8]
  request.r(i371[9], i371[10], 0, i370, 'worldCamera')
  i370.overrideSorting = !!i371[11]
  i370.pixelPerfect = !!i371[12]
  i370.targetDisplay = i371[13]
  i370.overridePixelPerfect = !!i371[14]
  return i370
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i373 = data
  i372.m_UiScaleMode = i373[0]
  i372.m_ReferencePixelsPerUnit = i373[1]
  i372.m_ScaleFactor = i373[2]
  i372.m_ReferenceResolution = new pc.Vec2( i373[3], i373[4] )
  i372.m_ScreenMatchMode = i373[5]
  i372.m_MatchWidthOrHeight = i373[6]
  i372.m_PhysicalUnit = i373[7]
  i372.m_FallbackScreenDPI = i373[8]
  i372.m_DefaultSpriteDPI = i373[9]
  i372.m_DynamicPixelsPerUnit = i373[10]
  i372.m_PresetInfoIsWorld = !!i373[11]
  return i372
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i375 = data
  i374.m_IgnoreReversedGraphics = !!i375[0]
  i374.m_BlockingObjects = i375[1]
  i374.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i375[2] )
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i377 = data
  i376.cullTransparentMesh = !!i377[0]
  return i376
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.UI.Image' )
  var i379 = data
  request.r(i379[0], i379[1], 0, i378, 'm_Sprite')
  i378.m_Type = i379[2]
  i378.m_PreserveAspect = !!i379[3]
  i378.m_FillCenter = !!i379[4]
  i378.m_FillMethod = i379[5]
  i378.m_FillAmount = i379[6]
  i378.m_FillClockwise = !!i379[7]
  i378.m_FillOrigin = i379[8]
  i378.m_UseSpriteMesh = !!i379[9]
  i378.m_PixelsPerUnitMultiplier = i379[10]
  request.r(i379[11], i379[12], 0, i378, 'm_Material')
  i378.m_Maskable = !!i379[13]
  i378.m_Color = new pc.Color(i379[14], i379[15], i379[16], i379[17])
  i378.m_RaycastTarget = !!i379[18]
  i378.m_RaycastPadding = new pc.Vec4( i379[19], i379[20], i379[21], i379[22] )
  return i378
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i380 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i381 = data
  request.r(i381[0], i381[1], 0, i380, 'm_FirstSelected')
  i380.m_sendNavigationEvents = !!i381[2]
  i380.m_DragThreshold = i381[3]
  return i380
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i383 = data
  i382.m_HorizontalAxis = i383[0]
  i382.m_VerticalAxis = i383[1]
  i382.m_SubmitButton = i383[2]
  i382.m_CancelButton = i383[3]
  i382.m_InputActionsPerSecond = i383[4]
  i382.m_RepeatDelay = i383[5]
  i382.m_ForceModuleActive = !!i383[6]
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i385 = data
  request.r(i385[0], i385[1], 0, i384, 'sharedMesh')
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i387 = data
  request.r(i387[0], i387[1], 0, i386, 'additionalVertexStreams')
  i386.enabled = !!i387[2]
  request.r(i387[3], i387[4], 0, i386, 'sharedMaterial')
  var i389 = i387[5]
  var i388 = []
  for(var i = 0; i < i389.length; i += 2) {
  request.r(i389[i + 0], i389[i + 1], 2, i388, '')
  }
  i386.sharedMaterials = i388
  i386.receiveShadows = !!i387[6]
  i386.shadowCastingMode = i387[7]
  i386.sortingLayerID = i387[8]
  i386.sortingOrder = i387[9]
  i386.lightmapIndex = i387[10]
  i386.lightmapSceneIndex = i387[11]
  i386.lightmapScaleOffset = new pc.Vec4( i387[12], i387[13], i387[14], i387[15] )
  i386.lightProbeUsage = i387[16]
  i386.reflectionProbeUsage = i387[17]
  return i386
}

Deserializers["BucketCrusher1"] = function (request, data, root) {
  var i390 = root || request.c( 'BucketCrusher1' )
  var i391 = data
  return i390
}

Deserializers["BrickManager"] = function (request, data, root) {
  var i392 = root || request.c( 'BrickManager' )
  var i393 = data
  request.r(i393[0], i393[1], 0, i392, 'imageLoader')
  request.r(i393[2], i393[3], 0, i392, 'brickPrefab')
  request.r(i393[4], i393[5], 0, i392, 'brickHolder')
  i392.brickSize = i393[6]
  i392.brickHealth = i393[7]
  i392.xOffset = i393[8]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i395 = data
  i394.ambientIntensity = i395[0]
  i394.reflectionIntensity = i395[1]
  i394.ambientMode = i395[2]
  i394.ambientLight = new pc.Color(i395[3], i395[4], i395[5], i395[6])
  i394.ambientSkyColor = new pc.Color(i395[7], i395[8], i395[9], i395[10])
  i394.ambientGroundColor = new pc.Color(i395[11], i395[12], i395[13], i395[14])
  i394.ambientEquatorColor = new pc.Color(i395[15], i395[16], i395[17], i395[18])
  i394.fogColor = new pc.Color(i395[19], i395[20], i395[21], i395[22])
  i394.fogEndDistance = i395[23]
  i394.fogStartDistance = i395[24]
  i394.fogDensity = i395[25]
  i394.fog = !!i395[26]
  request.r(i395[27], i395[28], 0, i394, 'skybox')
  i394.fogMode = i395[29]
  var i397 = i395[30]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i397[i + 0]) );
  }
  i394.lightmaps = i396
  i394.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i395[31], i394.lightProbes)
  i394.lightmapsMode = i395[32]
  i394.environmentLightingMode = i395[33]
  i394.ambientProbe = new pc.SphericalHarmonicsL2(i395[34])
  request.r(i395[35], i395[36], 0, i394, 'customReflection')
  request.r(i395[37], i395[38], 0, i394, 'defaultReflection')
  i394.defaultReflectionMode = i395[39]
  i394.defaultReflectionResolution = i395[40]
  i394.sunLightObjectId = i395[41]
  i394.pixelLightCount = i395[42]
  i394.defaultReflectionHDR = !!i395[43]
  i394.hasLightDataAsset = !!i395[44]
  i394.hasManualGenerate = !!i395[45]
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i401 = data
  request.r(i401[0], i401[1], 0, i400, 'lightmapColor')
  request.r(i401[2], i401[3], 0, i400, 'lightmapDirection')
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i402 = root || new UnityEngine.LightProbes()
  var i403 = data
  return i402
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i410 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i411 = data
  i410.useSafeMode = !!i411[0]
  i410.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i411[1], i410.safeModeOptions)
  i410.timeScale = i411[2]
  i410.useSmoothDeltaTime = !!i411[3]
  i410.maxSmoothUnscaledTime = i411[4]
  i410.rewindCallbackMode = i411[5]
  i410.showUnityEditorReport = !!i411[6]
  i410.logBehaviour = i411[7]
  i410.drawGizmos = !!i411[8]
  i410.defaultRecyclable = !!i411[9]
  i410.defaultAutoPlay = i411[10]
  i410.defaultUpdateType = i411[11]
  i410.defaultTimeScaleIndependent = !!i411[12]
  i410.defaultEaseType = i411[13]
  i410.defaultEaseOvershootOrAmplitude = i411[14]
  i410.defaultEasePeriod = i411[15]
  i410.defaultAutoKill = !!i411[16]
  i410.defaultLoopType = i411[17]
  i410.debugMode = !!i411[18]
  i410.debugStoreTargetId = !!i411[19]
  i410.showPreviewPanel = !!i411[20]
  i410.storeSettingsLocation = i411[21]
  i410.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i411[22], i410.modules)
  i410.createASMDEF = !!i411[23]
  i410.showPlayingTweens = !!i411[24]
  i410.showPausedTweens = !!i411[25]
  return i410
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i412 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i413 = data
  i412.logBehaviour = i413[0]
  i412.nestedTweenFailureBehaviour = i413[1]
  return i412
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i414 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i415 = data
  i414.showPanel = !!i415[0]
  i414.audioEnabled = !!i415[1]
  i414.physicsEnabled = !!i415[2]
  i414.physics2DEnabled = !!i415[3]
  i414.spriteEnabled = !!i415[4]
  i414.uiEnabled = !!i415[5]
  i414.textMeshProEnabled = !!i415[6]
  i414.tk2DEnabled = !!i415[7]
  i414.deAudioEnabled = !!i415[8]
  i414.deUnityExtendedEnabled = !!i415[9]
  i414.epoOutlineEnabled = !!i415[10]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i417 = data
  var i419 = i417[0]
  var i418 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i419.length; i += 1) {
    i418.add(i419[i + 0]);
  }
  i416.invalidShaderVariants = i418
  i416.name = i417[1]
  i416.guid = i417[2]
  var i421 = i417[3]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( i421[i + 0] );
  }
  i416.shaderDefinedKeywords = i420
  var i423 = i417[4]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i423[i + 0]) );
  }
  i416.passes = i422
  var i425 = i417[5]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i425[i + 0]) );
  }
  i416.usePasses = i424
  var i427 = i417[6]
  var i426 = []
  for(var i = 0; i < i427.length; i += 1) {
    i426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i427[i + 0]) );
  }
  i416.defaultParameterValues = i426
  request.r(i417[7], i417[8], 0, i416, 'unityFallbackShader')
  i416.readDepth = !!i417[9]
  i416.isCreatedByShaderGraph = !!i417[10]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i434 = root || new pc.UnityShaderPass()
  var i435 = data
  i434.id = i435[0]
  i434.subShaderIndex = i435[1]
  i434.name = i435[2]
  i434.passType = i435[3]
  i434.usePass = !!i435[4]
  i434.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[5], i434.zTest)
  i434.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[6], i434.zWrite)
  i434.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[7], i434.culling)
  i434.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i435[8], i434.blending)
  i434.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i435[9], i434.alphaBlending)
  i434.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[10], i434.colorWriteMask)
  i434.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[11], i434.offsetUnits)
  i434.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[12], i434.offsetFactor)
  i434.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[13], i434.stencilRef)
  i434.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[14], i434.stencilReadMask)
  i434.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i435[15], i434.stencilWriteMask)
  i434.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i435[16], i434.stencilOp)
  i434.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i435[17], i434.stencilOpFront)
  i434.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i435[18], i434.stencilOpBack)
  var i437 = i435[19]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i437[i + 0]) );
  }
  i434.tags = i436
  var i439 = i435[20]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( i439[i + 0] );
  }
  i434.passDefinedKeywords = i438
  var i441 = i435[21]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i441[i + 0]) );
  }
  i434.variants = i440
  var i443 = i435[22]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i443[i + 0]) );
  }
  i434.excludedVariants = i442
  i434.hasDepthReader = !!i435[23]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i445 = data
  i444.val = i445[0]
  i444.name = i445[1]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i447 = data
  i446.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[0], i446.src)
  i446.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[1], i446.dst)
  i446.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i447[2], i446.op)
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i449 = data
  i448.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[0], i448.pass)
  i448.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[1], i448.fail)
  i448.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[2], i448.zFail)
  i448.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[3], i448.comp)
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i453 = data
  i452.name = i453[0]
  i452.value = i453[1]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i457 = data
  i456.passId = i457[0]
  i456.subShaderIndex = i457[1]
  var i459 = i457[2]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( i459[i + 0] );
  }
  i456.keywords = i458
  i456.vertexProgram = i457[3]
  i456.fragmentProgram = i457[4]
  i456.readDepth = !!i457[5]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i463 = data
  request.r(i463[0], i463[1], 0, i462, 'shader')
  i462.pass = i463[2]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i467 = data
  i466.name = i467[0]
  i466.type = i467[1]
  i466.value = new pc.Vec4( i467[2], i467[3], i467[4], i467[5] )
  i466.textureValue = i467[6]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i469 = data
  i468.name = i469[0]
  request.r(i469[1], i469[2], 0, i468, 'texture')
  i468.aabb = i469[3]
  i468.vertices = i469[4]
  i468.triangles = i469[5]
  i468.textureRect = UnityEngine.Rect.MinMaxRect(i469[6], i469[7], i469[8], i469[9])
  i468.packedRect = UnityEngine.Rect.MinMaxRect(i469[10], i469[11], i469[12], i469[13])
  i468.border = new pc.Vec4( i469[14], i469[15], i469[16], i469[17] )
  i468.transparency = i469[18]
  i468.bounds = i469[19]
  i468.pixelsPerUnit = i469[20]
  i468.textureWidth = i469[21]
  i468.textureHeight = i469[22]
  i468.nativeSize = new pc.Vec2( i469[23], i469[24] )
  i468.pivot = new pc.Vec2( i469[25], i469[26] )
  i468.textureRectOffset = new pc.Vec2( i469[27], i469[28] )
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i471 = data
  var i473 = i471[0]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i473[i + 0]) );
  }
  i470.files = i472
  i470.componentToPrefabIds = i471[1]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i477 = data
  i476.path = i477[0]
  request.r(i477[1], i477[2], 0, i476, 'unityObject')
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i479 = data
  var i481 = i479[0]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i481[i + 0]) );
  }
  i478.scriptsExecutionOrder = i480
  var i483 = i479[1]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i483[i + 0]) );
  }
  i478.sortingLayers = i482
  var i485 = i479[2]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i485[i + 0]) );
  }
  i478.cullingLayers = i484
  i478.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i479[3], i478.timeSettings)
  i478.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i479[4], i478.physicsSettings)
  i478.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i479[5], i478.physics2DSettings)
  i478.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i479[6], i478.qualitySettings)
  i478.removeShadows = !!i479[7]
  i478.autoInstantiatePrefabs = !!i479[8]
  i478.enableAutoInstancing = !!i479[9]
  i478.lightmapEncodingQuality = i479[10]
  i478.desiredColorSpace = i479[11]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i489 = data
  i488.name = i489[0]
  i488.value = i489[1]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i493 = data
  i492.id = i493[0]
  i492.name = i493[1]
  i492.value = i493[2]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i497 = data
  i496.id = i497[0]
  i496.name = i497[1]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i499 = data
  i498.fixedDeltaTime = i499[0]
  i498.maximumDeltaTime = i499[1]
  i498.timeScale = i499[2]
  i498.maximumParticleTimestep = i499[3]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i501 = data
  i500.gravity = new pc.Vec3( i501[0], i501[1], i501[2] )
  i500.defaultSolverIterations = i501[3]
  i500.bounceThreshold = i501[4]
  i500.autoSyncTransforms = !!i501[5]
  i500.autoSimulation = !!i501[6]
  var i503 = i501[7]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i503[i + 0]) );
  }
  i500.collisionMatrix = i502
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i507 = data
  i506.enabled = !!i507[0]
  i506.layerId = i507[1]
  i506.otherLayerId = i507[2]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'material')
  i508.gravity = new pc.Vec2( i509[2], i509[3] )
  i508.positionIterations = i509[4]
  i508.velocityIterations = i509[5]
  i508.velocityThreshold = i509[6]
  i508.maxLinearCorrection = i509[7]
  i508.maxAngularCorrection = i509[8]
  i508.maxTranslationSpeed = i509[9]
  i508.maxRotationSpeed = i509[10]
  i508.timeToSleep = i509[11]
  i508.linearSleepTolerance = i509[12]
  i508.angularSleepTolerance = i509[13]
  i508.defaultContactOffset = i509[14]
  i508.autoSimulation = !!i509[15]
  i508.queriesHitTriggers = !!i509[16]
  i508.queriesStartInColliders = !!i509[17]
  i508.callbacksOnDisable = !!i509[18]
  i508.reuseCollisionCallbacks = !!i509[19]
  i508.autoSyncTransforms = !!i509[20]
  var i511 = i509[21]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i511[i + 0]) );
  }
  i508.collisionMatrix = i510
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i515 = data
  i514.enabled = !!i515[0]
  i514.layerId = i515[1]
  i514.otherLayerId = i515[2]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i517 = data
  var i519 = i517[0]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i519[i + 0]) );
  }
  i516.qualityLevels = i518
  var i521 = i517[1]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( i521[i + 0] );
  }
  i516.names = i520
  i516.shadows = i517[2]
  i516.anisotropicFiltering = i517[3]
  i516.antiAliasing = i517[4]
  i516.lodBias = i517[5]
  i516.shadowCascades = i517[6]
  i516.shadowDistance = i517[7]
  i516.shadowmaskMode = i517[8]
  i516.shadowProjection = i517[9]
  i516.shadowResolution = i517[10]
  i516.softParticles = !!i517[11]
  i516.softVegetation = !!i517[12]
  i516.activeColorSpace = i517[13]
  i516.desiredColorSpace = i517[14]
  i516.masterTextureLimit = i517[15]
  i516.maxQueuedFrames = i517[16]
  i516.particleRaycastBudget = i517[17]
  i516.pixelLightCount = i517[18]
  i516.realtimeReflectionProbes = !!i517[19]
  i516.shadowCascade2Split = i517[20]
  i516.shadowCascade4Split = new pc.Vec3( i517[21], i517[22], i517[23] )
  i516.streamingMipmapsActive = !!i517[24]
  i516.vSyncCount = i517[25]
  i516.asyncUploadBufferSize = i517[26]
  i516.asyncUploadTimeSlice = i517[27]
  i516.billboardsFaceCameraPosition = !!i517[28]
  i516.shadowNearPlaneOffset = i517[29]
  i516.streamingMipmapsMemoryBudget = i517[30]
  i516.maximumLODLevel = i517[31]
  i516.streamingMipmapsAddAllCameras = !!i517[32]
  i516.streamingMipmapsMaxLevelReduction = i517[33]
  i516.streamingMipmapsRenderersPerFrame = i517[34]
  i516.resolutionScalingFixedDPIFactor = i517[35]
  i516.streamingMipmapsMaxFileIORequests = i517[36]
  i516.currentQualityLevel = i517[37]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i527 = data
  i526.weight = i527[0]
  i526.vertices = i527[1]
  i526.normals = i527[2]
  i526.tangents = i527[3]
  return i526
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"28":[29],"30":[29],"31":[29],"32":[29],"33":[29],"34":[29],"35":[36],"37":[8],"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[39],"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[47],"54":[47],"55":[47],"56":[47],"57":[47],"58":[47],"59":[47],"60":[8],"61":[22],"62":[63],"64":[63],"12":[11],"65":[11],"66":[16,11],"67":[22],"68":[16,11],"69":[11],"70":[22,11],"71":[11,16],"72":[11],"73":[11],"74":[11],"15":[12],"17":[16,11],"75":[11],"14":[12],"76":[11],"77":[11],"78":[11],"79":[11],"80":[11],"81":[11],"82":[11],"83":[11],"84":[11],"85":[16,11],"86":[11],"87":[11],"88":[11],"89":[11],"90":[16,11],"91":[11],"92":[18],"93":[18],"19":[18],"94":[18],"95":[8],"96":[8]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Brick","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","BucketCrusher1","BrickManager","UnityEngine.GameObject","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

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

Deserializers.buildID = "79c3d73d-ff89-4927-8f11-435f3b48ab39";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

