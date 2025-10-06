var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4010 = root || request.c( 'UnityEngine.JointSpring' )
  var i4011 = data
  i4010.spring = i4011[0]
  i4010.damper = i4011[1]
  i4010.targetPosition = i4011[2]
  return i4010
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4012 = root || request.c( 'UnityEngine.JointMotor' )
  var i4013 = data
  i4012.m_TargetVelocity = i4013[0]
  i4012.m_Force = i4013[1]
  i4012.m_FreeSpin = i4013[2]
  return i4012
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4014 = root || request.c( 'UnityEngine.JointLimits' )
  var i4015 = data
  i4014.m_Min = i4015[0]
  i4014.m_Max = i4015[1]
  i4014.m_Bounciness = i4015[2]
  i4014.m_BounceMinVelocity = i4015[3]
  i4014.m_ContactDistance = i4015[4]
  i4014.minBounce = i4015[5]
  i4014.maxBounce = i4015[6]
  return i4014
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4016 = root || request.c( 'UnityEngine.JointDrive' )
  var i4017 = data
  i4016.m_PositionSpring = i4017[0]
  i4016.m_PositionDamper = i4017[1]
  i4016.m_MaximumForce = i4017[2]
  i4016.m_UseAcceleration = i4017[3]
  return i4016
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4018 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4019 = data
  i4018.m_Spring = i4019[0]
  i4018.m_Damper = i4019[1]
  return i4018
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4020 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4021 = data
  i4020.m_Limit = i4021[0]
  i4020.m_Bounciness = i4021[1]
  i4020.m_ContactDistance = i4021[2]
  return i4020
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4022 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4023 = data
  i4022.m_ExtremumSlip = i4023[0]
  i4022.m_ExtremumValue = i4023[1]
  i4022.m_AsymptoteSlip = i4023[2]
  i4022.m_AsymptoteValue = i4023[3]
  i4022.m_Stiffness = i4023[4]
  return i4022
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4024 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4025 = data
  i4024.m_LowerAngle = i4025[0]
  i4024.m_UpperAngle = i4025[1]
  return i4024
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4026 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4027 = data
  i4026.m_MotorSpeed = i4027[0]
  i4026.m_MaximumMotorTorque = i4027[1]
  return i4026
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4028 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4029 = data
  i4028.m_DampingRatio = i4029[0]
  i4028.m_Frequency = i4029[1]
  i4028.m_Angle = i4029[2]
  return i4028
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4030 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4031 = data
  i4030.m_LowerTranslation = i4031[0]
  i4030.m_UpperTranslation = i4031[1]
  return i4030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4033 = data
  i4032.position = new pc.Vec3( i4033[0], i4033[1], i4033[2] )
  i4032.scale = new pc.Vec3( i4033[3], i4033[4], i4033[5] )
  i4032.rotation = new pc.Quat(i4033[6], i4033[7], i4033[8], i4033[9])
  return i4032
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i4034 = root || request.c( 'PlayerController' )
  var i4035 = data
  i4034.moveSpeed = i4035[0]
  i4034.rayDistance = i4035[1]
  i4034.obstacleMask = UnityEngine.LayerMask.FromIntegerValue( i4035[2] )
  request.r(i4035[3], i4035[4], 0, i4034, '_playerBaggage')
  request.r(i4035[5], i4035[6], 0, i4034, 'mainCamera')
  request.r(i4035[7], i4035[8], 0, i4034, 'joystick')
  request.r(i4035[9], i4035[10], 0, i4034, 'trailParticle')
  return i4034
}

Deserializers["PlayerStateMachine"] = function (request, data, root) {
  var i4036 = root || request.c( 'PlayerStateMachine' )
  var i4037 = data
  request.r(i4037[0], i4037[1], 0, i4036, 'playerController')
  i4036.CurrentStateType = i4037[2]
  return i4036
}

Deserializers["PlayerInteraction"] = function (request, data, root) {
  var i4038 = root || request.c( 'PlayerInteraction' )
  var i4039 = data
  return i4038
}

Deserializers["PlayerMoney"] = function (request, data, root) {
  var i4040 = root || request.c( 'PlayerMoney' )
  var i4041 = data
  i4040.jumpDuration = i4041[0]
  return i4040
}

Deserializers["PlayerBaggage"] = function (request, data, root) {
  var i4042 = root || request.c( 'PlayerBaggage' )
  var i4043 = data
  request.r(i4043[0], i4043[1], 0, i4042, 'playerHandPoint')
  var i4045 = i4043[2]
  var i4044 = new (System.Collections.Generic.List$1(Bridge.ns('Baggage')))
  for(var i = 0; i < i4045.length; i += 2) {
  request.r(i4045[i + 0], i4045[i + 1], 1, i4044, '')
  }
  i4042.baggageStack = i4044
  i4042.additionalRotation = new pc.Vec3( i4043[3], i4043[4], i4043[5] )
  i4042.baseMoveOffset = i4043[6]
  i4042.moveDuration = i4043[7]
  return i4042
}

