var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.JointSpring' )
  var i371 = data
  i370.spring = i371[0]
  i370.damper = i371[1]
  i370.targetPosition = i371[2]
  return i370
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.JointMotor' )
  var i373 = data
  i372.m_TargetVelocity = i373[0]
  i372.m_Force = i373[1]
  i372.m_FreeSpin = i373[2]
  return i372
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.JointLimits' )
  var i375 = data
  i374.m_Min = i375[0]
  i374.m_Max = i375[1]
  i374.m_Bounciness = i375[2]
  i374.m_BounceMinVelocity = i375[3]
  i374.m_ContactDistance = i375[4]
  i374.minBounce = i375[5]
  i374.maxBounce = i375[6]
  return i374
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i376 = root || request.c( 'UnityEngine.JointDrive' )
  var i377 = data
  i376.m_PositionSpring = i377[0]
  i376.m_PositionDamper = i377[1]
  i376.m_MaximumForce = i377[2]
  return i376
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i379 = data
  i378.m_Spring = i379[0]
  i378.m_Damper = i379[1]
  return i378
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i380 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i381 = data
  i380.m_Limit = i381[0]
  i380.m_Bounciness = i381[1]
  i380.m_ContactDistance = i381[2]
  return i380
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i383 = data
  i382.m_ExtremumSlip = i383[0]
  i382.m_ExtremumValue = i383[1]
  i382.m_AsymptoteSlip = i383[2]
  i382.m_AsymptoteValue = i383[3]
  i382.m_Stiffness = i383[4]
  return i382
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i385 = data
  i384.m_LowerAngle = i385[0]
  i384.m_UpperAngle = i385[1]
  return i384
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i386 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i387 = data
  i386.m_MotorSpeed = i387[0]
  i386.m_MaximumMotorTorque = i387[1]
  return i386
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i388 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i389 = data
  i388.m_DampingRatio = i389[0]
  i388.m_Frequency = i389[1]
  i388.m_Angle = i389[2]
  return i388
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i391 = data
  i390.m_LowerTranslation = i391[0]
  i390.m_UpperTranslation = i391[1]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i392 = root || new pc.UnityMaterial()
  var i393 = data
  i392.name = i393[0]
  request.r(i393[1], i393[2], 0, i392, 'shader')
  i392.renderQueue = i393[3]
  i392.enableInstancing = !!i393[4]
  var i395 = i393[5]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i395[i + 0]) );
  }
  i392.floatParameters = i394
  var i397 = i393[6]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i397[i + 0]) );
  }
  i392.colorParameters = i396
  var i399 = i393[7]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i399[i + 0]) );
  }
  i392.vectorParameters = i398
  var i401 = i393[8]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i401[i + 0]) );
  }
  i392.textureParameters = i400
  var i403 = i393[9]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i403[i + 0]) );
  }
  i392.materialFlags = i402
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i407 = data
  i406.name = i407[0]
  i406.value = i407[1]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i411 = data
  i410.name = i411[0]
  i410.value = new pc.Color(i411[1], i411[2], i411[3], i411[4])
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i415 = data
  i414.name = i415[0]
  i414.value = new pc.Vec4( i415[1], i415[2], i415[3], i415[4] )
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i419 = data
  i418.name = i419[0]
  request.r(i419[1], i419[2], 0, i418, 'value')
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i423 = data
  i422.name = i423[0]
  i422.enabled = !!i423[1]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i425 = data
  i424.name = i425[0]
  i424.width = i425[1]
  i424.height = i425[2]
  i424.mipmapCount = i425[3]
  i424.anisoLevel = i425[4]
  i424.filterMode = i425[5]
  i424.hdr = !!i425[6]
  i424.format = i425[7]
  i424.wrapMode = i425[8]
  i424.alphaIsTransparency = !!i425[9]
  i424.alphaSource = i425[10]
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i427 = data
  i426.name = i427[0]
  i426.halfPrecision = !!i427[1]
  i426.vertexCount = i427[2]
  i426.aabb = i427[3]
  var i429 = i427[4]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( !!i429[i + 0] );
  }
  i426.streams = i428
  i426.vertices = i427[5]
  var i431 = i427[6]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i431[i + 0]) );
  }
  i426.subMeshes = i430
  var i433 = i427[7]
  var i432 = []
  for(var i = 0; i < i433.length; i += 16) {
    i432.push( new pc.Mat4().setData(i433[i + 0], i433[i + 1], i433[i + 2], i433[i + 3],  i433[i + 4], i433[i + 5], i433[i + 6], i433[i + 7],  i433[i + 8], i433[i + 9], i433[i + 10], i433[i + 11],  i433[i + 12], i433[i + 13], i433[i + 14], i433[i + 15]) );
  }
  i426.bindposes = i432
  var i435 = i427[8]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i435[i + 0]) );
  }
  i426.blendShapes = i434
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i441 = data
  i440.triangles = i441[0]
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i447 = data
  i446.name = i447[0]
  var i449 = i447[1]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i449[i + 0]) );
  }
  i446.frames = i448
  return i446
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i459 = data
  i458.bodyType = i459[0]
  request.r(i459[1], i459[2], 0, i458, 'material')
  i458.simulated = !!i459[3]
  i458.useAutoMass = !!i459[4]
  i458.mass = i459[5]
  i458.drag = i459[6]
  i458.angularDrag = i459[7]
  i458.gravityScale = i459[8]
  i458.collisionDetectionMode = i459[9]
  i458.sleepMode = i459[10]
  i458.constraints = i459[11]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i461 = data
  i460.anchor = new pc.Vec2( i461[0], i461[1] )
  i460.connectedAnchor = new pc.Vec2( i461[2], i461[3] )
  i460.autoConfigureConnectedAnchor = !!i461[4]
  i460.enabled = !!i461[5]
  i460.useLimits = !!i461[6]
  i460.limits = request.d('UnityEngine.JointAngleLimits2D', i461[7], i460.limits)
  i460.useMotor = !!i461[8]
  i460.motor = request.d('UnityEngine.JointMotor2D', i461[9], i460.motor)
  request.r(i461[10], i461[11], 0, i460, 'connectedBody')
  i460.breakForce = i461[12]
  i460.breakTorque = i461[13]
  i460.enableCollision = !!i461[14]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i463 = data
  i462.name = i463[0]
  i462.tag = i463[1]
  i462.enabled = !!i463[2]
  i462.isStatic = !!i463[3]
  i462.layer = i463[4]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i465 = data
  request.r(i465[0], i465[1], 0, i464, 'animatorController')
  i464.updateMode = i465[2]
  var i467 = i465[3]
  var i466 = []
  for(var i = 0; i < i467.length; i += 2) {
  request.r(i467[i + 0], i467[i + 1], 2, i466, '')
  }
  i464.humanBones = i466
  i464.enabled = !!i465[4]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i471 = data
  i470.enabled = !!i471[0]
  i470.isTrigger = !!i471[1]
  i470.usedByEffector = !!i471[2]
  i470.density = i471[3]
  i470.offset = new pc.Vec2( i471[4], i471[5] )
  request.r(i471[6], i471[7], 0, i470, 'material')
  i470.usedByComposite = !!i471[8]
  i470.autoTiling = !!i471[9]
  var i473 = i471[10]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
  var i475 = i473[i + 0]
  var i474 = []
  for(var i = 0; i < i475.length; i += 2) {
    i474.push( new pc.Vec2( i475[i + 0], i475[i + 1] ) );
  }
    i472.push( i474 );
  }
  i470.points = i472
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i483 = data
  i482.radius = i483[0]
  i482.enabled = !!i483[1]
  i482.isTrigger = !!i483[2]
  i482.usedByEffector = !!i483[3]
  i482.density = i483[4]
  i482.offset = new pc.Vec2( i483[5], i483[6] )
  request.r(i483[7], i483[8], 0, i482, 'material')
  return i482
}

