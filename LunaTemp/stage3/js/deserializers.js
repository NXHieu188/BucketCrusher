var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.JointSpring' )
  var i411 = data
  i410.spring = i411[0]
  i410.damper = i411[1]
  i410.targetPosition = i411[2]
  return i410
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.JointMotor' )
  var i413 = data
  i412.m_TargetVelocity = i413[0]
  i412.m_Force = i413[1]
  i412.m_FreeSpin = i413[2]
  return i412
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.JointLimits' )
  var i415 = data
  i414.m_Min = i415[0]
  i414.m_Max = i415[1]
  i414.m_Bounciness = i415[2]
  i414.m_BounceMinVelocity = i415[3]
  i414.m_ContactDistance = i415[4]
  i414.minBounce = i415[5]
  i414.maxBounce = i415[6]
  return i414
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.JointDrive' )
  var i417 = data
  i416.m_PositionSpring = i417[0]
  i416.m_PositionDamper = i417[1]
  i416.m_MaximumForce = i417[2]
  return i416
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i419 = data
  i418.m_Spring = i419[0]
  i418.m_Damper = i419[1]
  return i418
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i421 = data
  i420.m_Limit = i421[0]
  i420.m_Bounciness = i421[1]
  i420.m_ContactDistance = i421[2]
  return i420
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i423 = data
  i422.m_ExtremumSlip = i423[0]
  i422.m_ExtremumValue = i423[1]
  i422.m_AsymptoteSlip = i423[2]
  i422.m_AsymptoteValue = i423[3]
  i422.m_Stiffness = i423[4]
  return i422
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i425 = data
  i424.m_LowerAngle = i425[0]
  i424.m_UpperAngle = i425[1]
  return i424
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i427 = data
  i426.m_MotorSpeed = i427[0]
  i426.m_MaximumMotorTorque = i427[1]
  return i426
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i429 = data
  i428.m_DampingRatio = i429[0]
  i428.m_Frequency = i429[1]
  i428.m_Angle = i429[2]
  return i428
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i431 = data
  i430.m_LowerTranslation = i431[0]
  i430.m_UpperTranslation = i431[1]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i432 = root || new pc.UnityMaterial()
  var i433 = data
  i432.name = i433[0]
  request.r(i433[1], i433[2], 0, i432, 'shader')
  i432.renderQueue = i433[3]
  i432.enableInstancing = !!i433[4]
  var i435 = i433[5]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i435[i + 0]) );
  }
  i432.floatParameters = i434
  var i437 = i433[6]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i437[i + 0]) );
  }
  i432.colorParameters = i436
  var i439 = i433[7]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i439[i + 0]) );
  }
  i432.vectorParameters = i438
  var i441 = i433[8]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i441[i + 0]) );
  }
  i432.textureParameters = i440
  var i443 = i433[9]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i443[i + 0]) );
  }
  i432.materialFlags = i442
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i447 = data
  i446.name = i447[0]
  i446.value = i447[1]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i451 = data
  i450.name = i451[0]
  i450.value = new pc.Color(i451[1], i451[2], i451[3], i451[4])
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i455 = data
  i454.name = i455[0]
  i454.value = new pc.Vec4( i455[1], i455[2], i455[3], i455[4] )
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i459 = data
  i458.name = i459[0]
  request.r(i459[1], i459[2], 0, i458, 'value')
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i463 = data
  i462.name = i463[0]
  i462.enabled = !!i463[1]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i465 = data
  i464.name = i465[0]
  i464.width = i465[1]
  i464.height = i465[2]
  i464.mipmapCount = i465[3]
  i464.anisoLevel = i465[4]
  i464.filterMode = i465[5]
  i464.hdr = !!i465[6]
  i464.format = i465[7]
  i464.wrapMode = i465[8]
  i464.alphaIsTransparency = !!i465[9]
  i464.alphaSource = i465[10]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i467 = data
  i466.position = new pc.Vec3( i467[0], i467[1], i467[2] )
  i466.scale = new pc.Vec3( i467[3], i467[4], i467[5] )
  i466.rotation = new pc.Quat(i467[6], i467[7], i467[8], i467[9])
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i469 = data
  request.r(i469[0], i469[1], 0, i468, 'sharedMesh')
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i471 = data
  request.r(i471[0], i471[1], 0, i470, 'additionalVertexStreams')
  i470.enabled = !!i471[2]
  request.r(i471[3], i471[4], 0, i470, 'sharedMaterial')
  var i473 = i471[5]
  var i472 = []
  for(var i = 0; i < i473.length; i += 2) {
  request.r(i473[i + 0], i473[i + 1], 2, i472, '')
  }
  i470.sharedMaterials = i472
  i470.receiveShadows = !!i471[6]
  i470.shadowCastingMode = i471[7]
  i470.sortingLayerID = i471[8]
  i470.sortingOrder = i471[9]
  i470.lightmapIndex = i471[10]
  i470.lightmapSceneIndex = i471[11]
  i470.lightmapScaleOffset = new pc.Vec4( i471[12], i471[13], i471[14], i471[15] )
  i470.lightProbeUsage = i471[16]
  i470.reflectionProbeUsage = i471[17]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i477 = data
  i476.center = new pc.Vec3( i477[0], i477[1], i477[2] )
  i476.size = new pc.Vec3( i477[3], i477[4], i477[5] )
  i476.enabled = !!i477[6]
  i476.isTrigger = !!i477[7]
  request.r(i477[8], i477[9], 0, i476, 'material')
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i479 = data
  i478.mass = i479[0]
  i478.drag = i479[1]
  i478.angularDrag = i479[2]
  i478.useGravity = !!i479[3]
  i478.isKinematic = !!i479[4]
  i478.constraints = i479[5]
  i478.maxAngularVelocity = i479[6]
  i478.collisionDetectionMode = i479[7]
  i478.interpolation = i479[8]
  return i478
}