Deserializers["PlayerAnimation"] = function (request, data, root) {
  var i4048 = root || request.c( 'PlayerAnimation' )
  var i4049 = data
  request.r(i4049[0], i4049[1], 0, i4048, '_playerAnimator')
  return i4048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i4050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i4051 = data
  i4050.mass = i4051[0]
  i4050.drag = i4051[1]
  i4050.angularDrag = i4051[2]
  i4050.useGravity = !!i4051[3]
  i4050.isKinematic = !!i4051[4]
  i4050.constraints = i4051[5]
  i4050.maxAngularVelocity = i4051[6]
  i4050.collisionDetectionMode = i4051[7]
  i4050.interpolation = i4051[8]
  return i4050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i4052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i4053 = data
  i4052.center = new pc.Vec3( i4053[0], i4053[1], i4053[2] )
  i4052.radius = i4053[3]
  i4052.height = i4053[4]
  i4052.direction = i4053[5]
  i4052.enabled = !!i4053[6]
  i4052.isTrigger = !!i4053[7]
  request.r(i4053[8], i4053[9], 0, i4052, 'material')
  return i4052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4055 = data
  request.r(i4055[0], i4055[1], 0, i4054, 'animatorController')
  request.r(i4055[2], i4055[3], 0, i4054, 'avatar')
  i4054.updateMode = i4055[4]
  i4054.hasTransformHierarchy = !!i4055[5]
  i4054.applyRootMotion = !!i4055[6]
  var i4057 = i4055[7]
  var i4056 = []
  for(var i = 0; i < i4057.length; i += 2) {
  request.r(i4057[i + 0], i4057[i + 1], 2, i4056, '')
  }
  i4054.humanBones = i4056
  i4054.enabled = !!i4055[8]
  return i4054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i4060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i4061 = data
  request.r(i4061[0], i4061[1], 0, i4060, 'sharedMesh')
  var i4063 = i4061[2]
  var i4062 = []
  for(var i = 0; i < i4063.length; i += 2) {
  request.r(i4063[i + 0], i4063[i + 1], 2, i4062, '')
  }
  i4060.bones = i4062
  i4060.updateWhenOffscreen = !!i4061[3]
  i4060.localBounds = i4061[4]
  request.r(i4061[5], i4061[6], 0, i4060, 'rootBone')
  var i4065 = i4061[7]
  var i4064 = []
  for(var i = 0; i < i4065.length; i += 1) {
    i4064.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i4065[i + 0]) );
  }
  i4060.blendShapesWeights = i4064
  i4060.enabled = !!i4061[8]
  request.r(i4061[9], i4061[10], 0, i4060, 'sharedMaterial')
  var i4067 = i4061[11]
  var i4066 = []
  for(var i = 0; i < i4067.length; i += 2) {
  request.r(i4067[i + 0], i4067[i + 1], 2, i4066, '')
  }
  i4060.sharedMaterials = i4066
  i4060.receiveShadows = !!i4061[12]
  i4060.shadowCastingMode = i4061[13]
  i4060.sortingLayerID = i4061[14]
  i4060.sortingOrder = i4061[15]
  i4060.lightmapIndex = i4061[16]
  i4060.lightmapSceneIndex = i4061[17]
  i4060.lightmapScaleOffset = new pc.Vec4( i4061[18], i4061[19], i4061[20], i4061[21] )
  i4060.lightProbeUsage = i4061[22]
  i4060.reflectionProbeUsage = i4061[23]
  return i4060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i4070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i4071 = data
  i4070.weight = i4071[0]
  return i4070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4075 = data
  i4074.name = i4075[0]
  i4074.tagId = i4075[1]
  i4074.enabled = !!i4075[2]
  i4074.isStatic = !!i4075[3]
  i4074.layer = i4075[4]
  return i4074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4077 = data
  i4076.color = new pc.Color(i4077[0], i4077[1], i4077[2], i4077[3])
  request.r(i4077[4], i4077[5], 0, i4076, 'sprite')
  i4076.flipX = !!i4077[6]
  i4076.flipY = !!i4077[7]
  i4076.drawMode = i4077[8]
  i4076.size = new pc.Vec2( i4077[9], i4077[10] )
  i4076.tileMode = i4077[11]
  i4076.adaptiveModeThreshold = i4077[12]
  i4076.maskInteraction = i4077[13]
  i4076.spriteSortPoint = i4077[14]
  i4076.enabled = !!i4077[15]
  request.r(i4077[16], i4077[17], 0, i4076, 'sharedMaterial')
  var i4079 = i4077[18]
  var i4078 = []
  for(var i = 0; i < i4079.length; i += 2) {
  request.r(i4079[i + 0], i4079[i + 1], 2, i4078, '')
  }
  i4076.sharedMaterials = i4078
  i4076.receiveShadows = !!i4077[19]
  i4076.shadowCastingMode = i4077[20]
  i4076.sortingLayerID = i4077[21]
  i4076.sortingOrder = i4077[22]
  i4076.lightmapIndex = i4077[23]
  i4076.lightmapSceneIndex = i4077[24]
  i4076.lightmapScaleOffset = new pc.Vec4( i4077[25], i4077[26], i4077[27], i4077[28] )
  i4076.lightProbeUsage = i4077[29]
  i4076.reflectionProbeUsage = i4077[30]
  return i4076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4081 = data
  i4080.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4081[0], i4080.main)
  i4080.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4081[1], i4080.colorBySpeed)
  i4080.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4081[2], i4080.colorOverLifetime)
  i4080.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4081[3], i4080.emission)
  i4080.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4081[4], i4080.rotationBySpeed)
  i4080.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4081[5], i4080.rotationOverLifetime)
  i4080.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4081[6], i4080.shape)
  i4080.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4081[7], i4080.sizeBySpeed)
  i4080.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4081[8], i4080.sizeOverLifetime)
  i4080.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4081[9], i4080.textureSheetAnimation)
  i4080.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4081[10], i4080.velocityOverLifetime)
  i4080.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4081[11], i4080.noise)
  i4080.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4081[12], i4080.inheritVelocity)
  i4080.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4081[13], i4080.forceOverLifetime)
  i4080.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4081[14], i4080.limitVelocityOverLifetime)
  i4080.useAutoRandomSeed = !!i4081[15]
  i4080.randomSeed = i4081[16]
  return i4080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4082 = root || new pc.ParticleSystemMain()
  var i4083 = data
  i4082.duration = i4083[0]
  i4082.loop = !!i4083[1]
  i4082.prewarm = !!i4083[2]
  i4082.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4083[3], i4082.startDelay)
  i4082.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4083[4], i4082.startLifetime)
  i4082.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4083[5], i4082.startSpeed)
  i4082.startSize3D = !!i4083[6]
  i4082.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4083[7], i4082.startSizeX)
  i4082.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4083[8], i4082.startSizeY)
  i4082.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4083[9], i4082.startSizeZ)
  i4082.startRotation3D = !!i4083[10]
  i4082.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4083[11], i4082.startRotationX)
  i4082.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4083[12], i4082.startRotationY)
  i4082.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4083[13], i4082.startRotationZ)
  i4082.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4083[14], i4082.startColor)
  i4082.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4083[15], i4082.gravityModifier)
  i4082.simulationSpace = i4083[16]
  request.r(i4083[17], i4083[18], 0, i4082, 'customSimulationSpace')
  i4082.simulationSpeed = i4083[19]
  i4082.useUnscaledTime = !!i4083[20]
  i4082.scalingMode = i4083[21]
  i4082.playOnAwake = !!i4083[22]
  i4082.maxParticles = i4083[23]
  i4082.emitterVelocityMode = i4083[24]
  i4082.stopAction = i4083[25]
  return i4082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4084 = root || new pc.MinMaxCurve()
  var i4085 = data
  i4084.mode = i4085[0]
  i4084.curveMin = new pc.AnimationCurve( { keys_flow: i4085[1] } )
  i4084.curveMax = new pc.AnimationCurve( { keys_flow: i4085[2] } )
  i4084.curveMultiplier = i4085[3]
  i4084.constantMin = i4085[4]
  i4084.constantMax = i4085[5]
  return i4084
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4086 = root || new pc.MinMaxGradient()
  var i4087 = data
  i4086.mode = i4087[0]
  i4086.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4087[1], i4086.gradientMin)
  i4086.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4087[2], i4086.gradientMax)
  i4086.colorMin = new pc.Color(i4087[3], i4087[4], i4087[5], i4087[6])
  i4086.colorMax = new pc.Color(i4087[7], i4087[8], i4087[9], i4087[10])
  return i4086
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4089 = data
  i4088.mode = i4089[0]
  var i4091 = i4089[1]
  var i4090 = []
  for(var i = 0; i < i4091.length; i += 1) {
    i4090.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4091[i + 0]) );
  }
  i4088.colorKeys = i4090
  var i4093 = i4089[2]
  var i4092 = []
  for(var i = 0; i < i4093.length; i += 1) {
    i4092.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4093[i + 0]) );
  }
  i4088.alphaKeys = i4092
  return i4088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4094 = root || new pc.ParticleSystemColorBySpeed()
  var i4095 = data
  i4094.enabled = !!i4095[0]
  i4094.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4095[1], i4094.color)
  i4094.range = new pc.Vec2( i4095[2], i4095[3] )
  return i4094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4099 = data
  i4098.color = new pc.Color(i4099[0], i4099[1], i4099[2], i4099[3])
  i4098.time = i4099[4]
  return i4098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4103 = data
  i4102.alpha = i4103[0]
  i4102.time = i4103[1]
  return i4102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4104 = root || new pc.ParticleSystemColorOverLifetime()
  var i4105 = data
  i4104.enabled = !!i4105[0]
  i4104.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4105[1], i4104.color)
  return i4104
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4106 = root || new pc.ParticleSystemEmitter()
  var i4107 = data
  i4106.enabled = !!i4107[0]
  i4106.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4107[1], i4106.rateOverTime)
  i4106.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4107[2], i4106.rateOverDistance)
  var i4109 = i4107[3]
  var i4108 = []
  for(var i = 0; i < i4109.length; i += 1) {
    i4108.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4109[i + 0]) );
  }
  i4106.bursts = i4108
  return i4106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4112 = root || new pc.ParticleSystemBurst()
  var i4113 = data
  i4112.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4113[0], i4112.count)
  i4112.cycleCount = i4113[1]
  i4112.minCount = i4113[2]
  i4112.maxCount = i4113[3]
  i4112.repeatInterval = i4113[4]
  i4112.time = i4113[5]
  return i4112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4114 = root || new pc.ParticleSystemRotationBySpeed()
  var i4115 = data
  i4114.enabled = !!i4115[0]
  i4114.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4115[1], i4114.x)
  i4114.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4115[2], i4114.y)
  i4114.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4115[3], i4114.z)
  i4114.separateAxes = !!i4115[4]
  i4114.range = new pc.Vec2( i4115[5], i4115[6] )
  return i4114
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4116 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4117 = data
  i4116.enabled = !!i4117[0]
  i4116.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4117[1], i4116.x)
  i4116.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4117[2], i4116.y)
  i4116.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4117[3], i4116.z)
  i4116.separateAxes = !!i4117[4]
  return i4116
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4118 = root || new pc.ParticleSystemShape()
  var i4119 = data
  i4118.enabled = !!i4119[0]
  i4118.shapeType = i4119[1]
  i4118.randomDirectionAmount = i4119[2]
  i4118.sphericalDirectionAmount = i4119[3]
  i4118.randomPositionAmount = i4119[4]
  i4118.alignToDirection = !!i4119[5]
  i4118.radius = i4119[6]
  i4118.radiusMode = i4119[7]
  i4118.radiusSpread = i4119[8]
  i4118.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4119[9], i4118.radiusSpeed)
  i4118.radiusThickness = i4119[10]
  i4118.angle = i4119[11]
  i4118.length = i4119[12]
  i4118.boxThickness = new pc.Vec3( i4119[13], i4119[14], i4119[15] )
  i4118.meshShapeType = i4119[16]
  request.r(i4119[17], i4119[18], 0, i4118, 'mesh')
  request.r(i4119[19], i4119[20], 0, i4118, 'meshRenderer')
  request.r(i4119[21], i4119[22], 0, i4118, 'skinnedMeshRenderer')
  i4118.useMeshMaterialIndex = !!i4119[23]
  i4118.meshMaterialIndex = i4119[24]
  i4118.useMeshColors = !!i4119[25]
  i4118.normalOffset = i4119[26]
  i4118.arc = i4119[27]
  i4118.arcMode = i4119[28]
  i4118.arcSpread = i4119[29]
  i4118.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4119[30], i4118.arcSpeed)
  i4118.donutRadius = i4119[31]
  i4118.position = new pc.Vec3( i4119[32], i4119[33], i4119[34] )
  i4118.rotation = new pc.Vec3( i4119[35], i4119[36], i4119[37] )
  i4118.scale = new pc.Vec3( i4119[38], i4119[39], i4119[40] )
  return i4118
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4120 = root || new pc.ParticleSystemSizeBySpeed()
  var i4121 = data
  i4120.enabled = !!i4121[0]
  i4120.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4121[1], i4120.x)
  i4120.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4121[2], i4120.y)
  i4120.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4121[3], i4120.z)
  i4120.separateAxes = !!i4121[4]
  i4120.range = new pc.Vec2( i4121[5], i4121[6] )
  return i4120
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4122 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4123 = data
  i4122.enabled = !!i4123[0]
  i4122.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4123[1], i4122.x)
  i4122.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4123[2], i4122.y)
  i4122.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4123[3], i4122.z)
  i4122.separateAxes = !!i4123[4]
  return i4122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4124 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4125 = data
  i4124.enabled = !!i4125[0]
  i4124.mode = i4125[1]
  i4124.animation = i4125[2]
  i4124.numTilesX = i4125[3]
  i4124.numTilesY = i4125[4]
  i4124.useRandomRow = !!i4125[5]
  i4124.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4125[6], i4124.frameOverTime)
  i4124.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4125[7], i4124.startFrame)
  i4124.cycleCount = i4125[8]
  i4124.rowIndex = i4125[9]
  i4124.flipU = i4125[10]
  i4124.flipV = i4125[11]
  i4124.spriteCount = i4125[12]
  var i4127 = i4125[13]
  var i4126 = []
  for(var i = 0; i < i4127.length; i += 2) {
  request.r(i4127[i + 0], i4127[i + 1], 2, i4126, '')
  }
  i4124.sprites = i4126
  return i4124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4130 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4131 = data
  i4130.enabled = !!i4131[0]
  i4130.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4131[1], i4130.x)
  i4130.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4131[2], i4130.y)
  i4130.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4131[3], i4130.z)
  i4130.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4131[4], i4130.radial)
  i4130.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4131[5], i4130.speedModifier)
  i4130.space = i4131[6]
  i4130.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4131[7], i4130.orbitalX)
  i4130.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4131[8], i4130.orbitalY)
  i4130.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4131[9], i4130.orbitalZ)
  i4130.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4131[10], i4130.orbitalOffsetX)
  i4130.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4131[11], i4130.orbitalOffsetY)
  i4130.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4131[12], i4130.orbitalOffsetZ)
  return i4130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4132 = root || new pc.ParticleSystemNoise()
  var i4133 = data
  i4132.enabled = !!i4133[0]
  i4132.separateAxes = !!i4133[1]
  i4132.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4133[2], i4132.strengthX)
  i4132.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4133[3], i4132.strengthY)
  i4132.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4133[4], i4132.strengthZ)
  i4132.frequency = i4133[5]
  i4132.damping = !!i4133[6]
  i4132.octaveCount = i4133[7]
  i4132.octaveMultiplier = i4133[8]
  i4132.octaveScale = i4133[9]
  i4132.quality = i4133[10]
  i4132.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4133[11], i4132.scrollSpeed)
  i4132.scrollSpeedMultiplier = i4133[12]
  i4132.remapEnabled = !!i4133[13]
  i4132.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4133[14], i4132.remapX)
  i4132.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4133[15], i4132.remapY)
  i4132.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4133[16], i4132.remapZ)
  i4132.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4133[17], i4132.positionAmount)
  i4132.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4133[18], i4132.rotationAmount)
  i4132.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4133[19], i4132.sizeAmount)
  return i4132
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4134 = root || new pc.ParticleSystemInheritVelocity()
  var i4135 = data
  i4134.enabled = !!i4135[0]
  i4134.mode = i4135[1]
  i4134.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4135[2], i4134.curve)
  return i4134
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4136 = root || new pc.ParticleSystemForceOverLifetime()
  var i4137 = data
  i4136.enabled = !!i4137[0]
  i4136.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4137[1], i4136.x)
  i4136.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4137[2], i4136.y)
  i4136.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4137[3], i4136.z)
  i4136.space = i4137[4]
  i4136.randomized = !!i4137[5]
  return i4136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4138 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4139 = data
  i4138.enabled = !!i4139[0]
  i4138.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4139[1], i4138.limit)
  i4138.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4139[2], i4138.limitX)
  i4138.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4139[3], i4138.limitY)
  i4138.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4139[4], i4138.limitZ)
  i4138.dampen = i4139[5]
  i4138.separateAxes = !!i4139[6]
  i4138.space = i4139[7]
  i4138.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4139[8], i4138.drag)
  i4138.multiplyDragByParticleSize = !!i4139[9]
  i4138.multiplyDragByParticleVelocity = !!i4139[10]
  return i4138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4141 = data
  request.r(i4141[0], i4141[1], 0, i4140, 'mesh')
  i4140.meshCount = i4141[2]
  i4140.activeVertexStreamsCount = i4141[3]
  i4140.alignment = i4141[4]
  i4140.renderMode = i4141[5]
  i4140.sortMode = i4141[6]
  i4140.lengthScale = i4141[7]
  i4140.velocityScale = i4141[8]
  i4140.cameraVelocityScale = i4141[9]
  i4140.normalDirection = i4141[10]
  i4140.sortingFudge = i4141[11]
  i4140.minParticleSize = i4141[12]
  i4140.maxParticleSize = i4141[13]
  i4140.pivot = new pc.Vec3( i4141[14], i4141[15], i4141[16] )
  request.r(i4141[17], i4141[18], 0, i4140, 'trailMaterial')
  i4140.applyActiveColorSpace = !!i4141[19]
  i4140.enabled = !!i4141[20]
  request.r(i4141[21], i4141[22], 0, i4140, 'sharedMaterial')
  var i4143 = i4141[23]
  var i4142 = []
  for(var i = 0; i < i4143.length; i += 2) {
  request.r(i4143[i + 0], i4143[i + 1], 2, i4142, '')
  }
  i4140.sharedMaterials = i4142
  i4140.receiveShadows = !!i4141[24]
  i4140.shadowCastingMode = i4141[25]
  i4140.sortingLayerID = i4141[26]
  i4140.sortingOrder = i4141[27]
  i4140.lightmapIndex = i4141[28]
  i4140.lightmapSceneIndex = i4141[29]
  i4140.lightmapScaleOffset = new pc.Vec4( i4141[30], i4141[31], i4141[32], i4141[33] )
  i4140.lightProbeUsage = i4141[34]
  i4140.reflectionProbeUsage = i4141[35]
  return i4140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4144 = root || new pc.UnityMaterial()
  var i4145 = data
  i4144.name = i4145[0]
  request.r(i4145[1], i4145[2], 0, i4144, 'shader')
  i4144.renderQueue = i4145[3]
  i4144.enableInstancing = !!i4145[4]
  var i4147 = i4145[5]
  var i4146 = []
  for(var i = 0; i < i4147.length; i += 1) {
    i4146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4147[i + 0]) );
  }
  i4144.floatParameters = i4146
  var i4149 = i4145[6]
  var i4148 = []
  for(var i = 0; i < i4149.length; i += 1) {
    i4148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4149[i + 0]) );
  }
  i4144.colorParameters = i4148
  var i4151 = i4145[7]
  var i4150 = []
  for(var i = 0; i < i4151.length; i += 1) {
    i4150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4151[i + 0]) );
  }
  i4144.vectorParameters = i4150
  var i4153 = i4145[8]
  var i4152 = []
  for(var i = 0; i < i4153.length; i += 1) {
    i4152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4153[i + 0]) );
  }
  i4144.textureParameters = i4152
  var i4155 = i4145[9]
  var i4154 = []
  for(var i = 0; i < i4155.length; i += 1) {
    i4154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4155[i + 0]) );
  }
  i4144.materialFlags = i4154
  return i4144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4159 = data
  i4158.name = i4159[0]
  i4158.value = i4159[1]
  return i4158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4163 = data
  i4162.name = i4163[0]
  i4162.value = new pc.Color(i4163[1], i4163[2], i4163[3], i4163[4])
  return i4162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4167 = data
  i4166.name = i4167[0]
  i4166.value = new pc.Vec4( i4167[1], i4167[2], i4167[3], i4167[4] )
  return i4166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4171 = data
  i4170.name = i4171[0]
  request.r(i4171[1], i4171[2], 0, i4170, 'value')
  return i4170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4175 = data
  i4174.name = i4175[0]
  i4174.enabled = !!i4175[1]
  return i4174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4177 = data
  i4176.name = i4177[0]
  i4176.width = i4177[1]
  i4176.height = i4177[2]
  i4176.mipmapCount = i4177[3]
  i4176.anisoLevel = i4177[4]
  i4176.filterMode = i4177[5]
  i4176.hdr = !!i4177[6]
  i4176.format = i4177[7]
  i4176.wrapMode = i4177[8]
  i4176.alphaIsTransparency = !!i4177[9]
  i4176.alphaSource = i4177[10]
  i4176.graphicsFormat = i4177[11]
  i4176.sRGBTexture = !!i4177[12]
  i4176.desiredColorSpace = i4177[13]
  i4176.wrapU = i4177[14]
  i4176.wrapV = i4177[15]
  return i4176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4179 = data
  i4178.name = i4179[0]
  i4178.halfPrecision = !!i4179[1]
  i4178.useUInt32IndexFormat = !!i4179[2]
  i4178.vertexCount = i4179[3]
  i4178.aabb = i4179[4]
  var i4181 = i4179[5]
  var i4180 = []
  for(var i = 0; i < i4181.length; i += 1) {
    i4180.push( !!i4181[i + 0] );
  }
  i4178.streams = i4180
  i4178.vertices = i4179[6]
  var i4183 = i4179[7]
  var i4182 = []
  for(var i = 0; i < i4183.length; i += 1) {
    i4182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4183[i + 0]) );
  }
  i4178.subMeshes = i4182
  var i4185 = i4179[8]
  var i4184 = []
  for(var i = 0; i < i4185.length; i += 16) {
    i4184.push( new pc.Mat4().setData(i4185[i + 0], i4185[i + 1], i4185[i + 2], i4185[i + 3],  i4185[i + 4], i4185[i + 5], i4185[i + 6], i4185[i + 7],  i4185[i + 8], i4185[i + 9], i4185[i + 10], i4185[i + 11],  i4185[i + 12], i4185[i + 13], i4185[i + 14], i4185[i + 15]) );
  }
  i4178.bindposes = i4184
  var i4187 = i4179[9]
  var i4186 = []
  for(var i = 0; i < i4187.length; i += 1) {
    i4186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4187[i + 0]) );
  }
  i4178.blendShapes = i4186
  return i4178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4193 = data
  i4192.triangles = i4193[0]
  return i4192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4199 = data
  i4198.name = i4199[0]
  var i4201 = i4199[1]
  var i4200 = []
  for(var i = 0; i < i4201.length; i += 1) {
    i4200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4201[i + 0]) );
  }
  i4198.frames = i4200
  return i4198
}