Deserializers["Saw"] = function (request, data, root) {
  var i484 = root || request.c( 'Saw' )
  var i485 = data
  return i484
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

Deserializers["UltimateJoystick"] = function (request, data, root) {
  var i510 = root || request.c( 'UltimateJoystick' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'joystick')
  request.r(i511[2], i511[3], 0, i510, 'joystickSizeFolder')
  request.r(i511[4], i511[5], 0, i510, 'joystickBase')
  request.r(i511[6], i511[7], 0, i510, 'highlightBase')
  request.r(i511[8], i511[9], 0, i510, 'highlightJoystick')
  request.r(i511[10], i511[11], 0, i510, 'tensionAccentUp')
  request.r(i511[12], i511[13], 0, i510, 'tensionAccentDown')
  request.r(i511[14], i511[15], 0, i510, 'tensionAccentLeft')
  request.r(i511[16], i511[17], 0, i510, 'tensionAccentRight')
  i510.scalingAxis = i511[18]
  i510.anchor = i511[19]
  i510.joystickTouchSize = i511[20]
  i510.joystickSize = i511[21]
  i510.radiusModifier = i511[22]
  i510.dynamicPositioning = !!i511[23]
  i510.customTouchSize_X = i511[24]
  i510.customTouchSize_Y = i511[25]
  i510.customTouchSizePos_X = i511[26]
  i510.customTouchSizePos_Y = i511[27]
  i510.customSpacing_X = i511[28]
  i510.customSpacing_Y = i511[29]
  i510.gravity = i511[30]
  i510.extendRadius = !!i511[31]
  i510.axis = i511[32]
  i510.boundary = i511[33]
  i510.tapCountOption = i511[34]
  i510.tapCountDuration = i511[35]
  i510.targetTapCount = i511[36]
  i510.deadZone = i511[37]
  i510.disableVisuals = !!i511[38]
  i510.useFade = !!i511[39]
  i510.fadeUntouched = i511[40]
  i510.fadeTouched = i511[41]
  i510.fadeInDuration = i511[42]
  i510.fadeOutDuration = i511[43]
  i510.useAnimation = !!i511[44]
  request.r(i511[45], i511[46], 0, i510, 'joystickAnimator')
  i510.showHighlight = !!i511[47]
  i510.highlightColor = new pc.Color(i511[48], i511[49], i511[50], i511[51])
  i510.showTension = !!i511[52]
  i510.tensionColorNone = new pc.Color(i511[53], i511[54], i511[55], i511[56])
  i510.tensionColorFull = new pc.Color(i511[57], i511[58], i511[59], i511[60])
  i510.joystickName = i511[61]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i513 = data
  i512.m_Alpha = i513[0]
  i512.m_Interactable = !!i513[1]
  i512.m_BlocksRaycasts = !!i513[2]
  i512.m_IgnoreParentGroups = !!i513[3]
  i512.enabled = !!i513[4]
  return i512
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'm_FirstSelected')
  i514.m_sendNavigationEvents = !!i515[2]
  i514.m_DragThreshold = i515[3]
  return i514
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i517 = data
  i516.m_HorizontalAxis = i517[0]
  i516.m_VerticalAxis = i517[1]
  i516.m_SubmitButton = i517[2]
  i516.m_CancelButton = i517[3]
  i516.m_InputActionsPerSecond = i517[4]
  i516.m_RepeatDelay = i517[5]
  i516.m_ForceModuleActive = !!i517[6]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'sharedMesh')
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'additionalVertexStreams')
  i520.enabled = !!i521[2]
  request.r(i521[3], i521[4], 0, i520, 'sharedMaterial')
  var i523 = i521[5]
  var i522 = []
  for(var i = 0; i < i523.length; i += 2) {
  request.r(i523[i + 0], i523[i + 1], 2, i522, '')
  }
  i520.sharedMaterials = i522
  i520.receiveShadows = !!i521[6]
  i520.shadowCastingMode = i521[7]
  i520.sortingLayerID = i521[8]
  i520.sortingOrder = i521[9]
  i520.lightmapIndex = i521[10]
  i520.lightmapSceneIndex = i521[11]
  i520.lightmapScaleOffset = new pc.Vec4( i521[12], i521[13], i521[14], i521[15] )
  i520.lightProbeUsage = i521[16]
  i520.reflectionProbeUsage = i521[17]
  return i520
}

