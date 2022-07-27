var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.JointSpring' )
  var i395 = data
  i394.spring = i395[0]
  i394.damper = i395[1]
  i394.targetPosition = i395[2]
  return i394
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.JointMotor' )
  var i397 = data
  i396.m_TargetVelocity = i397[0]
  i396.m_Force = i397[1]
  i396.m_FreeSpin = i397[2]
  return i396
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.JointLimits' )
  var i399 = data
  i398.m_Min = i399[0]
  i398.m_Max = i399[1]
  i398.m_Bounciness = i399[2]
  i398.m_BounceMinVelocity = i399[3]
  i398.m_ContactDistance = i399[4]
  i398.minBounce = i399[5]
  i398.maxBounce = i399[6]
  return i398
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.JointDrive' )
  var i401 = data
  i400.m_PositionSpring = i401[0]
  i400.m_PositionDamper = i401[1]
  i400.m_MaximumForce = i401[2]
  return i400
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i403 = data
  i402.m_Spring = i403[0]
  i402.m_Damper = i403[1]
  return i402
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i404 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i405 = data
  i404.m_Limit = i405[0]
  i404.m_Bounciness = i405[1]
  i404.m_ContactDistance = i405[2]
  return i404
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i407 = data
  i406.m_ExtremumSlip = i407[0]
  i406.m_ExtremumValue = i407[1]
  i406.m_AsymptoteSlip = i407[2]
  i406.m_AsymptoteValue = i407[3]
  i406.m_Stiffness = i407[4]
  return i406
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i409 = data
  i408.m_LowerAngle = i409[0]
  i408.m_UpperAngle = i409[1]
  return i408
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i411 = data
  i410.m_MotorSpeed = i411[0]
  i410.m_MaximumMotorTorque = i411[1]
  return i410
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i413 = data
  i412.m_DampingRatio = i413[0]
  i412.m_Frequency = i413[1]
  i412.m_Angle = i413[2]
  return i412
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i415 = data
  i414.m_LowerTranslation = i415[0]
  i414.m_UpperTranslation = i415[1]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i416 = root || new pc.UnityMaterial()
  var i417 = data
  i416.name = i417[0]
  request.r(i417[1], i417[2], 0, i416, 'shader')
  i416.renderQueue = i417[3]
  i416.enableInstancing = !!i417[4]
  var i419 = i417[5]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i419[i + 0]) );
  }
  i416.floatParameters = i418
  var i421 = i417[6]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i421[i + 0]) );
  }
  i416.colorParameters = i420
  var i423 = i417[7]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i423[i + 0]) );
  }
  i416.vectorParameters = i422
  var i425 = i417[8]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i425[i + 0]) );
  }
  i416.textureParameters = i424
  var i427 = i417[9]
  var i426 = []
  for(var i = 0; i < i427.length; i += 1) {
    i426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i427[i + 0]) );
  }
  i416.materialFlags = i426
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i431 = data
  i430.name = i431[0]
  i430.value = i431[1]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i435 = data
  i434.name = i435[0]
  i434.value = new pc.Color(i435[1], i435[2], i435[3], i435[4])
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i439 = data
  i438.name = i439[0]
  i438.value = new pc.Vec4( i439[1], i439[2], i439[3], i439[4] )
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i443 = data
  i442.name = i443[0]
  request.r(i443[1], i443[2], 0, i442, 'value')
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i447 = data
  i446.name = i447[0]
  i446.enabled = !!i447[1]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i449 = data
  i448.name = i449[0]
  i448.width = i449[1]
  i448.height = i449[2]
  i448.mipmapCount = i449[3]
  i448.anisoLevel = i449[4]
  i448.filterMode = i449[5]
  i448.hdr = !!i449[6]
  i448.format = i449[7]
  i448.wrapMode = i449[8]
  i448.alphaIsTransparency = !!i449[9]
  i448.alphaSource = i449[10]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i451 = data
  i450.position = new pc.Vec3( i451[0], i451[1], i451[2] )
  i450.scale = new pc.Vec3( i451[3], i451[4], i451[5] )
  i450.rotation = new pc.Quat(i451[6], i451[7], i451[8], i451[9])
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i453 = data
  i452.enabled = !!i453[0]
  request.r(i453[1], i453[2], 0, i452, 'sharedMaterial')
  var i455 = i453[3]
  var i454 = []
  for(var i = 0; i < i455.length; i += 2) {
  request.r(i455[i + 0], i455[i + 1], 2, i454, '')
  }
  i452.sharedMaterials = i454
  i452.receiveShadows = !!i453[4]
  i452.shadowCastingMode = i453[5]
  i452.sortingLayerID = i453[6]
  i452.sortingOrder = i453[7]
  i452.lightmapIndex = i453[8]
  i452.lightmapSceneIndex = i453[9]
  i452.lightmapScaleOffset = new pc.Vec4( i453[10], i453[11], i453[12], i453[13] )
  i452.lightProbeUsage = i453[14]
  i452.reflectionProbeUsage = i453[15]
  i452.color = new pc.Color(i453[16], i453[17], i453[18], i453[19])
  request.r(i453[20], i453[21], 0, i452, 'sprite')
  i452.flipX = !!i453[22]
  i452.flipY = !!i453[23]
  i452.drawMode = i453[24]
  i452.size = new pc.Vec2( i453[25], i453[26] )
  i452.tileMode = i453[27]
  i452.adaptiveModeThreshold = i453[28]
  i452.maskInteraction = i453[29]
  i452.spriteSortPoint = i453[30]
  return i452
}