Deserializers["ElementsActivator"] = function (request, data, root) {
  var i4202 = root || request.c( 'ElementsActivator' )
  var i4203 = data
  request.r(i4203[0], i4203[1], 0, i4202, 'iconImage')
  request.r(i4203[2], i4203[3], 0, i4202, 'fillImage')
  request.r(i4203[4], i4203[5], 0, i4202, 'moneyImage')
  request.r(i4203[6], i4203[7], 0, i4202, 'arrowMark')
  i4202.isReady = !!i4203[8]
  var i4205 = i4203[9]
  var i4204 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4205.length; i += 2) {
  request.r(i4205[i + 0], i4205[i + 1], 1, i4204, '')
  }
  i4202.targets = i4204
  i4202.eachScaleDuration = i4203[10]
  i4202.betweenDelay = i4203[11]
  i4202.cost = i4203[12]
  i4202.payPerSecond = i4203[13]
  request.r(i4203[14], i4203[15], 0, i4202, 'interactCollider')
  i4202.moneyValue = i4203[16]
  request.r(i4203[17], i4203[18], 0, i4202, 'moneyValueText')
  i4202.setTargetsScaleZeroOnStart = !!i4203[19]
  i4202.activatorType = i4203[20]
  i4202.enabledColor = new pc.Color(i4203[21], i4203[22], i4203[23], i4203[24])
  i4202.disabledColor = new pc.Color(i4203[25], i4203[26], i4203[27], i4203[28])
  request.r(i4203[29], i4203[30], 0, i4202, 'playerMovePos')
  return i4202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4209 = data
  i4208.center = new pc.Vec3( i4209[0], i4209[1], i4209[2] )
  i4208.size = new pc.Vec3( i4209[3], i4209[4], i4209[5] )
  i4208.enabled = !!i4209[6]
  i4208.isTrigger = !!i4209[7]
  request.r(i4209[8], i4209[9], 0, i4208, 'material')
  return i4208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4211 = data
  i4210.pivot = new pc.Vec2( i4211[0], i4211[1] )
  i4210.anchorMin = new pc.Vec2( i4211[2], i4211[3] )
  i4210.anchorMax = new pc.Vec2( i4211[4], i4211[5] )
  i4210.sizeDelta = new pc.Vec2( i4211[6], i4211[7] )
  i4210.anchoredPosition3D = new pc.Vec3( i4211[8], i4211[9], i4211[10] )
  i4210.rotation = new pc.Quat(i4211[11], i4211[12], i4211[13], i4211[14])
  i4210.scale = new pc.Vec3( i4211[15], i4211[16], i4211[17] )
  return i4210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4213 = data
  i4212.cullTransparentMesh = !!i4213[0]
  return i4212
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4214 = root || request.c( 'UnityEngine.UI.Image' )
  var i4215 = data
  request.r(i4215[0], i4215[1], 0, i4214, 'm_Sprite')
  i4214.m_Type = i4215[2]
  i4214.m_PreserveAspect = !!i4215[3]
  i4214.m_FillCenter = !!i4215[4]
  i4214.m_FillMethod = i4215[5]
  i4214.m_FillAmount = i4215[6]
  i4214.m_FillClockwise = !!i4215[7]
  i4214.m_FillOrigin = i4215[8]
  i4214.m_UseSpriteMesh = !!i4215[9]
  i4214.m_PixelsPerUnitMultiplier = i4215[10]
  i4214.m_Maskable = !!i4215[11]
  request.r(i4215[12], i4215[13], 0, i4214, 'm_Material')
  i4214.m_Color = new pc.Color(i4215[14], i4215[15], i4215[16], i4215[17])
  i4214.m_RaycastTarget = !!i4215[18]
  i4214.m_RaycastPadding = new pc.Vec4( i4215[19], i4215[20], i4215[21], i4215[22] )
  return i4214
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4216 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4217 = data
  i4216.m_hasFontAssetChanged = !!i4217[0]
  request.r(i4217[1], i4217[2], 0, i4216, 'm_baseMaterial')
  i4216.m_maskOffset = new pc.Vec4( i4217[3], i4217[4], i4217[5], i4217[6] )
  i4216.m_text = i4217[7]
  i4216.m_isRightToLeft = !!i4217[8]
  request.r(i4217[9], i4217[10], 0, i4216, 'm_fontAsset')
  request.r(i4217[11], i4217[12], 0, i4216, 'm_sharedMaterial')
  var i4219 = i4217[13]
  var i4218 = []
  for(var i = 0; i < i4219.length; i += 2) {
  request.r(i4219[i + 0], i4219[i + 1], 2, i4218, '')
  }
  i4216.m_fontSharedMaterials = i4218
  request.r(i4217[14], i4217[15], 0, i4216, 'm_fontMaterial')
  var i4221 = i4217[16]
  var i4220 = []
  for(var i = 0; i < i4221.length; i += 2) {
  request.r(i4221[i + 0], i4221[i + 1], 2, i4220, '')
  }
  i4216.m_fontMaterials = i4220
  i4216.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4217[17], i4217[18], i4217[19], i4217[20])
  i4216.m_fontColor = new pc.Color(i4217[21], i4217[22], i4217[23], i4217[24])
  i4216.m_enableVertexGradient = !!i4217[25]
  i4216.m_colorMode = i4217[26]
  i4216.m_fontColorGradient = request.d('TMPro.VertexGradient', i4217[27], i4216.m_fontColorGradient)
  request.r(i4217[28], i4217[29], 0, i4216, 'm_fontColorGradientPreset')
  request.r(i4217[30], i4217[31], 0, i4216, 'm_spriteAsset')
  i4216.m_tintAllSprites = !!i4217[32]
  request.r(i4217[33], i4217[34], 0, i4216, 'm_StyleSheet')
  i4216.m_TextStyleHashCode = i4217[35]
  i4216.m_overrideHtmlColors = !!i4217[36]
  i4216.m_faceColor = UnityEngine.Color32.ConstructColor(i4217[37], i4217[38], i4217[39], i4217[40])
  i4216.m_fontSize = i4217[41]
  i4216.m_fontSizeBase = i4217[42]
  i4216.m_fontWeight = i4217[43]
  i4216.m_enableAutoSizing = !!i4217[44]
  i4216.m_fontSizeMin = i4217[45]
  i4216.m_fontSizeMax = i4217[46]
  i4216.m_fontStyle = i4217[47]
  i4216.m_HorizontalAlignment = i4217[48]
  i4216.m_VerticalAlignment = i4217[49]
  i4216.m_textAlignment = i4217[50]
  i4216.m_characterSpacing = i4217[51]
  i4216.m_wordSpacing = i4217[52]
  i4216.m_lineSpacing = i4217[53]
  i4216.m_lineSpacingMax = i4217[54]
  i4216.m_paragraphSpacing = i4217[55]
  i4216.m_charWidthMaxAdj = i4217[56]
  i4216.m_enableWordWrapping = !!i4217[57]
  i4216.m_wordWrappingRatios = i4217[58]
  i4216.m_overflowMode = i4217[59]
  request.r(i4217[60], i4217[61], 0, i4216, 'm_linkedTextComponent')
  request.r(i4217[62], i4217[63], 0, i4216, 'parentLinkedComponent')
  i4216.m_enableKerning = !!i4217[64]
  i4216.m_enableExtraPadding = !!i4217[65]
  i4216.checkPaddingRequired = !!i4217[66]
  i4216.m_isRichText = !!i4217[67]
  i4216.m_parseCtrlCharacters = !!i4217[68]
  i4216.m_isOrthographic = !!i4217[69]
  i4216.m_isCullingEnabled = !!i4217[70]
  i4216.m_horizontalMapping = i4217[71]
  i4216.m_verticalMapping = i4217[72]
  i4216.m_uvLineOffset = i4217[73]
  i4216.m_geometrySortingOrder = i4217[74]
  i4216.m_IsTextObjectScaleStatic = !!i4217[75]
  i4216.m_VertexBufferAutoSizeReduction = !!i4217[76]
  i4216.m_useMaxVisibleDescender = !!i4217[77]
  i4216.m_pageToDisplay = i4217[78]
  i4216.m_margin = new pc.Vec4( i4217[79], i4217[80], i4217[81], i4217[82] )
  i4216.m_isUsingLegacyAnimationComponent = !!i4217[83]
  i4216.m_isVolumetricText = !!i4217[84]
  i4216.m_Maskable = !!i4217[85]
  request.r(i4217[86], i4217[87], 0, i4216, 'm_Material')
  i4216.m_Color = new pc.Color(i4217[88], i4217[89], i4217[90], i4217[91])
  i4216.m_RaycastTarget = !!i4217[92]
  i4216.m_RaycastPadding = new pc.Vec4( i4217[93], i4217[94], i4217[95], i4217[96] )
  return i4216
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4222 = root || request.c( 'TMPro.VertexGradient' )
  var i4223 = data
  i4222.topLeft = new pc.Color(i4223[0], i4223[1], i4223[2], i4223[3])
  i4222.topRight = new pc.Color(i4223[4], i4223[5], i4223[6], i4223[7])
  i4222.bottomLeft = new pc.Color(i4223[8], i4223[9], i4223[10], i4223[11])
  i4222.bottomRight = new pc.Color(i4223[12], i4223[13], i4223[14], i4223[15])
  return i4222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4225 = data
  request.r(i4225[0], i4225[1], 0, i4224, 'sharedMesh')
  return i4224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4227 = data
  request.r(i4227[0], i4227[1], 0, i4226, 'additionalVertexStreams')
  i4226.enabled = !!i4227[2]
  request.r(i4227[3], i4227[4], 0, i4226, 'sharedMaterial')
  var i4229 = i4227[5]
  var i4228 = []
  for(var i = 0; i < i4229.length; i += 2) {
  request.r(i4229[i + 0], i4229[i + 1], 2, i4228, '')
  }
  i4226.sharedMaterials = i4228
  i4226.receiveShadows = !!i4227[6]
  i4226.shadowCastingMode = i4227[7]
  i4226.sortingLayerID = i4227[8]
  i4226.sortingOrder = i4227[9]
  i4226.lightmapIndex = i4227[10]
  i4226.lightmapSceneIndex = i4227[11]
  i4226.lightmapScaleOffset = new pc.Vec4( i4227[12], i4227[13], i4227[14], i4227[15] )
  i4226.lightProbeUsage = i4227[16]
  i4226.reflectionProbeUsage = i4227[17]
  return i4226
}

Deserializers["StairsController"] = function (request, data, root) {
  var i4230 = root || request.c( 'StairsController' )
  var i4231 = data
  var i4233 = i4231[0]
  var i4232 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4233.length; i += 2) {
  request.r(i4233[i + 0], i4233[i + 1], 1, i4232, '')
  }
  i4230.steps = i4232
  request.r(i4231[1], i4231[2], 0, i4230, 'startPoint')
  request.r(i4231[3], i4231[4], 0, i4230, 'endPoint')
  i4230.stepSpeed = i4231[5]
  return i4230
}

Deserializers["StairAttachTrigger"] = function (request, data, root) {
  var i4234 = root || request.c( 'StairAttachTrigger' )
  var i4235 = data
  request.r(i4235[0], i4235[1], 0, i4234, 'stairsController')
  request.r(i4235[2], i4235[3], 0, i4234, 'arrowObject')
  return i4234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4237 = data
  i4236.planeDistance = i4237[0]
  i4236.referencePixelsPerUnit = i4237[1]
  i4236.isFallbackOverlay = !!i4237[2]
  i4236.renderMode = i4237[3]
  i4236.renderOrder = i4237[4]
  i4236.sortingLayerName = i4237[5]
  i4236.sortingOrder = i4237[6]
  i4236.scaleFactor = i4237[7]
  request.r(i4237[8], i4237[9], 0, i4236, 'worldCamera')
  i4236.overrideSorting = !!i4237[10]
  i4236.pixelPerfect = !!i4237[11]
  i4236.targetDisplay = i4237[12]
  i4236.overridePixelPerfect = !!i4237[13]
  i4236.enabled = !!i4237[14]
  return i4236
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4238 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4239 = data
  i4238.m_UiScaleMode = i4239[0]
  i4238.m_ReferencePixelsPerUnit = i4239[1]
  i4238.m_ScaleFactor = i4239[2]
  i4238.m_ReferenceResolution = new pc.Vec2( i4239[3], i4239[4] )
  i4238.m_ScreenMatchMode = i4239[5]
  i4238.m_MatchWidthOrHeight = i4239[6]
  i4238.m_PhysicalUnit = i4239[7]
  i4238.m_FallbackScreenDPI = i4239[8]
  i4238.m_DefaultSpriteDPI = i4239[9]
  i4238.m_DynamicPixelsPerUnit = i4239[10]
  i4238.m_PresetInfoIsWorld = !!i4239[11]
  return i4238
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4240 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4241 = data
  i4240.m_IgnoreReversedGraphics = !!i4241[0]
  i4240.m_BlockingObjects = i4241[1]
  i4240.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4241[2] )
  return i4240
}

Deserializers["UIManager"] = function (request, data, root) {
  var i4242 = root || request.c( 'UIManager' )
  var i4243 = data
  request.r(i4243[0], i4243[1], 0, i4242, 'moneyText')
  request.r(i4243[2], i4243[3], 0, i4242, 'moneyUiParent')
  request.r(i4243[4], i4243[5], 0, i4242, 'joystick')
  request.r(i4243[6], i4243[7], 0, i4242, 'joystickBackground')
  request.r(i4243[8], i4243[9], 0, i4242, 'boardUiSystem')
  request.r(i4243[10], i4243[11], 0, i4242, 'finishPaintUiSystem')
  request.r(i4243[12], i4243[13], 0, i4242, 'painter')
  request.r(i4243[14], i4243[15], 0, i4242, 'brushSizeSlider')
  request.r(i4243[16], i4243[17], 0, i4242, 'paintProgressText')
  var i4245 = i4243[18]
  var i4244 = []
  for(var i = 0; i < i4245.length; i += 2) {
  request.r(i4245[i + 0], i4245[i + 1], 2, i4244, '')
  }
  i4242.colorButtons = i4244
  var i4247 = i4243[19]
  var i4246 = []
  for(var i = 0; i < i4247.length; i += 4) {
    i4246.push( new pc.Color(i4247[i + 0], i4247[i + 1], i4247[i + 2], i4247[i + 3]) );
  }
  i4242.brushColors = i4246
  i4242.selectedScale = i4243[20]
  i4242.scaleDuration = i4243[21]
  return i4242
}

Deserializers["FloatingJoystick"] = function (request, data, root) {
  var i4252 = root || request.c( 'FloatingJoystick' )
  var i4253 = data
  i4252.handleRange = i4253[0]
  i4252.deadZone = i4253[1]
  i4252.axisOptions = i4253[2]
  i4252.snapX = !!i4253[3]
  i4252.snapY = !!i4253[4]
  request.r(i4253[5], i4253[6], 0, i4252, 'background')
  request.r(i4253[7], i4253[8], 0, i4252, 'handle')
  return i4252
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i4254 = root || request.c( 'UnityEngine.UI.Slider' )
  var i4255 = data
  request.r(i4255[0], i4255[1], 0, i4254, 'm_FillRect')
  request.r(i4255[2], i4255[3], 0, i4254, 'm_HandleRect')
  i4254.m_Direction = i4255[4]
  i4254.m_MinValue = i4255[5]
  i4254.m_MaxValue = i4255[6]
  i4254.m_WholeNumbers = !!i4255[7]
  i4254.m_Value = i4255[8]
  i4254.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i4255[9], i4254.m_OnValueChanged)
  i4254.m_Navigation = request.d('UnityEngine.UI.Navigation', i4255[10], i4254.m_Navigation)
  i4254.m_Transition = i4255[11]
  i4254.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4255[12], i4254.m_Colors)
  i4254.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4255[13], i4254.m_SpriteState)
  i4254.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4255[14], i4254.m_AnimationTriggers)
  i4254.m_Interactable = !!i4255[15]
  request.r(i4255[16], i4255[17], 0, i4254, 'm_TargetGraphic')
  return i4254
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i4256 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i4257 = data
  i4256.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4257[0], i4256.m_PersistentCalls)
  return i4256
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4258 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4259 = data
  var i4261 = i4259[0]
  var i4260 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4261.length; i += 1) {
    i4260.add(request.d('UnityEngine.Events.PersistentCall', i4261[i + 0]));
  }
  i4258.m_Calls = i4260
  return i4258
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4264 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4265 = data
  request.r(i4265[0], i4265[1], 0, i4264, 'm_Target')
  i4264.m_TargetAssemblyTypeName = i4265[2]
  i4264.m_MethodName = i4265[3]
  i4264.m_Mode = i4265[4]
  i4264.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4265[5], i4264.m_Arguments)
  i4264.m_CallState = i4265[6]
  return i4264
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4266 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4267 = data
  i4266.m_Mode = i4267[0]
  i4266.m_WrapAround = !!i4267[1]
  request.r(i4267[2], i4267[3], 0, i4266, 'm_SelectOnUp')
  request.r(i4267[4], i4267[5], 0, i4266, 'm_SelectOnDown')
  request.r(i4267[6], i4267[7], 0, i4266, 'm_SelectOnLeft')
  request.r(i4267[8], i4267[9], 0, i4266, 'm_SelectOnRight')
  return i4266
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4268 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4269 = data
  i4268.m_NormalColor = new pc.Color(i4269[0], i4269[1], i4269[2], i4269[3])
  i4268.m_HighlightedColor = new pc.Color(i4269[4], i4269[5], i4269[6], i4269[7])
  i4268.m_PressedColor = new pc.Color(i4269[8], i4269[9], i4269[10], i4269[11])
  i4268.m_SelectedColor = new pc.Color(i4269[12], i4269[13], i4269[14], i4269[15])
  i4268.m_DisabledColor = new pc.Color(i4269[16], i4269[17], i4269[18], i4269[19])
  i4268.m_ColorMultiplier = i4269[20]
  i4268.m_FadeDuration = i4269[21]
  return i4268
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4270 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4271 = data
  request.r(i4271[0], i4271[1], 0, i4270, 'm_HighlightedSprite')
  request.r(i4271[2], i4271[3], 0, i4270, 'm_PressedSprite')
  request.r(i4271[4], i4271[5], 0, i4270, 'm_SelectedSprite')
  request.r(i4271[6], i4271[7], 0, i4270, 'm_DisabledSprite')
  return i4270
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4272 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4273 = data
  i4272.m_NormalTrigger = i4273[0]
  i4272.m_HighlightedTrigger = i4273[1]
  i4272.m_PressedTrigger = i4273[2]
  i4272.m_SelectedTrigger = i4273[3]
  i4272.m_DisabledTrigger = i4273[4]
  return i4272
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4274 = root || request.c( 'UnityEngine.UI.Button' )
  var i4275 = data
  i4274.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4275[0], i4274.m_OnClick)
  i4274.m_Navigation = request.d('UnityEngine.UI.Navigation', i4275[1], i4274.m_Navigation)
  i4274.m_Transition = i4275[2]
  i4274.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4275[3], i4274.m_Colors)
  i4274.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4275[4], i4274.m_SpriteState)
  i4274.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4275[5], i4274.m_AnimationTriggers)
  i4274.m_Interactable = !!i4275[6]
  request.r(i4275[7], i4275[8], 0, i4274, 'm_TargetGraphic')
  return i4274
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4276 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4277 = data
  i4276.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4277[0], i4276.m_PersistentCalls)
  return i4276
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4278 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4279 = data
  request.r(i4279[0], i4279[1], 0, i4278, 'm_ObjectArgument')
  i4278.m_ObjectArgumentAssemblyTypeName = i4279[2]
  i4278.m_IntArgument = i4279[3]
  i4278.m_FloatArgument = i4279[4]
  i4278.m_StringArgument = i4279[5]
  i4278.m_BoolArgument = !!i4279[6]
  return i4278
}