Deserializers["SawController"] = function (request, data, root) {
  var i524 = root || request.c( 'SawController' )
  var i525 = data
  i524.size = i525[0]
  i524.rotationSpeed = i525[1]
  i524.durability = i525[2]
  i524.movementSpeed = i525[3]
  i524.mass = i525[4]
  return i524
}

Deserializers["ArmController"] = function (request, data, root) {
  var i526 = root || request.c( 'ArmController' )
  var i527 = data
  i526.joints = i527[0]
  i526.initPosition = new pc.Vec3( i527[1], i527[2], i527[3] )
  request.r(i527[4], i527[5], 0, i526, 'jointPrefab')
  request.r(i527[6], i527[7], 0, i526, 'sawPrefab')
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i529 = data
  i528.usedByComposite = !!i529[0]
  i528.autoTiling = !!i529[1]
  i528.size = new pc.Vec2( i529[2], i529[3] )
  i528.edgeRadius = i529[4]
  i528.enabled = !!i529[5]
  i528.isTrigger = !!i529[6]
  i528.usedByEffector = !!i529[7]
  i528.density = i529[8]
  i528.offset = new pc.Vec2( i529[9], i529[10] )
  request.r(i529[11], i529[12], 0, i528, 'material')
  return i528
}

Deserializers["Conveyor"] = function (request, data, root) {
  var i530 = root || request.c( 'Conveyor' )
  var i531 = data
  request.r(i531[0], i531[1], 0, i530, 'conveyor')
  i530.length = i531[2]
  return i530
}