Deserializers["Brick"] = function (request, data, root) {
  var i458 = root || request.c( 'Brick' )
  var i459 = data
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i461 = data
  i460.name = i461[0]
  i460.tag = i461[1]
  i460.enabled = !!i461[2]
  i460.isStatic = !!i461[3]
  i460.layer = i461[4]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i463 = data
  i462.name = i463[0]
  i462.halfPrecision = !!i463[1]
  i462.vertexCount = i463[2]
  i462.aabb = i463[3]
  var i465 = i463[4]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( !!i465[i + 0] );
  }
  i462.streams = i464
  i462.vertices = i463[5]
  var i467 = i463[6]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i467[i + 0]) );
  }
  i462.subMeshes = i466
  var i469 = i463[7]
  var i468 = []
  for(var i = 0; i < i469.length; i += 16) {
    i468.push( new pc.Mat4().setData(i469[i + 0], i469[i + 1], i469[i + 2], i469[i + 3],  i469[i + 4], i469[i + 5], i469[i + 6], i469[i + 7],  i469[i + 8], i469[i + 9], i469[i + 10], i469[i + 11],  i469[i + 12], i469[i + 13], i469[i + 14], i469[i + 15]) );
  }
  i462.bindposes = i468
  var i471 = i463[8]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i471[i + 0]) );
  }
  i462.blendShapes = i470
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i477 = data
  i476.triangles = i477[0]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i483 = data
  i482.name = i483[0]
  var i485 = i483[1]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i485[i + 0]) );
  }
  i482.frames = i484
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i487 = data
  i486.name = i487[0]
  i486.atlasId = i487[1]
  i486.mipmapCount = i487[2]
  i486.hdr = !!i487[3]
  i486.size = i487[4]
  i486.anisoLevel = i487[5]
  i486.filterMode = i487[6]
  i486.wrapMode = i487[7]
  var i489 = i487[8]
  var i488 = []
  for(var i = 0; i < i489.length; i += 4) {
    i488.push( UnityEngine.Rect.MinMaxRect(i489[i + 0], i489[i + 1], i489[i + 2], i489[i + 3]) );
  }
  i486.rects = i488
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i493 = data
  i492.name = i493[0]
  i492.index = i493[1]
  i492.startup = !!i493[2]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i495 = data
  i494.enabled = !!i495[0]
  i494.aspect = i495[1]
  i494.orthographic = !!i495[2]
  i494.orthographicSize = i495[3]
  i494.backgroundColor = new pc.Color(i495[4], i495[5], i495[6], i495[7])
  i494.nearClipPlane = i495[8]
  i494.farClipPlane = i495[9]
  i494.fieldOfView = i495[10]
  i494.depth = i495[11]
  i494.clearFlags = i495[12]
  i494.cullingMask = i495[13]
  i494.rect = i495[14]
  request.r(i495[15], i495[16], 0, i494, 'targetTexture')
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i497 = data
  i496.enabled = !!i497[0]
  i496.type = i497[1]
  i496.color = new pc.Color(i497[2], i497[3], i497[4], i497[5])
  i496.cullingMask = i497[6]
  i496.intensity = i497[7]
  i496.range = i497[8]
  i496.spotAngle = i497[9]
  i496.shadows = i497[10]
  i496.shadowNormalBias = i497[11]
  i496.shadowBias = i497[12]
  i496.shadowStrength = i497[13]
  i496.lightmapBakeType = i497[14]
  i496.renderMode = i497[15]
  request.r(i497[16], i497[17], 0, i496, 'cookie')
  i496.cookieSize = i497[18]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i499 = data
  i498.pivot = new pc.Vec2( i499[0], i499[1] )
  i498.anchorMin = new pc.Vec2( i499[2], i499[3] )
  i498.anchorMax = new pc.Vec2( i499[4], i499[5] )
  i498.sizeDelta = new pc.Vec2( i499[6], i499[7] )
  i498.anchoredPosition3D = new pc.Vec3( i499[8], i499[9], i499[10] )
  i498.rotation = new pc.Quat(i499[11], i499[12], i499[13], i499[14])
  i498.scale = new pc.Vec3( i499[15], i499[16], i499[17] )
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i501 = data
  i500.enabled = !!i501[0]
  i500.planeDistance = i501[1]
  i500.referencePixelsPerUnit = i501[2]
  i500.isFallbackOverlay = !!i501[3]
  i500.renderMode = i501[4]
  i500.renderOrder = i501[5]
  i500.sortingLayerName = i501[6]
  i500.sortingOrder = i501[7]
  i500.scaleFactor = i501[8]
  request.r(i501[9], i501[10], 0, i500, 'worldCamera')
  i500.overrideSorting = !!i501[11]
  i500.pixelPerfect = !!i501[12]
  i500.targetDisplay = i501[13]
  i500.overridePixelPerfect = !!i501[14]
  return i500
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i503 = data
  i502.m_UiScaleMode = i503[0]
  i502.m_ReferencePixelsPerUnit = i503[1]
  i502.m_ScaleFactor = i503[2]
  i502.m_ReferenceResolution = new pc.Vec2( i503[3], i503[4] )
  i502.m_ScreenMatchMode = i503[5]
  i502.m_MatchWidthOrHeight = i503[6]
  i502.m_PhysicalUnit = i503[7]
  i502.m_FallbackScreenDPI = i503[8]
  i502.m_DefaultSpriteDPI = i503[9]
  i502.m_DynamicPixelsPerUnit = i503[10]
  i502.m_PresetInfoIsWorld = !!i503[11]
  return i502
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i505 = data
  i504.m_IgnoreReversedGraphics = !!i505[0]
  i504.m_BlockingObjects = i505[1]
  i504.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i505[2] )
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i507 = data
  i506.cullTransparentMesh = !!i507[0]
  return i506
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.Image' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'm_Sprite')
  i508.m_Type = i509[2]
  i508.m_PreserveAspect = !!i509[3]
  i508.m_FillCenter = !!i509[4]
  i508.m_FillMethod = i509[5]
  i508.m_FillAmount = i509[6]
  i508.m_FillClockwise = !!i509[7]
  i508.m_FillOrigin = i509[8]
  i508.m_UseSpriteMesh = !!i509[9]
  i508.m_PixelsPerUnitMultiplier = i509[10]
  request.r(i509[11], i509[12], 0, i508, 'm_Material')
  i508.m_Maskable = !!i509[13]
  i508.m_Color = new pc.Color(i509[14], i509[15], i509[16], i509[17])
  i508.m_RaycastTarget = !!i509[18]
  i508.m_RaycastPadding = new pc.Vec4( i509[19], i509[20], i509[21], i509[22] )
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'animatorController')
  i510.updateMode = i511[2]
  var i513 = i511[3]
  var i512 = []
  for(var i = 0; i < i513.length; i += 2) {
  request.r(i513[i + 0], i513[i + 1], 2, i512, '')
  }
  i510.humanBones = i512
  i510.enabled = !!i511[4]
  return i510
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.UI.Button' )
  var i517 = data
  i516.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i517[0], i516.m_OnClick)
  i516.m_Navigation = request.d('UnityEngine.UI.Navigation', i517[1], i516.m_Navigation)
  i516.m_Transition = i517[2]
  i516.m_Colors = request.d('UnityEngine.UI.ColorBlock', i517[3], i516.m_Colors)
  i516.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i517[4], i516.m_SpriteState)
  i516.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i517[5], i516.m_AnimationTriggers)
  i516.m_Interactable = !!i517[6]
  request.r(i517[7], i517[8], 0, i516, 'm_TargetGraphic')
  return i516
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i519 = data
  i518.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i519[0], i518.m_PersistentCalls)
  return i518
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i521 = data
  var i523 = i521[0]
  var i522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i523.length; i += 1) {
    i522.add(request.d('UnityEngine.Events.PersistentCall', i523[i + 0]));
  }
  i520.m_Calls = i522
  return i520
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i527 = data
  request.r(i527[0], i527[1], 0, i526, 'm_Target')
  i526.m_TargetAssemblyTypeName = i527[2]
  i526.m_MethodName = i527[3]
  i526.m_Mode = i527[4]
  i526.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i527[5], i526.m_Arguments)
  i526.m_CallState = i527[6]
  return i526
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i529 = data
  request.r(i529[0], i529[1], 0, i528, 'm_ObjectArgument')
  i528.m_ObjectArgumentAssemblyTypeName = i529[2]
  i528.m_IntArgument = i529[3]
  i528.m_FloatArgument = i529[4]
  i528.m_StringArgument = i529[5]
  i528.m_BoolArgument = !!i529[6]
  return i528
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i531 = data
  i530.m_Mode = i531[0]
  i530.m_WrapAround = !!i531[1]
  request.r(i531[2], i531[3], 0, i530, 'm_SelectOnUp')
  request.r(i531[4], i531[5], 0, i530, 'm_SelectOnDown')
  request.r(i531[6], i531[7], 0, i530, 'm_SelectOnLeft')
  request.r(i531[8], i531[9], 0, i530, 'm_SelectOnRight')
  return i530
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i533 = data
  i532.m_NormalColor = new pc.Color(i533[0], i533[1], i533[2], i533[3])
  i532.m_HighlightedColor = new pc.Color(i533[4], i533[5], i533[6], i533[7])
  i532.m_PressedColor = new pc.Color(i533[8], i533[9], i533[10], i533[11])
  i532.m_SelectedColor = new pc.Color(i533[12], i533[13], i533[14], i533[15])
  i532.m_DisabledColor = new pc.Color(i533[16], i533[17], i533[18], i533[19])
  i532.m_ColorMultiplier = i533[20]
  i532.m_FadeDuration = i533[21]
  return i532
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'm_HighlightedSprite')
  request.r(i535[2], i535[3], 0, i534, 'm_PressedSprite')
  request.r(i535[4], i535[5], 0, i534, 'm_SelectedSprite')
  request.r(i535[6], i535[7], 0, i534, 'm_DisabledSprite')
  return i534
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i537 = data
  i536.m_NormalTrigger = i537[0]
  i536.m_HighlightedTrigger = i537[1]
  i536.m_PressedTrigger = i537[2]
  i536.m_SelectedTrigger = i537[3]
  i536.m_DisabledTrigger = i537[4]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i539 = data
  i538.playAutomatically = !!i539[0]
  request.r(i539[1], i539[2], 0, i538, 'clip')
  var i541 = i539[3]
  var i540 = []
  for(var i = 0; i < i541.length; i += 2) {
  request.r(i541[i + 0], i541[i + 1], 2, i540, '')
  }
  i538.clips = i540
  i538.wrapMode = i539[4]
  i538.enabled = !!i539[5]
  return i538
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'm_FirstSelected')
  i544.m_sendNavigationEvents = !!i545[2]
  i544.m_DragThreshold = i545[3]
  return i544
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i547 = data
  i546.m_HorizontalAxis = i547[0]
  i546.m_VerticalAxis = i547[1]
  i546.m_SubmitButton = i547[2]
  i546.m_CancelButton = i547[3]
  i546.m_InputActionsPerSecond = i547[4]
  i546.m_RepeatDelay = i547[5]
  i546.m_ForceModuleActive = !!i547[6]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i549 = data
  request.r(i549[0], i549[1], 0, i548, 'sharedMesh')
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i551 = data
  request.r(i551[0], i551[1], 0, i550, 'additionalVertexStreams')
  i550.enabled = !!i551[2]
  request.r(i551[3], i551[4], 0, i550, 'sharedMaterial')
  var i553 = i551[5]
  var i552 = []
  for(var i = 0; i < i553.length; i += 2) {
  request.r(i553[i + 0], i553[i + 1], 2, i552, '')
  }
  i550.sharedMaterials = i552
  i550.receiveShadows = !!i551[6]
  i550.shadowCastingMode = i551[7]
  i550.sortingLayerID = i551[8]
  i550.sortingOrder = i551[9]
  i550.lightmapIndex = i551[10]
  i550.lightmapSceneIndex = i551[11]
  i550.lightmapScaleOffset = new pc.Vec4( i551[12], i551[13], i551[14], i551[15] )
  i550.lightProbeUsage = i551[16]
  i550.reflectionProbeUsage = i551[17]
  return i550
}