Deserializers["CustomerController"] = function (request, data, root) {
  var i4280 = root || request.c( 'CustomerController' )
  var i4281 = data
  request.r(i4281[0], i4281[1], 0, i4280, 'data')
  i4280.speed = i4281[2]
  var i4283 = i4281[3]
  var i4282 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4283.length; i += 2) {
  request.r(i4283[i + 0], i4283[i + 1], 1, i4282, '')
  }
  i4280.positionsToMove = i4282
  request.r(i4281[4], i4281[5], 0, i4280, 'baggageHoldPoint')
  i4280.hasBaggage = !!i4281[6]
  return i4280
}

Deserializers["CustomerStateMachine"] = function (request, data, root) {
  var i4284 = root || request.c( 'CustomerStateMachine' )
  var i4285 = data
  request.r(i4285[0], i4285[1], 0, i4284, 'customerController')
  i4284.currentStateType = i4285[2]
  return i4284
}

Deserializers["CustomerAnimation"] = function (request, data, root) {
  var i4286 = root || request.c( 'CustomerAnimation' )
  var i4287 = data
  request.r(i4287[0], i4287[1], 0, i4286, '_customerAnimator')
  return i4286
}

Deserializers["CustomerColor"] = function (request, data, root) {
  var i4288 = root || request.c( 'CustomerColor' )
  var i4289 = data
  request.r(i4289[0], i4289[1], 0, i4288, 'rend')
  return i4288
}

Deserializers["Money"] = function (request, data, root) {
  var i4290 = root || request.c( 'Money' )
  var i4291 = data
  i4290.value = i4291[0]
  return i4290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i4292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i4293 = data
  var i4295 = i4293[0]
  var i4294 = []
  for(var i = 0; i < i4295.length; i += 3) {
    i4294.push( new pc.Vec3( i4295[i + 0], i4295[i + 1], i4295[i + 2] ) );
  }
  i4292.positions = i4294
  i4292.positionCount = i4293[1]
  i4292.time = i4293[2]
  i4292.startWidth = i4293[3]
  i4292.endWidth = i4293[4]
  i4292.widthMultiplier = i4293[5]
  i4292.autodestruct = !!i4293[6]
  i4292.emitting = !!i4293[7]
  i4292.numCornerVertices = i4293[8]
  i4292.numCapVertices = i4293[9]
  i4292.minVertexDistance = i4293[10]
  i4292.colorGradient = i4293[11] ? new pc.ColorGradient(i4293[11][0], i4293[11][1], i4293[11][2]) : null
  i4292.startColor = new pc.Color(i4293[12], i4293[13], i4293[14], i4293[15])
  i4292.endColor = new pc.Color(i4293[16], i4293[17], i4293[18], i4293[19])
  i4292.generateLightingData = !!i4293[20]
  i4292.textureMode = i4293[21]
  i4292.alignment = i4293[22]
  i4292.widthCurve = new pc.AnimationCurve( { keys_flow: i4293[23] } )
  i4292.enabled = !!i4293[24]
  request.r(i4293[25], i4293[26], 0, i4292, 'sharedMaterial')
  var i4297 = i4293[27]
  var i4296 = []
  for(var i = 0; i < i4297.length; i += 2) {
  request.r(i4297[i + 0], i4297[i + 1], 2, i4296, '')
  }
  i4292.sharedMaterials = i4296
  i4292.receiveShadows = !!i4293[28]
  i4292.shadowCastingMode = i4293[29]
  i4292.sortingLayerID = i4293[30]
  i4292.sortingOrder = i4293[31]
  i4292.lightmapIndex = i4293[32]
  i4292.lightmapSceneIndex = i4293[33]
  i4292.lightmapScaleOffset = new pc.Vec4( i4293[34], i4293[35], i4293[36], i4293[37] )
  i4292.lightProbeUsage = i4293[38]
  i4292.reflectionProbeUsage = i4293[39]
  return i4292
}

Deserializers["Baggage"] = function (request, data, root) {
  var i4300 = root || request.c( 'Baggage' )
  var i4301 = data
  request.r(i4301[0], i4301[1], 0, i4300, 'data')
  request.r(i4301[2], i4301[3], 0, i4300, '_baggageColor')
  request.r(i4301[4], i4301[5], 0, i4300, '_baggageTrail')
  return i4300
}

Deserializers["BaggageColor"] = function (request, data, root) {
  var i4302 = root || request.c( 'BaggageColor' )
  var i4303 = data
  var i4305 = i4303[0]
  var i4304 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i4305.length; i += 2) {
    i4304.add(new pc.Vec2( i4305[i + 0], i4305[i + 1] ));
  }
  i4302.tilings = i4304
  request.r(i4303[1], i4303[2], 0, i4302, 'rend')
  return i4302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i4308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i4309 = data
  i4308.name = i4309[0]
  i4308.atlasId = i4309[1]
  i4308.mipmapCount = i4309[2]
  i4308.hdr = !!i4309[3]
  i4308.size = i4309[4]
  i4308.anisoLevel = i4309[5]
  i4308.filterMode = i4309[6]
  var i4311 = i4309[7]
  var i4310 = []
  for(var i = 0; i < i4311.length; i += 4) {
    i4310.push( UnityEngine.Rect.MinMaxRect(i4311[i + 0], i4311[i + 1], i4311[i + 2], i4311[i + 3]) );
  }
  i4308.rects = i4310
  i4308.wrapU = i4309[8]
  i4308.wrapV = i4309[9]
  return i4308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4315 = data
  i4314.name = i4315[0]
  i4314.index = i4315[1]
  i4314.startup = !!i4315[2]
  return i4314
}

Deserializers["GameManager"] = function (request, data, root) {
  var i4316 = root || request.c( 'GameManager' )
  var i4317 = data
  request.r(i4317[0], i4317[1], 0, i4316, 'gameData')
  return i4316
}

Deserializers["SpawnController"] = function (request, data, root) {
  var i4318 = root || request.c( 'SpawnController' )
  var i4319 = data
  var i4321 = i4319[0]
  var i4320 = new (System.Collections.Generic.List$1(Bridge.ns('PoolPrefabContainer')))
  for(var i = 0; i < i4321.length; i += 1) {
    i4320.add(request.d('PoolPrefabContainer', i4321[i + 0]));
  }
  i4318.PoolPrefabContainers = i4320
  return i4318
}

Deserializers["PoolPrefabContainer"] = function (request, data, root) {
  var i4324 = root || request.c( 'PoolPrefabContainer' )
  var i4325 = data
  i4324.PoolType = i4325[0]
  request.r(i4325[1], i4325[2], 0, i4324, 'Prefab')
  request.r(i4325[3], i4325[4], 0, i4324, 'Parent')
  i4324.PoolSize = i4325[5]
  return i4324
}

Deserializers["CustomerSystemManager"] = function (request, data, root) {
  var i4326 = root || request.c( 'CustomerSystemManager' )
  var i4327 = data
  var i4329 = i4327[0]
  var i4328 = new (System.Collections.Generic.List$1(Bridge.ns('CustomerQueueDataContainer')))
  for(var i = 0; i < i4329.length; i += 1) {
    i4328.add(request.d('CustomerQueueDataContainer', i4329[i + 0]));
  }
  i4326.baggageQueueData = i4328
  var i4331 = i4327[1]
  var i4330 = new (System.Collections.Generic.List$1(Bridge.ns('CustomerQueueDataContainer')))
  for(var i = 0; i < i4331.length; i += 1) {
    i4330.add(request.d('CustomerQueueDataContainer', i4331[i + 0]));
  }
  i4326.planeQueueData = i4330
  var i4333 = i4327[2]
  var i4332 = new (System.Collections.Generic.List$1(Bridge.ns('CustomerController')))
  for(var i = 0; i < i4333.length; i += 2) {
  request.r(i4333[i + 0], i4333[i + 1], 1, i4332, '')
  }
  i4326.customers = i4332
  request.r(i4327[3], i4327[4], 0, i4326, 'customerSpawnTransform')
  i4326.customerCount = i4327[5]
  i4326.spawnDelay = i4327[6]
  request.r(i4327[7], i4327[8], 0, i4326, 'attachTrigger')
  return i4326
}

Deserializers["CustomerQueueDataContainer"] = function (request, data, root) {
  var i4336 = root || request.c( 'CustomerQueueDataContainer' )
  var i4337 = data
  request.r(i4337[0], i4337[1], 0, i4336, 'QueuePoint')
  request.r(i4337[2], i4337[3], 0, i4336, 'CustomerInQueue')
  i4336.IsInCorrectSpot = !!i4337[4]
  return i4336
}

Deserializers["CustomerPathController"] = function (request, data, root) {
  var i4340 = root || request.c( 'CustomerPathController' )
  var i4341 = data
  var i4343 = i4341[0]
  var i4342 = new (System.Collections.Generic.List$1(Bridge.ns('CustomerPathController+CustomerPathData')))
  for(var i = 0; i < i4343.length; i += 1) {
    i4342.add(request.d('CustomerPathController+CustomerPathData', i4343[i + 0]));
  }
  i4340.customerPathData = i4342
  return i4340
}

Deserializers["CustomerPathController+CustomerPathData"] = function (request, data, root) {
  var i4346 = root || request.c( 'CustomerPathController+CustomerPathData' )
  var i4347 = data
  i4346.customerState = i4347[0]
  var i4349 = i4347[1]
  var i4348 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4349.length; i += 2) {
  request.r(i4349[i + 0], i4349[i + 1], 1, i4348, '')
  }
  i4346.PathPoints = i4348
  return i4346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4351 = data
  i4350.aspect = i4351[0]
  i4350.orthographic = !!i4351[1]
  i4350.orthographicSize = i4351[2]
  i4350.backgroundColor = new pc.Color(i4351[3], i4351[4], i4351[5], i4351[6])
  i4350.nearClipPlane = i4351[7]
  i4350.farClipPlane = i4351[8]
  i4350.fieldOfView = i4351[9]
  i4350.depth = i4351[10]
  i4350.clearFlags = i4351[11]
  i4350.cullingMask = i4351[12]
  i4350.rect = i4351[13]
  request.r(i4351[14], i4351[15], 0, i4350, 'targetTexture')
  i4350.usePhysicalProperties = !!i4351[16]
  i4350.focalLength = i4351[17]
  i4350.sensorSize = new pc.Vec2( i4351[18], i4351[19] )
  i4350.lensShift = new pc.Vec2( i4351[20], i4351[21] )
  i4350.gateFit = i4351[22]
  i4350.commandBufferCount = i4351[23]
  i4350.cameraType = i4351[24]
  i4350.enabled = !!i4351[25]
  return i4350
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i4352 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i4353 = data
  i4352.m_ShowDebugText = !!i4353[0]
  i4352.m_ShowCameraFrustum = !!i4353[1]
  i4352.m_IgnoreTimeScale = !!i4353[2]
  request.r(i4353[3], i4353[4], 0, i4352, 'm_WorldUpOverride')
  i4352.m_UpdateMethod = i4353[5]
  i4352.m_BlendUpdateMethod = i4353[6]
  i4352.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i4353[7], i4352.m_DefaultBlend)
  request.r(i4353[8], i4353[9], 0, i4352, 'm_CustomBlends')
  i4352.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i4353[10], i4352.m_CameraCutEvent)
  i4352.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i4353[11], i4352.m_CameraActivatedEvent)
  return i4352
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i4354 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i4355 = data
  i4354.m_Style = i4355[0]
  i4354.m_Time = i4355[1]
  i4354.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i4355[2] } )
  return i4354
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i4356 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i4357 = data
  i4356.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4357[0], i4356.m_PersistentCalls)
  return i4356
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i4358 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i4359 = data
  i4358.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4359[0], i4358.m_PersistentCalls)
  return i4358
}