Deserializers["Brick"] = function (request, data, root) {
  var i480 = root || request.c( 'Brick' )
  var i481 = data
  i480.broken = !!i481[0]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i483 = data
  i482.name = i483[0]
  i482.tag = i483[1]
  i482.enabled = !!i483[2]
  i482.isStatic = !!i483[3]
  i482.layer = i483[4]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i485 = data
  i484.name = i485[0]
  i484.halfPrecision = !!i485[1]
  i484.vertexCount = i485[2]
  i484.aabb = i485[3]
  var i487 = i485[4]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( !!i487[i + 0] );
  }
  i484.streams = i486
  i484.vertices = i485[5]
  var i489 = i485[6]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i489[i + 0]) );
  }
  i484.subMeshes = i488
  var i491 = i485[7]
  var i490 = []
  for(var i = 0; i < i491.length; i += 16) {
    i490.push( new pc.Mat4().setData(i491[i + 0], i491[i + 1], i491[i + 2], i491[i + 3],  i491[i + 4], i491[i + 5], i491[i + 6], i491[i + 7],  i491[i + 8], i491[i + 9], i491[i + 10], i491[i + 11],  i491[i + 12], i491[i + 13], i491[i + 14], i491[i + 15]) );
  }
  i484.bindposes = i490
  var i493 = i485[8]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i493[i + 0]) );
  }
  i484.blendShapes = i492
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i499 = data
  i498.triangles = i499[0]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i505 = data
  i504.name = i505[0]
  var i507 = i505[1]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i507[i + 0]) );
  }
  i504.frames = i506
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i509 = data
  i508.enabled = !!i509[0]
  i508.isTrigger = !!i509[1]
  request.r(i509[2], i509[3], 0, i508, 'material')
  i508.center = new pc.Vec3( i509[4], i509[5], i509[6] )
  i508.radius = i509[7]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i511 = data
  i510.name = i511[0]
  i510.atlasId = i511[1]
  i510.mipmapCount = i511[2]
  i510.hdr = !!i511[3]
  i510.size = i511[4]
  i510.anisoLevel = i511[5]
  i510.filterMode = i511[6]
  i510.wrapMode = i511[7]
  var i513 = i511[8]
  var i512 = []
  for(var i = 0; i < i513.length; i += 4) {
    i512.push( UnityEngine.Rect.MinMaxRect(i513[i + 0], i513[i + 1], i513[i + 2], i513[i + 3]) );
  }
  i510.rects = i512
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i517 = data
  i516.name = i517[0]
  i516.index = i517[1]
  i516.startup = !!i517[2]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i519 = data
  i518.enabled = !!i519[0]
  i518.aspect = i519[1]
  i518.orthographic = !!i519[2]
  i518.orthographicSize = i519[3]
  i518.backgroundColor = new pc.Color(i519[4], i519[5], i519[6], i519[7])
  i518.nearClipPlane = i519[8]
  i518.farClipPlane = i519[9]
  i518.fieldOfView = i519[10]
  i518.depth = i519[11]
  i518.clearFlags = i519[12]
  i518.cullingMask = i519[13]
  i518.rect = i519[14]
  request.r(i519[15], i519[16], 0, i518, 'targetTexture')
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i521 = data
  i520.enabled = !!i521[0]
  i520.type = i521[1]
  i520.color = new pc.Color(i521[2], i521[3], i521[4], i521[5])
  i520.cullingMask = i521[6]
  i520.intensity = i521[7]
  i520.range = i521[8]
  i520.spotAngle = i521[9]
  i520.shadows = i521[10]
  i520.shadowNormalBias = i521[11]
  i520.shadowBias = i521[12]
  i520.shadowStrength = i521[13]
  i520.lightmapBakeType = i521[14]
  i520.renderMode = i521[15]
  request.r(i521[16], i521[17], 0, i520, 'cookie')
  i520.cookieSize = i521[18]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i523 = data
  i522.pivot = new pc.Vec2( i523[0], i523[1] )
  i522.anchorMin = new pc.Vec2( i523[2], i523[3] )
  i522.anchorMax = new pc.Vec2( i523[4], i523[5] )
  i522.sizeDelta = new pc.Vec2( i523[6], i523[7] )
  i522.anchoredPosition3D = new pc.Vec3( i523[8], i523[9], i523[10] )
  i522.rotation = new pc.Quat(i523[11], i523[12], i523[13], i523[14])
  i522.scale = new pc.Vec3( i523[15], i523[16], i523[17] )
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i525 = data
  i524.enabled = !!i525[0]
  i524.planeDistance = i525[1]
  i524.referencePixelsPerUnit = i525[2]
  i524.isFallbackOverlay = !!i525[3]
  i524.renderMode = i525[4]
  i524.renderOrder = i525[5]
  i524.sortingLayerName = i525[6]
  i524.sortingOrder = i525[7]
  i524.scaleFactor = i525[8]
  request.r(i525[9], i525[10], 0, i524, 'worldCamera')
  i524.overrideSorting = !!i525[11]
  i524.pixelPerfect = !!i525[12]
  i524.targetDisplay = i525[13]
  i524.overridePixelPerfect = !!i525[14]
  return i524
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i527 = data
  i526.m_UiScaleMode = i527[0]
  i526.m_ReferencePixelsPerUnit = i527[1]
  i526.m_ScaleFactor = i527[2]
  i526.m_ReferenceResolution = new pc.Vec2( i527[3], i527[4] )
  i526.m_ScreenMatchMode = i527[5]
  i526.m_MatchWidthOrHeight = i527[6]
  i526.m_PhysicalUnit = i527[7]
  i526.m_FallbackScreenDPI = i527[8]
  i526.m_DefaultSpriteDPI = i527[9]
  i526.m_DynamicPixelsPerUnit = i527[10]
  i526.m_PresetInfoIsWorld = !!i527[11]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i529 = data
  i528.cullTransparentMesh = !!i529[0]
  return i528
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.UI.Image' )
  var i531 = data
  request.r(i531[0], i531[1], 0, i530, 'm_Sprite')
  i530.m_Type = i531[2]
  i530.m_PreserveAspect = !!i531[3]
  i530.m_FillCenter = !!i531[4]
  i530.m_FillMethod = i531[5]
  i530.m_FillAmount = i531[6]
  i530.m_FillClockwise = !!i531[7]
  i530.m_FillOrigin = i531[8]
  i530.m_UseSpriteMesh = !!i531[9]
  i530.m_PixelsPerUnitMultiplier = i531[10]
  request.r(i531[11], i531[12], 0, i530, 'm_Material')
  i530.m_Maskable = !!i531[13]
  i530.m_Color = new pc.Color(i531[14], i531[15], i531[16], i531[17])
  i530.m_RaycastTarget = !!i531[18]
  i530.m_RaycastPadding = new pc.Vec4( i531[19], i531[20], i531[21], i531[22] )
  return i530
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i533 = data
  i532.m_IgnoreReversedGraphics = !!i533[0]
  i532.m_BlockingObjects = i533[1]
  i532.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i533[2] )
  return i532
}

