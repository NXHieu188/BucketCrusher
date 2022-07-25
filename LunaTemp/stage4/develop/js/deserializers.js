var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i348 = root || request.c( 'UnityEngine.JointSpring' )
  var i349 = data
  i348.spring = i349[0]
  i348.damper = i349[1]
  i348.targetPosition = i349[2]
  return i348
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.JointMotor' )
  var i351 = data
  i350.m_TargetVelocity = i351[0]
  i350.m_Force = i351[1]
  i350.m_FreeSpin = i351[2]
  return i350
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.JointLimits' )
  var i353 = data
  i352.m_Min = i353[0]
  i352.m_Max = i353[1]
  i352.m_Bounciness = i353[2]
  i352.m_BounceMinVelocity = i353[3]
  i352.m_ContactDistance = i353[4]
  i352.minBounce = i353[5]
  i352.maxBounce = i353[6]
  return i352
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.JointDrive' )
  var i355 = data
  i354.m_PositionSpring = i355[0]
  i354.m_PositionDamper = i355[1]
  i354.m_MaximumForce = i355[2]
  return i354
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i357 = data
  i356.m_Spring = i357[0]
  i356.m_Damper = i357[1]
  return i356
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i359 = data
  i358.m_Limit = i359[0]
  i358.m_Bounciness = i359[1]
  i358.m_ContactDistance = i359[2]
  return i358
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i361 = data
  i360.m_ExtremumSlip = i361[0]
  i360.m_ExtremumValue = i361[1]
  i360.m_AsymptoteSlip = i361[2]
  i360.m_AsymptoteValue = i361[3]
  i360.m_Stiffness = i361[4]
  return i360
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i362 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i363 = data
  i362.m_LowerAngle = i363[0]
  i362.m_UpperAngle = i363[1]
  return i362
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i365 = data
  i364.m_MotorSpeed = i365[0]
  i364.m_MaximumMotorTorque = i365[1]
  return i364
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i367 = data
  i366.m_DampingRatio = i367[0]
  i366.m_Frequency = i367[1]
  i366.m_Angle = i367[2]
  return i366
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i369 = data
  i368.m_LowerTranslation = i369[0]
  i368.m_UpperTranslation = i369[1]
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i370 = root || new pc.UnityMaterial()
  var i371 = data
  i370.name = i371[0]
  request.r(i371[1], i371[2], 0, i370, 'shader')
  i370.renderQueue = i371[3]
  i370.enableInstancing = !!i371[4]
  var i373 = i371[5]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i373[i + 0]) );
  }
  i370.floatParameters = i372
  var i375 = i371[6]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i375[i + 0]) );
  }
  i370.colorParameters = i374
  var i377 = i371[7]
  var i376 = []
  for(var i = 0; i < i377.length; i += 1) {
    i376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i377[i + 0]) );
  }
  i370.vectorParameters = i376
  var i379 = i371[8]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i379[i + 0]) );
  }
  i370.textureParameters = i378
  var i381 = i371[9]
  var i380 = []
  for(var i = 0; i < i381.length; i += 1) {
    i380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i381[i + 0]) );
  }
  i370.materialFlags = i380
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i385 = data
  i384.name = i385[0]
  i384.value = i385[1]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i389 = data
  i388.name = i389[0]
  i388.value = new pc.Color(i389[1], i389[2], i389[3], i389[4])
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i393 = data
  i392.name = i393[0]
  i392.value = new pc.Vec4( i393[1], i393[2], i393[3], i393[4] )
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i397 = data
  i396.name = i397[0]
  request.r(i397[1], i397[2], 0, i396, 'value')
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i401 = data
  i400.name = i401[0]
  i400.enabled = !!i401[1]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i403 = data
  i402.name = i403[0]
  i402.width = i403[1]
  i402.height = i403[2]
  i402.mipmapCount = i403[3]
  i402.anisoLevel = i403[4]
  i402.filterMode = i403[5]
  i402.hdr = !!i403[6]
  i402.format = i403[7]
  i402.wrapMode = i403[8]
  i402.alphaIsTransparency = !!i403[9]
  i402.alphaSource = i403[10]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i405 = data
  i404.name = i405[0]
  i404.halfPrecision = !!i405[1]
  i404.vertexCount = i405[2]
  i404.aabb = i405[3]
  var i407 = i405[4]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( !!i407[i + 0] );
  }
  i404.streams = i406
  i404.vertices = i405[5]
  var i409 = i405[6]
  var i408 = []
  for(var i = 0; i < i409.length; i += 1) {
    i408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i409[i + 0]) );
  }
  i404.subMeshes = i408
  var i411 = i405[7]
  var i410 = []
  for(var i = 0; i < i411.length; i += 16) {
    i410.push( new pc.Mat4().setData(i411[i + 0], i411[i + 1], i411[i + 2], i411[i + 3],  i411[i + 4], i411[i + 5], i411[i + 6], i411[i + 7],  i411[i + 8], i411[i + 9], i411[i + 10], i411[i + 11],  i411[i + 12], i411[i + 13], i411[i + 14], i411[i + 15]) );
  }
  i404.bindposes = i410
  var i413 = i405[8]
  var i412 = []
  for(var i = 0; i < i413.length; i += 1) {
    i412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i413[i + 0]) );
  }
  i404.blendShapes = i412
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i419 = data
  i418.triangles = i419[0]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i425 = data
  i424.name = i425[0]
  var i427 = i425[1]
  var i426 = []
  for(var i = 0; i < i427.length; i += 1) {
    i426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i427[i + 0]) );
  }
  i424.frames = i426
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i429 = data
  i428.position = new pc.Vec3( i429[0], i429[1], i429[2] )
  i428.scale = new pc.Vec3( i429[3], i429[4], i429[5] )
  i428.rotation = new pc.Quat(i429[6], i429[7], i429[8], i429[9])
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i431 = data
  i430.enabled = !!i431[0]
  request.r(i431[1], i431[2], 0, i430, 'sharedMaterial')
  var i433 = i431[3]
  var i432 = []
  for(var i = 0; i < i433.length; i += 2) {
  request.r(i433[i + 0], i433[i + 1], 2, i432, '')
  }
  i430.sharedMaterials = i432
  i430.receiveShadows = !!i431[4]
  i430.shadowCastingMode = i431[5]
  i430.sortingLayerID = i431[6]
  i430.sortingOrder = i431[7]
  i430.lightmapIndex = i431[8]
  i430.lightmapSceneIndex = i431[9]
  i430.lightmapScaleOffset = new pc.Vec4( i431[10], i431[11], i431[12], i431[13] )
  i430.lightProbeUsage = i431[14]
  i430.reflectionProbeUsage = i431[15]
  i430.color = new pc.Color(i431[16], i431[17], i431[18], i431[19])
  request.r(i431[20], i431[21], 0, i430, 'sprite')
  i430.flipX = !!i431[22]
  i430.flipY = !!i431[23]
  i430.drawMode = i431[24]
  i430.size = new pc.Vec2( i431[25], i431[26] )
  i430.tileMode = i431[27]
  i430.adaptiveModeThreshold = i431[28]
  i430.maskInteraction = i431[29]
  i430.spriteSortPoint = i431[30]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i437 = data
  i436.usedByComposite = !!i437[0]
  i436.autoTiling = !!i437[1]
  i436.size = new pc.Vec2( i437[2], i437[3] )
  i436.edgeRadius = i437[4]
  i436.enabled = !!i437[5]
  i436.isTrigger = !!i437[6]
  i436.usedByEffector = !!i437[7]
  i436.density = i437[8]
  i436.offset = new pc.Vec2( i437[9], i437[10] )
  request.r(i437[11], i437[12], 0, i436, 'material')
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i439 = data
  i438.bodyType = i439[0]
  request.r(i439[1], i439[2], 0, i438, 'material')
  i438.simulated = !!i439[3]
  i438.useAutoMass = !!i439[4]
  i438.mass = i439[5]
  i438.drag = i439[6]
  i438.angularDrag = i439[7]
  i438.gravityScale = i439[8]
  i438.collisionDetectionMode = i439[9]
  i438.sleepMode = i439[10]
  i438.constraints = i439[11]
  return i438
}