Deserializers["CameraManager"] = function (request, data, root) {
  var i4360 = root || request.c( 'CameraManager' )
  var i4361 = data
  request.r(i4361[0], i4361[1], 0, i4360, 'mainCam')
  request.r(i4361[2], i4361[3], 0, i4360, 'environmentCam')
  request.r(i4361[4], i4361[5], 0, i4360, 'boardCam')
  return i4360
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i4362 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i4363 = data
  request.r(i4363[0], i4363[1], 0, i4362, 'm_LookAt')
  request.r(i4363[2], i4363[3], 0, i4362, 'm_Follow')
  i4362.m_Lens = request.d('Cinemachine.LensSettings', i4363[4], i4362.m_Lens)
  i4362.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i4363[5], i4362.m_Transitions)
  var i4365 = i4363[6]
  var i4364 = []
  for(var i = 0; i < i4365.length; i += 1) {
    i4364.push( i4365[i + 0] );
  }
  i4362.m_ExcludedPropertiesInInspector = i4364
  var i4367 = i4363[7]
  var i4366 = []
  for(var i = 0; i < i4367.length; i += 1) {
    i4366.push( i4367[i + 0] );
  }
  i4362.m_LockStageInInspector = i4366
  i4362.m_Priority = i4363[8]
  i4362.m_StandbyUpdate = i4363[9]
  i4362.m_LegacyBlendHint = i4363[10]
  request.r(i4363[11], i4363[12], 0, i4362, 'm_ComponentOwner')
  i4362.m_StreamingVersion = i4363[13]
  return i4362
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i4368 = root || request.c( 'Cinemachine.LensSettings' )
  var i4369 = data
  i4368.FieldOfView = i4369[0]
  i4368.OrthographicSize = i4369[1]
  i4368.NearClipPlane = i4369[2]
  i4368.FarClipPlane = i4369[3]
  i4368.Dutch = i4369[4]
  i4368.ModeOverride = i4369[5]
  i4368.LensShift = new pc.Vec2( i4369[6], i4369[7] )
  i4368.GateFit = i4369[8]
  i4368.FocusDistance = i4369[9]
  i4368.m_SensorSize = new pc.Vec2( i4369[10], i4369[11] )
  return i4368
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i4370 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i4371 = data
  i4370.m_BlendHint = i4371[0]
  i4370.m_InheritPosition = !!i4371[1]
  i4370.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i4371[2], i4370.m_OnCameraLive)
  return i4370
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i4376 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i4377 = data
  return i4376
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i4378 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i4379 = data
  i4378.m_TrackedObjectOffset = new pc.Vec3( i4379[0], i4379[1], i4379[2] )
  i4378.m_LookaheadTime = i4379[3]
  i4378.m_LookaheadSmoothing = i4379[4]
  i4378.m_LookaheadIgnoreY = !!i4379[5]
  i4378.m_HorizontalDamping = i4379[6]
  i4378.m_VerticalDamping = i4379[7]
  i4378.m_ScreenX = i4379[8]
  i4378.m_ScreenY = i4379[9]
  i4378.m_DeadZoneWidth = i4379[10]
  i4378.m_DeadZoneHeight = i4379[11]
  i4378.m_SoftZoneWidth = i4379[12]
  i4378.m_SoftZoneHeight = i4379[13]
  i4378.m_BiasX = i4379[14]
  i4378.m_BiasY = i4379[15]
  i4378.m_CenterOnActivate = !!i4379[16]
  return i4378
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i4380 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i4381 = data
  i4380.m_BindingMode = i4381[0]
  i4380.m_FollowOffset = new pc.Vec3( i4381[1], i4381[2], i4381[3] )
  i4380.m_XDamping = i4381[4]
  i4380.m_YDamping = i4381[5]
  i4380.m_ZDamping = i4381[6]
  i4380.m_AngularDampingMode = i4381[7]
  i4380.m_PitchDamping = i4381[8]
  i4380.m_YawDamping = i4381[9]
  i4380.m_RollDamping = i4381[10]
  i4380.m_AngularDamping = i4381[11]
  return i4380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i4382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i4383 = data
  i4382.type = i4383[0]
  i4382.color = new pc.Color(i4383[1], i4383[2], i4383[3], i4383[4])
  i4382.cullingMask = i4383[5]
  i4382.intensity = i4383[6]
  i4382.range = i4383[7]
  i4382.spotAngle = i4383[8]
  i4382.shadows = i4383[9]
  i4382.shadowNormalBias = i4383[10]
  i4382.shadowBias = i4383[11]
  i4382.shadowStrength = i4383[12]
  i4382.shadowResolution = i4383[13]
  i4382.lightmapBakeType = i4383[14]
  i4382.renderMode = i4383[15]
  request.r(i4383[16], i4383[17], 0, i4382, 'cookie')
  i4382.cookieSize = i4383[18]
  i4382.enabled = !!i4383[19]
  return i4382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i4384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i4385 = data
  request.r(i4385[0], i4385[1], 0, i4384, 'sharedMesh')
  i4384.convex = !!i4385[2]
  i4384.enabled = !!i4385[3]
  i4384.isTrigger = !!i4385[4]
  request.r(i4385[5], i4385[6], 0, i4384, 'material')
  return i4384
}

Deserializers["MeshPainter"] = function (request, data, root) {
  var i4386 = root || request.c( 'MeshPainter' )
  var i4387 = data
  request.r(i4387[0], i4387[1], 0, i4386, 'cam')
  request.r(i4387[2], i4387[3], 0, i4386, 'paintMaterial')
  request.r(i4387[4], i4387[5], 0, i4386, 'brushShader')
  request.r(i4387[6], i4387[7], 0, i4386, 'brushTexture')
  i4386.boardLayerMask = UnityEngine.LayerMask.FromIntegerValue( i4387[8] )
  request.r(i4387[9], i4387[10], 0, i4386, 'confettiParticle')
  i4386.paintColor = new pc.Color(i4387[11], i4387[12], i4387[13], i4387[14])
  i4386.brushSize = i4387[15]
  request.r(i4387[16], i4387[17], 0, i4386, 'hitIndicator')
  i4386.offset = new pc.Vec3( i4387[18], i4387[19], i4387[20] )
  i4386.isReady = !!i4387[21]
  return i4386
}

Deserializers["BoardPlaneArea"] = function (request, data, root) {
  var i4388 = root || request.c( 'BoardPlaneArea' )
  var i4389 = data
  i4388.stayInterval = i4389[0]
  i4388.customerBoarded = i4389[1]
  i4388.maxCustomer = i4389[2]
  return i4388
}

Deserializers["Plane"] = function (request, data, root) {
  var i4390 = root || request.c( 'Plane' )
  var i4391 = data
  i4390.maxCustomerCapacity = i4391[0]
  i4390.currentCustomerCount = i4391[1]
  request.r(i4391[2], i4391[3], 0, i4390, 'customerText')
  request.r(i4391[4], i4391[5], 0, i4390, 'backTarget')
  request.r(i4391[6], i4391[7], 0, i4390, 'forwardTarget')
  request.r(i4391[8], i4391[9], 0, i4390, 'smokeEffect')
  i4390.isReady = !!i4391[10]
  i4390.backDuration = i4391[11]
  i4390.rotateDuration = i4391[12]
  i4390.forwardDuration = i4391[13]
  return i4390
}

Deserializers["TruckController"] = function (request, data, root) {
  var i4392 = root || request.c( 'TruckController' )
  var i4393 = data
  request.r(i4393[0], i4393[1], 0, i4392, 'stackPoint')
  i4392.maxCapacity = i4393[2]
  request.r(i4393[3], i4393[4], 0, i4392, 'moveTarget')
  i4392.additionalRotation = new pc.Vec3( i4393[5], i4393[6], i4393[7] )
  i4392.moveDuration = i4393[8]
  return i4392
}

Deserializers["BoardBaggageArea"] = function (request, data, root) {
  var i4394 = root || request.c( 'BoardBaggageArea' )
  var i4395 = data
  i4394.stayInterval = i4395[0]
  i4394.customerBoarded = i4395[1]
  i4394.maxCustomer = i4395[2]
  return i4394
}

Deserializers["XRayMachine"] = function (request, data, root) {
  var i4396 = root || request.c( 'XRayMachine' )
  var i4397 = data
  request.r(i4397[0], i4397[1], 0, i4396, 'xRayBaggageArea')
  request.r(i4397[2], i4397[3], 0, i4396, 'outputPoint')
  i4396.baggageMoveDuration = i4397[4]
  i4396.interactCooldown = i4397[5]
  request.r(i4397[6], i4397[7], 0, i4396, 'baggageLift')
  request.r(i4397[8], i4397[9], 0, i4396, 'xRayLightParticle')
  return i4396
}

Deserializers["XRayBaggageArea"] = function (request, data, root) {
  var i4398 = root || request.c( 'XRayBaggageArea' )
  var i4399 = data
  request.r(i4399[0], i4399[1], 0, i4398, 'stackPoint')
  i4398.interactCooldown = i4399[2]
  i4398.additionalRotation = new pc.Vec3( i4399[3], i4399[4], i4399[5] )
  var i4401 = i4399[6]
  var i4400 = new (System.Collections.Generic.List$1(Bridge.ns('Baggage')))
  for(var i = 0; i < i4401.length; i += 2) {
  request.r(i4401[i + 0], i4401[i + 1], 1, i4400, '')
  }
  i4398.baggageList = i4400
  i4398.passedBaggageCount = i4399[7]
  return i4398
}

Deserializers["BaggageLift"] = function (request, data, root) {
  var i4402 = root || request.c( 'BaggageLift' )
  var i4403 = data
  request.r(i4403[0], i4403[1], 0, i4402, 'baggagePoint')
  request.r(i4403[2], i4403[3], 0, i4402, 'topPoint')
  request.r(i4403[4], i4403[5], 0, i4402, 'truck')
  i4402.liftDuration = i4403[6]
  i4402.additionalRotation = new pc.Vec3( i4403[7], i4403[8], i4403[9] )
  return i4402
}

Deserializers["MoneyArea"] = function (request, data, root) {
  var i4404 = root || request.c( 'MoneyArea' )
  var i4405 = data
  var i4407 = i4405[0]
  var i4406 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4407.length; i += 2) {
  request.r(i4407[i + 0], i4407[i + 1], 1, i4406, '')
  }
  i4404.slotPoints = i4406
  i4404.jumpPower = i4405[1]
  i4404.jumpDuration = i4405[2]
  i4404.layerHeight = i4405[3]
  i4404.newMoneyScale = new pc.Vec3( i4405[4], i4405[5], i4405[6] )
  i4404.collectedMoneyCount = i4405[7]
  i4404.maxMoneyCount = i4405[8]
  return i4404
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4408 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4409 = data
  request.r(i4409[0], i4409[1], 0, i4408, 'm_FirstSelected')
  i4408.m_sendNavigationEvents = !!i4409[2]
  i4408.m_DragThreshold = i4409[3]
  return i4408
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4410 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4411 = data
  i4410.m_HorizontalAxis = i4411[0]
  i4410.m_VerticalAxis = i4411[1]
  i4410.m_SubmitButton = i4411[2]
  i4410.m_CancelButton = i4411[3]
  i4410.m_InputActionsPerSecond = i4411[4]
  i4410.m_RepeatDelay = i4411[5]
  i4410.m_ForceModuleActive = !!i4411[6]
  i4410.m_SendPointerHoverToParent = !!i4411[7]
  return i4410
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i4412 = root || request.c( 'TutorialManager' )
  var i4413 = data
  var i4415 = i4413[0]
  var i4414 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialManager+TutorialStep')))
  for(var i = 0; i < i4415.length; i += 1) {
    i4414.add(request.d('TutorialManager+TutorialStep', i4415[i + 0]));
  }
  i4412.steps = i4414
  request.r(i4413[1], i4413[2], 0, i4412, 'playerArrow')
  request.r(i4413[3], i4413[4], 0, i4412, 'currentTarget')
  i4412.highlightColor = new pc.Color(i4413[5], i4413[6], i4413[7], i4413[8])
  i4412.highlightScale = i4413[9]
  i4412.tweenDuration = i4413[10]
  i4412.currentIndex = i4413[11]
  i4412.tutorialActive = !!i4413[12]
  return i4412
}

Deserializers["TutorialManager+TutorialStep"] = function (request, data, root) {
  var i4418 = root || request.c( 'TutorialManager+TutorialStep' )
  var i4419 = data
  request.r(i4419[0], i4419[1], 0, i4418, 'target')
  request.r(i4419[2], i4419[3], 0, i4418, 'posTarget')
  i4418.shouldHighlight = !!i4419[4]
  return i4418
}

Deserializers["SFXManager"] = function (request, data, root) {
  var i4420 = root || request.c( 'SFXManager' )
  var i4421 = data
  request.r(i4421[0], i4421[1], 0, i4420, 'audioSource')
  var i4423 = i4421[2]
  var i4422 = new (System.Collections.Generic.List$1(Bridge.ns('SFXData')))
  for(var i = 0; i < i4423.length; i += 1) {
    i4422.add(request.d('SFXData', i4423[i + 0]));
  }
  i4420.sfxList = i4422
  i4420.currentPitch = i4421[3]
  i4420.defaultPitch = i4421[4]
  return i4420
}