Deserializers["BucketCrusher2"] = function (request, data, root) {
  var i554 = root || request.c( 'BucketCrusher2' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'brickManager')
  var i557 = i555[2]
  var i556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i557.length; i += 2) {
  request.r(i557[i + 0], i557[i + 1], 1, i556, '')
  }
  i554.lstSaw = i556
  var i559 = i555[3]
  var i558 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.MeshRenderer')))
  for(var i = 0; i < i559.length; i += 2) {
  request.r(i559[i + 0], i559[i + 1], 1, i558, '')
  }
  i554.lstTruc = i558
  var i561 = i555[4]
  var i560 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.MeshRenderer')))
  for(var i = 0; i < i561.length; i += 2) {
  request.r(i561[i + 0], i561[i + 1], 1, i560, '')
  }
  i554.lstTam = i560
  var i563 = i555[5]
  var i562 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.MeshRenderer')))
  for(var i = 0; i < i563.length; i += 2) {
  request.r(i563[i + 0], i563[i + 1], 1, i562, '')
  }
  i554.lstBorder = i562
  var i565 = i555[6]
  var i564 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i565.length; i += 2) {
  request.r(i565[i + 0], i565[i + 1], 1, i564, '')
  }
  i554.lstMateCaptain = i564
  var i567 = i555[7]
  var i566 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i567.length; i += 2) {
  request.r(i567[i + 0], i567[i + 1], 1, i566, '')
  }
  i554.lstMateCandy = i566
  var i569 = i555[8]
  var i568 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 1, i568, '')
  }
  i554.lstWindMill = i568
  request.r(i555[9], i555[10], 0, i554, 'soundControll')
  request.r(i555[11], i555[12], 0, i554, 'guideChooseGroup')
  request.r(i555[13], i555[14], 0, i554, 'guideDrag')
  return i554
}