Deserializers["Brick"] = function (request, data, root) {
  var i440 = root || request.c( 'Brick' )
  var i441 = data
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i443 = data
  i442.name = i443[0]
  i442.tag = i443[1]
  i442.enabled = !!i443[2]
  i442.isStatic = !!i443[3]
  i442.layer = i443[4]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i445 = data
  i444.name = i445[0]
  i444.atlasId = i445[1]
  i444.mipmapCount = i445[2]
  i444.hdr = !!i445[3]
  i444.size = i445[4]
  i444.anisoLevel = i445[5]
  i444.filterMode = i445[6]
  i444.wrapMode = i445[7]
  var i447 = i445[8]
  var i446 = []
  for(var i = 0; i < i447.length; i += 4) {
    i446.push( UnityEngine.Rect.MinMaxRect(i447[i + 0], i447[i + 1], i447[i + 2], i447[i + 3]) );
  }
  i444.rects = i446
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i451 = data
  i450.name = i451[0]
  i450.index = i451[1]
  i450.startup = !!i451[2]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i453 = data
  i452.enabled = !!i453[0]
  i452.aspect = i453[1]
  i452.orthographic = !!i453[2]
  i452.orthographicSize = i453[3]
  i452.backgroundColor = new pc.Color(i453[4], i453[5], i453[6], i453[7])
  i452.nearClipPlane = i453[8]
  i452.farClipPlane = i453[9]
  i452.fieldOfView = i453[10]
  i452.depth = i453[11]
  i452.clearFlags = i453[12]
  i452.cullingMask = i453[13]
  i452.rect = i453[14]
  request.r(i453[15], i453[16], 0, i452, 'targetTexture')
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i455 = data
  i454.enabled = !!i455[0]
  i454.type = i455[1]
  i454.color = new pc.Color(i455[2], i455[3], i455[4], i455[5])
  i454.cullingMask = i455[6]
  i454.intensity = i455[7]
  i454.range = i455[8]
  i454.spotAngle = i455[9]
  i454.shadows = i455[10]
  i454.shadowNormalBias = i455[11]
  i454.shadowBias = i455[12]
  i454.shadowStrength = i455[13]
  i454.lightmapBakeType = i455[14]
  i454.renderMode = i455[15]
  request.r(i455[16], i455[17], 0, i454, 'cookie')
  i454.cookieSize = i455[18]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i457 = data
  i456.pivot = new pc.Vec2( i457[0], i457[1] )
  i456.anchorMin = new pc.Vec2( i457[2], i457[3] )
  i456.anchorMax = new pc.Vec2( i457[4], i457[5] )
  i456.sizeDelta = new pc.Vec2( i457[6], i457[7] )
  i456.anchoredPosition3D = new pc.Vec3( i457[8], i457[9], i457[10] )
  i456.rotation = new pc.Quat(i457[11], i457[12], i457[13], i457[14])
  i456.scale = new pc.Vec3( i457[15], i457[16], i457[17] )
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i459 = data
  i458.enabled = !!i459[0]
  i458.planeDistance = i459[1]
  i458.referencePixelsPerUnit = i459[2]
  i458.isFallbackOverlay = !!i459[3]
  i458.renderMode = i459[4]
  i458.renderOrder = i459[5]
  i458.sortingLayerName = i459[6]
  i458.sortingOrder = i459[7]
  i458.scaleFactor = i459[8]
  request.r(i459[9], i459[10], 0, i458, 'worldCamera')
  i458.overrideSorting = !!i459[11]
  i458.pixelPerfect = !!i459[12]
  i458.targetDisplay = i459[13]
  i458.overridePixelPerfect = !!i459[14]
  return i458
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i461 = data
  i460.m_UiScaleMode = i461[0]
  i460.m_ReferencePixelsPerUnit = i461[1]
  i460.m_ScaleFactor = i461[2]
  i460.m_ReferenceResolution = new pc.Vec2( i461[3], i461[4] )
  i460.m_ScreenMatchMode = i461[5]
  i460.m_MatchWidthOrHeight = i461[6]
  i460.m_PhysicalUnit = i461[7]
  i460.m_FallbackScreenDPI = i461[8]
  i460.m_DefaultSpriteDPI = i461[9]
  i460.m_DynamicPixelsPerUnit = i461[10]
  i460.m_PresetInfoIsWorld = !!i461[11]
  return i460
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i463 = data
  i462.m_IgnoreReversedGraphics = !!i463[0]
  i462.m_BlockingObjects = i463[1]
  i462.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i463[2] )
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i465 = data
  i464.cullTransparentMesh = !!i465[0]
  return i464
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.UI.Image' )
  var i467 = data
  request.r(i467[0], i467[1], 0, i466, 'm_Sprite')
  i466.m_Type = i467[2]
  i466.m_PreserveAspect = !!i467[3]
  i466.m_FillCenter = !!i467[4]
  i466.m_FillMethod = i467[5]
  i466.m_FillAmount = i467[6]
  i466.m_FillClockwise = !!i467[7]
  i466.m_FillOrigin = i467[8]
  i466.m_UseSpriteMesh = !!i467[9]
  i466.m_PixelsPerUnitMultiplier = i467[10]
  request.r(i467[11], i467[12], 0, i466, 'm_Material')
  i466.m_Maskable = !!i467[13]
  i466.m_Color = new pc.Color(i467[14], i467[15], i467[16], i467[17])
  i466.m_RaycastTarget = !!i467[18]
  i466.m_RaycastPadding = new pc.Vec4( i467[19], i467[20], i467[21], i467[22] )
  return i466
}