Deserializers["SFXData"] = function (request, data, root) {
  var i4426 = root || request.c( 'SFXData' )
  var i4427 = data
  i4426.type = i4427[0]
  request.r(i4427[1], i4427[2], 0, i4426, 'clip')
  i4426.volume = i4427[3]
  i4426.pitch = i4427[4]
  return i4426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4429 = data
  request.r(i4429[0], i4429[1], 0, i4428, 'clip')
  request.r(i4429[2], i4429[3], 0, i4428, 'outputAudioMixerGroup')
  i4428.playOnAwake = !!i4429[4]
  i4428.loop = !!i4429[5]
  i4428.time = i4429[6]
  i4428.volume = i4429[7]
  i4428.pitch = i4429[8]
  i4428.enabled = !!i4429[9]
  return i4428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4431 = data
  i4430.ambientIntensity = i4431[0]
  i4430.reflectionIntensity = i4431[1]
  i4430.ambientMode = i4431[2]
  i4430.ambientLight = new pc.Color(i4431[3], i4431[4], i4431[5], i4431[6])
  i4430.ambientSkyColor = new pc.Color(i4431[7], i4431[8], i4431[9], i4431[10])
  i4430.ambientGroundColor = new pc.Color(i4431[11], i4431[12], i4431[13], i4431[14])
  i4430.ambientEquatorColor = new pc.Color(i4431[15], i4431[16], i4431[17], i4431[18])
  i4430.fogColor = new pc.Color(i4431[19], i4431[20], i4431[21], i4431[22])
  i4430.fogEndDistance = i4431[23]
  i4430.fogStartDistance = i4431[24]
  i4430.fogDensity = i4431[25]
  i4430.fog = !!i4431[26]
  request.r(i4431[27], i4431[28], 0, i4430, 'skybox')
  i4430.fogMode = i4431[29]
  var i4433 = i4431[30]
  var i4432 = []
  for(var i = 0; i < i4433.length; i += 1) {
    i4432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4433[i + 0]) );
  }
  i4430.lightmaps = i4432
  i4430.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4431[31], i4430.lightProbes)
  i4430.lightmapsMode = i4431[32]
  i4430.mixedBakeMode = i4431[33]
  i4430.environmentLightingMode = i4431[34]
  i4430.ambientProbe = new pc.SphericalHarmonicsL2(i4431[35])
  i4430.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4431[36])
  i4430.useReferenceAmbientProbe = !!i4431[37]
  request.r(i4431[38], i4431[39], 0, i4430, 'customReflection')
  request.r(i4431[40], i4431[41], 0, i4430, 'defaultReflection')
  i4430.defaultReflectionMode = i4431[42]
  i4430.defaultReflectionResolution = i4431[43]
  i4430.sunLightObjectId = i4431[44]
  i4430.pixelLightCount = i4431[45]
  i4430.defaultReflectionHDR = !!i4431[46]
  i4430.hasLightDataAsset = !!i4431[47]
  i4430.hasManualGenerate = !!i4431[48]
  return i4430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4437 = data
  request.r(i4437[0], i4437[1], 0, i4436, 'lightmapColor')
  request.r(i4437[2], i4437[3], 0, i4436, 'lightmapDirection')
  return i4436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4438 = root || new UnityEngine.LightProbes()
  var i4439 = data
  return i4438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4445 = data
  var i4447 = i4445[0]
  var i4446 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4447.length; i += 1) {
    i4446.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4447[i + 0]));
  }
  i4444.ShaderCompilationErrors = i4446
  i4444.name = i4445[1]
  i4444.guid = i4445[2]
  var i4449 = i4445[3]
  var i4448 = []
  for(var i = 0; i < i4449.length; i += 1) {
    i4448.push( i4449[i + 0] );
  }
  i4444.shaderDefinedKeywords = i4448
  var i4451 = i4445[4]
  var i4450 = []
  for(var i = 0; i < i4451.length; i += 1) {
    i4450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4451[i + 0]) );
  }
  i4444.passes = i4450
  var i4453 = i4445[5]
  var i4452 = []
  for(var i = 0; i < i4453.length; i += 1) {
    i4452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4453[i + 0]) );
  }
  i4444.usePasses = i4452
  var i4455 = i4445[6]
  var i4454 = []
  for(var i = 0; i < i4455.length; i += 1) {
    i4454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4455[i + 0]) );
  }
  i4444.defaultParameterValues = i4454
  request.r(i4445[7], i4445[8], 0, i4444, 'unityFallbackShader')
  i4444.readDepth = !!i4445[9]
  i4444.isCreatedByShaderGraph = !!i4445[10]
  i4444.disableBatching = !!i4445[11]
  i4444.compiled = !!i4445[12]
  return i4444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4459 = data
  i4458.shaderName = i4459[0]
  i4458.errorMessage = i4459[1]
  return i4458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4462 = root || new pc.UnityShaderPass()
  var i4463 = data
  i4462.id = i4463[0]
  i4462.subShaderIndex = i4463[1]
  i4462.name = i4463[2]
  i4462.passType = i4463[3]
  i4462.grabPassTextureName = i4463[4]
  i4462.usePass = !!i4463[5]
  i4462.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[6], i4462.zTest)
  i4462.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[7], i4462.zWrite)
  i4462.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[8], i4462.culling)
  i4462.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4463[9], i4462.blending)
  i4462.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4463[10], i4462.alphaBlending)
  i4462.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[11], i4462.colorWriteMask)
  i4462.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[12], i4462.offsetUnits)
  i4462.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[13], i4462.offsetFactor)
  i4462.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[14], i4462.stencilRef)
  i4462.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[15], i4462.stencilReadMask)
  i4462.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4463[16], i4462.stencilWriteMask)
  i4462.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4463[17], i4462.stencilOp)
  i4462.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4463[18], i4462.stencilOpFront)
  i4462.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4463[19], i4462.stencilOpBack)
  var i4465 = i4463[20]
  var i4464 = []
  for(var i = 0; i < i4465.length; i += 1) {
    i4464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4465[i + 0]) );
  }
  i4462.tags = i4464
  var i4467 = i4463[21]
  var i4466 = []
  for(var i = 0; i < i4467.length; i += 1) {
    i4466.push( i4467[i + 0] );
  }
  i4462.passDefinedKeywords = i4466
  var i4469 = i4463[22]
  var i4468 = []
  for(var i = 0; i < i4469.length; i += 1) {
    i4468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4469[i + 0]) );
  }
  i4462.passDefinedKeywordGroups = i4468
  var i4471 = i4463[23]
  var i4470 = []
  for(var i = 0; i < i4471.length; i += 1) {
    i4470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4471[i + 0]) );
  }
  i4462.variants = i4470
  var i4473 = i4463[24]
  var i4472 = []
  for(var i = 0; i < i4473.length; i += 1) {
    i4472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4473[i + 0]) );
  }
  i4462.excludedVariants = i4472
  i4462.hasDepthReader = !!i4463[25]
  return i4462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4475 = data
  i4474.val = i4475[0]
  i4474.name = i4475[1]
  return i4474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4477 = data
  i4476.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4477[0], i4476.src)
  i4476.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4477[1], i4476.dst)
  i4476.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4477[2], i4476.op)
  return i4476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4479 = data
  i4478.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4479[0], i4478.pass)
  i4478.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4479[1], i4478.fail)
  i4478.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4479[2], i4478.zFail)
  i4478.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4479[3], i4478.comp)
  return i4478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4483 = data
  i4482.name = i4483[0]
  i4482.value = i4483[1]
  return i4482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4487 = data
  var i4489 = i4487[0]
  var i4488 = []
  for(var i = 0; i < i4489.length; i += 1) {
    i4488.push( i4489[i + 0] );
  }
  i4486.keywords = i4488
  i4486.hasDiscard = !!i4487[1]
  return i4486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4493 = data
  i4492.passId = i4493[0]
  i4492.subShaderIndex = i4493[1]
  var i4495 = i4493[2]
  var i4494 = []
  for(var i = 0; i < i4495.length; i += 1) {
    i4494.push( i4495[i + 0] );
  }
  i4492.keywords = i4494
  i4492.vertexProgram = i4493[3]
  i4492.fragmentProgram = i4493[4]
  i4492.exportedForWebGl2 = !!i4493[5]
  i4492.readDepth = !!i4493[6]
  return i4492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4499 = data
  request.r(i4499[0], i4499[1], 0, i4498, 'shader')
  i4498.pass = i4499[2]
  return i4498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4503 = data
  i4502.name = i4503[0]
  i4502.type = i4503[1]
  i4502.value = new pc.Vec4( i4503[2], i4503[3], i4503[4], i4503[5] )
  i4502.textureValue = i4503[6]
  i4502.shaderPropertyFlag = i4503[7]
  return i4502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4505 = data
  i4504.name = i4505[0]
  request.r(i4505[1], i4505[2], 0, i4504, 'texture')
  i4504.aabb = i4505[3]
  i4504.vertices = i4505[4]
  i4504.triangles = i4505[5]
  i4504.textureRect = UnityEngine.Rect.MinMaxRect(i4505[6], i4505[7], i4505[8], i4505[9])
  i4504.packedRect = UnityEngine.Rect.MinMaxRect(i4505[10], i4505[11], i4505[12], i4505[13])
  i4504.border = new pc.Vec4( i4505[14], i4505[15], i4505[16], i4505[17] )
  i4504.transparency = i4505[18]
  i4504.bounds = i4505[19]
  i4504.pixelsPerUnit = i4505[20]
  i4504.textureWidth = i4505[21]
  i4504.textureHeight = i4505[22]
  i4504.nativeSize = new pc.Vec2( i4505[23], i4505[24] )
  i4504.pivot = new pc.Vec2( i4505[25], i4505[26] )
  i4504.textureRectOffset = new pc.Vec2( i4505[27], i4505[28] )
  return i4504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4507 = data
  i4506.name = i4507[0]
  return i4506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4509 = data
  i4508.name = i4509[0]
  i4508.wrapMode = i4509[1]
  i4508.isLooping = !!i4509[2]
  i4508.length = i4509[3]
  var i4511 = i4509[4]
  var i4510 = []
  for(var i = 0; i < i4511.length; i += 1) {
    i4510.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4511[i + 0]) );
  }
  i4508.curves = i4510
  var i4513 = i4509[5]
  var i4512 = []
  for(var i = 0; i < i4513.length; i += 1) {
    i4512.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4513[i + 0]) );
  }
  i4508.events = i4512
  i4508.halfPrecision = !!i4509[6]
  i4508._frameRate = i4509[7]
  i4508.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4509[8], i4508.localBounds)
  i4508.hasMuscleCurves = !!i4509[9]
  var i4515 = i4509[10]
  var i4514 = []
  for(var i = 0; i < i4515.length; i += 1) {
    i4514.push( i4515[i + 0] );
  }
  i4508.clipMuscleConstant = i4514
  i4508.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4509[11], i4508.clipBindingConstant)
  return i4508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4519 = data
  i4518.path = i4519[0]
  i4518.hash = i4519[1]
  i4518.componentType = i4519[2]
  i4518.property = i4519[3]
  i4518.keys = i4519[4]
  var i4521 = i4519[5]
  var i4520 = []
  for(var i = 0; i < i4521.length; i += 1) {
    i4520.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4521[i + 0]) );
  }
  i4518.objectReferenceKeys = i4520
  return i4518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4525 = data
  i4524.time = i4525[0]
  request.r(i4525[1], i4525[2], 0, i4524, 'value')
  return i4524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4529 = data
  i4528.functionName = i4529[0]
  i4528.floatParameter = i4529[1]
  i4528.intParameter = i4529[2]
  i4528.stringParameter = i4529[3]
  request.r(i4529[4], i4529[5], 0, i4528, 'objectReferenceParameter')
  i4528.time = i4529[6]
  return i4528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4531 = data
  i4530.center = new pc.Vec3( i4531[0], i4531[1], i4531[2] )
  i4530.extends = new pc.Vec3( i4531[3], i4531[4], i4531[5] )
  return i4530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4535 = data
  var i4537 = i4535[0]
  var i4536 = []
  for(var i = 0; i < i4537.length; i += 1) {
    i4536.push( i4537[i + 0] );
  }
  i4534.genericBindings = i4536
  var i4539 = i4535[1]
  var i4538 = []
  for(var i = 0; i < i4539.length; i += 1) {
    i4538.push( i4539[i + 0] );
  }
  i4534.pptrCurveMapping = i4538
  return i4534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4541 = data
  i4540.name = i4541[0]
  i4540.ascent = i4541[1]
  i4540.originalLineHeight = i4541[2]
  i4540.fontSize = i4541[3]
  var i4543 = i4541[4]
  var i4542 = []
  for(var i = 0; i < i4543.length; i += 1) {
    i4542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4543[i + 0]) );
  }
  i4540.characterInfo = i4542
  request.r(i4541[5], i4541[6], 0, i4540, 'texture')
  i4540.originalFontSize = i4541[7]
  return i4540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4547 = data
  i4546.index = i4547[0]
  i4546.advance = i4547[1]
  i4546.bearing = i4547[2]
  i4546.glyphWidth = i4547[3]
  i4546.glyphHeight = i4547[4]
  i4546.minX = i4547[5]
  i4546.maxX = i4547[6]
  i4546.minY = i4547[7]
  i4546.maxY = i4547[8]
  i4546.uvBottomLeftX = i4547[9]
  i4546.uvBottomLeftY = i4547[10]
  i4546.uvBottomRightX = i4547[11]
  i4546.uvBottomRightY = i4547[12]
  i4546.uvTopLeftX = i4547[13]
  i4546.uvTopLeftY = i4547[14]
  i4546.uvTopRightX = i4547[15]
  i4546.uvTopRightY = i4547[16]
  return i4546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4549 = data
  i4548.name = i4549[0]
  var i4551 = i4549[1]
  var i4550 = []
  for(var i = 0; i < i4551.length; i += 1) {
    i4550.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4551[i + 0]) );
  }
  i4548.layers = i4550
  var i4553 = i4549[2]
  var i4552 = []
  for(var i = 0; i < i4553.length; i += 1) {
    i4552.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4553[i + 0]) );
  }
  i4548.parameters = i4552
  i4548.animationClips = i4549[3]
  i4548.avatarUnsupported = i4549[4]
  return i4548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4557 = data
  i4556.name = i4557[0]
  i4556.defaultWeight = i4557[1]
  i4556.blendingMode = i4557[2]
  i4556.avatarMask = i4557[3]
  i4556.syncedLayerIndex = i4557[4]
  i4556.syncedLayerAffectsTiming = !!i4557[5]
  i4556.syncedLayers = i4557[6]
  i4556.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4557[7], i4556.stateMachine)
  return i4556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4559 = data
  i4558.id = i4559[0]
  i4558.name = i4559[1]
  i4558.path = i4559[2]
  var i4561 = i4559[3]
  var i4560 = []
  for(var i = 0; i < i4561.length; i += 1) {
    i4560.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4561[i + 0]) );
  }
  i4558.states = i4560
  var i4563 = i4559[4]
  var i4562 = []
  for(var i = 0; i < i4563.length; i += 1) {
    i4562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4563[i + 0]) );
  }
  i4558.machines = i4562
  var i4565 = i4559[5]
  var i4564 = []
  for(var i = 0; i < i4565.length; i += 1) {
    i4564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4565[i + 0]) );
  }
  i4558.entryStateTransitions = i4564
  var i4567 = i4559[6]
  var i4566 = []
  for(var i = 0; i < i4567.length; i += 1) {
    i4566.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4567[i + 0]) );
  }
  i4558.exitStateTransitions = i4566
  var i4569 = i4559[7]
  var i4568 = []
  for(var i = 0; i < i4569.length; i += 1) {
    i4568.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4569[i + 0]) );
  }
  i4558.anyStateTransitions = i4568
  i4558.defaultStateId = i4559[8]
  return i4558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4573 = data
  i4572.id = i4573[0]
  i4572.name = i4573[1]
  i4572.cycleOffset = i4573[2]
  i4572.cycleOffsetParameter = i4573[3]
  i4572.cycleOffsetParameterActive = !!i4573[4]
  i4572.mirror = !!i4573[5]
  i4572.mirrorParameter = i4573[6]
  i4572.mirrorParameterActive = !!i4573[7]
  i4572.motionId = i4573[8]
  i4572.nameHash = i4573[9]
  i4572.fullPathHash = i4573[10]
  i4572.speed = i4573[11]
  i4572.speedParameter = i4573[12]
  i4572.speedParameterActive = !!i4573[13]
  i4572.tag = i4573[14]
  i4572.tagHash = i4573[15]
  i4572.writeDefaultValues = !!i4573[16]
  var i4575 = i4573[17]
  var i4574 = []
  for(var i = 0; i < i4575.length; i += 2) {
  request.r(i4575[i + 0], i4575[i + 1], 2, i4574, '')
  }
  i4572.behaviours = i4574
  var i4577 = i4573[18]
  var i4576 = []
  for(var i = 0; i < i4577.length; i += 1) {
    i4576.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4577[i + 0]) );
  }
  i4572.transitions = i4576
  return i4572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4583 = data
  i4582.fullPath = i4583[0]
  i4582.canTransitionToSelf = !!i4583[1]
  i4582.duration = i4583[2]
  i4582.exitTime = i4583[3]
  i4582.hasExitTime = !!i4583[4]
  i4582.hasFixedDuration = !!i4583[5]
  i4582.interruptionSource = i4583[6]
  i4582.offset = i4583[7]
  i4582.orderedInterruption = !!i4583[8]
  i4582.destinationStateId = i4583[9]
  i4582.isExit = !!i4583[10]
  i4582.mute = !!i4583[11]
  i4582.solo = !!i4583[12]
  var i4585 = i4583[13]
  var i4584 = []
  for(var i = 0; i < i4585.length; i += 1) {
    i4584.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4585[i + 0]) );
  }
  i4582.conditions = i4584
  return i4582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4589 = data
  i4588.mode = i4589[0]
  i4588.parameter = i4589[1]
  i4588.threshold = i4589[2]
  return i4588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4595 = data
  i4594.destinationStateId = i4595[0]
  i4594.isExit = !!i4595[1]
  i4594.mute = !!i4595[2]
  i4594.solo = !!i4595[3]
  var i4597 = i4595[4]
  var i4596 = []
  for(var i = 0; i < i4597.length; i += 1) {
    i4596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4597[i + 0]) );
  }
  i4594.conditions = i4596
  return i4594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4601 = data
  i4600.defaultBool = !!i4601[0]
  i4600.defaultFloat = i4601[1]
  i4600.defaultInt = i4601[2]
  i4600.name = i4601[3]
  i4600.nameHash = i4601[4]
  i4600.type = i4601[5]
  return i4600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4603 = data
  i4602.name = i4603[0]
  i4602.bytes64 = i4603[1]
  i4602.data = i4603[2]
  return i4602
}

Deserializers["GameData"] = function (request, data, root) {
  var i4604 = root || request.c( 'GameData' )
  var i4605 = data
  i4604.totalMoney = i4605[0]
  return i4604
}

Deserializers["Cinemachine.CinemachineBlenderSettings"] = function (request, data, root) {
  var i4606 = root || request.c( 'Cinemachine.CinemachineBlenderSettings' )
  var i4607 = data
  var i4609 = i4607[0]
  var i4608 = []
  for(var i = 0; i < i4609.length; i += 1) {
    i4608.push( request.d('Cinemachine.CinemachineBlenderSettings+CustomBlend', i4609[i + 0]) );
  }
  i4606.m_CustomBlends = i4608
  return i4606
}