Deserializers["UltimateJoystick"] = function (request, data, root) {
  var i534 = root || request.c( 'UltimateJoystick' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'joystick')
  request.r(i535[2], i535[3], 0, i534, 'joystickSizeFolder')
  request.r(i535[4], i535[5], 0, i534, 'joystickBase')
  request.r(i535[6], i535[7], 0, i534, 'highlightBase')
  request.r(i535[8], i535[9], 0, i534, 'highlightJoystick')
  request.r(i535[10], i535[11], 0, i534, 'tensionAccentUp')
  request.r(i535[12], i535[13], 0, i534, 'tensionAccentDown')
  request.r(i535[14], i535[15], 0, i534, 'tensionAccentLeft')
  request.r(i535[16], i535[17], 0, i534, 'tensionAccentRight')
  i534.scalingAxis = i535[18]
  i534.anchor = i535[19]
  i534.joystickTouchSize = i535[20]
  i534.joystickSize = i535[21]
  i534.radiusModifier = i535[22]
  i534.dynamicPositioning = !!i535[23]
  i534.customTouchSize_X = i535[24]
  i534.customTouchSize_Y = i535[25]
  i534.customTouchSizePos_X = i535[26]
  i534.customTouchSizePos_Y = i535[27]
  i534.customSpacing_X = i535[28]
  i534.customSpacing_Y = i535[29]
  i534.gravity = i535[30]
  i534.extendRadius = !!i535[31]
  i534.axis = i535[32]
  i534.boundary = i535[33]
  i534.tapCountOption = i535[34]
  i534.tapCountDuration = i535[35]
  i534.targetTapCount = i535[36]
  i534.deadZone = i535[37]
  i534.disableVisuals = !!i535[38]
  i534.useFade = !!i535[39]
  i534.fadeUntouched = i535[40]
  i534.fadeTouched = i535[41]
  i534.fadeInDuration = i535[42]
  i534.fadeOutDuration = i535[43]
  i534.useAnimation = !!i535[44]
  request.r(i535[45], i535[46], 0, i534, 'joystickAnimator')
  i534.showHighlight = !!i535[47]
  i534.highlightColor = new pc.Color(i535[48], i535[49], i535[50], i535[51])
  i534.showTension = !!i535[52]
  i534.tensionColorNone = new pc.Color(i535[53], i535[54], i535[55], i535[56])
  i534.tensionColorFull = new pc.Color(i535[57], i535[58], i535[59], i535[60])
  i534.joystickName = i535[61]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'animatorController')
  i536.updateMode = i537[2]
  var i539 = i537[3]
  var i538 = []
  for(var i = 0; i < i539.length; i += 2) {
  request.r(i539[i + 0], i539[i + 1], 2, i538, '')
  }
  i536.humanBones = i538
  i536.enabled = !!i537[4]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i543 = data
  i542.m_Alpha = i543[0]
  i542.m_Interactable = !!i543[1]
  i542.m_BlocksRaycasts = !!i543[2]
  i542.m_IgnoreParentGroups = !!i543[3]
  i542.enabled = !!i543[4]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i545 = data
  i544.playAutomatically = !!i545[0]
  request.r(i545[1], i545[2], 0, i544, 'clip')
  var i547 = i545[3]
  var i546 = []
  for(var i = 0; i < i547.length; i += 2) {
  request.r(i547[i + 0], i547[i + 1], 2, i546, '')
  }
  i544.clips = i546
  i544.wrapMode = i545[4]
  i544.enabled = !!i545[5]
  return i544
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.Button' )
  var i551 = data
  i550.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i551[0], i550.m_OnClick)
  i550.m_Navigation = request.d('UnityEngine.UI.Navigation', i551[1], i550.m_Navigation)
  i550.m_Transition = i551[2]
  i550.m_Colors = request.d('UnityEngine.UI.ColorBlock', i551[3], i550.m_Colors)
  i550.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i551[4], i550.m_SpriteState)
  i550.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i551[5], i550.m_AnimationTriggers)
  i550.m_Interactable = !!i551[6]
  request.r(i551[7], i551[8], 0, i550, 'm_TargetGraphic')
  return i550
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i553 = data
  i552.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i553[0], i552.m_PersistentCalls)
  return i552
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i555 = data
  var i557 = i555[0]
  var i556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i557.length; i += 1) {
    i556.add(request.d('UnityEngine.Events.PersistentCall', i557[i + 0]));
  }
  i554.m_Calls = i556
  return i554
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'm_Target')
  i560.m_TargetAssemblyTypeName = i561[2]
  i560.m_MethodName = i561[3]
  i560.m_Mode = i561[4]
  i560.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i561[5], i560.m_Arguments)
  i560.m_CallState = i561[6]
  return i560
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i563 = data
  request.r(i563[0], i563[1], 0, i562, 'm_ObjectArgument')
  i562.m_ObjectArgumentAssemblyTypeName = i563[2]
  i562.m_IntArgument = i563[3]
  i562.m_FloatArgument = i563[4]
  i562.m_StringArgument = i563[5]
  i562.m_BoolArgument = !!i563[6]
  return i562
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i565 = data
  i564.m_Mode = i565[0]
  i564.m_WrapAround = !!i565[1]
  request.r(i565[2], i565[3], 0, i564, 'm_SelectOnUp')
  request.r(i565[4], i565[5], 0, i564, 'm_SelectOnDown')
  request.r(i565[6], i565[7], 0, i564, 'm_SelectOnLeft')
  request.r(i565[8], i565[9], 0, i564, 'm_SelectOnRight')
  return i564
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i567 = data
  i566.m_NormalColor = new pc.Color(i567[0], i567[1], i567[2], i567[3])
  i566.m_HighlightedColor = new pc.Color(i567[4], i567[5], i567[6], i567[7])
  i566.m_PressedColor = new pc.Color(i567[8], i567[9], i567[10], i567[11])
  i566.m_SelectedColor = new pc.Color(i567[12], i567[13], i567[14], i567[15])
  i566.m_DisabledColor = new pc.Color(i567[16], i567[17], i567[18], i567[19])
  i566.m_ColorMultiplier = i567[20]
  i566.m_FadeDuration = i567[21]
  return i566
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'm_HighlightedSprite')
  request.r(i569[2], i569[3], 0, i568, 'm_PressedSprite')
  request.r(i569[4], i569[5], 0, i568, 'm_SelectedSprite')
  request.r(i569[6], i569[7], 0, i568, 'm_DisabledSprite')
  return i568
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i571 = data
  i570.m_NormalTrigger = i571[0]
  i570.m_HighlightedTrigger = i571[1]
  i570.m_PressedTrigger = i571[2]
  i570.m_SelectedTrigger = i571[3]
  i570.m_DisabledTrigger = i571[4]
  return i570
}