Deserializers["BucketCrusher1"] = function (request, data, root) {
  var i532 = root || request.c( 'BucketCrusher1' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'gameController')
  request.r(i533[2], i533[3], 0, i532, 'armController')
  request.r(i533[4], i533[5], 0, i532, 'sawController')
  request.r(i533[6], i533[7], 0, i532, 'conveyor')
  return i532
}

Deserializers["GameController"] = function (request, data, root) {
  var i534 = root || request.c( 'GameController' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'ultiJoyStick')
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i537 = data
  i536.ambientIntensity = i537[0]
  i536.reflectionIntensity = i537[1]
  i536.ambientMode = i537[2]
  i536.ambientLight = new pc.Color(i537[3], i537[4], i537[5], i537[6])
  i536.ambientSkyColor = new pc.Color(i537[7], i537[8], i537[9], i537[10])
  i536.ambientGroundColor = new pc.Color(i537[11], i537[12], i537[13], i537[14])
  i536.ambientEquatorColor = new pc.Color(i537[15], i537[16], i537[17], i537[18])
  i536.fogColor = new pc.Color(i537[19], i537[20], i537[21], i537[22])
  i536.fogEndDistance = i537[23]
  i536.fogStartDistance = i537[24]
  i536.fogDensity = i537[25]
  i536.fog = !!i537[26]
  request.r(i537[27], i537[28], 0, i536, 'skybox')
  i536.fogMode = i537[29]
  var i539 = i537[30]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i539[i + 0]) );
  }
  i536.lightmaps = i538
  i536.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i537[31], i536.lightProbes)
  i536.lightmapsMode = i537[32]
  i536.environmentLightingMode = i537[33]
  i536.ambientProbe = new pc.SphericalHarmonicsL2(i537[34])
  request.r(i537[35], i537[36], 0, i536, 'customReflection')
  request.r(i537[37], i537[38], 0, i536, 'defaultReflection')
  i536.defaultReflectionMode = i537[39]
  i536.defaultReflectionResolution = i537[40]
  i536.sunLightObjectId = i537[41]
  i536.pixelLightCount = i537[42]
  i536.defaultReflectionHDR = !!i537[43]
  i536.hasLightDataAsset = !!i537[44]
  i536.hasManualGenerate = !!i537[45]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'lightmapColor')
  request.r(i543[2], i543[3], 0, i542, 'lightmapDirection')
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i544 = root || new UnityEngine.LightProbes()
  var i545 = data
  return i544
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i552 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i553 = data
  i552.useSafeMode = !!i553[0]
  i552.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i553[1], i552.safeModeOptions)
  i552.timeScale = i553[2]
  i552.useSmoothDeltaTime = !!i553[3]
  i552.maxSmoothUnscaledTime = i553[4]
  i552.rewindCallbackMode = i553[5]
  i552.showUnityEditorReport = !!i553[6]
  i552.logBehaviour = i553[7]
  i552.drawGizmos = !!i553[8]
  i552.defaultRecyclable = !!i553[9]
  i552.defaultAutoPlay = i553[10]
  i552.defaultUpdateType = i553[11]
  i552.defaultTimeScaleIndependent = !!i553[12]
  i552.defaultEaseType = i553[13]
  i552.defaultEaseOvershootOrAmplitude = i553[14]
  i552.defaultEasePeriod = i553[15]
  i552.defaultAutoKill = !!i553[16]
  i552.defaultLoopType = i553[17]
  i552.debugMode = !!i553[18]
  i552.debugStoreTargetId = !!i553[19]
  i552.showPreviewPanel = !!i553[20]
  i552.storeSettingsLocation = i553[21]
  i552.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i553[22], i552.modules)
  i552.createASMDEF = !!i553[23]
  i552.showPlayingTweens = !!i553[24]
  i552.showPausedTweens = !!i553[25]
  return i552
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i554 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i555 = data
  i554.logBehaviour = i555[0]
  i554.nestedTweenFailureBehaviour = i555[1]
  return i554
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i556 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i557 = data
  i556.showPanel = !!i557[0]
  i556.audioEnabled = !!i557[1]
  i556.physicsEnabled = !!i557[2]
  i556.physics2DEnabled = !!i557[3]
  i556.spriteEnabled = !!i557[4]
  i556.uiEnabled = !!i557[5]
  i556.textMeshProEnabled = !!i557[6]
  i556.tk2DEnabled = !!i557[7]
  i556.deAudioEnabled = !!i557[8]
  i556.deUnityExtendedEnabled = !!i557[9]
  i556.epoOutlineEnabled = !!i557[10]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i559 = data
  var i561 = i559[0]
  var i560 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i561.length; i += 1) {
    i560.add(i561[i + 0]);
  }
  i558.invalidShaderVariants = i560
  i558.name = i559[1]
  i558.guid = i559[2]
  var i563 = i559[3]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( i563[i + 0] );
  }
  i558.shaderDefinedKeywords = i562
  var i565 = i559[4]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i565[i + 0]) );
  }
  i558.passes = i564
  var i567 = i559[5]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i567[i + 0]) );
  }
  i558.usePasses = i566
  var i569 = i559[6]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i569[i + 0]) );
  }
  i558.defaultParameterValues = i568
  request.r(i559[7], i559[8], 0, i558, 'unityFallbackShader')
  i558.readDepth = !!i559[9]
  i558.isCreatedByShaderGraph = !!i559[10]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i576 = root || new pc.UnityShaderPass()
  var i577 = data
  i576.id = i577[0]
  i576.subShaderIndex = i577[1]
  i576.name = i577[2]
  i576.passType = i577[3]
  i576.usePass = !!i577[4]
  i576.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i577[5], i576.zTest)
  i576.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i577[6], i576.zWrite)
  i576.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i577[7], i576.culling)
  i576.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i577[8], i576.blending)
  i576.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i577[9], i576.alphaBlending)
  i576.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i577[10], i576.colorWriteMask)
  i576.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i577[11], i576.offsetUnits)
  i576.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i577[12], i576.offsetFactor)
  i576.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i577[13], i576.stencilRef)
  i576.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i577[14], i576.stencilReadMask)
  i576.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i577[15], i576.stencilWriteMask)
  i576.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i577[16], i576.stencilOp)
  i576.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i577[17], i576.stencilOpFront)
  i576.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i577[18], i576.stencilOpBack)
  var i579 = i577[19]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i579[i + 0]) );
  }
  i576.tags = i578
  var i581 = i577[20]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( i581[i + 0] );
  }
  i576.passDefinedKeywords = i580
  var i583 = i577[21]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i583[i + 0]) );
  }
  i576.variants = i582
  var i585 = i577[22]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i585[i + 0]) );
  }
  i576.excludedVariants = i584
  i576.hasDepthReader = !!i577[23]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i587 = data
  i586.val = i587[0]
  i586.name = i587[1]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i589 = data
  i588.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[0], i588.src)
  i588.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[1], i588.dst)
  i588.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i589[2], i588.op)
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i591 = data
  i590.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[0], i590.pass)
  i590.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[1], i590.fail)
  i590.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[2], i590.zFail)
  i590.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[3], i590.comp)
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i595 = data
  i594.name = i595[0]
  i594.value = i595[1]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i599 = data
  i598.passId = i599[0]
  i598.subShaderIndex = i599[1]
  var i601 = i599[2]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( i601[i + 0] );
  }
  i598.keywords = i600
  i598.vertexProgram = i599[3]
  i598.fragmentProgram = i599[4]
  i598.readDepth = !!i599[5]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'shader')
  i604.pass = i605[2]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i609 = data
  i608.name = i609[0]
  i608.type = i609[1]
  i608.value = new pc.Vec4( i609[2], i609[3], i609[4], i609[5] )
  i608.textureValue = i609[6]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i611 = data
  i610.name = i611[0]
  request.r(i611[1], i611[2], 0, i610, 'texture')
  i610.aabb = i611[3]
  i610.vertices = i611[4]
  i610.triangles = i611[5]
  i610.textureRect = UnityEngine.Rect.MinMaxRect(i611[6], i611[7], i611[8], i611[9])
  i610.packedRect = UnityEngine.Rect.MinMaxRect(i611[10], i611[11], i611[12], i611[13])
  i610.border = new pc.Vec4( i611[14], i611[15], i611[16], i611[17] )
  i610.transparency = i611[18]
  i610.bounds = i611[19]
  i610.pixelsPerUnit = i611[20]
  i610.textureWidth = i611[21]
  i610.textureHeight = i611[22]
  i610.nativeSize = new pc.Vec2( i611[23], i611[24] )
  i610.pivot = new pc.Vec2( i611[25], i611[26] )
  i610.textureRectOffset = new pc.Vec2( i611[27], i611[28] )
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i613 = data
  i612.name = i613[0]
  i612.wrapMode = i613[1]
  i612.isLooping = !!i613[2]
  i612.length = i613[3]
  var i615 = i613[4]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i615[i + 0]) );
  }
  i612.curves = i614
  var i617 = i613[5]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i617[i + 0]) );
  }
  i612.events = i616
  i612.halfPrecision = !!i613[6]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i621 = data
  i620.path = i621[0]
  i620.componentType = i621[1]
  i620.property = i621[2]
  i620.keys = i621[3]
  var i623 = i621[4]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i623[i + 0]) );
  }
  i620.objectReferenceKeys = i622
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i627 = data
  i626.functionName = i627[0]
  i626.floatParameter = i627[1]
  i626.intParameter = i627[2]
  i626.stringParameter = i627[3]
  request.r(i627[4], i627[5], 0, i626, 'objectReferenceParameter')
  i626.time = i627[6]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i631 = data
  i630.time = i631[0]
  request.r(i631[1], i631[2], 0, i630, 'value')
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i633 = data
  i632.name = i633[0]
  var i635 = i633[1]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i635[i + 0]) );
  }
  i632.states = i634
  var i637 = i633[2]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i637[i + 0]) );
  }
  i632.layers = i636
  var i639 = i633[3]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i639[i + 0]) );
  }
  i632.parameters = i638
  var i641 = i633[4]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( i641[i + 0] );
  }
  i632.animationClips = i640
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i645 = data
  i644.cycleOffset = i645[0]
  i644.cycleOffsetParameter = i645[1]
  i644.cycleOffsetParameterActive = !!i645[2]
  i644.mirror = !!i645[3]
  i644.mirrorParameter = i645[4]
  i644.mirrorParameterActive = !!i645[5]
  i644.motionId = i645[6]
  i644.nameHash = i645[7]
  i644.fullPathHash = i645[8]
  i644.speed = i645[9]
  i644.speedParameter = i645[10]
  i644.speedParameterActive = !!i645[11]
  i644.tag = i645[12]
  i644.name = i645[13]
  i644.writeDefaultValues = !!i645[14]
  var i647 = i645[15]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i647[i + 0]) );
  }
  i644.transitions = i646
  var i649 = i645[16]
  var i648 = []
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 2, i648, '')
  }
  i644.behaviours = i648
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i653 = data
  i652.fullPath = i653[0]
  i652.canTransitionToSelf = !!i653[1]
  i652.duration = i653[2]
  i652.exitTime = i653[3]
  i652.hasExitTime = !!i653[4]
  i652.hasFixedDuration = !!i653[5]
  i652.interruptionSource = i653[6]
  i652.offset = i653[7]
  i652.orderedInterruption = !!i653[8]
  i652.destinationStateNameHash = i653[9]
  i652.destinationStateMachineId = i653[10]
  i652.isExit = !!i653[11]
  i652.mute = !!i653[12]
  i652.solo = !!i653[13]
  var i655 = i653[14]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i655[i + 0]) );
  }
  i652.conditions = i654
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i659 = data
  i658.mode = i659[0]
  i658.parameter = i659[1]
  i658.threshold = i659[2]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i665 = data
  i664.blendingMode = i665[0]
  i664.defaultWeight = i665[1]
  i664.name = i665[2]
  i664.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i665[3], i664.stateMachine)
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i667 = data
  i666.id = i667[0]
  i666.defaultStateNameHash = i667[1]
  var i669 = i667[2]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i669[i + 0]) );
  }
  i666.entryTransitions = i668
  var i671 = i667[3]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i671[i + 0]) );
  }
  i666.anyStateTransitions = i670
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i675 = data
  i674.destinationStateNameHash = i675[0]
  i674.destinationStateMachineId = i675[1]
  i674.isExit = !!i675[2]
  i674.mute = !!i675[3]
  i674.solo = !!i675[4]
  var i677 = i675[5]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i677[i + 0]) );
  }
  i674.conditions = i676
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i681 = data
  i680.defaultBool = !!i681[0]
  i680.defaultFloat = i681[1]
  i680.defaultInt = i681[2]
  i680.name = i681[3]
  i680.nameHash = i681[4]
  i680.type = i681[5]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i683 = data
  var i685 = i683[0]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i685[i + 0]) );
  }
  i682.files = i684
  i682.componentToPrefabIds = i683[1]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i689 = data
  i688.path = i689[0]
  request.r(i689[1], i689[2], 0, i688, 'unityObject')
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i691 = data
  var i693 = i691[0]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i693[i + 0]) );
  }
  i690.scriptsExecutionOrder = i692
  var i695 = i691[1]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i695[i + 0]) );
  }
  i690.sortingLayers = i694
  var i697 = i691[2]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i697[i + 0]) );
  }
  i690.cullingLayers = i696
  i690.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i691[3], i690.timeSettings)
  i690.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i691[4], i690.physicsSettings)
  i690.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i691[5], i690.physics2DSettings)
  i690.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i691[6], i690.qualitySettings)
  i690.removeShadows = !!i691[7]
  i690.autoInstantiatePrefabs = !!i691[8]
  i690.enableAutoInstancing = !!i691[9]
  i690.lightmapEncodingQuality = i691[10]
  i690.desiredColorSpace = i691[11]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i701 = data
  i700.name = i701[0]
  i700.value = i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i705 = data
  i704.id = i705[0]
  i704.name = i705[1]
  i704.value = i705[2]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i709 = data
  i708.id = i709[0]
  i708.name = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i711 = data
  i710.fixedDeltaTime = i711[0]
  i710.maximumDeltaTime = i711[1]
  i710.timeScale = i711[2]
  i710.maximumParticleTimestep = i711[3]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i713 = data
  i712.gravity = new pc.Vec3( i713[0], i713[1], i713[2] )
  i712.defaultSolverIterations = i713[3]
  i712.bounceThreshold = i713[4]
  i712.autoSyncTransforms = !!i713[5]
  i712.autoSimulation = !!i713[6]
  var i715 = i713[7]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i715[i + 0]) );
  }
  i712.collisionMatrix = i714
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i719 = data
  i718.enabled = !!i719[0]
  i718.layerId = i719[1]
  i718.otherLayerId = i719[2]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'material')
  i720.gravity = new pc.Vec2( i721[2], i721[3] )
  i720.positionIterations = i721[4]
  i720.velocityIterations = i721[5]
  i720.velocityThreshold = i721[6]
  i720.maxLinearCorrection = i721[7]
  i720.maxAngularCorrection = i721[8]
  i720.maxTranslationSpeed = i721[9]
  i720.maxRotationSpeed = i721[10]
  i720.timeToSleep = i721[11]
  i720.linearSleepTolerance = i721[12]
  i720.angularSleepTolerance = i721[13]
  i720.defaultContactOffset = i721[14]
  i720.autoSimulation = !!i721[15]
  i720.queriesHitTriggers = !!i721[16]
  i720.queriesStartInColliders = !!i721[17]
  i720.callbacksOnDisable = !!i721[18]
  i720.reuseCollisionCallbacks = !!i721[19]
  i720.autoSyncTransforms = !!i721[20]
  var i723 = i721[21]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i723[i + 0]) );
  }
  i720.collisionMatrix = i722
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i727 = data
  i726.enabled = !!i727[0]
  i726.layerId = i727[1]
  i726.otherLayerId = i727[2]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i729 = data
  var i731 = i729[0]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i731[i + 0]) );
  }
  i728.qualityLevels = i730
  var i733 = i729[1]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( i733[i + 0] );
  }
  i728.names = i732
  i728.shadows = i729[2]
  i728.anisotropicFiltering = i729[3]
  i728.antiAliasing = i729[4]
  i728.lodBias = i729[5]
  i728.shadowCascades = i729[6]
  i728.shadowDistance = i729[7]
  i728.shadowmaskMode = i729[8]
  i728.shadowProjection = i729[9]
  i728.shadowResolution = i729[10]
  i728.softParticles = !!i729[11]
  i728.softVegetation = !!i729[12]
  i728.activeColorSpace = i729[13]
  i728.desiredColorSpace = i729[14]
  i728.masterTextureLimit = i729[15]
  i728.maxQueuedFrames = i729[16]
  i728.particleRaycastBudget = i729[17]
  i728.pixelLightCount = i729[18]
  i728.realtimeReflectionProbes = !!i729[19]
  i728.shadowCascade2Split = i729[20]
  i728.shadowCascade4Split = new pc.Vec3( i729[21], i729[22], i729[23] )
  i728.streamingMipmapsActive = !!i729[24]
  i728.vSyncCount = i729[25]
  i728.asyncUploadBufferSize = i729[26]
  i728.asyncUploadTimeSlice = i729[27]
  i728.billboardsFaceCameraPosition = !!i729[28]
  i728.shadowNearPlaneOffset = i729[29]
  i728.streamingMipmapsMemoryBudget = i729[30]
  i728.maximumLODLevel = i729[31]
  i728.streamingMipmapsAddAllCameras = !!i729[32]
  i728.streamingMipmapsMaxLevelReduction = i729[33]
  i728.streamingMipmapsRenderersPerFrame = i729[34]
  i728.resolutionScalingFixedDPIFactor = i729[35]
  i728.streamingMipmapsMaxFileIORequests = i729[36]
  i728.currentQualityLevel = i729[37]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i739 = data
  i738.weight = i739[0]
  i738.vertices = i739[1]
  i738.normals = i739[2]
  i738.tangents = i739[3]
  return i738
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"anchor":0,"connectedAnchor":2,"autoConfigureConnectedAnchor":4,"enabled":5,"useLimits":6,"limits":7,"useMotor":8,"motor":9,"connectedBody":10,"breakForce":12,"breakTorque":13,"enableCollision":14},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[48],"49":[14],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[51],"58":[6],"59":[6],"60":[6],"61":[6],"62":[6],"63":[6],"7":[6],"64":[6],"65":[6],"66":[6],"67":[6],"68":[6],"69":[6],"70":[14],"71":[30],"72":[73],"74":[73],"18":[17],"75":[17],"76":[22,17],"77":[30],"78":[22,17],"79":[17],"80":[30,17],"81":[17,22],"82":[17],"83":[17],"84":[17],"21":[18],"23":[22,17],"85":[17],"20":[18],"86":[17],"87":[17],"88":[17],"89":[17],"90":[17],"91":[17],"92":[17],"93":[17],"94":[17],"95":[22,17],"96":[17],"97":[17],"98":[17],"99":[17],"100":[22,17],"101":[17],"102":[26],"103":[26],"27":[26],"104":[26],"105":[14],"106":[14]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Rigidbody2D","UnityEngine.HingeJoint2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.PolygonCollider2D","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","Saw","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UltimateJoystick","UnityEngine.CanvasGroup","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","SawController","ArmController","UnityEngine.GameObject","UnityEngine.BoxCollider2D","Conveyor","BucketCrusher1","GameController","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

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

Deserializers.buildID = "9a9d837c-1077-4316-a1cf-fffc34dc7298";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