Deserializers["Cinemachine.CinemachineBlenderSettings+CustomBlend"] = function (request, data, root) {
  var i4612 = root || request.c( 'Cinemachine.CinemachineBlenderSettings+CustomBlend' )
  var i4613 = data
  i4612.m_From = i4613[0]
  i4612.m_To = i4613[1]
  i4612.m_Blend = request.d('Cinemachine.CinemachineBlendDefinition', i4613[2], i4612.m_Blend)
  return i4612
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4614 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4615 = data
  request.r(i4615[0], i4615[1], 0, i4614, 'atlas')
  i4614.normalStyle = i4615[2]
  i4614.normalSpacingOffset = i4615[3]
  i4614.boldStyle = i4615[4]
  i4614.boldSpacing = i4615[5]
  i4614.italicStyle = i4615[6]
  i4614.tabSize = i4615[7]
  i4614.hashCode = i4615[8]
  request.r(i4615[9], i4615[10], 0, i4614, 'material')
  i4614.materialHashCode = i4615[11]
  i4614.m_Version = i4615[12]
  i4614.m_SourceFontFileGUID = i4615[13]
  request.r(i4615[14], i4615[15], 0, i4614, 'm_SourceFontFile_EditorRef')
  request.r(i4615[16], i4615[17], 0, i4614, 'm_SourceFontFile')
  i4614.m_AtlasPopulationMode = i4615[18]
  i4614.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4615[19], i4614.m_FaceInfo)
  var i4617 = i4615[20]
  var i4616 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4617.length; i += 1) {
    i4616.add(request.d('UnityEngine.TextCore.Glyph', i4617[i + 0]));
  }
  i4614.m_GlyphTable = i4616
  var i4619 = i4615[21]
  var i4618 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4619.length; i += 1) {
    i4618.add(request.d('TMPro.TMP_Character', i4619[i + 0]));
  }
  i4614.m_CharacterTable = i4618
  var i4621 = i4615[22]
  var i4620 = []
  for(var i = 0; i < i4621.length; i += 2) {
  request.r(i4621[i + 0], i4621[i + 1], 2, i4620, '')
  }
  i4614.m_AtlasTextures = i4620
  i4614.m_AtlasTextureIndex = i4615[23]
  i4614.m_IsMultiAtlasTexturesEnabled = !!i4615[24]
  i4614.m_ClearDynamicDataOnBuild = !!i4615[25]
  var i4623 = i4615[26]
  var i4622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4623.length; i += 1) {
    i4622.add(request.d('UnityEngine.TextCore.GlyphRect', i4623[i + 0]));
  }
  i4614.m_UsedGlyphRects = i4622
  var i4625 = i4615[27]
  var i4624 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4625.length; i += 1) {
    i4624.add(request.d('UnityEngine.TextCore.GlyphRect', i4625[i + 0]));
  }
  i4614.m_FreeGlyphRects = i4624
  i4614.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4615[28], i4614.m_fontInfo)
  i4614.m_AtlasWidth = i4615[29]
  i4614.m_AtlasHeight = i4615[30]
  i4614.m_AtlasPadding = i4615[31]
  i4614.m_AtlasRenderMode = i4615[32]
  var i4627 = i4615[33]
  var i4626 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4627.length; i += 1) {
    i4626.add(request.d('TMPro.TMP_Glyph', i4627[i + 0]));
  }
  i4614.m_glyphInfoList = i4626
  i4614.m_KerningTable = request.d('TMPro.KerningTable', i4615[34], i4614.m_KerningTable)
  i4614.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4615[35], i4614.m_FontFeatureTable)
  var i4629 = i4615[36]
  var i4628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4629.length; i += 2) {
  request.r(i4629[i + 0], i4629[i + 1], 1, i4628, '')
  }
  i4614.fallbackFontAssets = i4628
  var i4631 = i4615[37]
  var i4630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4631.length; i += 2) {
  request.r(i4631[i + 0], i4631[i + 1], 1, i4630, '')
  }
  i4614.m_FallbackFontAssetTable = i4630
  i4614.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4615[38], i4614.m_CreationSettings)
  var i4633 = i4615[39]
  var i4632 = []
  for(var i = 0; i < i4633.length; i += 1) {
    i4632.push( request.d('TMPro.TMP_FontWeightPair', i4633[i + 0]) );
  }
  i4614.m_FontWeightTable = i4632
  var i4635 = i4615[40]
  var i4634 = []
  for(var i = 0; i < i4635.length; i += 1) {
    i4634.push( request.d('TMPro.TMP_FontWeightPair', i4635[i + 0]) );
  }
  i4614.fontWeights = i4634
  return i4614
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4636 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4637 = data
  i4636.m_FaceIndex = i4637[0]
  i4636.m_FamilyName = i4637[1]
  i4636.m_StyleName = i4637[2]
  i4636.m_PointSize = i4637[3]
  i4636.m_Scale = i4637[4]
  i4636.m_UnitsPerEM = i4637[5]
  i4636.m_LineHeight = i4637[6]
  i4636.m_AscentLine = i4637[7]
  i4636.m_CapLine = i4637[8]
  i4636.m_MeanLine = i4637[9]
  i4636.m_Baseline = i4637[10]
  i4636.m_DescentLine = i4637[11]
  i4636.m_SuperscriptOffset = i4637[12]
  i4636.m_SuperscriptSize = i4637[13]
  i4636.m_SubscriptOffset = i4637[14]
  i4636.m_SubscriptSize = i4637[15]
  i4636.m_UnderlineOffset = i4637[16]
  i4636.m_UnderlineThickness = i4637[17]
  i4636.m_StrikethroughOffset = i4637[18]
  i4636.m_StrikethroughThickness = i4637[19]
  i4636.m_TabWidth = i4637[20]
  return i4636
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4640 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4641 = data
  i4640.m_Index = i4641[0]
  i4640.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4641[1], i4640.m_Metrics)
  i4640.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4641[2], i4640.m_GlyphRect)
  i4640.m_Scale = i4641[3]
  i4640.m_AtlasIndex = i4641[4]
  i4640.m_ClassDefinitionType = i4641[5]
  return i4640
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4642 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4643 = data
  i4642.m_Width = i4643[0]
  i4642.m_Height = i4643[1]
  i4642.m_HorizontalBearingX = i4643[2]
  i4642.m_HorizontalBearingY = i4643[3]
  i4642.m_HorizontalAdvance = i4643[4]
  return i4642
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4644 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4645 = data
  i4644.m_X = i4645[0]
  i4644.m_Y = i4645[1]
  i4644.m_Width = i4645[2]
  i4644.m_Height = i4645[3]
  return i4644
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4648 = root || request.c( 'TMPro.TMP_Character' )
  var i4649 = data
  i4648.m_ElementType = i4649[0]
  i4648.m_Unicode = i4649[1]
  i4648.m_GlyphIndex = i4649[2]
  i4648.m_Scale = i4649[3]
  return i4648
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4654 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4655 = data
  i4654.Name = i4655[0]
  i4654.PointSize = i4655[1]
  i4654.Scale = i4655[2]
  i4654.CharacterCount = i4655[3]
  i4654.LineHeight = i4655[4]
  i4654.Baseline = i4655[5]
  i4654.Ascender = i4655[6]
  i4654.CapHeight = i4655[7]
  i4654.Descender = i4655[8]
  i4654.CenterLine = i4655[9]
  i4654.SuperscriptOffset = i4655[10]
  i4654.SubscriptOffset = i4655[11]
  i4654.SubSize = i4655[12]
  i4654.Underline = i4655[13]
  i4654.UnderlineThickness = i4655[14]
  i4654.strikethrough = i4655[15]
  i4654.strikethroughThickness = i4655[16]
  i4654.TabWidth = i4655[17]
  i4654.Padding = i4655[18]
  i4654.AtlasWidth = i4655[19]
  i4654.AtlasHeight = i4655[20]
  return i4654
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4658 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4659 = data
  i4658.id = i4659[0]
  i4658.x = i4659[1]
  i4658.y = i4659[2]
  i4658.width = i4659[3]
  i4658.height = i4659[4]
  i4658.xOffset = i4659[5]
  i4658.yOffset = i4659[6]
  i4658.xAdvance = i4659[7]
  i4658.scale = i4659[8]
  return i4658
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4660 = root || request.c( 'TMPro.KerningTable' )
  var i4661 = data
  var i4663 = i4661[0]
  var i4662 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4663.length; i += 1) {
    i4662.add(request.d('TMPro.KerningPair', i4663[i + 0]));
  }
  i4660.kerningPairs = i4662
  return i4660
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4666 = root || request.c( 'TMPro.KerningPair' )
  var i4667 = data
  i4666.xOffset = i4667[0]
  i4666.m_FirstGlyph = i4667[1]
  i4666.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4667[2], i4666.m_FirstGlyphAdjustments)
  i4666.m_SecondGlyph = i4667[3]
  i4666.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4667[4], i4666.m_SecondGlyphAdjustments)
  i4666.m_IgnoreSpacingAdjustments = !!i4667[5]
  return i4666
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4668 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4669 = data
  var i4671 = i4669[0]
  var i4670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4671.length; i += 1) {
    i4670.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4671[i + 0]));
  }
  i4668.m_GlyphPairAdjustmentRecords = i4670
  return i4668
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4674 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4675 = data
  i4674.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4675[0], i4674.m_FirstAdjustmentRecord)
  i4674.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4675[1], i4674.m_SecondAdjustmentRecord)
  i4674.m_FeatureLookupFlags = i4675[2]
  return i4674
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4676 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4677 = data
  i4676.m_GlyphIndex = i4677[0]
  i4676.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4677[1], i4676.m_GlyphValueRecord)
  return i4676
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4678 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4679 = data
  i4678.m_XPlacement = i4679[0]
  i4678.m_YPlacement = i4679[1]
  i4678.m_XAdvance = i4679[2]
  i4678.m_YAdvance = i4679[3]
  return i4678
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4682 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4683 = data
  i4682.sourceFontFileName = i4683[0]
  i4682.sourceFontFileGUID = i4683[1]
  i4682.pointSizeSamplingMode = i4683[2]
  i4682.pointSize = i4683[3]
  i4682.padding = i4683[4]
  i4682.packingMode = i4683[5]
  i4682.atlasWidth = i4683[6]
  i4682.atlasHeight = i4683[7]
  i4682.characterSetSelectionMode = i4683[8]
  i4682.characterSequence = i4683[9]
  i4682.referencedFontAssetGUID = i4683[10]
  i4682.referencedTextAssetGUID = i4683[11]
  i4682.fontStyle = i4683[12]
  i4682.fontStyleModifier = i4683[13]
  i4682.renderMode = i4683[14]
  i4682.includeFontFeatures = !!i4683[15]
  return i4682
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4686 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4687 = data
  request.r(i4687[0], i4687[1], 0, i4686, 'regularTypeface')
  request.r(i4687[2], i4687[3], 0, i4686, 'italicTypeface')
  return i4686
}

Deserializers["CustomerData"] = function (request, data, root) {
  var i4688 = root || request.c( 'CustomerData' )
  var i4689 = data
  i4688.speed = i4689[0]
  var i4691 = i4689[1]
  var i4690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i4691.length; i += 2) {
    i4690.add(new pc.Vec2( i4691[i + 0], i4691[i + 1] ));
  }
  i4688.skinTilings = i4690
  var i4693 = i4689[2]
  var i4692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i4693.length; i += 2) {
    i4692.add(new pc.Vec2( i4693[i + 0], i4693[i + 1] ));
  }
  i4688.shirtTilings = i4692
  var i4695 = i4689[3]
  var i4694 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i4695.length; i += 2) {
    i4694.add(new pc.Vec2( i4695[i + 0], i4695[i + 1] ));
  }
  i4688.pantTilings = i4694
  return i4688
}