Deserializers["Joint"] = function (request, data, root) {
  var i572 = root || request.c( 'Joint' )
  var i573 = data
  request.r(i573[0], i573[1], 0, i572, 'm_child')
  return i572
}

Deserializers["Saw"] = function (request, data, root) {
  var i574 = root || request.c( 'Saw' )
  var i575 = data
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i577 = data
  i576.enabled = !!i577[0]
  i576.isTrigger = !!i577[1]
  request.r(i577[2], i577[3], 0, i576, 'material')
  request.r(i577[4], i577[5], 0, i576, 'sharedMesh')
  i576.convex = !!i577[6]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i579 = data
  i578.usedByComposite = !!i579[0]
  i578.autoTiling = !!i579[1]
  i578.size = new pc.Vec2( i579[2], i579[3] )
  i578.edgeRadius = i579[4]
  i578.enabled = !!i579[5]
  i578.isTrigger = !!i579[6]
  i578.usedByEffector = !!i579[7]
  i578.density = i579[8]
  i578.offset = new pc.Vec2( i579[9], i579[10] )
  request.r(i579[11], i579[12], 0, i578, 'material')
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i581 = data
  i580.bodyType = i581[0]
  request.r(i581[1], i581[2], 0, i580, 'material')
  i580.simulated = !!i581[3]
  i580.useAutoMass = !!i581[4]
  i580.mass = i581[5]
  i580.drag = i581[6]
  i580.angularDrag = i581[7]
  i580.gravityScale = i581[8]
  i580.collisionDetectionMode = i581[9]
  i580.sleepMode = i581[10]
  i580.constraints = i581[11]
  return i580
}

Deserializers["Conveyor"] = function (request, data, root) {
  var i582 = root || request.c( 'Conveyor' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'conveyor')
  i582.length = i583[2]
  return i582
}

Deserializers["RotateObject"] = function (request, data, root) {
  var i584 = root || request.c( 'RotateObject' )
  var i585 = data
  i584.duration = i585[0]
  i584.angle = i585[1]
  return i584
}

Deserializers["SpawnCoin"] = function (request, data, root) {
  var i586 = root || request.c( 'SpawnCoin' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'prefCoin')
  return i586
}

Deserializers["LKManager"] = function (request, data, root) {
  var i588 = root || request.c( 'LKManager' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'm_root')
  request.r(i589[2], i589[3], 0, i588, 'm_end')
  request.r(i589[4], i589[5], 0, i588, 'm_target')
  i588.m_thresHold = i589[6]
  i588.m_rate = i589[7]
  i588.m_Steps = i589[8]
  return i588
}