Deserializers["UltimateJoystick"] = function (request, data, root) {
  var i468 = root || request.c( 'UltimateJoystick' )
  var i469 = data
  request.r(i469[0], i469[1], 0, i468, 'joystick')
  request.r(i469[2], i469[3], 0, i468, 'joystickSizeFolder')
  request.r(i469[4], i469[5], 0, i468, 'joystickBase')
  request.r(i469[6], i469[7], 0, i468, 'highlightBase')
  request.r(i469[8], i469[9], 0, i468, 'highlightJoystick')
  request.r(i469[10], i469[11], 0, i468, 'tensionAccentUp')
  request.r(i469[12], i469[13], 0, i468, 'tensionAccentDown')
  request.r(i469[14], i469[15], 0, i468, 'tensionAccentLeft')
  request.r(i469[16], i469[17], 0, i468, 'tensionAccentRight')
  i468.scalingAxis = i469[18]
  i468.anchor = i469[19]
  i468.joystickTouchSize = i469[20]
  i468.joystickSize = i469[21]
  i468.radiusModifier = i469[22]
  i468.dynamicPositioning = !!i469[23]
  i468.customTouchSize_X = i469[24]
  i468.customTouchSize_Y = i469[25]
  i468.customTouchSizePos_X = i469[26]
  i468.customTouchSizePos_Y = i469[27]
  i468.customSpacing_X = i469[28]
  i468.customSpacing_Y = i469[29]
  i468.gravity = i469[30]
  i468.extendRadius = !!i469[31]
  i468.axis = i469[32]
  i468.boundary = i469[33]
  i468.tapCountOption = i469[34]
  i468.tapCountDuration = i469[35]
  i468.targetTapCount = i469[36]
  i468.deadZone = i469[37]
  i468.disableVisuals = !!i469[38]
  i468.useFade = !!i469[39]
  i468.fadeUntouched = i469[40]
  i468.fadeTouched = i469[41]
  i468.fadeInDuration = i469[42]
  i468.fadeOutDuration = i469[43]
  i468.useAnimation = !!i469[44]
  request.r(i469[45], i469[46], 0, i468, 'joystickAnimator')
  i468.showHighlight = !!i469[47]
  i468.highlightColor = new pc.Color(i469[48], i469[49], i469[50], i469[51])
  i468.showTension = !!i469[52]
  i468.tensionColorNone = new pc.Color(i469[53], i469[54], i469[55], i469[56])
  i468.tensionColorFull = new pc.Color(i469[57], i469[58], i469[59], i469[60])
  i468.joystickName = i469[61]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i471 = data
  request.r(i471[0], i471[1], 0, i470, 'animatorController')
  i470.updateMode = i471[2]
  var i473 = i471[3]
  var i472 = []
  for(var i = 0; i < i473.length; i += 2) {
  request.r(i473[i + 0], i473[i + 1], 2, i472, '')
  }
  i470.humanBones = i472
  i470.enabled = !!i471[4]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i477 = data
  i476.m_Alpha = i477[0]
  i476.m_Interactable = !!i477[1]
  i476.m_BlocksRaycasts = !!i477[2]
  i476.m_IgnoreParentGroups = !!i477[3]
  i476.enabled = !!i477[4]
  return i476
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i479 = data
  request.r(i479[0], i479[1], 0, i478, 'm_FirstSelected')
  i478.m_sendNavigationEvents = !!i479[2]
  i478.m_DragThreshold = i479[3]
  return i478
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i481 = data
  i480.m_HorizontalAxis = i481[0]
  i480.m_VerticalAxis = i481[1]
  i480.m_SubmitButton = i481[2]
  i480.m_CancelButton = i481[3]
  i480.m_InputActionsPerSecond = i481[4]
  i480.m_RepeatDelay = i481[5]
  i480.m_ForceModuleActive = !!i481[6]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i483 = data
  request.r(i483[0], i483[1], 0, i482, 'sharedMesh')
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i485 = data
  request.r(i485[0], i485[1], 0, i484, 'additionalVertexStreams')
  i484.enabled = !!i485[2]
  request.r(i485[3], i485[4], 0, i484, 'sharedMaterial')
  var i487 = i485[5]
  var i486 = []
  for(var i = 0; i < i487.length; i += 2) {
  request.r(i487[i + 0], i487[i + 1], 2, i486, '')
  }
  i484.sharedMaterials = i486
  i484.receiveShadows = !!i485[6]
  i484.shadowCastingMode = i485[7]
  i484.sortingLayerID = i485[8]
  i484.sortingOrder = i485[9]
  i484.lightmapIndex = i485[10]
  i484.lightmapSceneIndex = i485[11]
  i484.lightmapScaleOffset = new pc.Vec4( i485[12], i485[13], i485[14], i485[15] )
  i484.lightProbeUsage = i485[16]
  i484.reflectionProbeUsage = i485[17]
  return i484
}