Deserializers["BrickManager"] = function (request, data, root) {
  var i576 = root || request.c( 'BrickManager' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'imageLoader')
  request.r(i577[2], i577[3], 0, i576, 'brickPrefab')
  request.r(i577[4], i577[5], 0, i576, 'brickHolder')
  i576.positionBrickHold = new pc.Vec3( i577[6], i577[7], i577[8] )
  i576.brickSize = i577[9]
  i576.brickHealth = i577[10]
  i576.xOffset = i577[11]
  return i576
}

Deserializers["SoundController"] = function (request, data, root) {
  var i578 = root || request.c( 'SoundController' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'audioSourceFX')
  request.r(i579[2], i579[3], 0, i578, 'audioSourceBG')
  request.r(i579[4], i579[5], 0, i578, 'clipClick')
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'clip')
  request.r(i581[2], i581[3], 0, i580, 'outputAudioMixerGroup')
  i580.playOnAwake = !!i581[4]
  i580.loop = !!i581[5]
  i580.time = i581[6]
  i580.volume = i581[7]
  i580.pitch = i581[8]
  i580.enabled = !!i581[9]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i583 = data
  i582.ambientIntensity = i583[0]
  i582.reflectionIntensity = i583[1]
  i582.ambientMode = i583[2]
  i582.ambientLight = new pc.Color(i583[3], i583[4], i583[5], i583[6])
  i582.ambientSkyColor = new pc.Color(i583[7], i583[8], i583[9], i583[10])
  i582.ambientGroundColor = new pc.Color(i583[11], i583[12], i583[13], i583[14])
  i582.ambientEquatorColor = new pc.Color(i583[15], i583[16], i583[17], i583[18])
  i582.fogColor = new pc.Color(i583[19], i583[20], i583[21], i583[22])
  i582.fogEndDistance = i583[23]
  i582.fogStartDistance = i583[24]
  i582.fogDensity = i583[25]
  i582.fog = !!i583[26]
  request.r(i583[27], i583[28], 0, i582, 'skybox')
  i582.fogMode = i583[29]
  var i585 = i583[30]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i585[i + 0]) );
  }
  i582.lightmaps = i584
  i582.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i583[31], i582.lightProbes)
  i582.lightmapsMode = i583[32]
  i582.environmentLightingMode = i583[33]
  i582.ambientProbe = new pc.SphericalHarmonicsL2(i583[34])
  request.r(i583[35], i583[36], 0, i582, 'customReflection')
  request.r(i583[37], i583[38], 0, i582, 'defaultReflection')
  i582.defaultReflectionMode = i583[39]
  i582.defaultReflectionResolution = i583[40]
  i582.sunLightObjectId = i583[41]
  i582.pixelLightCount = i583[42]
  i582.defaultReflectionHDR = !!i583[43]
  i582.hasLightDataAsset = !!i583[44]
  i582.hasManualGenerate = !!i583[45]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'lightmapColor')
  request.r(i589[2], i589[3], 0, i588, 'lightmapDirection')
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i590 = root || new UnityEngine.LightProbes()
  var i591 = data
  return i590
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i598 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i599 = data
  i598.useSafeMode = !!i599[0]
  i598.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i599[1], i598.safeModeOptions)
  i598.timeScale = i599[2]
  i598.useSmoothDeltaTime = !!i599[3]
  i598.maxSmoothUnscaledTime = i599[4]
  i598.rewindCallbackMode = i599[5]
  i598.showUnityEditorReport = !!i599[6]
  i598.logBehaviour = i599[7]
  i598.drawGizmos = !!i599[8]
  i598.defaultRecyclable = !!i599[9]
  i598.defaultAutoPlay = i599[10]
  i598.defaultUpdateType = i599[11]
  i598.defaultTimeScaleIndependent = !!i599[12]
  i598.defaultEaseType = i599[13]
  i598.defaultEaseOvershootOrAmplitude = i599[14]
  i598.defaultEasePeriod = i599[15]
  i598.defaultAutoKill = !!i599[16]
  i598.defaultLoopType = i599[17]
  i598.debugMode = !!i599[18]
  i598.debugStoreTargetId = !!i599[19]
  i598.showPreviewPanel = !!i599[20]
  i598.storeSettingsLocation = i599[21]
  i598.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i599[22], i598.modules)
  i598.createASMDEF = !!i599[23]
  i598.showPlayingTweens = !!i599[24]
  i598.showPausedTweens = !!i599[25]
  return i598
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i600 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i601 = data
  i600.logBehaviour = i601[0]
  i600.nestedTweenFailureBehaviour = i601[1]
  return i600
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i602 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i603 = data
  i602.showPanel = !!i603[0]
  i602.audioEnabled = !!i603[1]
  i602.physicsEnabled = !!i603[2]
  i602.physics2DEnabled = !!i603[3]
  i602.spriteEnabled = !!i603[4]
  i602.uiEnabled = !!i603[5]
  i602.textMeshProEnabled = !!i603[6]
  i602.tk2DEnabled = !!i603[7]
  i602.deAudioEnabled = !!i603[8]
  i602.deUnityExtendedEnabled = !!i603[9]
  i602.epoOutlineEnabled = !!i603[10]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i605 = data
  var i607 = i605[0]
  var i606 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i607.length; i += 1) {
    i606.add(i607[i + 0]);
  }
  i604.invalidShaderVariants = i606
  i604.name = i605[1]
  i604.guid = i605[2]
  var i609 = i605[3]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( i609[i + 0] );
  }
  i604.shaderDefinedKeywords = i608
  var i611 = i605[4]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i611[i + 0]) );
  }
  i604.passes = i610
  var i613 = i605[5]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i613[i + 0]) );
  }
  i604.usePasses = i612
  var i615 = i605[6]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i615[i + 0]) );
  }
  i604.defaultParameterValues = i614
  request.r(i605[7], i605[8], 0, i604, 'unityFallbackShader')
  i604.readDepth = !!i605[9]
  i604.isCreatedByShaderGraph = !!i605[10]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i622 = root || new pc.UnityShaderPass()
  var i623 = data
  i622.id = i623[0]
  i622.subShaderIndex = i623[1]
  i622.name = i623[2]
  i622.passType = i623[3]
  i622.usePass = !!i623[4]
  i622.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[5], i622.zTest)
  i622.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[6], i622.zWrite)
  i622.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[7], i622.culling)
  i622.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i623[8], i622.blending)
  i622.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i623[9], i622.alphaBlending)
  i622.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[10], i622.colorWriteMask)
  i622.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[11], i622.offsetUnits)
  i622.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[12], i622.offsetFactor)
  i622.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[13], i622.stencilRef)
  i622.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[14], i622.stencilReadMask)
  i622.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i623[15], i622.stencilWriteMask)
  i622.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i623[16], i622.stencilOp)
  i622.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i623[17], i622.stencilOpFront)
  i622.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i623[18], i622.stencilOpBack)
  var i625 = i623[19]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i625[i + 0]) );
  }
  i622.tags = i624
  var i627 = i623[20]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( i627[i + 0] );
  }
  i622.passDefinedKeywords = i626
  var i629 = i623[21]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i629[i + 0]) );
  }
  i622.variants = i628
  var i631 = i623[22]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i631[i + 0]) );
  }
  i622.excludedVariants = i630
  i622.hasDepthReader = !!i623[23]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i633 = data
  i632.val = i633[0]
  i632.name = i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i635 = data
  i634.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[0], i634.src)
  i634.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[1], i634.dst)
  i634.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[2], i634.op)
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i637 = data
  i636.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i637[0], i636.pass)
  i636.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i637[1], i636.fail)
  i636.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i637[2], i636.zFail)
  i636.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i637[3], i636.comp)
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i641 = data
  i640.name = i641[0]
  i640.value = i641[1]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i645 = data
  i644.passId = i645[0]
  i644.subShaderIndex = i645[1]
  var i647 = i645[2]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( i647[i + 0] );
  }
  i644.keywords = i646
  i644.vertexProgram = i645[3]
  i644.fragmentProgram = i645[4]
  i644.readDepth = !!i645[5]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'shader')
  i650.pass = i651[2]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i655 = data
  i654.name = i655[0]
  i654.type = i655[1]
  i654.value = new pc.Vec4( i655[2], i655[3], i655[4], i655[5] )
  i654.textureValue = i655[6]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i657 = data
  i656.name = i657[0]
  request.r(i657[1], i657[2], 0, i656, 'texture')
  i656.aabb = i657[3]
  i656.vertices = i657[4]
  i656.triangles = i657[5]
  i656.textureRect = UnityEngine.Rect.MinMaxRect(i657[6], i657[7], i657[8], i657[9])
  i656.packedRect = UnityEngine.Rect.MinMaxRect(i657[10], i657[11], i657[12], i657[13])
  i656.border = new pc.Vec4( i657[14], i657[15], i657[16], i657[17] )
  i656.transparency = i657[18]
  i656.bounds = i657[19]
  i656.pixelsPerUnit = i657[20]
  i656.textureWidth = i657[21]
  i656.textureHeight = i657[22]
  i656.nativeSize = new pc.Vec2( i657[23], i657[24] )
  i656.pivot = new pc.Vec2( i657[25], i657[26] )
  i656.textureRectOffset = new pc.Vec2( i657[27], i657[28] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i659 = data
  i658.name = i659[0]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i661 = data
  i660.name = i661[0]
  i660.wrapMode = i661[1]
  i660.isLooping = !!i661[2]
  i660.length = i661[3]
  var i663 = i661[4]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i663[i + 0]) );
  }
  i660.curves = i662
  var i665 = i661[5]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i665[i + 0]) );
  }
  i660.events = i664
  i660.halfPrecision = !!i661[6]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i669 = data
  i668.path = i669[0]
  i668.componentType = i669[1]
  i668.property = i669[2]
  i668.keys = i669[3]
  var i671 = i669[4]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i671[i + 0]) );
  }
  i668.objectReferenceKeys = i670
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i675 = data
  i674.time = i675[0]
  request.r(i675[1], i675[2], 0, i674, 'value')
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i679 = data
  i678.functionName = i679[0]
  i678.floatParameter = i679[1]
  i678.intParameter = i679[2]
  i678.stringParameter = i679[3]
  request.r(i679[4], i679[5], 0, i678, 'objectReferenceParameter')
  i678.time = i679[6]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i681 = data
  i680.name = i681[0]
  var i683 = i681[1]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i683[i + 0]) );
  }
  i680.states = i682
  var i685 = i681[2]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i685[i + 0]) );
  }
  i680.layers = i684
  var i687 = i681[3]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i687[i + 0]) );
  }
  i680.parameters = i686
  var i689 = i681[4]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( i689[i + 0] );
  }
  i680.animationClips = i688
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i693 = data
  i692.cycleOffset = i693[0]
  i692.cycleOffsetParameter = i693[1]
  i692.cycleOffsetParameterActive = !!i693[2]
  i692.mirror = !!i693[3]
  i692.mirrorParameter = i693[4]
  i692.mirrorParameterActive = !!i693[5]
  i692.motionId = i693[6]
  i692.nameHash = i693[7]
  i692.fullPathHash = i693[8]
  i692.speed = i693[9]
  i692.speedParameter = i693[10]
  i692.speedParameterActive = !!i693[11]
  i692.tag = i693[12]
  i692.name = i693[13]
  i692.writeDefaultValues = !!i693[14]
  var i695 = i693[15]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i695[i + 0]) );
  }
  i692.transitions = i694
  var i697 = i693[16]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i692.behaviours = i696
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i701 = data
  i700.fullPath = i701[0]
  i700.canTransitionToSelf = !!i701[1]
  i700.duration = i701[2]
  i700.exitTime = i701[3]
  i700.hasExitTime = !!i701[4]
  i700.hasFixedDuration = !!i701[5]
  i700.interruptionSource = i701[6]
  i700.offset = i701[7]
  i700.orderedInterruption = !!i701[8]
  i700.destinationStateNameHash = i701[9]
  i700.destinationStateMachineId = i701[10]
  i700.isExit = !!i701[11]
  i700.mute = !!i701[12]
  i700.solo = !!i701[13]
  var i703 = i701[14]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i703[i + 0]) );
  }
  i700.conditions = i702
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i709 = data
  i708.blendingMode = i709[0]
  i708.defaultWeight = i709[1]
  i708.name = i709[2]
  i708.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i709[3], i708.stateMachine)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i711 = data
  i710.id = i711[0]
  i710.defaultStateNameHash = i711[1]
  var i713 = i711[2]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i713[i + 0]) );
  }
  i710.entryTransitions = i712
  var i715 = i711[3]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i715[i + 0]) );
  }
  i710.anyStateTransitions = i714
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i719 = data
  i718.destinationStateNameHash = i719[0]
  i718.destinationStateMachineId = i719[1]
  i718.isExit = !!i719[2]
  i718.mute = !!i719[3]
  i718.solo = !!i719[4]
  var i721 = i719[5]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i721[i + 0]) );
  }
  i718.conditions = i720
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i725 = data
  i724.defaultBool = !!i725[0]
  i724.defaultFloat = i725[1]
  i724.defaultInt = i725[2]
  i724.name = i725[3]
  i724.nameHash = i725[4]
  i724.type = i725[5]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i727 = data
  var i729 = i727[0]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i729[i + 0]) );
  }
  i726.files = i728
  i726.componentToPrefabIds = i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i733 = data
  i732.path = i733[0]
  request.r(i733[1], i733[2], 0, i732, 'unityObject')
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i735 = data
  var i737 = i735[0]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i737[i + 0]) );
  }
  i734.scriptsExecutionOrder = i736
  var i739 = i735[1]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i739[i + 0]) );
  }
  i734.sortingLayers = i738
  var i741 = i735[2]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i741[i + 0]) );
  }
  i734.cullingLayers = i740
  i734.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i735[3], i734.timeSettings)
  i734.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i735[4], i734.physicsSettings)
  i734.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i735[5], i734.physics2DSettings)
  i734.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i735[6], i734.qualitySettings)
  i734.removeShadows = !!i735[7]
  i734.autoInstantiatePrefabs = !!i735[8]
  i734.enableAutoInstancing = !!i735[9]
  i734.lightmapEncodingQuality = i735[10]
  i734.desiredColorSpace = i735[11]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i745 = data
  i744.name = i745[0]
  i744.value = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i749 = data
  i748.id = i749[0]
  i748.name = i749[1]
  i748.value = i749[2]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i753 = data
  i752.id = i753[0]
  i752.name = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i755 = data
  i754.fixedDeltaTime = i755[0]
  i754.maximumDeltaTime = i755[1]
  i754.timeScale = i755[2]
  i754.maximumParticleTimestep = i755[3]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i757 = data
  i756.gravity = new pc.Vec3( i757[0], i757[1], i757[2] )
  i756.defaultSolverIterations = i757[3]
  i756.bounceThreshold = i757[4]
  i756.autoSyncTransforms = !!i757[5]
  i756.autoSimulation = !!i757[6]
  var i759 = i757[7]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i759[i + 0]) );
  }
  i756.collisionMatrix = i758
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i763 = data
  i762.enabled = !!i763[0]
  i762.layerId = i763[1]
  i762.otherLayerId = i763[2]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'material')
  i764.gravity = new pc.Vec2( i765[2], i765[3] )
  i764.positionIterations = i765[4]
  i764.velocityIterations = i765[5]
  i764.velocityThreshold = i765[6]
  i764.maxLinearCorrection = i765[7]
  i764.maxAngularCorrection = i765[8]
  i764.maxTranslationSpeed = i765[9]
  i764.maxRotationSpeed = i765[10]
  i764.timeToSleep = i765[11]
  i764.linearSleepTolerance = i765[12]
  i764.angularSleepTolerance = i765[13]
  i764.defaultContactOffset = i765[14]
  i764.autoSimulation = !!i765[15]
  i764.queriesHitTriggers = !!i765[16]
  i764.queriesStartInColliders = !!i765[17]
  i764.callbacksOnDisable = !!i765[18]
  i764.reuseCollisionCallbacks = !!i765[19]
  i764.autoSyncTransforms = !!i765[20]
  var i767 = i765[21]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i767[i + 0]) );
  }
  i764.collisionMatrix = i766
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i771 = data
  i770.enabled = !!i771[0]
  i770.layerId = i771[1]
  i770.otherLayerId = i771[2]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i773 = data
  var i775 = i773[0]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i775[i + 0]) );
  }
  i772.qualityLevels = i774
  var i777 = i773[1]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i772.names = i776
  i772.shadows = i773[2]
  i772.anisotropicFiltering = i773[3]
  i772.antiAliasing = i773[4]
  i772.lodBias = i773[5]
  i772.shadowCascades = i773[6]
  i772.shadowDistance = i773[7]
  i772.shadowmaskMode = i773[8]
  i772.shadowProjection = i773[9]
  i772.shadowResolution = i773[10]
  i772.softParticles = !!i773[11]
  i772.softVegetation = !!i773[12]
  i772.activeColorSpace = i773[13]
  i772.desiredColorSpace = i773[14]
  i772.masterTextureLimit = i773[15]
  i772.maxQueuedFrames = i773[16]
  i772.particleRaycastBudget = i773[17]
  i772.pixelLightCount = i773[18]
  i772.realtimeReflectionProbes = !!i773[19]
  i772.shadowCascade2Split = i773[20]
  i772.shadowCascade4Split = new pc.Vec3( i773[21], i773[22], i773[23] )
  i772.streamingMipmapsActive = !!i773[24]
  i772.vSyncCount = i773[25]
  i772.asyncUploadBufferSize = i773[26]
  i772.asyncUploadTimeSlice = i773[27]
  i772.billboardsFaceCameraPosition = !!i773[28]
  i772.shadowNearPlaneOffset = i773[29]
  i772.streamingMipmapsMemoryBudget = i773[30]
  i772.maximumLODLevel = i773[31]
  i772.streamingMipmapsAddAllCameras = !!i773[32]
  i772.streamingMipmapsMaxLevelReduction = i773[33]
  i772.streamingMipmapsRenderersPerFrame = i773[34]
  i772.resolutionScalingFixedDPIFactor = i773[35]
  i772.streamingMipmapsMaxFileIORequests = i773[36]
  i772.currentQualityLevel = i773[37]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i783 = data
  i782.weight = i783[0]
  i782.vertices = i783[1]
  i782.normals = i783[2]
  i782.tangents = i783[3]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i787 = data
  i786.mode = i787[0]
  i786.parameter = i787[1]
  i786.threshold = i787[2]
  return i786
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

Deserializers.buildID = "f1f7eb59-1828-41c3-a31f-4cd03ce6f96d";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