Deserializers["ATManager2"] = function (request, data, root) {
  var i590 = root || request.c( 'ATManager2' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'brickManager')
  request.r(i591[2], i591[3], 0, i590, 'gameController')
  request.r(i591[4], i591[5], 0, i590, 'handController')
  request.r(i591[6], i591[7], 0, i590, 'joyStick')
  var i593 = i591[8]
  var i592 = new (System.Collections.Generic.List$1(Bridge.ns('Brick')))
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 1, i592, '')
  }
  i590.lstBrick = i592
  request.r(i591[9], i591[10], 0, i590, 'soundController')
  request.r(i591[11], i591[12], 0, i590, 'spawnerCoin')
  var i595 = i591[13]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i590.arrImageLoader = i594
  request.r(i591[14], i591[15], 0, i590, 'black')
  request.r(i591[16], i591[17], 0, i590, 'guideChooseGroup')
  request.r(i591[18], i591[19], 0, i590, 'guideDrag')
  i590.isEndGame = !!i591[20]
  i590.typeShape = i591[21]
  return i590
}

Deserializers["BrickManager"] = function (request, data, root) {
  var i600 = root || request.c( 'BrickManager' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'imageLoader')
  request.r(i601[2], i601[3], 0, i600, 'brickPrefab')
  request.r(i601[4], i601[5], 0, i600, 'brickHolder')
  i600.positionBrickHold = new pc.Vec3( i601[6], i601[7], i601[8] )
  i600.brickSize = i601[9]
  i600.brickScale = i601[10]
  i600.brickHealth = i601[11]
  i600.xOffset = i601[12]
  return i600
}

Deserializers["GameController"] = function (request, data, root) {
  var i602 = root || request.c( 'GameController' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'ultiJoyStick')
  return i602
}

Deserializers["HandController"] = function (request, data, root) {
  var i604 = root || request.c( 'HandController' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'target')
  i604.speedMove = i605[2]
  return i604
}