Deserializers["BaggageData"] = function (request, data, root) {
  var i4696 = root || request.c( 'BaggageData' )
  var i4697 = data
  i4696.stackOffsetY = i4697[0]
  i4696.jumpPower = i4697[1]
  i4696.jumpDuration = i4697[2]
  return i4696
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4698 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4699 = data
  i4698.useSafeMode = !!i4699[0]
  i4698.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4699[1], i4698.safeModeOptions)
  i4698.timeScale = i4699[2]
  i4698.unscaledTimeScale = i4699[3]
  i4698.useSmoothDeltaTime = !!i4699[4]
  i4698.maxSmoothUnscaledTime = i4699[5]
  i4698.rewindCallbackMode = i4699[6]
  i4698.showUnityEditorReport = !!i4699[7]
  i4698.logBehaviour = i4699[8]
  i4698.drawGizmos = !!i4699[9]
  i4698.defaultRecyclable = !!i4699[10]
  i4698.defaultAutoPlay = i4699[11]
  i4698.defaultUpdateType = i4699[12]
  i4698.defaultTimeScaleIndependent = !!i4699[13]
  i4698.defaultEaseType = i4699[14]
  i4698.defaultEaseOvershootOrAmplitude = i4699[15]
  i4698.defaultEasePeriod = i4699[16]
  i4698.defaultAutoKill = !!i4699[17]
  i4698.defaultLoopType = i4699[18]
  i4698.debugMode = !!i4699[19]
  i4698.debugStoreTargetId = !!i4699[20]
  i4698.showPreviewPanel = !!i4699[21]
  i4698.storeSettingsLocation = i4699[22]
  i4698.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4699[23], i4698.modules)
  i4698.createASMDEF = !!i4699[24]
  i4698.showPlayingTweens = !!i4699[25]
  i4698.showPausedTweens = !!i4699[26]
  return i4698
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4700 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4701 = data
  i4700.logBehaviour = i4701[0]
  i4700.nestedTweenFailureBehaviour = i4701[1]
  return i4700
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4702 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4703 = data
  i4702.showPanel = !!i4703[0]
  i4702.audioEnabled = !!i4703[1]
  i4702.physicsEnabled = !!i4703[2]
  i4702.physics2DEnabled = !!i4703[3]
  i4702.spriteEnabled = !!i4703[4]
  i4702.uiEnabled = !!i4703[5]
  i4702.textMeshProEnabled = !!i4703[6]
  i4702.tk2DEnabled = !!i4703[7]
  i4702.deAudioEnabled = !!i4703[8]
  i4702.deUnityExtendedEnabled = !!i4703[9]
  i4702.epoOutlineEnabled = !!i4703[10]
  return i4702
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4704 = root || request.c( 'TMPro.TMP_Settings' )
  var i4705 = data
  i4704.m_enableWordWrapping = !!i4705[0]
  i4704.m_enableKerning = !!i4705[1]
  i4704.m_enableExtraPadding = !!i4705[2]
  i4704.m_enableTintAllSprites = !!i4705[3]
  i4704.m_enableParseEscapeCharacters = !!i4705[4]
  i4704.m_EnableRaycastTarget = !!i4705[5]
  i4704.m_GetFontFeaturesAtRuntime = !!i4705[6]
  i4704.m_missingGlyphCharacter = i4705[7]
  i4704.m_warningsDisabled = !!i4705[8]
  request.r(i4705[9], i4705[10], 0, i4704, 'm_defaultFontAsset')
  i4704.m_defaultFontAssetPath = i4705[11]
  i4704.m_defaultFontSize = i4705[12]
  i4704.m_defaultAutoSizeMinRatio = i4705[13]
  i4704.m_defaultAutoSizeMaxRatio = i4705[14]
  i4704.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4705[15], i4705[16] )
  i4704.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4705[17], i4705[18] )
  i4704.m_autoSizeTextContainer = !!i4705[19]
  i4704.m_IsTextObjectScaleStatic = !!i4705[20]
  var i4707 = i4705[21]
  var i4706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4707.length; i += 2) {
  request.r(i4707[i + 0], i4707[i + 1], 1, i4706, '')
  }
  i4704.m_fallbackFontAssets = i4706
  i4704.m_matchMaterialPreset = !!i4705[22]
  request.r(i4705[23], i4705[24], 0, i4704, 'm_defaultSpriteAsset')
  i4704.m_defaultSpriteAssetPath = i4705[25]
  i4704.m_enableEmojiSupport = !!i4705[26]
  i4704.m_MissingCharacterSpriteUnicode = i4705[27]
  i4704.m_defaultColorGradientPresetsPath = i4705[28]
  request.r(i4705[29], i4705[30], 0, i4704, 'm_defaultStyleSheet')
  i4704.m_StyleSheetsResourcePath = i4705[31]
  request.r(i4705[32], i4705[33], 0, i4704, 'm_leadingCharacters')
  request.r(i4705[34], i4705[35], 0, i4704, 'm_followingCharacters')
  i4704.m_UseModernHangulLineBreakingRules = !!i4705[36]
  return i4704
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4708 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4709 = data
  request.r(i4709[0], i4709[1], 0, i4708, 'spriteSheet')
  var i4711 = i4709[2]
  var i4710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4711.length; i += 1) {
    i4710.add(request.d('TMPro.TMP_Sprite', i4711[i + 0]));
  }
  i4708.spriteInfoList = i4710
  var i4713 = i4709[3]
  var i4712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4713.length; i += 2) {
  request.r(i4713[i + 0], i4713[i + 1], 1, i4712, '')
  }
  i4708.fallbackSpriteAssets = i4712
  i4708.hashCode = i4709[4]
  request.r(i4709[5], i4709[6], 0, i4708, 'material')
  i4708.materialHashCode = i4709[7]
  i4708.m_Version = i4709[8]
  i4708.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4709[9], i4708.m_FaceInfo)
  var i4715 = i4709[10]
  var i4714 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4715.length; i += 1) {
    i4714.add(request.d('TMPro.TMP_SpriteCharacter', i4715[i + 0]));
  }
  i4708.m_SpriteCharacterTable = i4714
  var i4717 = i4709[11]
  var i4716 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4717.length; i += 1) {
    i4716.add(request.d('TMPro.TMP_SpriteGlyph', i4717[i + 0]));
  }
  i4708.m_SpriteGlyphTable = i4716
  return i4708
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4720 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4721 = data
  i4720.name = i4721[0]
  i4720.hashCode = i4721[1]
  i4720.unicode = i4721[2]
  i4720.pivot = new pc.Vec2( i4721[3], i4721[4] )
  request.r(i4721[5], i4721[6], 0, i4720, 'sprite')
  i4720.id = i4721[7]
  i4720.x = i4721[8]
  i4720.y = i4721[9]
  i4720.width = i4721[10]
  i4720.height = i4721[11]
  i4720.xOffset = i4721[12]
  i4720.yOffset = i4721[13]
  i4720.xAdvance = i4721[14]
  i4720.scale = i4721[15]
  return i4720
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4726 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4727 = data
  i4726.m_Name = i4727[0]
  i4726.m_HashCode = i4727[1]
  i4726.m_ElementType = i4727[2]
  i4726.m_Unicode = i4727[3]
  i4726.m_GlyphIndex = i4727[4]
  i4726.m_Scale = i4727[5]
  return i4726
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4730 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4731 = data
  request.r(i4731[0], i4731[1], 0, i4730, 'sprite')
  i4730.m_Index = i4731[2]
  i4730.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4731[3], i4730.m_Metrics)
  i4730.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4731[4], i4730.m_GlyphRect)
  i4730.m_Scale = i4731[5]
  i4730.m_AtlasIndex = i4731[6]
  i4730.m_ClassDefinitionType = i4731[7]
  return i4730
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4732 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4733 = data
  var i4735 = i4733[0]
  var i4734 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4735.length; i += 1) {
    i4734.add(request.d('TMPro.TMP_Style', i4735[i + 0]));
  }
  i4732.m_StyleList = i4734
  return i4732
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4738 = root || request.c( 'TMPro.TMP_Style' )
  var i4739 = data
  i4738.m_Name = i4739[0]
  i4738.m_HashCode = i4739[1]
  i4738.m_OpeningDefinition = i4739[2]
  i4738.m_ClosingDefinition = i4739[3]
  i4738.m_OpeningTagArray = i4739[4]
  i4738.m_ClosingTagArray = i4739[5]
  i4738.m_OpeningTagUnicodeArray = i4739[6]
  i4738.m_ClosingTagUnicodeArray = i4739[7]
  return i4738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4741 = data
  var i4743 = i4741[0]
  var i4742 = []
  for(var i = 0; i < i4743.length; i += 1) {
    i4742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4743[i + 0]) );
  }
  i4740.files = i4742
  i4740.componentToPrefabIds = i4741[1]
  return i4740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4747 = data
  i4746.path = i4747[0]
  request.r(i4747[1], i4747[2], 0, i4746, 'unityObject')
  return i4746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4749 = data
  var i4751 = i4749[0]
  var i4750 = []
  for(var i = 0; i < i4751.length; i += 1) {
    i4750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4751[i + 0]) );
  }
  i4748.scriptsExecutionOrder = i4750
  var i4753 = i4749[1]
  var i4752 = []
  for(var i = 0; i < i4753.length; i += 1) {
    i4752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4753[i + 0]) );
  }
  i4748.sortingLayers = i4752
  var i4755 = i4749[2]
  var i4754 = []
  for(var i = 0; i < i4755.length; i += 1) {
    i4754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4755[i + 0]) );
  }
  i4748.cullingLayers = i4754
  i4748.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4749[3], i4748.timeSettings)
  i4748.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4749[4], i4748.physicsSettings)
  i4748.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4749[5], i4748.physics2DSettings)
  i4748.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4749[6], i4748.qualitySettings)
  i4748.enableRealtimeShadows = !!i4749[7]
  i4748.enableAutoInstancing = !!i4749[8]
  i4748.enableStaticBatching = !!i4749[9]
  i4748.enableDynamicBatching = !!i4749[10]
  i4748.lightmapEncodingQuality = i4749[11]
  i4748.desiredColorSpace = i4749[12]
  var i4757 = i4749[13]
  var i4756 = []
  for(var i = 0; i < i4757.length; i += 1) {
    i4756.push( i4757[i + 0] );
  }
  i4748.allTags = i4756
  return i4748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4761 = data
  i4760.name = i4761[0]
  i4760.value = i4761[1]
  return i4760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4765 = data
  i4764.id = i4765[0]
  i4764.name = i4765[1]
  i4764.value = i4765[2]
  return i4764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4769 = data
  i4768.id = i4769[0]
  i4768.name = i4769[1]
  return i4768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4771 = data
  i4770.fixedDeltaTime = i4771[0]
  i4770.maximumDeltaTime = i4771[1]
  i4770.timeScale = i4771[2]
  i4770.maximumParticleTimestep = i4771[3]
  return i4770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4773 = data
  i4772.gravity = new pc.Vec3( i4773[0], i4773[1], i4773[2] )
  i4772.defaultSolverIterations = i4773[3]
  i4772.bounceThreshold = i4773[4]
  i4772.autoSyncTransforms = !!i4773[5]
  i4772.autoSimulation = !!i4773[6]
  var i4775 = i4773[7]
  var i4774 = []
  for(var i = 0; i < i4775.length; i += 1) {
    i4774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4775[i + 0]) );
  }
  i4772.collisionMatrix = i4774
  return i4772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4779 = data
  i4778.enabled = !!i4779[0]
  i4778.layerId = i4779[1]
  i4778.otherLayerId = i4779[2]
  return i4778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4781 = data
  request.r(i4781[0], i4781[1], 0, i4780, 'material')
  i4780.gravity = new pc.Vec2( i4781[2], i4781[3] )
  i4780.positionIterations = i4781[4]
  i4780.velocityIterations = i4781[5]
  i4780.velocityThreshold = i4781[6]
  i4780.maxLinearCorrection = i4781[7]
  i4780.maxAngularCorrection = i4781[8]
  i4780.maxTranslationSpeed = i4781[9]
  i4780.maxRotationSpeed = i4781[10]
  i4780.baumgarteScale = i4781[11]
  i4780.baumgarteTOIScale = i4781[12]
  i4780.timeToSleep = i4781[13]
  i4780.linearSleepTolerance = i4781[14]
  i4780.angularSleepTolerance = i4781[15]
  i4780.defaultContactOffset = i4781[16]
  i4780.autoSimulation = !!i4781[17]
  i4780.queriesHitTriggers = !!i4781[18]
  i4780.queriesStartInColliders = !!i4781[19]
  i4780.callbacksOnDisable = !!i4781[20]
  i4780.reuseCollisionCallbacks = !!i4781[21]
  i4780.autoSyncTransforms = !!i4781[22]
  var i4783 = i4781[23]
  var i4782 = []
  for(var i = 0; i < i4783.length; i += 1) {
    i4782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4783[i + 0]) );
  }
  i4780.collisionMatrix = i4782
  return i4780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4787 = data
  i4786.enabled = !!i4787[0]
  i4786.layerId = i4787[1]
  i4786.otherLayerId = i4787[2]
  return i4786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4789 = data
  var i4791 = i4789[0]
  var i4790 = []
  for(var i = 0; i < i4791.length; i += 1) {
    i4790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4791[i + 0]) );
  }
  i4788.qualityLevels = i4790
  var i4793 = i4789[1]
  var i4792 = []
  for(var i = 0; i < i4793.length; i += 1) {
    i4792.push( i4793[i + 0] );
  }
  i4788.names = i4792
  i4788.shadows = i4789[2]
  i4788.anisotropicFiltering = i4789[3]
  i4788.antiAliasing = i4789[4]
  i4788.lodBias = i4789[5]
  i4788.shadowCascades = i4789[6]
  i4788.shadowDistance = i4789[7]
  i4788.shadowmaskMode = i4789[8]
  i4788.shadowProjection = i4789[9]
  i4788.shadowResolution = i4789[10]
  i4788.softParticles = !!i4789[11]
  i4788.softVegetation = !!i4789[12]
  i4788.activeColorSpace = i4789[13]
  i4788.desiredColorSpace = i4789[14]
  i4788.masterTextureLimit = i4789[15]
  i4788.maxQueuedFrames = i4789[16]
  i4788.particleRaycastBudget = i4789[17]
  i4788.pixelLightCount = i4789[18]
  i4788.realtimeReflectionProbes = !!i4789[19]
  i4788.shadowCascade2Split = i4789[20]
  i4788.shadowCascade4Split = new pc.Vec3( i4789[21], i4789[22], i4789[23] )
  i4788.streamingMipmapsActive = !!i4789[24]
  i4788.vSyncCount = i4789[25]
  i4788.asyncUploadBufferSize = i4789[26]
  i4788.asyncUploadTimeSlice = i4789[27]
  i4788.billboardsFaceCameraPosition = !!i4789[28]
  i4788.shadowNearPlaneOffset = i4789[29]
  i4788.streamingMipmapsMemoryBudget = i4789[30]
  i4788.maximumLODLevel = i4789[31]
  i4788.streamingMipmapsAddAllCameras = !!i4789[32]
  i4788.streamingMipmapsMaxLevelReduction = i4789[33]
  i4788.streamingMipmapsRenderersPerFrame = i4789[34]
  i4788.resolutionScalingFixedDPIFactor = i4789[35]
  i4788.streamingMipmapsMaxFileIORequests = i4789[36]
  i4788.currentQualityLevel = i4789[37]
  return i4788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i4796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i4797 = data
  i4796.name = i4797[0]
  var i4799 = i4797[1]
  var i4798 = []
  for(var i = 0; i < i4799.length; i += 1) {
    i4798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i4799[i + 0]) );
  }
  i4796.tos = i4798
  var i4801 = i4797[2]
  var i4800 = []
  for(var i = 0; i < i4801.length; i += 1) {
    i4800.push( i4801[i + 0] );
  }
  i4796.constant = i4800
  i4796.isValid = !!i4797[3]
  i4796.isHuman = !!i4797[4]
  i4796.hasRootMotion = !!i4797[5]
  return i4796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i4804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i4805 = data
  i4804.hash = i4805[0]
  i4804.path = i4805[1]
  return i4804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4809 = data
  i4808.weight = i4809[0]
  i4808.vertices = i4809[1]
  i4808.normals = i4809[2]
  i4808.tangents = i4809[3]
  return i4808
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4810 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4811 = data
  i4810.xPlacement = i4811[0]
  i4810.yPlacement = i4811[1]
  i4810.xAdvance = i4811[2]
  i4810.yAdvance = i4811[3]
  return i4810
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"enabled":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[13],"98":[21],"99":[9],"100":[9],"101":[9],"102":[9],"103":[9],"104":[9],"105":[9],"106":[107],"108":[107],"109":[107],"110":[107],"111":[107],"112":[107],"113":[107],"114":[107],"115":[107],"116":[107],"117":[107],"118":[107],"119":[107],"120":[21],"121":[33],"122":[123],"124":[123],"36":[28],"125":[126],"127":[28],"128":[28],"38":[36],"24":[29,28],"129":[28],"37":[36],"130":[28],"131":[28],"132":[28],"133":[28],"134":[28],"135":[28],"136":[28],"137":[28],"138":[28],"139":[29,28],"140":[28],"141":[28],"142":[28],"41":[28],"143":[29,28],"144":[28],"145":[77],"146":[77],"78":[77],"147":[77],"148":[21],"149":[21],"150":[126],"151":[21],"152":[28],"153":[33,28],"27":[28,29],"154":[28],"155":[29,28],"156":[33],"157":[29,28],"158":[28],"159":[126],"160":[21],"161":[162]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","PlayerController","PlayerBaggage","UnityEngine.ParticleSystem","PlayerStateMachine","PlayerInteraction","PlayerMoney","PlayerAnimation","UnityEngine.Rigidbody","UnityEngine.CapsuleCollider","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SkinnedMeshRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.ParticleSystemRenderer","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","FloatingJoystick","ElementsActivator","UnityEngine.UI.Image","UnityEngine.GameObject","UnityEngine.BoxCollider","TMPro.TextMeshProUGUI","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","StairsController","StairAttachTrigger","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","MeshPainter","UnityEngine.UI.Slider","UnityEngine.UI.Button","CustomerController","CustomerData","CustomerStateMachine","CustomerAnimation","CustomerColor","UnityEngine.Avatar","Money","UnityEngine.TrailRenderer","Baggage","BaggageData","BaggageColor","GameManager","GameData","SpawnController","CustomerSystemManager","CustomerPathController","UnityEngine.AudioListener","Cinemachine.CinemachineBrain","Cinemachine.CinemachineBlenderSettings","CameraManager","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","UnityEngine.Light","UnityEngine.MeshCollider","BoardPlaneArea","Plane","TruckController","BoardBaggageArea","XRayMachine","XRayBaggageArea","BaggageLift","MoneyArea","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TutorialManager","SFXManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","ToonyColorsPro.Runtime.TCP2_CameraDepth","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.24f1";

Deserializers.productName = "Panteon_DemoProject";

Deserializers.lunaInitializationTime = "10/05/2025 22:54:57";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "33426";

Deserializers.projectId = "c55aecd23298bb442a777e4fe872e1aa";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.9.7\ncom.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1831";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4483";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "FifthAvenue";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.FifthAvenue.Panteon-DemoProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "136f1877-47cd-46d8-9d74-6029b5aa7536";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