Deserializers["BucketCrusher1"] = function (request, data, root) {
  var i488 = root || request.c( 'BucketCrusher1' )
  var i489 = data
  return i488
}

Deserializers["BrickManager"] = function (request, data, root) {
  var i490 = root || request.c( 'BrickManager' )
  var i491 = data
  request.r(i491[0], i491[1], 0, i490, 'imageLoader')
  request.r(i491[2], i491[3], 0, i490, 'brickPrefab')
  request.r(i491[4], i491[5], 0, i490, 'brickHolder')
  i490.brickSize = i491[6]
  i490.brickHealth = i491[7]
  i490.xOffset = i491[8]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i493 = data
  i492.ambientIntensity = i493[0]
  i492.reflectionIntensity = i493[1]
  i492.ambientMode = i493[2]
  i492.ambientLight = new pc.Color(i493[3], i493[4], i493[5], i493[6])
  i492.ambientSkyColor = new pc.Color(i493[7], i493[8], i493[9], i493[10])
  i492.ambientGroundColor = new pc.Color(i493[11], i493[12], i493[13], i493[14])
  i492.ambientEquatorColor = new pc.Color(i493[15], i493[16], i493[17], i493[18])
  i492.fogColor = new pc.Color(i493[19], i493[20], i493[21], i493[22])
  i492.fogEndDistance = i493[23]
  i492.fogStartDistance = i493[24]
  i492.fogDensity = i493[25]
  i492.fog = !!i493[26]
  request.r(i493[27], i493[28], 0, i492, 'skybox')
  i492.fogMode = i493[29]
  var i495 = i493[30]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i495[i + 0]) );
  }
  i492.lightmaps = i494
  i492.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i493[31], i492.lightProbes)
  i492.lightmapsMode = i493[32]
  i492.environmentLightingMode = i493[33]
  i492.ambientProbe = new pc.SphericalHarmonicsL2(i493[34])
  request.r(i493[35], i493[36], 0, i492, 'customReflection')
  request.r(i493[37], i493[38], 0, i492, 'defaultReflection')
  i492.defaultReflectionMode = i493[39]
  i492.defaultReflectionResolution = i493[40]
  i492.sunLightObjectId = i493[41]
  i492.pixelLightCount = i493[42]
  i492.defaultReflectionHDR = !!i493[43]
  i492.hasLightDataAsset = !!i493[44]
  i492.hasManualGenerate = !!i493[45]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i499 = data
  request.r(i499[0], i499[1], 0, i498, 'lightmapColor')
  request.r(i499[2], i499[3], 0, i498, 'lightmapDirection')
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i500 = root || new UnityEngine.LightProbes()
  var i501 = data
  return i500
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i508 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i509 = data
  i508.useSafeMode = !!i509[0]
  i508.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i509[1], i508.safeModeOptions)
  i508.timeScale = i509[2]
  i508.useSmoothDeltaTime = !!i509[3]
  i508.maxSmoothUnscaledTime = i509[4]
  i508.rewindCallbackMode = i509[5]
  i508.showUnityEditorReport = !!i509[6]
  i508.logBehaviour = i509[7]
  i508.drawGizmos = !!i509[8]
  i508.defaultRecyclable = !!i509[9]
  i508.defaultAutoPlay = i509[10]
  i508.defaultUpdateType = i509[11]
  i508.defaultTimeScaleIndependent = !!i509[12]
  i508.defaultEaseType = i509[13]
  i508.defaultEaseOvershootOrAmplitude = i509[14]
  i508.defaultEasePeriod = i509[15]
  i508.defaultAutoKill = !!i509[16]
  i508.defaultLoopType = i509[17]
  i508.debugMode = !!i509[18]
  i508.debugStoreTargetId = !!i509[19]
  i508.showPreviewPanel = !!i509[20]
  i508.storeSettingsLocation = i509[21]
  i508.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i509[22], i508.modules)
  i508.createASMDEF = !!i509[23]
  i508.showPlayingTweens = !!i509[24]
  i508.showPausedTweens = !!i509[25]
  return i508
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i510 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i511 = data
  i510.logBehaviour = i511[0]
  i510.nestedTweenFailureBehaviour = i511[1]
  return i510
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i512 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i513 = data
  i512.showPanel = !!i513[0]
  i512.audioEnabled = !!i513[1]
  i512.physicsEnabled = !!i513[2]
  i512.physics2DEnabled = !!i513[3]
  i512.spriteEnabled = !!i513[4]
  i512.uiEnabled = !!i513[5]
  i512.textMeshProEnabled = !!i513[6]
  i512.tk2DEnabled = !!i513[7]
  i512.deAudioEnabled = !!i513[8]
  i512.deUnityExtendedEnabled = !!i513[9]
  i512.epoOutlineEnabled = !!i513[10]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i515 = data
  var i517 = i515[0]
  var i516 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i517.length; i += 1) {
    i516.add(i517[i + 0]);
  }
  i514.invalidShaderVariants = i516
  i514.name = i515[1]
  i514.guid = i515[2]
  var i519 = i515[3]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( i519[i + 0] );
  }
  i514.shaderDefinedKeywords = i518
  var i521 = i515[4]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i521[i + 0]) );
  }
  i514.passes = i520
  var i523 = i515[5]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i523[i + 0]) );
  }
  i514.usePasses = i522
  var i525 = i515[6]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i525[i + 0]) );
  }
  i514.defaultParameterValues = i524
  request.r(i515[7], i515[8], 0, i514, 'unityFallbackShader')
  i514.readDepth = !!i515[9]
  i514.isCreatedByShaderGraph = !!i515[10]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i532 = root || new pc.UnityShaderPass()
  var i533 = data
  i532.id = i533[0]
  i532.subShaderIndex = i533[1]
  i532.name = i533[2]
  i532.passType = i533[3]
  i532.usePass = !!i533[4]
  i532.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i533[5], i532.zTest)
  i532.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i533[6], i532.zWrite)
  i532.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i533[7], i532.culling)
  i532.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i533[8], i532.blending)
  i532.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i533[9], i532.alphaBlending)
  i532.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i533[10], i532.colorWriteMask)
  i532.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i533[11], i532.offsetUnits)
  i532.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i533[12], i532.offsetFactor)
  i532.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i533[13], i532.stencilRef)
  i532.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i533[14], i532.stencilReadMask)
  i532.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i533[15], i532.stencilWriteMask)
  i532.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i533[16], i532.stencilOp)
  i532.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i533[17], i532.stencilOpFront)
  i532.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i533[18], i532.stencilOpBack)
  var i535 = i533[19]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i535[i + 0]) );
  }
  i532.tags = i534
  var i537 = i533[20]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( i537[i + 0] );
  }
  i532.passDefinedKeywords = i536
  var i539 = i533[21]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i539[i + 0]) );
  }
  i532.variants = i538
  var i541 = i533[22]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i541[i + 0]) );
  }
  i532.excludedVariants = i540
  i532.hasDepthReader = !!i533[23]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i543 = data
  i542.val = i543[0]
  i542.name = i543[1]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i545 = data
  i544.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i545[0], i544.src)
  i544.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i545[1], i544.dst)
  i544.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i545[2], i544.op)
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i547 = data
  i546.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i547[0], i546.pass)
  i546.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i547[1], i546.fail)
  i546.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i547[2], i546.zFail)
  i546.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i547[3], i546.comp)
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i551 = data
  i550.name = i551[0]
  i550.value = i551[1]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i555 = data
  i554.passId = i555[0]
  i554.subShaderIndex = i555[1]
  var i557 = i555[2]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( i557[i + 0] );
  }
  i554.keywords = i556
  i554.vertexProgram = i555[3]
  i554.fragmentProgram = i555[4]
  i554.readDepth = !!i555[5]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'shader')
  i560.pass = i561[2]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i565 = data
  i564.name = i565[0]
  i564.type = i565[1]
  i564.value = new pc.Vec4( i565[2], i565[3], i565[4], i565[5] )
  i564.textureValue = i565[6]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i567 = data
  i566.name = i567[0]
  request.r(i567[1], i567[2], 0, i566, 'texture')
  i566.aabb = i567[3]
  i566.vertices = i567[4]
  i566.triangles = i567[5]
  i566.textureRect = UnityEngine.Rect.MinMaxRect(i567[6], i567[7], i567[8], i567[9])
  i566.packedRect = UnityEngine.Rect.MinMaxRect(i567[10], i567[11], i567[12], i567[13])
  i566.border = new pc.Vec4( i567[14], i567[15], i567[16], i567[17] )
  i566.transparency = i567[18]
  i566.bounds = i567[19]
  i566.pixelsPerUnit = i567[20]
  i566.textureWidth = i567[21]
  i566.textureHeight = i567[22]
  i566.nativeSize = new pc.Vec2( i567[23], i567[24] )
  i566.pivot = new pc.Vec2( i567[25], i567[26] )
  i566.textureRectOffset = new pc.Vec2( i567[27], i567[28] )
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i569 = data
  i568.name = i569[0]
  i568.wrapMode = i569[1]
  i568.isLooping = !!i569[2]
  i568.length = i569[3]
  var i571 = i569[4]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i571[i + 0]) );
  }
  i568.curves = i570
  var i573 = i569[5]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i573[i + 0]) );
  }
  i568.events = i572
  i568.halfPrecision = !!i569[6]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i577 = data
  i576.path = i577[0]
  i576.componentType = i577[1]
  i576.property = i577[2]
  i576.keys = i577[3]
  var i579 = i577[4]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i579[i + 0]) );
  }
  i576.objectReferenceKeys = i578
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i583 = data
  i582.functionName = i583[0]
  i582.floatParameter = i583[1]
  i582.intParameter = i583[2]
  i582.stringParameter = i583[3]
  request.r(i583[4], i583[5], 0, i582, 'objectReferenceParameter')
  i582.time = i583[6]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i587 = data
  i586.time = i587[0]
  request.r(i587[1], i587[2], 0, i586, 'value')
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i589 = data
  i588.name = i589[0]
  var i591 = i589[1]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i591[i + 0]) );
  }
  i588.states = i590
  var i593 = i589[2]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i593[i + 0]) );
  }
  i588.layers = i592
  var i595 = i589[3]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i595[i + 0]) );
  }
  i588.parameters = i594
  var i597 = i589[4]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( i597[i + 0] );
  }
  i588.animationClips = i596
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i601 = data
  i600.cycleOffset = i601[0]
  i600.cycleOffsetParameter = i601[1]
  i600.cycleOffsetParameterActive = !!i601[2]
  i600.mirror = !!i601[3]
  i600.mirrorParameter = i601[4]
  i600.mirrorParameterActive = !!i601[5]
  i600.motionId = i601[6]
  i600.nameHash = i601[7]
  i600.fullPathHash = i601[8]
  i600.speed = i601[9]
  i600.speedParameter = i601[10]
  i600.speedParameterActive = !!i601[11]
  i600.tag = i601[12]
  i600.name = i601[13]
  i600.writeDefaultValues = !!i601[14]
  var i603 = i601[15]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i603[i + 0]) );
  }
  i600.transitions = i602
  var i605 = i601[16]
  var i604 = []
  for(var i = 0; i < i605.length; i += 2) {
  request.r(i605[i + 0], i605[i + 1], 2, i604, '')
  }
  i600.behaviours = i604
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i609 = data
  i608.fullPath = i609[0]
  i608.canTransitionToSelf = !!i609[1]
  i608.duration = i609[2]
  i608.exitTime = i609[3]
  i608.hasExitTime = !!i609[4]
  i608.hasFixedDuration = !!i609[5]
  i608.interruptionSource = i609[6]
  i608.offset = i609[7]
  i608.orderedInterruption = !!i609[8]
  i608.destinationStateNameHash = i609[9]
  i608.destinationStateMachineId = i609[10]
  i608.isExit = !!i609[11]
  i608.mute = !!i609[12]
  i608.solo = !!i609[13]
  var i611 = i609[14]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i611[i + 0]) );
  }
  i608.conditions = i610
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i615 = data
  i614.mode = i615[0]
  i614.parameter = i615[1]
  i614.threshold = i615[2]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i621 = data
  i620.blendingMode = i621[0]
  i620.defaultWeight = i621[1]
  i620.name = i621[2]
  i620.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i621[3], i620.stateMachine)
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i623 = data
  i622.id = i623[0]
  i622.defaultStateNameHash = i623[1]
  var i625 = i623[2]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i625[i + 0]) );
  }
  i622.entryTransitions = i624
  var i627 = i623[3]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i627[i + 0]) );
  }
  i622.anyStateTransitions = i626
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i631 = data
  i630.destinationStateNameHash = i631[0]
  i630.destinationStateMachineId = i631[1]
  i630.isExit = !!i631[2]
  i630.mute = !!i631[3]
  i630.solo = !!i631[4]
  var i633 = i631[5]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i633[i + 0]) );
  }
  i630.conditions = i632
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i637 = data
  i636.defaultBool = !!i637[0]
  i636.defaultFloat = i637[1]
  i636.defaultInt = i637[2]
  i636.name = i637[3]
  i636.nameHash = i637[4]
  i636.type = i637[5]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i639 = data
  var i641 = i639[0]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i641[i + 0]) );
  }
  i638.files = i640
  i638.componentToPrefabIds = i639[1]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i645 = data
  i644.path = i645[0]
  request.r(i645[1], i645[2], 0, i644, 'unityObject')
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i647 = data
  var i649 = i647[0]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i649[i + 0]) );
  }
  i646.scriptsExecutionOrder = i648
  var i651 = i647[1]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i651[i + 0]) );
  }
  i646.sortingLayers = i650
  var i653 = i647[2]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i653[i + 0]) );
  }
  i646.cullingLayers = i652
  i646.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i647[3], i646.timeSettings)
  i646.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i647[4], i646.physicsSettings)
  i646.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i647[5], i646.physics2DSettings)
  i646.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i647[6], i646.qualitySettings)
  i646.removeShadows = !!i647[7]
  i646.autoInstantiatePrefabs = !!i647[8]
  i646.enableAutoInstancing = !!i647[9]
  i646.lightmapEncodingQuality = i647[10]
  i646.desiredColorSpace = i647[11]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i657 = data
  i656.name = i657[0]
  i656.value = i657[1]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i661 = data
  i660.id = i661[0]
  i660.name = i661[1]
  i660.value = i661[2]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i665 = data
  i664.id = i665[0]
  i664.name = i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i667 = data
  i666.fixedDeltaTime = i667[0]
  i666.maximumDeltaTime = i667[1]
  i666.timeScale = i667[2]
  i666.maximumParticleTimestep = i667[3]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i669 = data
  i668.gravity = new pc.Vec3( i669[0], i669[1], i669[2] )
  i668.defaultSolverIterations = i669[3]
  i668.bounceThreshold = i669[4]
  i668.autoSyncTransforms = !!i669[5]
  i668.autoSimulation = !!i669[6]
  var i671 = i669[7]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i671[i + 0]) );
  }
  i668.collisionMatrix = i670
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i675 = data
  i674.enabled = !!i675[0]
  i674.layerId = i675[1]
  i674.otherLayerId = i675[2]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'material')
  i676.gravity = new pc.Vec2( i677[2], i677[3] )
  i676.positionIterations = i677[4]
  i676.velocityIterations = i677[5]
  i676.velocityThreshold = i677[6]
  i676.maxLinearCorrection = i677[7]
  i676.maxAngularCorrection = i677[8]
  i676.maxTranslationSpeed = i677[9]
  i676.maxRotationSpeed = i677[10]
  i676.timeToSleep = i677[11]
  i676.linearSleepTolerance = i677[12]
  i676.angularSleepTolerance = i677[13]
  i676.defaultContactOffset = i677[14]
  i676.autoSimulation = !!i677[15]
  i676.queriesHitTriggers = !!i677[16]
  i676.queriesStartInColliders = !!i677[17]
  i676.callbacksOnDisable = !!i677[18]
  i676.reuseCollisionCallbacks = !!i677[19]
  i676.autoSyncTransforms = !!i677[20]
  var i679 = i677[21]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i679[i + 0]) );
  }
  i676.collisionMatrix = i678
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i683 = data
  i682.enabled = !!i683[0]
  i682.layerId = i683[1]
  i682.otherLayerId = i683[2]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i685 = data
  var i687 = i685[0]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i687[i + 0]) );
  }
  i684.qualityLevels = i686
  var i689 = i685[1]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( i689[i + 0] );
  }
  i684.names = i688
  i684.shadows = i685[2]
  i684.anisotropicFiltering = i685[3]
  i684.antiAliasing = i685[4]
  i684.lodBias = i685[5]
  i684.shadowCascades = i685[6]
  i684.shadowDistance = i685[7]
  i684.shadowmaskMode = i685[8]
  i684.shadowProjection = i685[9]
  i684.shadowResolution = i685[10]
  i684.softParticles = !!i685[11]
  i684.softVegetation = !!i685[12]
  i684.activeColorSpace = i685[13]
  i684.desiredColorSpace = i685[14]
  i684.masterTextureLimit = i685[15]
  i684.maxQueuedFrames = i685[16]
  i684.particleRaycastBudget = i685[17]
  i684.pixelLightCount = i685[18]
  i684.realtimeReflectionProbes = !!i685[19]
  i684.shadowCascade2Split = i685[20]
  i684.shadowCascade4Split = new pc.Vec3( i685[21], i685[22], i685[23] )
  i684.streamingMipmapsActive = !!i685[24]
  i684.vSyncCount = i685[25]
  i684.asyncUploadBufferSize = i685[26]
  i684.asyncUploadTimeSlice = i685[27]
  i684.billboardsFaceCameraPosition = !!i685[28]
  i684.shadowNearPlaneOffset = i685[29]
  i684.streamingMipmapsMemoryBudget = i685[30]
  i684.maximumLODLevel = i685[31]
  i684.streamingMipmapsAddAllCameras = !!i685[32]
  i684.streamingMipmapsMaxLevelReduction = i685[33]
  i684.streamingMipmapsRenderersPerFrame = i685[34]
  i684.resolutionScalingFixedDPIFactor = i685[35]
  i684.streamingMipmapsMaxFileIORequests = i685[36]
  i684.currentQualityLevel = i685[37]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i695 = data
  i694.weight = i695[0]
  i694.vertices = i695[1]
  i694.normals = i695[2]
  i694.tangents = i695[3]
  return i694
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"34":[35],"36":[35],"37":[35],"38":[35],"39":[35],"40":[35],"41":[42],"43":[10],"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[45],"52":[7],"53":[7],"54":[7],"55":[7],"56":[7],"57":[7],"58":[7],"59":[7],"60":[7],"61":[7],"62":[7],"63":[7],"64":[7],"65":[10],"66":[28],"67":[68],"69":[68],"14":[13],"70":[13],"71":[18,13],"72":[28],"73":[18,13],"74":[13],"75":[28,13],"76":[13,18],"77":[13],"78":[13],"79":[13],"17":[14],"19":[18,13],"80":[13],"16":[14],"81":[13],"82":[13],"83":[13],"84":[13],"85":[13],"86":[13],"87":[13],"88":[13],"89":[13],"90":[18,13],"91":[13],"92":[13],"93":[13],"94":[13],"95":[18,13],"96":[13],"97":[24],"98":[24],"25":[24],"99":[24],"100":[10],"101":[10]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","Brick","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UltimateJoystick","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","BucketCrusher1","BrickManager","UnityEngine.GameObject","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

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

Deserializers.buildID = "8b683984-3a2a-4fe8-a207-6ca5b6ccf6b3";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