Deserializers["SoundController"] = function (request, data, root) {
  var i606 = root || request.c( 'SoundController' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'audioSourceFX')
  request.r(i607[2], i607[3], 0, i606, 'audioSourceBG')
  request.r(i607[4], i607[5], 0, i606, 'clipClick')
  request.r(i607[6], i607[7], 0, i606, 'clipCrash')
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'clip')
  request.r(i609[2], i609[3], 0, i608, 'outputAudioMixerGroup')
  i608.playOnAwake = !!i609[4]
  i608.loop = !!i609[5]
  i608.time = i609[6]
  i608.volume = i609[7]
  i608.pitch = i609[8]
  i608.enabled = !!i609[9]
  return i608
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'm_FirstSelected')
  i610.m_sendNavigationEvents = !!i611[2]
  i610.m_DragThreshold = i611[3]
  return i610
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i613 = data
  i612.m_HorizontalAxis = i613[0]
  i612.m_VerticalAxis = i613[1]
  i612.m_SubmitButton = i613[2]
  i612.m_CancelButton = i613[3]
  i612.m_InputActionsPerSecond = i613[4]
  i612.m_RepeatDelay = i613[5]
  i612.m_ForceModuleActive = !!i613[6]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i615 = data
  i614.ambientIntensity = i615[0]
  i614.reflectionIntensity = i615[1]
  i614.ambientMode = i615[2]
  i614.ambientLight = new pc.Color(i615[3], i615[4], i615[5], i615[6])
  i614.ambientSkyColor = new pc.Color(i615[7], i615[8], i615[9], i615[10])
  i614.ambientGroundColor = new pc.Color(i615[11], i615[12], i615[13], i615[14])
  i614.ambientEquatorColor = new pc.Color(i615[15], i615[16], i615[17], i615[18])
  i614.fogColor = new pc.Color(i615[19], i615[20], i615[21], i615[22])
  i614.fogEndDistance = i615[23]
  i614.fogStartDistance = i615[24]
  i614.fogDensity = i615[25]
  i614.fog = !!i615[26]
  request.r(i615[27], i615[28], 0, i614, 'skybox')
  i614.fogMode = i615[29]
  var i617 = i615[30]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i617[i + 0]) );
  }
  i614.lightmaps = i616
  i614.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i615[31], i614.lightProbes)
  i614.lightmapsMode = i615[32]
  i614.environmentLightingMode = i615[33]
  i614.ambientProbe = new pc.SphericalHarmonicsL2(i615[34])
  request.r(i615[35], i615[36], 0, i614, 'customReflection')
  request.r(i615[37], i615[38], 0, i614, 'defaultReflection')
  i614.defaultReflectionMode = i615[39]
  i614.defaultReflectionResolution = i615[40]
  i614.sunLightObjectId = i615[41]
  i614.pixelLightCount = i615[42]
  i614.defaultReflectionHDR = !!i615[43]
  i614.hasLightDataAsset = !!i615[44]
  i614.hasManualGenerate = !!i615[45]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'lightmapColor')
  request.r(i621[2], i621[3], 0, i620, 'lightmapDirection')
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i622 = root || new UnityEngine.LightProbes()
  var i623 = data
  return i622
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i630 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i631 = data
  i630.useSafeMode = !!i631[0]
  i630.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i631[1], i630.safeModeOptions)
  i630.timeScale = i631[2]
  i630.useSmoothDeltaTime = !!i631[3]
  i630.maxSmoothUnscaledTime = i631[4]
  i630.rewindCallbackMode = i631[5]
  i630.showUnityEditorReport = !!i631[6]
  i630.logBehaviour = i631[7]
  i630.drawGizmos = !!i631[8]
  i630.defaultRecyclable = !!i631[9]
  i630.defaultAutoPlay = i631[10]
  i630.defaultUpdateType = i631[11]
  i630.defaultTimeScaleIndependent = !!i631[12]
  i630.defaultEaseType = i631[13]
  i630.defaultEaseOvershootOrAmplitude = i631[14]
  i630.defaultEasePeriod = i631[15]
  i630.defaultAutoKill = !!i631[16]
  i630.defaultLoopType = i631[17]
  i630.debugMode = !!i631[18]
  i630.debugStoreTargetId = !!i631[19]
  i630.showPreviewPanel = !!i631[20]
  i630.storeSettingsLocation = i631[21]
  i630.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i631[22], i630.modules)
  i630.createASMDEF = !!i631[23]
  i630.showPlayingTweens = !!i631[24]
  i630.showPausedTweens = !!i631[25]
  return i630
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i632 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i633 = data
  i632.logBehaviour = i633[0]
  i632.nestedTweenFailureBehaviour = i633[1]
  return i632
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i634 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i635 = data
  i634.showPanel = !!i635[0]
  i634.audioEnabled = !!i635[1]
  i634.physicsEnabled = !!i635[2]
  i634.physics2DEnabled = !!i635[3]
  i634.spriteEnabled = !!i635[4]
  i634.uiEnabled = !!i635[5]
  i634.textMeshProEnabled = !!i635[6]
  i634.tk2DEnabled = !!i635[7]
  i634.deAudioEnabled = !!i635[8]
  i634.deUnityExtendedEnabled = !!i635[9]
  i634.epoOutlineEnabled = !!i635[10]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i637 = data
  var i639 = i637[0]
  var i638 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i639.length; i += 1) {
    i638.add(i639[i + 0]);
  }
  i636.invalidShaderVariants = i638
  i636.name = i637[1]
  i636.guid = i637[2]
  var i641 = i637[3]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( i641[i + 0] );
  }
  i636.shaderDefinedKeywords = i640
  var i643 = i637[4]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i643[i + 0]) );
  }
  i636.passes = i642
  var i645 = i637[5]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i645[i + 0]) );
  }
  i636.usePasses = i644
  var i647 = i637[6]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i647[i + 0]) );
  }
  i636.defaultParameterValues = i646
  request.r(i637[7], i637[8], 0, i636, 'unityFallbackShader')
  i636.readDepth = !!i637[9]
  i636.isCreatedByShaderGraph = !!i637[10]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i654 = root || new pc.UnityShaderPass()
  var i655 = data
  i654.id = i655[0]
  i654.subShaderIndex = i655[1]
  i654.name = i655[2]
  i654.passType = i655[3]
  i654.usePass = !!i655[4]
  i654.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[5], i654.zTest)
  i654.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[6], i654.zWrite)
  i654.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[7], i654.culling)
  i654.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i655[8], i654.blending)
  i654.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i655[9], i654.alphaBlending)
  i654.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[10], i654.colorWriteMask)
  i654.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[11], i654.offsetUnits)
  i654.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[12], i654.offsetFactor)
  i654.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[13], i654.stencilRef)
  i654.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[14], i654.stencilReadMask)
  i654.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i655[15], i654.stencilWriteMask)
  i654.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i655[16], i654.stencilOp)
  i654.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i655[17], i654.stencilOpFront)
  i654.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i655[18], i654.stencilOpBack)
  var i657 = i655[19]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i657[i + 0]) );
  }
  i654.tags = i656
  var i659 = i655[20]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( i659[i + 0] );
  }
  i654.passDefinedKeywords = i658
  var i661 = i655[21]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i661[i + 0]) );
  }
  i654.variants = i660
  var i663 = i655[22]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i663[i + 0]) );
  }
  i654.excludedVariants = i662
  i654.hasDepthReader = !!i655[23]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i665 = data
  i664.val = i665[0]
  i664.name = i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i667 = data
  i666.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[0], i666.src)
  i666.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[1], i666.dst)
  i666.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[2], i666.op)
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i669 = data
  i668.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[0], i668.pass)
  i668.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[1], i668.fail)
  i668.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[2], i668.zFail)
  i668.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i669[3], i668.comp)
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i673 = data
  i672.name = i673[0]
  i672.value = i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i677 = data
  i676.passId = i677[0]
  i676.subShaderIndex = i677[1]
  var i679 = i677[2]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( i679[i + 0] );
  }
  i676.keywords = i678
  i676.vertexProgram = i677[3]
  i676.fragmentProgram = i677[4]
  i676.readDepth = !!i677[5]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'shader')
  i682.pass = i683[2]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i687 = data
  i686.name = i687[0]
  i686.type = i687[1]
  i686.value = new pc.Vec4( i687[2], i687[3], i687[4], i687[5] )
  i686.textureValue = i687[6]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i689 = data
  i688.name = i689[0]
  request.r(i689[1], i689[2], 0, i688, 'texture')
  i688.aabb = i689[3]
  i688.vertices = i689[4]
  i688.triangles = i689[5]
  i688.textureRect = UnityEngine.Rect.MinMaxRect(i689[6], i689[7], i689[8], i689[9])
  i688.packedRect = UnityEngine.Rect.MinMaxRect(i689[10], i689[11], i689[12], i689[13])
  i688.border = new pc.Vec4( i689[14], i689[15], i689[16], i689[17] )
  i688.transparency = i689[18]
  i688.bounds = i689[19]
  i688.pixelsPerUnit = i689[20]
  i688.textureWidth = i689[21]
  i688.textureHeight = i689[22]
  i688.nativeSize = new pc.Vec2( i689[23], i689[24] )
  i688.pivot = new pc.Vec2( i689[25], i689[26] )
  i688.textureRectOffset = new pc.Vec2( i689[27], i689[28] )
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i691 = data
  i690.name = i691[0]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i693 = data
  i692.name = i693[0]
  i692.wrapMode = i693[1]
  i692.isLooping = !!i693[2]
  i692.length = i693[3]
  var i695 = i693[4]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i695[i + 0]) );
  }
  i692.curves = i694
  var i697 = i693[5]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i697[i + 0]) );
  }
  i692.events = i696
  i692.halfPrecision = !!i693[6]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i701 = data
  i700.path = i701[0]
  i700.componentType = i701[1]
  i700.property = i701[2]
  i700.keys = i701[3]
  var i703 = i701[4]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i703[i + 0]) );
  }
  i700.objectReferenceKeys = i702
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i707 = data
  i706.functionName = i707[0]
  i706.floatParameter = i707[1]
  i706.intParameter = i707[2]
  i706.stringParameter = i707[3]
  request.r(i707[4], i707[5], 0, i706, 'objectReferenceParameter')
  i706.time = i707[6]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i711 = data
  i710.time = i711[0]
  request.r(i711[1], i711[2], 0, i710, 'value')
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i713 = data
  i712.name = i713[0]
  var i715 = i713[1]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i715[i + 0]) );
  }
  i712.states = i714
  var i717 = i713[2]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i717[i + 0]) );
  }
  i712.layers = i716
  var i719 = i713[3]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i719[i + 0]) );
  }
  i712.parameters = i718
  var i721 = i713[4]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( i721[i + 0] );
  }
  i712.animationClips = i720
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i725 = data
  i724.cycleOffset = i725[0]
  i724.cycleOffsetParameter = i725[1]
  i724.cycleOffsetParameterActive = !!i725[2]
  i724.mirror = !!i725[3]
  i724.mirrorParameter = i725[4]
  i724.mirrorParameterActive = !!i725[5]
  i724.motionId = i725[6]
  i724.nameHash = i725[7]
  i724.fullPathHash = i725[8]
  i724.speed = i725[9]
  i724.speedParameter = i725[10]
  i724.speedParameterActive = !!i725[11]
  i724.tag = i725[12]
  i724.name = i725[13]
  i724.writeDefaultValues = !!i725[14]
  var i727 = i725[15]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i727[i + 0]) );
  }
  i724.transitions = i726
  var i729 = i725[16]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i724.behaviours = i728
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i733 = data
  i732.fullPath = i733[0]
  i732.canTransitionToSelf = !!i733[1]
  i732.duration = i733[2]
  i732.exitTime = i733[3]
  i732.hasExitTime = !!i733[4]
  i732.hasFixedDuration = !!i733[5]
  i732.interruptionSource = i733[6]
  i732.offset = i733[7]
  i732.orderedInterruption = !!i733[8]
  i732.destinationStateNameHash = i733[9]
  i732.destinationStateMachineId = i733[10]
  i732.isExit = !!i733[11]
  i732.mute = !!i733[12]
  i732.solo = !!i733[13]
  var i735 = i733[14]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i735[i + 0]) );
  }
  i732.conditions = i734
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i739 = data
  i738.mode = i739[0]
  i738.parameter = i739[1]
  i738.threshold = i739[2]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i745 = data
  i744.blendingMode = i745[0]
  i744.defaultWeight = i745[1]
  i744.name = i745[2]
  i744.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i745[3], i744.stateMachine)
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i747 = data
  i746.id = i747[0]
  i746.defaultStateNameHash = i747[1]
  var i749 = i747[2]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i749[i + 0]) );
  }
  i746.entryTransitions = i748
  var i751 = i747[3]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i751[i + 0]) );
  }
  i746.anyStateTransitions = i750
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i755 = data
  i754.destinationStateNameHash = i755[0]
  i754.destinationStateMachineId = i755[1]
  i754.isExit = !!i755[2]
  i754.mute = !!i755[3]
  i754.solo = !!i755[4]
  var i757 = i755[5]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i757[i + 0]) );
  }
  i754.conditions = i756
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i761 = data
  i760.defaultBool = !!i761[0]
  i760.defaultFloat = i761[1]
  i760.defaultInt = i761[2]
  i760.name = i761[3]
  i760.nameHash = i761[4]
  i760.type = i761[5]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i763 = data
  var i765 = i763[0]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i765[i + 0]) );
  }
  i762.files = i764
  i762.componentToPrefabIds = i763[1]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i769 = data
  i768.path = i769[0]
  request.r(i769[1], i769[2], 0, i768, 'unityObject')
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i771 = data
  var i773 = i771[0]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i773[i + 0]) );
  }
  i770.scriptsExecutionOrder = i772
  var i775 = i771[1]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i775[i + 0]) );
  }
  i770.sortingLayers = i774
  var i777 = i771[2]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i777[i + 0]) );
  }
  i770.cullingLayers = i776
  i770.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i771[3], i770.timeSettings)
  i770.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i771[4], i770.physicsSettings)
  i770.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i771[5], i770.physics2DSettings)
  i770.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i771[6], i770.qualitySettings)
  i770.removeShadows = !!i771[7]
  i770.autoInstantiatePrefabs = !!i771[8]
  i770.enableAutoInstancing = !!i771[9]
  i770.lightmapEncodingQuality = i771[10]
  i770.desiredColorSpace = i771[11]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i781 = data
  i780.name = i781[0]
  i780.value = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i785 = data
  i784.id = i785[0]
  i784.name = i785[1]
  i784.value = i785[2]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i789 = data
  i788.id = i789[0]
  i788.name = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i791 = data
  i790.fixedDeltaTime = i791[0]
  i790.maximumDeltaTime = i791[1]
  i790.timeScale = i791[2]
  i790.maximumParticleTimestep = i791[3]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i793 = data
  i792.gravity = new pc.Vec3( i793[0], i793[1], i793[2] )
  i792.defaultSolverIterations = i793[3]
  i792.bounceThreshold = i793[4]
  i792.autoSyncTransforms = !!i793[5]
  i792.autoSimulation = !!i793[6]
  var i795 = i793[7]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i795[i + 0]) );
  }
  i792.collisionMatrix = i794
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i799 = data
  i798.enabled = !!i799[0]
  i798.layerId = i799[1]
  i798.otherLayerId = i799[2]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'material')
  i800.gravity = new pc.Vec2( i801[2], i801[3] )
  i800.positionIterations = i801[4]
  i800.velocityIterations = i801[5]
  i800.velocityThreshold = i801[6]
  i800.maxLinearCorrection = i801[7]
  i800.maxAngularCorrection = i801[8]
  i800.maxTranslationSpeed = i801[9]
  i800.maxRotationSpeed = i801[10]
  i800.timeToSleep = i801[11]
  i800.linearSleepTolerance = i801[12]
  i800.angularSleepTolerance = i801[13]
  i800.defaultContactOffset = i801[14]
  i800.autoSimulation = !!i801[15]
  i800.queriesHitTriggers = !!i801[16]
  i800.queriesStartInColliders = !!i801[17]
  i800.callbacksOnDisable = !!i801[18]
  i800.reuseCollisionCallbacks = !!i801[19]
  i800.autoSyncTransforms = !!i801[20]
  var i803 = i801[21]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i803[i + 0]) );
  }
  i800.collisionMatrix = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i807 = data
  i806.enabled = !!i807[0]
  i806.layerId = i807[1]
  i806.otherLayerId = i807[2]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i809 = data
  var i811 = i809[0]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i811[i + 0]) );
  }
  i808.qualityLevels = i810
  var i813 = i809[1]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( i813[i + 0] );
  }
  i808.names = i812
  i808.shadows = i809[2]
  i808.anisotropicFiltering = i809[3]
  i808.antiAliasing = i809[4]
  i808.lodBias = i809[5]
  i808.shadowCascades = i809[6]
  i808.shadowDistance = i809[7]
  i808.shadowmaskMode = i809[8]
  i808.shadowProjection = i809[9]
  i808.shadowResolution = i809[10]
  i808.softParticles = !!i809[11]
  i808.softVegetation = !!i809[12]
  i808.activeColorSpace = i809[13]
  i808.desiredColorSpace = i809[14]
  i808.masterTextureLimit = i809[15]
  i808.maxQueuedFrames = i809[16]
  i808.particleRaycastBudget = i809[17]
  i808.pixelLightCount = i809[18]
  i808.realtimeReflectionProbes = !!i809[19]
  i808.shadowCascade2Split = i809[20]
  i808.shadowCascade4Split = new pc.Vec3( i809[21], i809[22], i809[23] )
  i808.streamingMipmapsActive = !!i809[24]
  i808.vSyncCount = i809[25]
  i808.asyncUploadBufferSize = i809[26]
  i808.asyncUploadTimeSlice = i809[27]
  i808.billboardsFaceCameraPosition = !!i809[28]
  i808.shadowNearPlaneOffset = i809[29]
  i808.streamingMipmapsMemoryBudget = i809[30]
  i808.maximumLODLevel = i809[31]
  i808.streamingMipmapsAddAllCameras = !!i809[32]
  i808.streamingMipmapsMaxLevelReduction = i809[33]
  i808.streamingMipmapsRenderersPerFrame = i809[34]
  i808.resolutionScalingFixedDPIFactor = i809[35]
  i808.streamingMipmapsMaxFileIORequests = i809[36]
  i808.currentQualityLevel = i809[37]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i819 = data
  i818.weight = i819[0]
  i818.vertices = i819[1]
  i818.normals = i819[2]
  i818.tangents = i819[3]
  return i818
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[12],"61":[7],"62":[7],"63":[7],"64":[7],"65":[7],"66":[7],"67":[7],"68":[35],"69":[35],"70":[35],"71":[35],"72":[35],"73":[35],"74":[35],"75":[35],"76":[35],"77":[35],"78":[35],"79":[35],"80":[35],"81":[12],"82":[4],"83":[84],"85":[84],"16":[15],"86":[15],"87":[19,15],"88":[4],"89":[19,15],"90":[15],"91":[4,15],"92":[15,19],"93":[15],"94":[15],"95":[15],"22":[16],"20":[19,15],"96":[15],"18":[16],"97":[15],"98":[15],"99":[15],"100":[15],"101":[15],"102":[15],"103":[15],"104":[15],"105":[15],"106":[19,15],"107":[15],"108":[15],"109":[15],"110":[15],"111":[19,15],"112":[15],"113":[47],"114":[47],"48":[47],"115":[47],"116":[12],"117":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.MonoBehaviour","Brick","UnityEngine.Texture2D","UnityEngine.SphereCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.GraphicRaycaster","UltimateJoystick","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasGroup","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.UI.Button","ATManager2","Joint","Saw","UnityEngine.MeshCollider","UnityEngine.BoxCollider2D","UnityEngine.Rigidbody2D","Conveyor","UnityEngine.GameObject","RotateObject","SpawnCoin","LKManager","BrickManager","GameController","HandController","SoundController","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.29f1";

Deserializers.productName = "BucketTemp";

Deserializers.lunaInitializationTime = "07/25/2022 07:15:45";

Deserializers.lunaDaysRunning = "9.0";

Deserializers.lunaVersion = "3.12.0";

Deserializers.lunaSHA = "b6890f1f3fae46d6aab4282328914da691d139da";

Deserializers.creativeName = "MonsterCrusher-HieuNX-PLY2";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "3497";

Deserializers.runtimeAnalysisExcludedModules = "particle-system, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.BucketTemp";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "9dcc948a-8a46-4c97-b259-75a3c9cbd2fc";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

