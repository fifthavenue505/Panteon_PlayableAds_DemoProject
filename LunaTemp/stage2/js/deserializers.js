var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.JointSpring' )
  var i803 = data
  i802.spring = i803[0]
  i802.damper = i803[1]
  i802.targetPosition = i803[2]
  return i802
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.JointMotor' )
  var i805 = data
  i804.m_TargetVelocity = i805[0]
  i804.m_Force = i805[1]
  i804.m_FreeSpin = i805[2]
  return i804
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.JointLimits' )
  var i807 = data
  i806.m_Min = i807[0]
  i806.m_Max = i807[1]
  i806.m_Bounciness = i807[2]
  i806.m_BounceMinVelocity = i807[3]
  i806.m_ContactDistance = i807[4]
  i806.minBounce = i807[5]
  i806.maxBounce = i807[6]
  return i806
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.JointDrive' )
  var i809 = data
  i808.m_PositionSpring = i809[0]
  i808.m_PositionDamper = i809[1]
  i808.m_MaximumForce = i809[2]
  i808.m_UseAcceleration = i809[3]
  return i808
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i811 = data
  i810.m_Spring = i811[0]
  i810.m_Damper = i811[1]
  return i810
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i813 = data
  i812.m_Limit = i813[0]
  i812.m_Bounciness = i813[1]
  i812.m_ContactDistance = i813[2]
  return i812
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i815 = data
  i814.m_ExtremumSlip = i815[0]
  i814.m_ExtremumValue = i815[1]
  i814.m_AsymptoteSlip = i815[2]
  i814.m_AsymptoteValue = i815[3]
  i814.m_Stiffness = i815[4]
  return i814
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i817 = data
  i816.m_LowerAngle = i817[0]
  i816.m_UpperAngle = i817[1]
  return i816
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i819 = data
  i818.m_MotorSpeed = i819[0]
  i818.m_MaximumMotorTorque = i819[1]
  return i818
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i821 = data
  i820.m_DampingRatio = i821[0]
  i820.m_Frequency = i821[1]
  i820.m_Angle = i821[2]
  return i820
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i823 = data
  i822.m_LowerTranslation = i823[0]
  i822.m_UpperTranslation = i823[1]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i825 = data
  i824.position = new pc.Vec3( i825[0], i825[1], i825[2] )
  i824.scale = new pc.Vec3( i825[3], i825[4], i825[5] )
  i824.rotation = new pc.Quat(i825[6], i825[7], i825[8], i825[9])
  return i824
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i826 = root || request.c( 'PlayerController' )
  var i827 = data
  i826.moveSpeed = i827[0]
  i826.rayDistance = i827[1]
  i826.obstacleMask = UnityEngine.LayerMask.FromIntegerValue( i827[2] )
  request.r(i827[3], i827[4], 0, i826, '_playerBaggage')
  request.r(i827[5], i827[6], 0, i826, 'mainCamera')
  request.r(i827[7], i827[8], 0, i826, 'joystick')
  request.r(i827[9], i827[10], 0, i826, 'trailParticle')
  return i826
}

Deserializers["PlayerStateMachine"] = function (request, data, root) {
  var i828 = root || request.c( 'PlayerStateMachine' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'playerController')
  i828.CurrentStateType = i829[2]
  return i828
}

Deserializers["PlayerInteraction"] = function (request, data, root) {
  var i830 = root || request.c( 'PlayerInteraction' )
  var i831 = data
  return i830
}

Deserializers["PlayerMoney"] = function (request, data, root) {
  var i832 = root || request.c( 'PlayerMoney' )
  var i833 = data
  i832.jumpDuration = i833[0]
  return i832
}

Deserializers["PlayerBaggage"] = function (request, data, root) {
  var i834 = root || request.c( 'PlayerBaggage' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'playerHandPoint')
  var i837 = i835[2]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('Baggage')))
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 1, i836, '')
  }
  i834.baggageStack = i836
  i834.additionalRotation = new pc.Vec3( i835[3], i835[4], i835[5] )
  i834.baseMoveOffset = i835[6]
  i834.moveDuration = i835[7]
  return i834
}

Deserializers["PlayerAnimation"] = function (request, data, root) {
  var i840 = root || request.c( 'PlayerAnimation' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, '_playerAnimator')
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i843 = data
  i842.mass = i843[0]
  i842.drag = i843[1]
  i842.angularDrag = i843[2]
  i842.useGravity = !!i843[3]
  i842.isKinematic = !!i843[4]
  i842.constraints = i843[5]
  i842.maxAngularVelocity = i843[6]
  i842.collisionDetectionMode = i843[7]
  i842.interpolation = i843[8]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i845 = data
  i844.center = new pc.Vec3( i845[0], i845[1], i845[2] )
  i844.radius = i845[3]
  i844.height = i845[4]
  i844.direction = i845[5]
  i844.enabled = !!i845[6]
  i844.isTrigger = !!i845[7]
  request.r(i845[8], i845[9], 0, i844, 'material')
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'animatorController')
  request.r(i847[2], i847[3], 0, i846, 'avatar')
  i846.updateMode = i847[4]
  i846.hasTransformHierarchy = !!i847[5]
  i846.applyRootMotion = !!i847[6]
  var i849 = i847[7]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.humanBones = i848
  i846.enabled = !!i847[8]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'sharedMesh')
  var i855 = i853[2]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i852.bones = i854
  i852.updateWhenOffscreen = !!i853[3]
  i852.localBounds = i853[4]
  request.r(i853[5], i853[6], 0, i852, 'rootBone')
  var i857 = i853[7]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i857[i + 0]) );
  }
  i852.blendShapesWeights = i856
  i852.enabled = !!i853[8]
  request.r(i853[9], i853[10], 0, i852, 'sharedMaterial')
  var i859 = i853[11]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i852.sharedMaterials = i858
  i852.receiveShadows = !!i853[12]
  i852.shadowCastingMode = i853[13]
  i852.sortingLayerID = i853[14]
  i852.sortingOrder = i853[15]
  i852.lightmapIndex = i853[16]
  i852.lightmapSceneIndex = i853[17]
  i852.lightmapScaleOffset = new pc.Vec4( i853[18], i853[19], i853[20], i853[21] )
  i852.lightProbeUsage = i853[22]
  i852.reflectionProbeUsage = i853[23]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i863 = data
  i862.weight = i863[0]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i867 = data
  i866.name = i867[0]
  i866.tagId = i867[1]
  i866.enabled = !!i867[2]
  i866.isStatic = !!i867[3]
  i866.layer = i867[4]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i869 = data
  i868.color = new pc.Color(i869[0], i869[1], i869[2], i869[3])
  request.r(i869[4], i869[5], 0, i868, 'sprite')
  i868.flipX = !!i869[6]
  i868.flipY = !!i869[7]
  i868.drawMode = i869[8]
  i868.size = new pc.Vec2( i869[9], i869[10] )
  i868.tileMode = i869[11]
  i868.adaptiveModeThreshold = i869[12]
  i868.maskInteraction = i869[13]
  i868.spriteSortPoint = i869[14]
  i868.enabled = !!i869[15]
  request.r(i869[16], i869[17], 0, i868, 'sharedMaterial')
  var i871 = i869[18]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.sharedMaterials = i870
  i868.receiveShadows = !!i869[19]
  i868.shadowCastingMode = i869[20]
  i868.sortingLayerID = i869[21]
  i868.sortingOrder = i869[22]
  i868.lightmapIndex = i869[23]
  i868.lightmapSceneIndex = i869[24]
  i868.lightmapScaleOffset = new pc.Vec4( i869[25], i869[26], i869[27], i869[28] )
  i868.lightProbeUsage = i869[29]
  i868.reflectionProbeUsage = i869[30]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i873 = data
  i872.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i873[0], i872.main)
  i872.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i873[1], i872.colorBySpeed)
  i872.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i873[2], i872.colorOverLifetime)
  i872.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i873[3], i872.emission)
  i872.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i873[4], i872.rotationBySpeed)
  i872.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i873[5], i872.rotationOverLifetime)
  i872.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i873[6], i872.shape)
  i872.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i873[7], i872.sizeBySpeed)
  i872.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i873[8], i872.sizeOverLifetime)
  i872.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i873[9], i872.textureSheetAnimation)
  i872.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i873[10], i872.velocityOverLifetime)
  i872.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i873[11], i872.noise)
  i872.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i873[12], i872.inheritVelocity)
  i872.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i873[13], i872.forceOverLifetime)
  i872.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i873[14], i872.limitVelocityOverLifetime)
  i872.useAutoRandomSeed = !!i873[15]
  i872.randomSeed = i873[16]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemMain()
  var i875 = data
  i874.duration = i875[0]
  i874.loop = !!i875[1]
  i874.prewarm = !!i875[2]
  i874.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[3], i874.startDelay)
  i874.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[4], i874.startLifetime)
  i874.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[5], i874.startSpeed)
  i874.startSize3D = !!i875[6]
  i874.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[7], i874.startSizeX)
  i874.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[8], i874.startSizeY)
  i874.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[9], i874.startSizeZ)
  i874.startRotation3D = !!i875[10]
  i874.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[11], i874.startRotationX)
  i874.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[12], i874.startRotationY)
  i874.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[13], i874.startRotationZ)
  i874.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i875[14], i874.startColor)
  i874.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[15], i874.gravityModifier)
  i874.simulationSpace = i875[16]
  request.r(i875[17], i875[18], 0, i874, 'customSimulationSpace')
  i874.simulationSpeed = i875[19]
  i874.useUnscaledTime = !!i875[20]
  i874.scalingMode = i875[21]
  i874.playOnAwake = !!i875[22]
  i874.maxParticles = i875[23]
  i874.emitterVelocityMode = i875[24]
  i874.stopAction = i875[25]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i876 = root || new pc.MinMaxCurve()
  var i877 = data
  i876.mode = i877[0]
  i876.curveMin = new pc.AnimationCurve( { keys_flow: i877[1] } )
  i876.curveMax = new pc.AnimationCurve( { keys_flow: i877[2] } )
  i876.curveMultiplier = i877[3]
  i876.constantMin = i877[4]
  i876.constantMax = i877[5]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i878 = root || new pc.MinMaxGradient()
  var i879 = data
  i878.mode = i879[0]
  i878.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i879[1], i878.gradientMin)
  i878.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i879[2], i878.gradientMax)
  i878.colorMin = new pc.Color(i879[3], i879[4], i879[5], i879[6])
  i878.colorMax = new pc.Color(i879[7], i879[8], i879[9], i879[10])
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i881 = data
  i880.mode = i881[0]
  var i883 = i881[1]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i883[i + 0]) );
  }
  i880.colorKeys = i882
  var i885 = i881[2]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i885[i + 0]) );
  }
  i880.alphaKeys = i884
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemColorBySpeed()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i887[1], i886.color)
  i886.range = new pc.Vec2( i887[2], i887[3] )
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i891 = data
  i890.color = new pc.Color(i891[0], i891[1], i891[2], i891[3])
  i890.time = i891[4]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i895 = data
  i894.alpha = i895[0]
  i894.time = i895[1]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemColorOverLifetime()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i897[1], i896.color)
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemEmitter()
  var i899 = data
  i898.enabled = !!i899[0]
  i898.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[1], i898.rateOverTime)
  i898.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[2], i898.rateOverDistance)
  var i901 = i899[3]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i901[i + 0]) );
  }
  i898.bursts = i900
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemBurst()
  var i905 = data
  i904.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[0], i904.count)
  i904.cycleCount = i905[1]
  i904.minCount = i905[2]
  i904.maxCount = i905[3]
  i904.repeatInterval = i905[4]
  i904.time = i905[5]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemRotationBySpeed()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[1], i906.x)
  i906.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.y)
  i906.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[3], i906.z)
  i906.separateAxes = !!i907[4]
  i906.range = new pc.Vec2( i907[5], i907[6] )
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemRotationOverLifetime()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[1], i908.x)
  i908.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.y)
  i908.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.z)
  i908.separateAxes = !!i909[4]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemShape()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.shapeType = i911[1]
  i910.randomDirectionAmount = i911[2]
  i910.sphericalDirectionAmount = i911[3]
  i910.randomPositionAmount = i911[4]
  i910.alignToDirection = !!i911[5]
  i910.radius = i911[6]
  i910.radiusMode = i911[7]
  i910.radiusSpread = i911[8]
  i910.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[9], i910.radiusSpeed)
  i910.radiusThickness = i911[10]
  i910.angle = i911[11]
  i910.length = i911[12]
  i910.boxThickness = new pc.Vec3( i911[13], i911[14], i911[15] )
  i910.meshShapeType = i911[16]
  request.r(i911[17], i911[18], 0, i910, 'mesh')
  request.r(i911[19], i911[20], 0, i910, 'meshRenderer')
  request.r(i911[21], i911[22], 0, i910, 'skinnedMeshRenderer')
  i910.useMeshMaterialIndex = !!i911[23]
  i910.meshMaterialIndex = i911[24]
  i910.useMeshColors = !!i911[25]
  i910.normalOffset = i911[26]
  i910.arc = i911[27]
  i910.arcMode = i911[28]
  i910.arcSpread = i911[29]
  i910.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[30], i910.arcSpeed)
  i910.donutRadius = i911[31]
  i910.position = new pc.Vec3( i911[32], i911[33], i911[34] )
  i910.rotation = new pc.Vec3( i911[35], i911[36], i911[37] )
  i910.scale = new pc.Vec3( i911[38], i911[39], i911[40] )
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemSizeBySpeed()
  var i913 = data
  i912.enabled = !!i913[0]
  i912.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[1], i912.x)
  i912.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[2], i912.y)
  i912.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[3], i912.z)
  i912.separateAxes = !!i913[4]
  i912.range = new pc.Vec2( i913[5], i913[6] )
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i914 = root || new pc.ParticleSystemSizeOverLifetime()
  var i915 = data
  i914.enabled = !!i915[0]
  i914.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[1], i914.x)
  i914.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[2], i914.y)
  i914.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[3], i914.z)
  i914.separateAxes = !!i915[4]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i916 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i917 = data
  i916.enabled = !!i917[0]
  i916.mode = i917[1]
  i916.animation = i917[2]
  i916.numTilesX = i917[3]
  i916.numTilesY = i917[4]
  i916.useRandomRow = !!i917[5]
  i916.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[6], i916.frameOverTime)
  i916.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[7], i916.startFrame)
  i916.cycleCount = i917[8]
  i916.rowIndex = i917[9]
  i916.flipU = i917[10]
  i916.flipV = i917[11]
  i916.spriteCount = i917[12]
  var i919 = i917[13]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i916.sprites = i918
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i922 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i923 = data
  i922.enabled = !!i923[0]
  i922.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[1], i922.x)
  i922.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[2], i922.y)
  i922.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[3], i922.z)
  i922.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[4], i922.radial)
  i922.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[5], i922.speedModifier)
  i922.space = i923[6]
  i922.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[7], i922.orbitalX)
  i922.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[8], i922.orbitalY)
  i922.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[9], i922.orbitalZ)
  i922.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[10], i922.orbitalOffsetX)
  i922.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[11], i922.orbitalOffsetY)
  i922.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[12], i922.orbitalOffsetZ)
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i924 = root || new pc.ParticleSystemNoise()
  var i925 = data
  i924.enabled = !!i925[0]
  i924.separateAxes = !!i925[1]
  i924.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[2], i924.strengthX)
  i924.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[3], i924.strengthY)
  i924.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[4], i924.strengthZ)
  i924.frequency = i925[5]
  i924.damping = !!i925[6]
  i924.octaveCount = i925[7]
  i924.octaveMultiplier = i925[8]
  i924.octaveScale = i925[9]
  i924.quality = i925[10]
  i924.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[11], i924.scrollSpeed)
  i924.scrollSpeedMultiplier = i925[12]
  i924.remapEnabled = !!i925[13]
  i924.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[14], i924.remapX)
  i924.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[15], i924.remapY)
  i924.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[16], i924.remapZ)
  i924.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[17], i924.positionAmount)
  i924.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[18], i924.rotationAmount)
  i924.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[19], i924.sizeAmount)
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i926 = root || new pc.ParticleSystemInheritVelocity()
  var i927 = data
  i926.enabled = !!i927[0]
  i926.mode = i927[1]
  i926.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[2], i926.curve)
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i928 = root || new pc.ParticleSystemForceOverLifetime()
  var i929 = data
  i928.enabled = !!i929[0]
  i928.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[1], i928.x)
  i928.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[2], i928.y)
  i928.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[3], i928.z)
  i928.space = i929[4]
  i928.randomized = !!i929[5]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i930 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i931 = data
  i930.enabled = !!i931[0]
  i930.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[1], i930.limit)
  i930.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[2], i930.limitX)
  i930.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[3], i930.limitY)
  i930.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[4], i930.limitZ)
  i930.dampen = i931[5]
  i930.separateAxes = !!i931[6]
  i930.space = i931[7]
  i930.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[8], i930.drag)
  i930.multiplyDragByParticleSize = !!i931[9]
  i930.multiplyDragByParticleVelocity = !!i931[10]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'mesh')
  i932.meshCount = i933[2]
  i932.activeVertexStreamsCount = i933[3]
  i932.alignment = i933[4]
  i932.renderMode = i933[5]
  i932.sortMode = i933[6]
  i932.lengthScale = i933[7]
  i932.velocityScale = i933[8]
  i932.cameraVelocityScale = i933[9]
  i932.normalDirection = i933[10]
  i932.sortingFudge = i933[11]
  i932.minParticleSize = i933[12]
  i932.maxParticleSize = i933[13]
  i932.pivot = new pc.Vec3( i933[14], i933[15], i933[16] )
  request.r(i933[17], i933[18], 0, i932, 'trailMaterial')
  i932.applyActiveColorSpace = !!i933[19]
  i932.enabled = !!i933[20]
  request.r(i933[21], i933[22], 0, i932, 'sharedMaterial')
  var i935 = i933[23]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i932.sharedMaterials = i934
  i932.receiveShadows = !!i933[24]
  i932.shadowCastingMode = i933[25]
  i932.sortingLayerID = i933[26]
  i932.sortingOrder = i933[27]
  i932.lightmapIndex = i933[28]
  i932.lightmapSceneIndex = i933[29]
  i932.lightmapScaleOffset = new pc.Vec4( i933[30], i933[31], i933[32], i933[33] )
  i932.lightProbeUsage = i933[34]
  i932.reflectionProbeUsage = i933[35]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i936 = root || new pc.UnityMaterial()
  var i937 = data
  i936.name = i937[0]
  request.r(i937[1], i937[2], 0, i936, 'shader')
  i936.renderQueue = i937[3]
  i936.enableInstancing = !!i937[4]
  var i939 = i937[5]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i939[i + 0]) );
  }
  i936.floatParameters = i938
  var i941 = i937[6]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i941[i + 0]) );
  }
  i936.colorParameters = i940
  var i943 = i937[7]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i943[i + 0]) );
  }
  i936.vectorParameters = i942
  var i945 = i937[8]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i945[i + 0]) );
  }
  i936.textureParameters = i944
  var i947 = i937[9]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i947[i + 0]) );
  }
  i936.materialFlags = i946
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i951 = data
  i950.name = i951[0]
  i950.value = i951[1]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i955 = data
  i954.name = i955[0]
  i954.value = new pc.Color(i955[1], i955[2], i955[3], i955[4])
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i959 = data
  i958.name = i959[0]
  i958.value = new pc.Vec4( i959[1], i959[2], i959[3], i959[4] )
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i963 = data
  i962.name = i963[0]
  request.r(i963[1], i963[2], 0, i962, 'value')
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i967 = data
  i966.name = i967[0]
  i966.enabled = !!i967[1]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i969 = data
  i968.name = i969[0]
  i968.width = i969[1]
  i968.height = i969[2]
  i968.mipmapCount = i969[3]
  i968.anisoLevel = i969[4]
  i968.filterMode = i969[5]
  i968.hdr = !!i969[6]
  i968.format = i969[7]
  i968.wrapMode = i969[8]
  i968.alphaIsTransparency = !!i969[9]
  i968.alphaSource = i969[10]
  i968.graphicsFormat = i969[11]
  i968.sRGBTexture = !!i969[12]
  i968.desiredColorSpace = i969[13]
  i968.wrapU = i969[14]
  i968.wrapV = i969[15]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i971 = data
  i970.name = i971[0]
  i970.halfPrecision = !!i971[1]
  i970.useUInt32IndexFormat = !!i971[2]
  i970.vertexCount = i971[3]
  i970.aabb = i971[4]
  var i973 = i971[5]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( !!i973[i + 0] );
  }
  i970.streams = i972
  i970.vertices = i971[6]
  var i975 = i971[7]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i975[i + 0]) );
  }
  i970.subMeshes = i974
  var i977 = i971[8]
  var i976 = []
  for(var i = 0; i < i977.length; i += 16) {
    i976.push( new pc.Mat4().setData(i977[i + 0], i977[i + 1], i977[i + 2], i977[i + 3],  i977[i + 4], i977[i + 5], i977[i + 6], i977[i + 7],  i977[i + 8], i977[i + 9], i977[i + 10], i977[i + 11],  i977[i + 12], i977[i + 13], i977[i + 14], i977[i + 15]) );
  }
  i970.bindposes = i976
  var i979 = i971[9]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i979[i + 0]) );
  }
  i970.blendShapes = i978
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i985 = data
  i984.triangles = i985[0]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i991 = data
  i990.name = i991[0]
  var i993 = i991[1]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i993[i + 0]) );
  }
  i990.frames = i992
  return i990
}

Deserializers["ElementsActivator"] = function (request, data, root) {
  var i994 = root || request.c( 'ElementsActivator' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'iconImage')
  request.r(i995[2], i995[3], 0, i994, 'fillImage')
  request.r(i995[4], i995[5], 0, i994, 'moneyImage')
  request.r(i995[6], i995[7], 0, i994, 'arrowMark')
  i994.isReady = !!i995[8]
  var i997 = i995[9]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 1, i996, '')
  }
  i994.targets = i996
  i994.eachScaleDuration = i995[10]
  i994.betweenDelay = i995[11]
  i994.cost = i995[12]
  i994.payPerSecond = i995[13]
  request.r(i995[14], i995[15], 0, i994, 'interactCollider')
  i994.moneyValue = i995[16]
  request.r(i995[17], i995[18], 0, i994, 'moneyValueText')
  i994.setTargetsScaleZeroOnStart = !!i995[19]
  i994.activatorType = i995[20]
  i994.enabledColor = new pc.Color(i995[21], i995[22], i995[23], i995[24])
  i994.disabledColor = new pc.Color(i995[25], i995[26], i995[27], i995[28])
  request.r(i995[29], i995[30], 0, i994, 'playerMovePos')
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1001 = data
  i1000.center = new pc.Vec3( i1001[0], i1001[1], i1001[2] )
  i1000.size = new pc.Vec3( i1001[3], i1001[4], i1001[5] )
  i1000.enabled = !!i1001[6]
  i1000.isTrigger = !!i1001[7]
  request.r(i1001[8], i1001[9], 0, i1000, 'material')
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1003 = data
  i1002.pivot = new pc.Vec2( i1003[0], i1003[1] )
  i1002.anchorMin = new pc.Vec2( i1003[2], i1003[3] )
  i1002.anchorMax = new pc.Vec2( i1003[4], i1003[5] )
  i1002.sizeDelta = new pc.Vec2( i1003[6], i1003[7] )
  i1002.anchoredPosition3D = new pc.Vec3( i1003[8], i1003[9], i1003[10] )
  i1002.rotation = new pc.Quat(i1003[11], i1003[12], i1003[13], i1003[14])
  i1002.scale = new pc.Vec3( i1003[15], i1003[16], i1003[17] )
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1005 = data
  i1004.cullTransparentMesh = !!i1005[0]
  return i1004
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.UI.Image' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'm_Sprite')
  i1006.m_Type = i1007[2]
  i1006.m_PreserveAspect = !!i1007[3]
  i1006.m_FillCenter = !!i1007[4]
  i1006.m_FillMethod = i1007[5]
  i1006.m_FillAmount = i1007[6]
  i1006.m_FillClockwise = !!i1007[7]
  i1006.m_FillOrigin = i1007[8]
  i1006.m_UseSpriteMesh = !!i1007[9]
  i1006.m_PixelsPerUnitMultiplier = i1007[10]
  i1006.m_Maskable = !!i1007[11]
  request.r(i1007[12], i1007[13], 0, i1006, 'm_Material')
  i1006.m_Color = new pc.Color(i1007[14], i1007[15], i1007[16], i1007[17])
  i1006.m_RaycastTarget = !!i1007[18]
  i1006.m_RaycastPadding = new pc.Vec4( i1007[19], i1007[20], i1007[21], i1007[22] )
  return i1006
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1009 = data
  i1008.m_hasFontAssetChanged = !!i1009[0]
  request.r(i1009[1], i1009[2], 0, i1008, 'm_baseMaterial')
  i1008.m_maskOffset = new pc.Vec4( i1009[3], i1009[4], i1009[5], i1009[6] )
  i1008.m_text = i1009[7]
  i1008.m_isRightToLeft = !!i1009[8]
  request.r(i1009[9], i1009[10], 0, i1008, 'm_fontAsset')
  request.r(i1009[11], i1009[12], 0, i1008, 'm_sharedMaterial')
  var i1011 = i1009[13]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1008.m_fontSharedMaterials = i1010
  request.r(i1009[14], i1009[15], 0, i1008, 'm_fontMaterial')
  var i1013 = i1009[16]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 2) {
  request.r(i1013[i + 0], i1013[i + 1], 2, i1012, '')
  }
  i1008.m_fontMaterials = i1012
  i1008.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1009[17], i1009[18], i1009[19], i1009[20])
  i1008.m_fontColor = new pc.Color(i1009[21], i1009[22], i1009[23], i1009[24])
  i1008.m_enableVertexGradient = !!i1009[25]
  i1008.m_colorMode = i1009[26]
  i1008.m_fontColorGradient = request.d('TMPro.VertexGradient', i1009[27], i1008.m_fontColorGradient)
  request.r(i1009[28], i1009[29], 0, i1008, 'm_fontColorGradientPreset')
  request.r(i1009[30], i1009[31], 0, i1008, 'm_spriteAsset')
  i1008.m_tintAllSprites = !!i1009[32]
  request.r(i1009[33], i1009[34], 0, i1008, 'm_StyleSheet')
  i1008.m_TextStyleHashCode = i1009[35]
  i1008.m_overrideHtmlColors = !!i1009[36]
  i1008.m_faceColor = UnityEngine.Color32.ConstructColor(i1009[37], i1009[38], i1009[39], i1009[40])
  i1008.m_fontSize = i1009[41]
  i1008.m_fontSizeBase = i1009[42]
  i1008.m_fontWeight = i1009[43]
  i1008.m_enableAutoSizing = !!i1009[44]
  i1008.m_fontSizeMin = i1009[45]
  i1008.m_fontSizeMax = i1009[46]
  i1008.m_fontStyle = i1009[47]
  i1008.m_HorizontalAlignment = i1009[48]
  i1008.m_VerticalAlignment = i1009[49]
  i1008.m_textAlignment = i1009[50]
  i1008.m_characterSpacing = i1009[51]
  i1008.m_wordSpacing = i1009[52]
  i1008.m_lineSpacing = i1009[53]
  i1008.m_lineSpacingMax = i1009[54]
  i1008.m_paragraphSpacing = i1009[55]
  i1008.m_charWidthMaxAdj = i1009[56]
  i1008.m_enableWordWrapping = !!i1009[57]
  i1008.m_wordWrappingRatios = i1009[58]
  i1008.m_overflowMode = i1009[59]
  request.r(i1009[60], i1009[61], 0, i1008, 'm_linkedTextComponent')
  request.r(i1009[62], i1009[63], 0, i1008, 'parentLinkedComponent')
  i1008.m_enableKerning = !!i1009[64]
  i1008.m_enableExtraPadding = !!i1009[65]
  i1008.checkPaddingRequired = !!i1009[66]
  i1008.m_isRichText = !!i1009[67]
  i1008.m_parseCtrlCharacters = !!i1009[68]
  i1008.m_isOrthographic = !!i1009[69]
  i1008.m_isCullingEnabled = !!i1009[70]
  i1008.m_horizontalMapping = i1009[71]
  i1008.m_verticalMapping = i1009[72]
  i1008.m_uvLineOffset = i1009[73]
  i1008.m_geometrySortingOrder = i1009[74]
  i1008.m_IsTextObjectScaleStatic = !!i1009[75]
  i1008.m_VertexBufferAutoSizeReduction = !!i1009[76]
  i1008.m_useMaxVisibleDescender = !!i1009[77]
  i1008.m_pageToDisplay = i1009[78]
  i1008.m_margin = new pc.Vec4( i1009[79], i1009[80], i1009[81], i1009[82] )
  i1008.m_isUsingLegacyAnimationComponent = !!i1009[83]
  i1008.m_isVolumetricText = !!i1009[84]
  i1008.m_Maskable = !!i1009[85]
  request.r(i1009[86], i1009[87], 0, i1008, 'm_Material')
  i1008.m_Color = new pc.Color(i1009[88], i1009[89], i1009[90], i1009[91])
  i1008.m_RaycastTarget = !!i1009[92]
  i1008.m_RaycastPadding = new pc.Vec4( i1009[93], i1009[94], i1009[95], i1009[96] )
  return i1008
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1014 = root || request.c( 'TMPro.VertexGradient' )
  var i1015 = data
  i1014.topLeft = new pc.Color(i1015[0], i1015[1], i1015[2], i1015[3])
  i1014.topRight = new pc.Color(i1015[4], i1015[5], i1015[6], i1015[7])
  i1014.bottomLeft = new pc.Color(i1015[8], i1015[9], i1015[10], i1015[11])
  i1014.bottomRight = new pc.Color(i1015[12], i1015[13], i1015[14], i1015[15])
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'sharedMesh')
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'additionalVertexStreams')
  i1018.enabled = !!i1019[2]
  request.r(i1019[3], i1019[4], 0, i1018, 'sharedMaterial')
  var i1021 = i1019[5]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 2, i1020, '')
  }
  i1018.sharedMaterials = i1020
  i1018.receiveShadows = !!i1019[6]
  i1018.shadowCastingMode = i1019[7]
  i1018.sortingLayerID = i1019[8]
  i1018.sortingOrder = i1019[9]
  i1018.lightmapIndex = i1019[10]
  i1018.lightmapSceneIndex = i1019[11]
  i1018.lightmapScaleOffset = new pc.Vec4( i1019[12], i1019[13], i1019[14], i1019[15] )
  i1018.lightProbeUsage = i1019[16]
  i1018.reflectionProbeUsage = i1019[17]
  return i1018
}

Deserializers["StairsController"] = function (request, data, root) {
  var i1022 = root || request.c( 'StairsController' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 1, i1024, '')
  }
  i1022.steps = i1024
  request.r(i1023[1], i1023[2], 0, i1022, 'startPoint')
  request.r(i1023[3], i1023[4], 0, i1022, 'endPoint')
  i1022.stepSpeed = i1023[5]
  return i1022
}

Deserializers["StairAttachTrigger"] = function (request, data, root) {
  var i1026 = root || request.c( 'StairAttachTrigger' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'stairsController')
  request.r(i1027[2], i1027[3], 0, i1026, 'arrowObject')
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1029 = data
  i1028.planeDistance = i1029[0]
  i1028.referencePixelsPerUnit = i1029[1]
  i1028.isFallbackOverlay = !!i1029[2]
  i1028.renderMode = i1029[3]
  i1028.renderOrder = i1029[4]
  i1028.sortingLayerName = i1029[5]
  i1028.sortingOrder = i1029[6]
  i1028.scaleFactor = i1029[7]
  request.r(i1029[8], i1029[9], 0, i1028, 'worldCamera')
  i1028.overrideSorting = !!i1029[10]
  i1028.pixelPerfect = !!i1029[11]
  i1028.targetDisplay = i1029[12]
  i1028.overridePixelPerfect = !!i1029[13]
  i1028.enabled = !!i1029[14]
  return i1028
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1031 = data
  i1030.m_UiScaleMode = i1031[0]
  i1030.m_ReferencePixelsPerUnit = i1031[1]
  i1030.m_ScaleFactor = i1031[2]
  i1030.m_ReferenceResolution = new pc.Vec2( i1031[3], i1031[4] )
  i1030.m_ScreenMatchMode = i1031[5]
  i1030.m_MatchWidthOrHeight = i1031[6]
  i1030.m_PhysicalUnit = i1031[7]
  i1030.m_FallbackScreenDPI = i1031[8]
  i1030.m_DefaultSpriteDPI = i1031[9]
  i1030.m_DynamicPixelsPerUnit = i1031[10]
  i1030.m_PresetInfoIsWorld = !!i1031[11]
  return i1030
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1033 = data
  i1032.m_IgnoreReversedGraphics = !!i1033[0]
  i1032.m_BlockingObjects = i1033[1]
  i1032.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1033[2] )
  return i1032
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1034 = root || request.c( 'UIManager' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'moneyText')
  request.r(i1035[2], i1035[3], 0, i1034, 'moneyUiParent')
  request.r(i1035[4], i1035[5], 0, i1034, 'joystick')
  request.r(i1035[6], i1035[7], 0, i1034, 'joystickBackground')
  request.r(i1035[8], i1035[9], 0, i1034, 'boardUiSystem')
  request.r(i1035[10], i1035[11], 0, i1034, 'finishPaintUiSystem')
  request.r(i1035[12], i1035[13], 0, i1034, 'painter')
  request.r(i1035[14], i1035[15], 0, i1034, 'brushSizeSlider')
  request.r(i1035[16], i1035[17], 0, i1034, 'paintProgressText')
  var i1037 = i1035[18]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 2, i1036, '')
  }
  i1034.colorButtons = i1036
  var i1039 = i1035[19]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 4) {
    i1038.push( new pc.Color(i1039[i + 0], i1039[i + 1], i1039[i + 2], i1039[i + 3]) );
  }
  i1034.brushColors = i1038
  i1034.selectedScale = i1035[20]
  i1034.scaleDuration = i1035[21]
  return i1034
}

Deserializers["FloatingJoystick"] = function (request, data, root) {
  var i1044 = root || request.c( 'FloatingJoystick' )
  var i1045 = data
  i1044.handleRange = i1045[0]
  i1044.deadZone = i1045[1]
  i1044.axisOptions = i1045[2]
  i1044.snapX = !!i1045[3]
  i1044.snapY = !!i1045[4]
  request.r(i1045[5], i1045[6], 0, i1044, 'background')
  request.r(i1045[7], i1045[8], 0, i1044, 'handle')
  return i1044
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'm_FillRect')
  request.r(i1047[2], i1047[3], 0, i1046, 'm_HandleRect')
  i1046.m_Direction = i1047[4]
  i1046.m_MinValue = i1047[5]
  i1046.m_MaxValue = i1047[6]
  i1046.m_WholeNumbers = !!i1047[7]
  i1046.m_Value = i1047[8]
  i1046.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1047[9], i1046.m_OnValueChanged)
  i1046.m_Navigation = request.d('UnityEngine.UI.Navigation', i1047[10], i1046.m_Navigation)
  i1046.m_Transition = i1047[11]
  i1046.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1047[12], i1046.m_Colors)
  i1046.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1047[13], i1046.m_SpriteState)
  i1046.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1047[14], i1046.m_AnimationTriggers)
  i1046.m_Interactable = !!i1047[15]
  request.r(i1047[16], i1047[17], 0, i1046, 'm_TargetGraphic')
  return i1046
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1049 = data
  i1048.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1049[0], i1048.m_PersistentCalls)
  return i1048
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('UnityEngine.Events.PersistentCall', i1053[i + 0]));
  }
  i1050.m_Calls = i1052
  return i1050
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'm_Target')
  i1056.m_TargetAssemblyTypeName = i1057[2]
  i1056.m_MethodName = i1057[3]
  i1056.m_Mode = i1057[4]
  i1056.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1057[5], i1056.m_Arguments)
  i1056.m_CallState = i1057[6]
  return i1056
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1059 = data
  i1058.m_Mode = i1059[0]
  i1058.m_WrapAround = !!i1059[1]
  request.r(i1059[2], i1059[3], 0, i1058, 'm_SelectOnUp')
  request.r(i1059[4], i1059[5], 0, i1058, 'm_SelectOnDown')
  request.r(i1059[6], i1059[7], 0, i1058, 'm_SelectOnLeft')
  request.r(i1059[8], i1059[9], 0, i1058, 'm_SelectOnRight')
  return i1058
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1061 = data
  i1060.m_NormalColor = new pc.Color(i1061[0], i1061[1], i1061[2], i1061[3])
  i1060.m_HighlightedColor = new pc.Color(i1061[4], i1061[5], i1061[6], i1061[7])
  i1060.m_PressedColor = new pc.Color(i1061[8], i1061[9], i1061[10], i1061[11])
  i1060.m_SelectedColor = new pc.Color(i1061[12], i1061[13], i1061[14], i1061[15])
  i1060.m_DisabledColor = new pc.Color(i1061[16], i1061[17], i1061[18], i1061[19])
  i1060.m_ColorMultiplier = i1061[20]
  i1060.m_FadeDuration = i1061[21]
  return i1060
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'm_HighlightedSprite')
  request.r(i1063[2], i1063[3], 0, i1062, 'm_PressedSprite')
  request.r(i1063[4], i1063[5], 0, i1062, 'm_SelectedSprite')
  request.r(i1063[6], i1063[7], 0, i1062, 'm_DisabledSprite')
  return i1062
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1065 = data
  i1064.m_NormalTrigger = i1065[0]
  i1064.m_HighlightedTrigger = i1065[1]
  i1064.m_PressedTrigger = i1065[2]
  i1064.m_SelectedTrigger = i1065[3]
  i1064.m_DisabledTrigger = i1065[4]
  return i1064
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.UI.Button' )
  var i1067 = data
  i1066.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1067[0], i1066.m_OnClick)
  i1066.m_Navigation = request.d('UnityEngine.UI.Navigation', i1067[1], i1066.m_Navigation)
  i1066.m_Transition = i1067[2]
  i1066.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1067[3], i1066.m_Colors)
  i1066.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1067[4], i1066.m_SpriteState)
  i1066.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1067[5], i1066.m_AnimationTriggers)
  i1066.m_Interactable = !!i1067[6]
  request.r(i1067[7], i1067[8], 0, i1066, 'm_TargetGraphic')
  return i1066
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1069 = data
  i1068.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1069[0], i1068.m_PersistentCalls)
  return i1068
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'm_ObjectArgument')
  i1070.m_ObjectArgumentAssemblyTypeName = i1071[2]
  i1070.m_IntArgument = i1071[3]
  i1070.m_FloatArgument = i1071[4]
  i1070.m_StringArgument = i1071[5]
  i1070.m_BoolArgument = !!i1071[6]
  return i1070
}

Deserializers["CustomerController"] = function (request, data, root) {
  var i1072 = root || request.c( 'CustomerController' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'data')
  i1072.speed = i1073[2]
  var i1075 = i1073[3]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1075.length; i += 2) {
  request.r(i1075[i + 0], i1075[i + 1], 1, i1074, '')
  }
  i1072.positionsToMove = i1074
  request.r(i1073[4], i1073[5], 0, i1072, 'baggageHoldPoint')
  i1072.hasBaggage = !!i1073[6]
  return i1072
}

Deserializers["CustomerStateMachine"] = function (request, data, root) {
  var i1076 = root || request.c( 'CustomerStateMachine' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'customerController')
  i1076.currentStateType = i1077[2]
  return i1076
}

Deserializers["CustomerAnimation"] = function (request, data, root) {
  var i1078 = root || request.c( 'CustomerAnimation' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, '_customerAnimator')
  return i1078
}

Deserializers["CustomerColor"] = function (request, data, root) {
  var i1080 = root || request.c( 'CustomerColor' )
  var i1081 = data
  request.r(i1081[0], i1081[1], 0, i1080, 'rend')
  return i1080
}

Deserializers["Money"] = function (request, data, root) {
  var i1082 = root || request.c( 'Money' )
  var i1083 = data
  i1082.value = i1083[0]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i1085 = data
  var i1087 = i1085[0]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 3) {
    i1086.push( new pc.Vec3( i1087[i + 0], i1087[i + 1], i1087[i + 2] ) );
  }
  i1084.positions = i1086
  i1084.positionCount = i1085[1]
  i1084.time = i1085[2]
  i1084.startWidth = i1085[3]
  i1084.endWidth = i1085[4]
  i1084.widthMultiplier = i1085[5]
  i1084.autodestruct = !!i1085[6]
  i1084.emitting = !!i1085[7]
  i1084.numCornerVertices = i1085[8]
  i1084.numCapVertices = i1085[9]
  i1084.minVertexDistance = i1085[10]
  i1084.colorGradient = i1085[11] ? new pc.ColorGradient(i1085[11][0], i1085[11][1], i1085[11][2]) : null
  i1084.startColor = new pc.Color(i1085[12], i1085[13], i1085[14], i1085[15])
  i1084.endColor = new pc.Color(i1085[16], i1085[17], i1085[18], i1085[19])
  i1084.generateLightingData = !!i1085[20]
  i1084.textureMode = i1085[21]
  i1084.alignment = i1085[22]
  i1084.widthCurve = new pc.AnimationCurve( { keys_flow: i1085[23] } )
  i1084.enabled = !!i1085[24]
  request.r(i1085[25], i1085[26], 0, i1084, 'sharedMaterial')
  var i1089 = i1085[27]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 2) {
  request.r(i1089[i + 0], i1089[i + 1], 2, i1088, '')
  }
  i1084.sharedMaterials = i1088
  i1084.receiveShadows = !!i1085[28]
  i1084.shadowCastingMode = i1085[29]
  i1084.sortingLayerID = i1085[30]
  i1084.sortingOrder = i1085[31]
  i1084.lightmapIndex = i1085[32]
  i1084.lightmapSceneIndex = i1085[33]
  i1084.lightmapScaleOffset = new pc.Vec4( i1085[34], i1085[35], i1085[36], i1085[37] )
  i1084.lightProbeUsage = i1085[38]
  i1084.reflectionProbeUsage = i1085[39]
  return i1084
}

Deserializers["Baggage"] = function (request, data, root) {
  var i1092 = root || request.c( 'Baggage' )
  var i1093 = data
  request.r(i1093[0], i1093[1], 0, i1092, 'data')
  request.r(i1093[2], i1093[3], 0, i1092, '_baggageColor')
  request.r(i1093[4], i1093[5], 0, i1092, '_baggageTrail')
  return i1092
}

Deserializers["BaggageColor"] = function (request, data, root) {
  var i1094 = root || request.c( 'BaggageColor' )
  var i1095 = data
  var i1097 = i1095[0]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i1097.length; i += 2) {
    i1096.add(new pc.Vec2( i1097[i + 0], i1097[i + 1] ));
  }
  i1094.tilings = i1096
  request.r(i1095[1], i1095[2], 0, i1094, 'rend')
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1101 = data
  i1100.name = i1101[0]
  i1100.atlasId = i1101[1]
  i1100.mipmapCount = i1101[2]
  i1100.hdr = !!i1101[3]
  i1100.size = i1101[4]
  i1100.anisoLevel = i1101[5]
  i1100.filterMode = i1101[6]
  var i1103 = i1101[7]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 4) {
    i1102.push( UnityEngine.Rect.MinMaxRect(i1103[i + 0], i1103[i + 1], i1103[i + 2], i1103[i + 3]) );
  }
  i1100.rects = i1102
  i1100.wrapU = i1101[8]
  i1100.wrapV = i1101[9]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1107 = data
  i1106.name = i1107[0]
  i1106.index = i1107[1]
  i1106.startup = !!i1107[2]
  return i1106
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1108 = root || request.c( 'GameManager' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'gameData')
  return i1108
}

Deserializers["SpawnController"] = function (request, data, root) {
  var i1110 = root || request.c( 'SpawnController' )
  var i1111 = data
  var i1113 = i1111[0]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('PoolPrefabContainer')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(request.d('PoolPrefabContainer', i1113[i + 0]));
  }
  i1110.PoolPrefabContainers = i1112
  return i1110
}

Deserializers["PoolPrefabContainer"] = function (request, data, root) {
  var i1116 = root || request.c( 'PoolPrefabContainer' )
  var i1117 = data
  i1116.PoolType = i1117[0]
  request.r(i1117[1], i1117[2], 0, i1116, 'Prefab')
  request.r(i1117[3], i1117[4], 0, i1116, 'Parent')
  i1116.PoolSize = i1117[5]
  return i1116
}

Deserializers["CustomerSystemManager"] = function (request, data, root) {
  var i1118 = root || request.c( 'CustomerSystemManager' )
  var i1119 = data
  var i1121 = i1119[0]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('CustomerQueueDataContainer')))
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.add(request.d('CustomerQueueDataContainer', i1121[i + 0]));
  }
  i1118.baggageQueueData = i1120
  var i1123 = i1119[1]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('CustomerQueueDataContainer')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('CustomerQueueDataContainer', i1123[i + 0]));
  }
  i1118.planeQueueData = i1122
  var i1125 = i1119[2]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('CustomerController')))
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 1, i1124, '')
  }
  i1118.customers = i1124
  request.r(i1119[3], i1119[4], 0, i1118, 'customerSpawnTransform')
  i1118.customerCount = i1119[5]
  i1118.spawnDelay = i1119[6]
  request.r(i1119[7], i1119[8], 0, i1118, 'attachTrigger')
  return i1118
}

Deserializers["CustomerQueueDataContainer"] = function (request, data, root) {
  var i1128 = root || request.c( 'CustomerQueueDataContainer' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'QueuePoint')
  request.r(i1129[2], i1129[3], 0, i1128, 'CustomerInQueue')
  i1128.IsInCorrectSpot = !!i1129[4]
  return i1128
}

Deserializers["CustomerPathController"] = function (request, data, root) {
  var i1132 = root || request.c( 'CustomerPathController' )
  var i1133 = data
  var i1135 = i1133[0]
  var i1134 = new (System.Collections.Generic.List$1(Bridge.ns('CustomerPathController+CustomerPathData')))
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.add(request.d('CustomerPathController+CustomerPathData', i1135[i + 0]));
  }
  i1132.customerPathData = i1134
  return i1132
}

Deserializers["CustomerPathController+CustomerPathData"] = function (request, data, root) {
  var i1138 = root || request.c( 'CustomerPathController+CustomerPathData' )
  var i1139 = data
  i1138.customerState = i1139[0]
  var i1141 = i1139[1]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1141.length; i += 2) {
  request.r(i1141[i + 0], i1141[i + 1], 1, i1140, '')
  }
  i1138.PathPoints = i1140
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1143 = data
  i1142.aspect = i1143[0]
  i1142.orthographic = !!i1143[1]
  i1142.orthographicSize = i1143[2]
  i1142.backgroundColor = new pc.Color(i1143[3], i1143[4], i1143[5], i1143[6])
  i1142.nearClipPlane = i1143[7]
  i1142.farClipPlane = i1143[8]
  i1142.fieldOfView = i1143[9]
  i1142.depth = i1143[10]
  i1142.clearFlags = i1143[11]
  i1142.cullingMask = i1143[12]
  i1142.rect = i1143[13]
  request.r(i1143[14], i1143[15], 0, i1142, 'targetTexture')
  i1142.usePhysicalProperties = !!i1143[16]
  i1142.focalLength = i1143[17]
  i1142.sensorSize = new pc.Vec2( i1143[18], i1143[19] )
  i1142.lensShift = new pc.Vec2( i1143[20], i1143[21] )
  i1142.gateFit = i1143[22]
  i1142.commandBufferCount = i1143[23]
  i1142.cameraType = i1143[24]
  i1142.enabled = !!i1143[25]
  return i1142
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i1144 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i1145 = data
  i1144.m_ShowDebugText = !!i1145[0]
  i1144.m_ShowCameraFrustum = !!i1145[1]
  i1144.m_IgnoreTimeScale = !!i1145[2]
  request.r(i1145[3], i1145[4], 0, i1144, 'm_WorldUpOverride')
  i1144.m_UpdateMethod = i1145[5]
  i1144.m_BlendUpdateMethod = i1145[6]
  i1144.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i1145[7], i1144.m_DefaultBlend)
  request.r(i1145[8], i1145[9], 0, i1144, 'm_CustomBlends')
  i1144.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i1145[10], i1144.m_CameraCutEvent)
  i1144.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1145[11], i1144.m_CameraActivatedEvent)
  return i1144
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i1146 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i1147 = data
  i1146.m_Style = i1147[0]
  i1146.m_Time = i1147[1]
  i1146.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i1147[2] } )
  return i1146
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i1148 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i1149 = data
  i1148.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1149[0], i1148.m_PersistentCalls)
  return i1148
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i1150 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i1151 = data
  i1150.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1151[0], i1150.m_PersistentCalls)
  return i1150
}

Deserializers["CameraManager"] = function (request, data, root) {
  var i1152 = root || request.c( 'CameraManager' )
  var i1153 = data
  request.r(i1153[0], i1153[1], 0, i1152, 'mainCam')
  request.r(i1153[2], i1153[3], 0, i1152, 'environmentCam')
  request.r(i1153[4], i1153[5], 0, i1152, 'boardCam')
  return i1152
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i1154 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i1155 = data
  request.r(i1155[0], i1155[1], 0, i1154, 'm_LookAt')
  request.r(i1155[2], i1155[3], 0, i1154, 'm_Follow')
  i1154.m_Lens = request.d('Cinemachine.LensSettings', i1155[4], i1154.m_Lens)
  i1154.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i1155[5], i1154.m_Transitions)
  var i1157 = i1155[6]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( i1157[i + 0] );
  }
  i1154.m_ExcludedPropertiesInInspector = i1156
  var i1159 = i1155[7]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( i1159[i + 0] );
  }
  i1154.m_LockStageInInspector = i1158
  i1154.m_Priority = i1155[8]
  i1154.m_StandbyUpdate = i1155[9]
  i1154.m_LegacyBlendHint = i1155[10]
  request.r(i1155[11], i1155[12], 0, i1154, 'm_ComponentOwner')
  i1154.m_StreamingVersion = i1155[13]
  return i1154
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i1160 = root || request.c( 'Cinemachine.LensSettings' )
  var i1161 = data
  i1160.FieldOfView = i1161[0]
  i1160.OrthographicSize = i1161[1]
  i1160.NearClipPlane = i1161[2]
  i1160.FarClipPlane = i1161[3]
  i1160.Dutch = i1161[4]
  i1160.ModeOverride = i1161[5]
  i1160.LensShift = new pc.Vec2( i1161[6], i1161[7] )
  i1160.GateFit = i1161[8]
  i1160.FocusDistance = i1161[9]
  i1160.m_SensorSize = new pc.Vec2( i1161[10], i1161[11] )
  return i1160
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i1162 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i1163 = data
  i1162.m_BlendHint = i1163[0]
  i1162.m_InheritPosition = !!i1163[1]
  i1162.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1163[2], i1162.m_OnCameraLive)
  return i1162
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i1168 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i1169 = data
  return i1168
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i1170 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i1171 = data
  i1170.m_TrackedObjectOffset = new pc.Vec3( i1171[0], i1171[1], i1171[2] )
  i1170.m_LookaheadTime = i1171[3]
  i1170.m_LookaheadSmoothing = i1171[4]
  i1170.m_LookaheadIgnoreY = !!i1171[5]
  i1170.m_HorizontalDamping = i1171[6]
  i1170.m_VerticalDamping = i1171[7]
  i1170.m_ScreenX = i1171[8]
  i1170.m_ScreenY = i1171[9]
  i1170.m_DeadZoneWidth = i1171[10]
  i1170.m_DeadZoneHeight = i1171[11]
  i1170.m_SoftZoneWidth = i1171[12]
  i1170.m_SoftZoneHeight = i1171[13]
  i1170.m_BiasX = i1171[14]
  i1170.m_BiasY = i1171[15]
  i1170.m_CenterOnActivate = !!i1171[16]
  return i1170
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i1172 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i1173 = data
  i1172.m_BindingMode = i1173[0]
  i1172.m_FollowOffset = new pc.Vec3( i1173[1], i1173[2], i1173[3] )
  i1172.m_XDamping = i1173[4]
  i1172.m_YDamping = i1173[5]
  i1172.m_ZDamping = i1173[6]
  i1172.m_AngularDampingMode = i1173[7]
  i1172.m_PitchDamping = i1173[8]
  i1172.m_YawDamping = i1173[9]
  i1172.m_RollDamping = i1173[10]
  i1172.m_AngularDamping = i1173[11]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1175 = data
  i1174.type = i1175[0]
  i1174.color = new pc.Color(i1175[1], i1175[2], i1175[3], i1175[4])
  i1174.cullingMask = i1175[5]
  i1174.intensity = i1175[6]
  i1174.range = i1175[7]
  i1174.spotAngle = i1175[8]
  i1174.shadows = i1175[9]
  i1174.shadowNormalBias = i1175[10]
  i1174.shadowBias = i1175[11]
  i1174.shadowStrength = i1175[12]
  i1174.shadowResolution = i1175[13]
  i1174.lightmapBakeType = i1175[14]
  i1174.renderMode = i1175[15]
  request.r(i1175[16], i1175[17], 0, i1174, 'cookie')
  i1174.cookieSize = i1175[18]
  i1174.enabled = !!i1175[19]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1177 = data
  request.r(i1177[0], i1177[1], 0, i1176, 'sharedMesh')
  i1176.convex = !!i1177[2]
  i1176.enabled = !!i1177[3]
  i1176.isTrigger = !!i1177[4]
  request.r(i1177[5], i1177[6], 0, i1176, 'material')
  return i1176
}

Deserializers["MeshPainter"] = function (request, data, root) {
  var i1178 = root || request.c( 'MeshPainter' )
  var i1179 = data
  request.r(i1179[0], i1179[1], 0, i1178, 'cam')
  request.r(i1179[2], i1179[3], 0, i1178, 'paintMaterial')
  request.r(i1179[4], i1179[5], 0, i1178, 'brushShader')
  request.r(i1179[6], i1179[7], 0, i1178, 'brushTexture')
  i1178.boardLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1179[8] )
  request.r(i1179[9], i1179[10], 0, i1178, 'confettiParticle')
  i1178.paintColor = new pc.Color(i1179[11], i1179[12], i1179[13], i1179[14])
  i1178.brushSize = i1179[15]
  request.r(i1179[16], i1179[17], 0, i1178, 'hitIndicator')
  i1178.offset = new pc.Vec3( i1179[18], i1179[19], i1179[20] )
  i1178.isReady = !!i1179[21]
  return i1178
}

Deserializers["BoardPlaneArea"] = function (request, data, root) {
  var i1180 = root || request.c( 'BoardPlaneArea' )
  var i1181 = data
  i1180.stayInterval = i1181[0]
  i1180.customerBoarded = i1181[1]
  i1180.maxCustomer = i1181[2]
  return i1180
}

Deserializers["Plane"] = function (request, data, root) {
  var i1182 = root || request.c( 'Plane' )
  var i1183 = data
  i1182.maxCustomerCapacity = i1183[0]
  i1182.currentCustomerCount = i1183[1]
  request.r(i1183[2], i1183[3], 0, i1182, 'customerText')
  request.r(i1183[4], i1183[5], 0, i1182, 'backTarget')
  request.r(i1183[6], i1183[7], 0, i1182, 'forwardTarget')
  request.r(i1183[8], i1183[9], 0, i1182, 'smokeEffect')
  i1182.isReady = !!i1183[10]
  i1182.backDuration = i1183[11]
  i1182.rotateDuration = i1183[12]
  i1182.forwardDuration = i1183[13]
  return i1182
}

Deserializers["TruckController"] = function (request, data, root) {
  var i1184 = root || request.c( 'TruckController' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'stackPoint')
  i1184.maxCapacity = i1185[2]
  request.r(i1185[3], i1185[4], 0, i1184, 'moveTarget')
  i1184.additionalRotation = new pc.Vec3( i1185[5], i1185[6], i1185[7] )
  i1184.moveDuration = i1185[8]
  return i1184
}

Deserializers["BoardBaggageArea"] = function (request, data, root) {
  var i1186 = root || request.c( 'BoardBaggageArea' )
  var i1187 = data
  i1186.stayInterval = i1187[0]
  i1186.customerBoarded = i1187[1]
  i1186.maxCustomer = i1187[2]
  return i1186
}

Deserializers["XRayMachine"] = function (request, data, root) {
  var i1188 = root || request.c( 'XRayMachine' )
  var i1189 = data
  request.r(i1189[0], i1189[1], 0, i1188, 'xRayBaggageArea')
  request.r(i1189[2], i1189[3], 0, i1188, 'outputPoint')
  i1188.baggageMoveDuration = i1189[4]
  i1188.interactCooldown = i1189[5]
  request.r(i1189[6], i1189[7], 0, i1188, 'baggageLift')
  request.r(i1189[8], i1189[9], 0, i1188, 'xRayLightParticle')
  return i1188
}

Deserializers["XRayBaggageArea"] = function (request, data, root) {
  var i1190 = root || request.c( 'XRayBaggageArea' )
  var i1191 = data
  request.r(i1191[0], i1191[1], 0, i1190, 'stackPoint')
  i1190.interactCooldown = i1191[2]
  i1190.additionalRotation = new pc.Vec3( i1191[3], i1191[4], i1191[5] )
  var i1193 = i1191[6]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('Baggage')))
  for(var i = 0; i < i1193.length; i += 2) {
  request.r(i1193[i + 0], i1193[i + 1], 1, i1192, '')
  }
  i1190.baggageList = i1192
  i1190.passedBaggageCount = i1191[7]
  return i1190
}

Deserializers["BaggageLift"] = function (request, data, root) {
  var i1194 = root || request.c( 'BaggageLift' )
  var i1195 = data
  request.r(i1195[0], i1195[1], 0, i1194, 'baggagePoint')
  request.r(i1195[2], i1195[3], 0, i1194, 'topPoint')
  request.r(i1195[4], i1195[5], 0, i1194, 'truck')
  i1194.liftDuration = i1195[6]
  i1194.additionalRotation = new pc.Vec3( i1195[7], i1195[8], i1195[9] )
  return i1194
}

Deserializers["MoneyArea"] = function (request, data, root) {
  var i1196 = root || request.c( 'MoneyArea' )
  var i1197 = data
  var i1199 = i1197[0]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1199.length; i += 2) {
  request.r(i1199[i + 0], i1199[i + 1], 1, i1198, '')
  }
  i1196.slotPoints = i1198
  i1196.jumpPower = i1197[1]
  i1196.jumpDuration = i1197[2]
  i1196.layerHeight = i1197[3]
  i1196.newMoneyScale = new pc.Vec3( i1197[4], i1197[5], i1197[6] )
  i1196.collectedMoneyCount = i1197[7]
  i1196.maxMoneyCount = i1197[8]
  return i1196
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1200 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1201 = data
  request.r(i1201[0], i1201[1], 0, i1200, 'm_FirstSelected')
  i1200.m_sendNavigationEvents = !!i1201[2]
  i1200.m_DragThreshold = i1201[3]
  return i1200
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1202 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1203 = data
  i1202.m_HorizontalAxis = i1203[0]
  i1202.m_VerticalAxis = i1203[1]
  i1202.m_SubmitButton = i1203[2]
  i1202.m_CancelButton = i1203[3]
  i1202.m_InputActionsPerSecond = i1203[4]
  i1202.m_RepeatDelay = i1203[5]
  i1202.m_ForceModuleActive = !!i1203[6]
  i1202.m_SendPointerHoverToParent = !!i1203[7]
  return i1202
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i1204 = root || request.c( 'TutorialManager' )
  var i1205 = data
  var i1207 = i1205[0]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('TutorialManager+TutorialStep')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(request.d('TutorialManager+TutorialStep', i1207[i + 0]));
  }
  i1204.steps = i1206
  request.r(i1205[1], i1205[2], 0, i1204, 'playerArrow')
  request.r(i1205[3], i1205[4], 0, i1204, 'currentTarget')
  i1204.highlightColor = new pc.Color(i1205[5], i1205[6], i1205[7], i1205[8])
  i1204.highlightScale = i1205[9]
  i1204.tweenDuration = i1205[10]
  i1204.currentIndex = i1205[11]
  i1204.tutorialActive = !!i1205[12]
  return i1204
}

Deserializers["TutorialManager+TutorialStep"] = function (request, data, root) {
  var i1210 = root || request.c( 'TutorialManager+TutorialStep' )
  var i1211 = data
  request.r(i1211[0], i1211[1], 0, i1210, 'target')
  request.r(i1211[2], i1211[3], 0, i1210, 'posTarget')
  i1210.shouldHighlight = !!i1211[4]
  return i1210
}

Deserializers["SFXManager"] = function (request, data, root) {
  var i1212 = root || request.c( 'SFXManager' )
  var i1213 = data
  request.r(i1213[0], i1213[1], 0, i1212, 'audioSource')
  var i1215 = i1213[2]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('SFXData')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('SFXData', i1215[i + 0]));
  }
  i1212.sfxList = i1214
  i1212.currentPitch = i1213[3]
  i1212.defaultPitch = i1213[4]
  return i1212
}

Deserializers["SFXData"] = function (request, data, root) {
  var i1218 = root || request.c( 'SFXData' )
  var i1219 = data
  i1218.type = i1219[0]
  request.r(i1219[1], i1219[2], 0, i1218, 'clip')
  i1218.volume = i1219[3]
  i1218.pitch = i1219[4]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1221 = data
  request.r(i1221[0], i1221[1], 0, i1220, 'clip')
  request.r(i1221[2], i1221[3], 0, i1220, 'outputAudioMixerGroup')
  i1220.playOnAwake = !!i1221[4]
  i1220.loop = !!i1221[5]
  i1220.time = i1221[6]
  i1220.volume = i1221[7]
  i1220.pitch = i1221[8]
  i1220.enabled = !!i1221[9]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1223 = data
  i1222.ambientIntensity = i1223[0]
  i1222.reflectionIntensity = i1223[1]
  i1222.ambientMode = i1223[2]
  i1222.ambientLight = new pc.Color(i1223[3], i1223[4], i1223[5], i1223[6])
  i1222.ambientSkyColor = new pc.Color(i1223[7], i1223[8], i1223[9], i1223[10])
  i1222.ambientGroundColor = new pc.Color(i1223[11], i1223[12], i1223[13], i1223[14])
  i1222.ambientEquatorColor = new pc.Color(i1223[15], i1223[16], i1223[17], i1223[18])
  i1222.fogColor = new pc.Color(i1223[19], i1223[20], i1223[21], i1223[22])
  i1222.fogEndDistance = i1223[23]
  i1222.fogStartDistance = i1223[24]
  i1222.fogDensity = i1223[25]
  i1222.fog = !!i1223[26]
  request.r(i1223[27], i1223[28], 0, i1222, 'skybox')
  i1222.fogMode = i1223[29]
  var i1225 = i1223[30]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1225[i + 0]) );
  }
  i1222.lightmaps = i1224
  i1222.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1223[31], i1222.lightProbes)
  i1222.lightmapsMode = i1223[32]
  i1222.mixedBakeMode = i1223[33]
  i1222.environmentLightingMode = i1223[34]
  i1222.ambientProbe = new pc.SphericalHarmonicsL2(i1223[35])
  i1222.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1223[36])
  i1222.useReferenceAmbientProbe = !!i1223[37]
  request.r(i1223[38], i1223[39], 0, i1222, 'customReflection')
  request.r(i1223[40], i1223[41], 0, i1222, 'defaultReflection')
  i1222.defaultReflectionMode = i1223[42]
  i1222.defaultReflectionResolution = i1223[43]
  i1222.sunLightObjectId = i1223[44]
  i1222.pixelLightCount = i1223[45]
  i1222.defaultReflectionHDR = !!i1223[46]
  i1222.hasLightDataAsset = !!i1223[47]
  i1222.hasManualGenerate = !!i1223[48]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1229 = data
  request.r(i1229[0], i1229[1], 0, i1228, 'lightmapColor')
  request.r(i1229[2], i1229[3], 0, i1228, 'lightmapDirection')
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1230 = root || new UnityEngine.LightProbes()
  var i1231 = data
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1237 = data
  var i1239 = i1237[0]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1239[i + 0]));
  }
  i1236.ShaderCompilationErrors = i1238
  i1236.name = i1237[1]
  i1236.guid = i1237[2]
  var i1241 = i1237[3]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( i1241[i + 0] );
  }
  i1236.shaderDefinedKeywords = i1240
  var i1243 = i1237[4]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1243[i + 0]) );
  }
  i1236.passes = i1242
  var i1245 = i1237[5]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1245[i + 0]) );
  }
  i1236.usePasses = i1244
  var i1247 = i1237[6]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1247[i + 0]) );
  }
  i1236.defaultParameterValues = i1246
  request.r(i1237[7], i1237[8], 0, i1236, 'unityFallbackShader')
  i1236.readDepth = !!i1237[9]
  i1236.isCreatedByShaderGraph = !!i1237[10]
  i1236.disableBatching = !!i1237[11]
  i1236.compiled = !!i1237[12]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1251 = data
  i1250.shaderName = i1251[0]
  i1250.errorMessage = i1251[1]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1254 = root || new pc.UnityShaderPass()
  var i1255 = data
  i1254.id = i1255[0]
  i1254.subShaderIndex = i1255[1]
  i1254.name = i1255[2]
  i1254.passType = i1255[3]
  i1254.grabPassTextureName = i1255[4]
  i1254.usePass = !!i1255[5]
  i1254.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1255[6], i1254.zTest)
  i1254.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1255[7], i1254.zWrite)
  i1254.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1255[8], i1254.culling)
  i1254.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1255[9], i1254.blending)
  i1254.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1255[10], i1254.alphaBlending)
  i1254.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1255[11], i1254.colorWriteMask)
  i1254.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1255[12], i1254.offsetUnits)
  i1254.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1255[13], i1254.offsetFactor)
  i1254.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1255[14], i1254.stencilRef)
  i1254.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1255[15], i1254.stencilReadMask)
  i1254.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1255[16], i1254.stencilWriteMask)
  i1254.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1255[17], i1254.stencilOp)
  i1254.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1255[18], i1254.stencilOpFront)
  i1254.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1255[19], i1254.stencilOpBack)
  var i1257 = i1255[20]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1257[i + 0]) );
  }
  i1254.tags = i1256
  var i1259 = i1255[21]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( i1259[i + 0] );
  }
  i1254.passDefinedKeywords = i1258
  var i1261 = i1255[22]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1261[i + 0]) );
  }
  i1254.passDefinedKeywordGroups = i1260
  var i1263 = i1255[23]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1263[i + 0]) );
  }
  i1254.variants = i1262
  var i1265 = i1255[24]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1265[i + 0]) );
  }
  i1254.excludedVariants = i1264
  i1254.hasDepthReader = !!i1255[25]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1267 = data
  i1266.val = i1267[0]
  i1266.name = i1267[1]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1269 = data
  i1268.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1269[0], i1268.src)
  i1268.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1269[1], i1268.dst)
  i1268.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1269[2], i1268.op)
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1271 = data
  i1270.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1271[0], i1270.pass)
  i1270.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1271[1], i1270.fail)
  i1270.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1271[2], i1270.zFail)
  i1270.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1271[3], i1270.comp)
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1275 = data
  i1274.name = i1275[0]
  i1274.value = i1275[1]
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1279 = data
  var i1281 = i1279[0]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( i1281[i + 0] );
  }
  i1278.keywords = i1280
  i1278.hasDiscard = !!i1279[1]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1285 = data
  i1284.passId = i1285[0]
  i1284.subShaderIndex = i1285[1]
  var i1287 = i1285[2]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( i1287[i + 0] );
  }
  i1284.keywords = i1286
  i1284.vertexProgram = i1285[3]
  i1284.fragmentProgram = i1285[4]
  i1284.exportedForWebGl2 = !!i1285[5]
  i1284.readDepth = !!i1285[6]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1291 = data
  request.r(i1291[0], i1291[1], 0, i1290, 'shader')
  i1290.pass = i1291[2]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1295 = data
  i1294.name = i1295[0]
  i1294.type = i1295[1]
  i1294.value = new pc.Vec4( i1295[2], i1295[3], i1295[4], i1295[5] )
  i1294.textureValue = i1295[6]
  i1294.shaderPropertyFlag = i1295[7]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1297 = data
  i1296.name = i1297[0]
  request.r(i1297[1], i1297[2], 0, i1296, 'texture')
  i1296.aabb = i1297[3]
  i1296.vertices = i1297[4]
  i1296.triangles = i1297[5]
  i1296.textureRect = UnityEngine.Rect.MinMaxRect(i1297[6], i1297[7], i1297[8], i1297[9])
  i1296.packedRect = UnityEngine.Rect.MinMaxRect(i1297[10], i1297[11], i1297[12], i1297[13])
  i1296.border = new pc.Vec4( i1297[14], i1297[15], i1297[16], i1297[17] )
  i1296.transparency = i1297[18]
  i1296.bounds = i1297[19]
  i1296.pixelsPerUnit = i1297[20]
  i1296.textureWidth = i1297[21]
  i1296.textureHeight = i1297[22]
  i1296.nativeSize = new pc.Vec2( i1297[23], i1297[24] )
  i1296.pivot = new pc.Vec2( i1297[25], i1297[26] )
  i1296.textureRectOffset = new pc.Vec2( i1297[27], i1297[28] )
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1299 = data
  i1298.name = i1299[0]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1301 = data
  i1300.name = i1301[0]
  i1300.wrapMode = i1301[1]
  i1300.isLooping = !!i1301[2]
  i1300.length = i1301[3]
  var i1303 = i1301[4]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1303[i + 0]) );
  }
  i1300.curves = i1302
  var i1305 = i1301[5]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1305[i + 0]) );
  }
  i1300.events = i1304
  i1300.halfPrecision = !!i1301[6]
  i1300._frameRate = i1301[7]
  i1300.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1301[8], i1300.localBounds)
  i1300.hasMuscleCurves = !!i1301[9]
  var i1307 = i1301[10]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( i1307[i + 0] );
  }
  i1300.clipMuscleConstant = i1306
  i1300.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1301[11], i1300.clipBindingConstant)
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1311 = data
  i1310.path = i1311[0]
  i1310.hash = i1311[1]
  i1310.componentType = i1311[2]
  i1310.property = i1311[3]
  i1310.keys = i1311[4]
  var i1313 = i1311[5]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1313[i + 0]) );
  }
  i1310.objectReferenceKeys = i1312
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1317 = data
  i1316.time = i1317[0]
  request.r(i1317[1], i1317[2], 0, i1316, 'value')
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1321 = data
  i1320.functionName = i1321[0]
  i1320.floatParameter = i1321[1]
  i1320.intParameter = i1321[2]
  i1320.stringParameter = i1321[3]
  request.r(i1321[4], i1321[5], 0, i1320, 'objectReferenceParameter')
  i1320.time = i1321[6]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1323 = data
  i1322.center = new pc.Vec3( i1323[0], i1323[1], i1323[2] )
  i1322.extends = new pc.Vec3( i1323[3], i1323[4], i1323[5] )
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1327 = data
  var i1329 = i1327[0]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( i1329[i + 0] );
  }
  i1326.genericBindings = i1328
  var i1331 = i1327[1]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( i1331[i + 0] );
  }
  i1326.pptrCurveMapping = i1330
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1333 = data
  i1332.name = i1333[0]
  i1332.ascent = i1333[1]
  i1332.originalLineHeight = i1333[2]
  i1332.fontSize = i1333[3]
  var i1335 = i1333[4]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1335[i + 0]) );
  }
  i1332.characterInfo = i1334
  request.r(i1333[5], i1333[6], 0, i1332, 'texture')
  i1332.originalFontSize = i1333[7]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1339 = data
  i1338.index = i1339[0]
  i1338.advance = i1339[1]
  i1338.bearing = i1339[2]
  i1338.glyphWidth = i1339[3]
  i1338.glyphHeight = i1339[4]
  i1338.minX = i1339[5]
  i1338.maxX = i1339[6]
  i1338.minY = i1339[7]
  i1338.maxY = i1339[8]
  i1338.uvBottomLeftX = i1339[9]
  i1338.uvBottomLeftY = i1339[10]
  i1338.uvBottomRightX = i1339[11]
  i1338.uvBottomRightY = i1339[12]
  i1338.uvTopLeftX = i1339[13]
  i1338.uvTopLeftY = i1339[14]
  i1338.uvTopRightX = i1339[15]
  i1338.uvTopRightY = i1339[16]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1341 = data
  i1340.name = i1341[0]
  var i1343 = i1341[1]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1343[i + 0]) );
  }
  i1340.layers = i1342
  var i1345 = i1341[2]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1345[i + 0]) );
  }
  i1340.parameters = i1344
  i1340.animationClips = i1341[3]
  i1340.avatarUnsupported = i1341[4]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1349 = data
  i1348.name = i1349[0]
  i1348.defaultWeight = i1349[1]
  i1348.blendingMode = i1349[2]
  i1348.avatarMask = i1349[3]
  i1348.syncedLayerIndex = i1349[4]
  i1348.syncedLayerAffectsTiming = !!i1349[5]
  i1348.syncedLayers = i1349[6]
  i1348.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1349[7], i1348.stateMachine)
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1351 = data
  i1350.id = i1351[0]
  i1350.name = i1351[1]
  i1350.path = i1351[2]
  var i1353 = i1351[3]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1353[i + 0]) );
  }
  i1350.states = i1352
  var i1355 = i1351[4]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1355[i + 0]) );
  }
  i1350.machines = i1354
  var i1357 = i1351[5]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1357[i + 0]) );
  }
  i1350.entryStateTransitions = i1356
  var i1359 = i1351[6]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1359[i + 0]) );
  }
  i1350.exitStateTransitions = i1358
  var i1361 = i1351[7]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1361[i + 0]) );
  }
  i1350.anyStateTransitions = i1360
  i1350.defaultStateId = i1351[8]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1365 = data
  i1364.id = i1365[0]
  i1364.name = i1365[1]
  i1364.cycleOffset = i1365[2]
  i1364.cycleOffsetParameter = i1365[3]
  i1364.cycleOffsetParameterActive = !!i1365[4]
  i1364.mirror = !!i1365[5]
  i1364.mirrorParameter = i1365[6]
  i1364.mirrorParameterActive = !!i1365[7]
  i1364.motionId = i1365[8]
  i1364.nameHash = i1365[9]
  i1364.fullPathHash = i1365[10]
  i1364.speed = i1365[11]
  i1364.speedParameter = i1365[12]
  i1364.speedParameterActive = !!i1365[13]
  i1364.tag = i1365[14]
  i1364.tagHash = i1365[15]
  i1364.writeDefaultValues = !!i1365[16]
  var i1367 = i1365[17]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 2) {
  request.r(i1367[i + 0], i1367[i + 1], 2, i1366, '')
  }
  i1364.behaviours = i1366
  var i1369 = i1365[18]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1369[i + 0]) );
  }
  i1364.transitions = i1368
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1375 = data
  i1374.fullPath = i1375[0]
  i1374.canTransitionToSelf = !!i1375[1]
  i1374.duration = i1375[2]
  i1374.exitTime = i1375[3]
  i1374.hasExitTime = !!i1375[4]
  i1374.hasFixedDuration = !!i1375[5]
  i1374.interruptionSource = i1375[6]
  i1374.offset = i1375[7]
  i1374.orderedInterruption = !!i1375[8]
  i1374.destinationStateId = i1375[9]
  i1374.isExit = !!i1375[10]
  i1374.mute = !!i1375[11]
  i1374.solo = !!i1375[12]
  var i1377 = i1375[13]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1377[i + 0]) );
  }
  i1374.conditions = i1376
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1381 = data
  i1380.mode = i1381[0]
  i1380.parameter = i1381[1]
  i1380.threshold = i1381[2]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1387 = data
  i1386.destinationStateId = i1387[0]
  i1386.isExit = !!i1387[1]
  i1386.mute = !!i1387[2]
  i1386.solo = !!i1387[3]
  var i1389 = i1387[4]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1389[i + 0]) );
  }
  i1386.conditions = i1388
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1393 = data
  i1392.defaultBool = !!i1393[0]
  i1392.defaultFloat = i1393[1]
  i1392.defaultInt = i1393[2]
  i1392.name = i1393[3]
  i1392.nameHash = i1393[4]
  i1392.type = i1393[5]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1395 = data
  i1394.name = i1395[0]
  i1394.bytes64 = i1395[1]
  i1394.data = i1395[2]
  return i1394
}

Deserializers["GameData"] = function (request, data, root) {
  var i1396 = root || request.c( 'GameData' )
  var i1397 = data
  i1396.totalMoney = i1397[0]
  return i1396
}

Deserializers["Cinemachine.CinemachineBlenderSettings"] = function (request, data, root) {
  var i1398 = root || request.c( 'Cinemachine.CinemachineBlenderSettings' )
  var i1399 = data
  var i1401 = i1399[0]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Cinemachine.CinemachineBlenderSettings+CustomBlend', i1401[i + 0]) );
  }
  i1398.m_CustomBlends = i1400
  return i1398
}

Deserializers["Cinemachine.CinemachineBlenderSettings+CustomBlend"] = function (request, data, root) {
  var i1404 = root || request.c( 'Cinemachine.CinemachineBlenderSettings+CustomBlend' )
  var i1405 = data
  i1404.m_From = i1405[0]
  i1404.m_To = i1405[1]
  i1404.m_Blend = request.d('Cinemachine.CinemachineBlendDefinition', i1405[2], i1404.m_Blend)
  return i1404
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1406 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'atlas')
  i1406.normalStyle = i1407[2]
  i1406.normalSpacingOffset = i1407[3]
  i1406.boldStyle = i1407[4]
  i1406.boldSpacing = i1407[5]
  i1406.italicStyle = i1407[6]
  i1406.tabSize = i1407[7]
  i1406.hashCode = i1407[8]
  request.r(i1407[9], i1407[10], 0, i1406, 'material')
  i1406.materialHashCode = i1407[11]
  i1406.m_Version = i1407[12]
  i1406.m_SourceFontFileGUID = i1407[13]
  request.r(i1407[14], i1407[15], 0, i1406, 'm_SourceFontFile_EditorRef')
  request.r(i1407[16], i1407[17], 0, i1406, 'm_SourceFontFile')
  i1406.m_AtlasPopulationMode = i1407[18]
  i1406.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1407[19], i1406.m_FaceInfo)
  var i1409 = i1407[20]
  var i1408 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.add(request.d('UnityEngine.TextCore.Glyph', i1409[i + 0]));
  }
  i1406.m_GlyphTable = i1408
  var i1411 = i1407[21]
  var i1410 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.add(request.d('TMPro.TMP_Character', i1411[i + 0]));
  }
  i1406.m_CharacterTable = i1410
  var i1413 = i1407[22]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 2) {
  request.r(i1413[i + 0], i1413[i + 1], 2, i1412, '')
  }
  i1406.m_AtlasTextures = i1412
  i1406.m_AtlasTextureIndex = i1407[23]
  i1406.m_IsMultiAtlasTexturesEnabled = !!i1407[24]
  i1406.m_ClearDynamicDataOnBuild = !!i1407[25]
  var i1415 = i1407[26]
  var i1414 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.add(request.d('UnityEngine.TextCore.GlyphRect', i1415[i + 0]));
  }
  i1406.m_UsedGlyphRects = i1414
  var i1417 = i1407[27]
  var i1416 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.add(request.d('UnityEngine.TextCore.GlyphRect', i1417[i + 0]));
  }
  i1406.m_FreeGlyphRects = i1416
  i1406.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1407[28], i1406.m_fontInfo)
  i1406.m_AtlasWidth = i1407[29]
  i1406.m_AtlasHeight = i1407[30]
  i1406.m_AtlasPadding = i1407[31]
  i1406.m_AtlasRenderMode = i1407[32]
  var i1419 = i1407[33]
  var i1418 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.add(request.d('TMPro.TMP_Glyph', i1419[i + 0]));
  }
  i1406.m_glyphInfoList = i1418
  i1406.m_KerningTable = request.d('TMPro.KerningTable', i1407[34], i1406.m_KerningTable)
  i1406.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1407[35], i1406.m_FontFeatureTable)
  var i1421 = i1407[36]
  var i1420 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1421.length; i += 2) {
  request.r(i1421[i + 0], i1421[i + 1], 1, i1420, '')
  }
  i1406.fallbackFontAssets = i1420
  var i1423 = i1407[37]
  var i1422 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1423.length; i += 2) {
  request.r(i1423[i + 0], i1423[i + 1], 1, i1422, '')
  }
  i1406.m_FallbackFontAssetTable = i1422
  i1406.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1407[38], i1406.m_CreationSettings)
  var i1425 = i1407[39]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('TMPro.TMP_FontWeightPair', i1425[i + 0]) );
  }
  i1406.m_FontWeightTable = i1424
  var i1427 = i1407[40]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('TMPro.TMP_FontWeightPair', i1427[i + 0]) );
  }
  i1406.fontWeights = i1426
  return i1406
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1429 = data
  i1428.m_FaceIndex = i1429[0]
  i1428.m_FamilyName = i1429[1]
  i1428.m_StyleName = i1429[2]
  i1428.m_PointSize = i1429[3]
  i1428.m_Scale = i1429[4]
  i1428.m_UnitsPerEM = i1429[5]
  i1428.m_LineHeight = i1429[6]
  i1428.m_AscentLine = i1429[7]
  i1428.m_CapLine = i1429[8]
  i1428.m_MeanLine = i1429[9]
  i1428.m_Baseline = i1429[10]
  i1428.m_DescentLine = i1429[11]
  i1428.m_SuperscriptOffset = i1429[12]
  i1428.m_SuperscriptSize = i1429[13]
  i1428.m_SubscriptOffset = i1429[14]
  i1428.m_SubscriptSize = i1429[15]
  i1428.m_UnderlineOffset = i1429[16]
  i1428.m_UnderlineThickness = i1429[17]
  i1428.m_StrikethroughOffset = i1429[18]
  i1428.m_StrikethroughThickness = i1429[19]
  i1428.m_TabWidth = i1429[20]
  return i1428
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1432 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1433 = data
  i1432.m_Index = i1433[0]
  i1432.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1433[1], i1432.m_Metrics)
  i1432.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1433[2], i1432.m_GlyphRect)
  i1432.m_Scale = i1433[3]
  i1432.m_AtlasIndex = i1433[4]
  i1432.m_ClassDefinitionType = i1433[5]
  return i1432
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1435 = data
  i1434.m_Width = i1435[0]
  i1434.m_Height = i1435[1]
  i1434.m_HorizontalBearingX = i1435[2]
  i1434.m_HorizontalBearingY = i1435[3]
  i1434.m_HorizontalAdvance = i1435[4]
  return i1434
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1437 = data
  i1436.m_X = i1437[0]
  i1436.m_Y = i1437[1]
  i1436.m_Width = i1437[2]
  i1436.m_Height = i1437[3]
  return i1436
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1440 = root || request.c( 'TMPro.TMP_Character' )
  var i1441 = data
  i1440.m_ElementType = i1441[0]
  i1440.m_Unicode = i1441[1]
  i1440.m_GlyphIndex = i1441[2]
  i1440.m_Scale = i1441[3]
  return i1440
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1446 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1447 = data
  i1446.Name = i1447[0]
  i1446.PointSize = i1447[1]
  i1446.Scale = i1447[2]
  i1446.CharacterCount = i1447[3]
  i1446.LineHeight = i1447[4]
  i1446.Baseline = i1447[5]
  i1446.Ascender = i1447[6]
  i1446.CapHeight = i1447[7]
  i1446.Descender = i1447[8]
  i1446.CenterLine = i1447[9]
  i1446.SuperscriptOffset = i1447[10]
  i1446.SubscriptOffset = i1447[11]
  i1446.SubSize = i1447[12]
  i1446.Underline = i1447[13]
  i1446.UnderlineThickness = i1447[14]
  i1446.strikethrough = i1447[15]
  i1446.strikethroughThickness = i1447[16]
  i1446.TabWidth = i1447[17]
  i1446.Padding = i1447[18]
  i1446.AtlasWidth = i1447[19]
  i1446.AtlasHeight = i1447[20]
  return i1446
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1450 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1451 = data
  i1450.id = i1451[0]
  i1450.x = i1451[1]
  i1450.y = i1451[2]
  i1450.width = i1451[3]
  i1450.height = i1451[4]
  i1450.xOffset = i1451[5]
  i1450.yOffset = i1451[6]
  i1450.xAdvance = i1451[7]
  i1450.scale = i1451[8]
  return i1450
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1452 = root || request.c( 'TMPro.KerningTable' )
  var i1453 = data
  var i1455 = i1453[0]
  var i1454 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.add(request.d('TMPro.KerningPair', i1455[i + 0]));
  }
  i1452.kerningPairs = i1454
  return i1452
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1458 = root || request.c( 'TMPro.KerningPair' )
  var i1459 = data
  i1458.xOffset = i1459[0]
  i1458.m_FirstGlyph = i1459[1]
  i1458.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1459[2], i1458.m_FirstGlyphAdjustments)
  i1458.m_SecondGlyph = i1459[3]
  i1458.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1459[4], i1458.m_SecondGlyphAdjustments)
  i1458.m_IgnoreSpacingAdjustments = !!i1459[5]
  return i1458
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1460 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1461 = data
  var i1463 = i1461[0]
  var i1462 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1463[i + 0]));
  }
  i1460.m_GlyphPairAdjustmentRecords = i1462
  return i1460
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1466 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1467 = data
  i1466.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1467[0], i1466.m_FirstAdjustmentRecord)
  i1466.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1467[1], i1466.m_SecondAdjustmentRecord)
  i1466.m_FeatureLookupFlags = i1467[2]
  return i1466
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1468 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1469 = data
  i1468.m_GlyphIndex = i1469[0]
  i1468.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1469[1], i1468.m_GlyphValueRecord)
  return i1468
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1470 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1471 = data
  i1470.m_XPlacement = i1471[0]
  i1470.m_YPlacement = i1471[1]
  i1470.m_XAdvance = i1471[2]
  i1470.m_YAdvance = i1471[3]
  return i1470
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1474 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1475 = data
  i1474.sourceFontFileName = i1475[0]
  i1474.sourceFontFileGUID = i1475[1]
  i1474.pointSizeSamplingMode = i1475[2]
  i1474.pointSize = i1475[3]
  i1474.padding = i1475[4]
  i1474.packingMode = i1475[5]
  i1474.atlasWidth = i1475[6]
  i1474.atlasHeight = i1475[7]
  i1474.characterSetSelectionMode = i1475[8]
  i1474.characterSequence = i1475[9]
  i1474.referencedFontAssetGUID = i1475[10]
  i1474.referencedTextAssetGUID = i1475[11]
  i1474.fontStyle = i1475[12]
  i1474.fontStyleModifier = i1475[13]
  i1474.renderMode = i1475[14]
  i1474.includeFontFeatures = !!i1475[15]
  return i1474
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1478 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1479 = data
  request.r(i1479[0], i1479[1], 0, i1478, 'regularTypeface')
  request.r(i1479[2], i1479[3], 0, i1478, 'italicTypeface')
  return i1478
}

Deserializers["CustomerData"] = function (request, data, root) {
  var i1480 = root || request.c( 'CustomerData' )
  var i1481 = data
  i1480.speed = i1481[0]
  var i1483 = i1481[1]
  var i1482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i1483.length; i += 2) {
    i1482.add(new pc.Vec2( i1483[i + 0], i1483[i + 1] ));
  }
  i1480.skinTilings = i1482
  var i1485 = i1481[2]
  var i1484 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i1485.length; i += 2) {
    i1484.add(new pc.Vec2( i1485[i + 0], i1485[i + 1] ));
  }
  i1480.shirtTilings = i1484
  var i1487 = i1481[3]
  var i1486 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i1487.length; i += 2) {
    i1486.add(new pc.Vec2( i1487[i + 0], i1487[i + 1] ));
  }
  i1480.pantTilings = i1486
  return i1480
}

Deserializers["BaggageData"] = function (request, data, root) {
  var i1488 = root || request.c( 'BaggageData' )
  var i1489 = data
  i1488.stackOffsetY = i1489[0]
  i1488.jumpPower = i1489[1]
  i1488.jumpDuration = i1489[2]
  return i1488
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1490 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1491 = data
  i1490.useSafeMode = !!i1491[0]
  i1490.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1491[1], i1490.safeModeOptions)
  i1490.timeScale = i1491[2]
  i1490.unscaledTimeScale = i1491[3]
  i1490.useSmoothDeltaTime = !!i1491[4]
  i1490.maxSmoothUnscaledTime = i1491[5]
  i1490.rewindCallbackMode = i1491[6]
  i1490.showUnityEditorReport = !!i1491[7]
  i1490.logBehaviour = i1491[8]
  i1490.drawGizmos = !!i1491[9]
  i1490.defaultRecyclable = !!i1491[10]
  i1490.defaultAutoPlay = i1491[11]
  i1490.defaultUpdateType = i1491[12]
  i1490.defaultTimeScaleIndependent = !!i1491[13]
  i1490.defaultEaseType = i1491[14]
  i1490.defaultEaseOvershootOrAmplitude = i1491[15]
  i1490.defaultEasePeriod = i1491[16]
  i1490.defaultAutoKill = !!i1491[17]
  i1490.defaultLoopType = i1491[18]
  i1490.debugMode = !!i1491[19]
  i1490.debugStoreTargetId = !!i1491[20]
  i1490.showPreviewPanel = !!i1491[21]
  i1490.storeSettingsLocation = i1491[22]
  i1490.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1491[23], i1490.modules)
  i1490.createASMDEF = !!i1491[24]
  i1490.showPlayingTweens = !!i1491[25]
  i1490.showPausedTweens = !!i1491[26]
  return i1490
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1492 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1493 = data
  i1492.logBehaviour = i1493[0]
  i1492.nestedTweenFailureBehaviour = i1493[1]
  return i1492
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1494 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1495 = data
  i1494.showPanel = !!i1495[0]
  i1494.audioEnabled = !!i1495[1]
  i1494.physicsEnabled = !!i1495[2]
  i1494.physics2DEnabled = !!i1495[3]
  i1494.spriteEnabled = !!i1495[4]
  i1494.uiEnabled = !!i1495[5]
  i1494.textMeshProEnabled = !!i1495[6]
  i1494.tk2DEnabled = !!i1495[7]
  i1494.deAudioEnabled = !!i1495[8]
  i1494.deUnityExtendedEnabled = !!i1495[9]
  i1494.epoOutlineEnabled = !!i1495[10]
  return i1494
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1496 = root || request.c( 'TMPro.TMP_Settings' )
  var i1497 = data
  i1496.m_enableWordWrapping = !!i1497[0]
  i1496.m_enableKerning = !!i1497[1]
  i1496.m_enableExtraPadding = !!i1497[2]
  i1496.m_enableTintAllSprites = !!i1497[3]
  i1496.m_enableParseEscapeCharacters = !!i1497[4]
  i1496.m_EnableRaycastTarget = !!i1497[5]
  i1496.m_GetFontFeaturesAtRuntime = !!i1497[6]
  i1496.m_missingGlyphCharacter = i1497[7]
  i1496.m_warningsDisabled = !!i1497[8]
  request.r(i1497[9], i1497[10], 0, i1496, 'm_defaultFontAsset')
  i1496.m_defaultFontAssetPath = i1497[11]
  i1496.m_defaultFontSize = i1497[12]
  i1496.m_defaultAutoSizeMinRatio = i1497[13]
  i1496.m_defaultAutoSizeMaxRatio = i1497[14]
  i1496.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1497[15], i1497[16] )
  i1496.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1497[17], i1497[18] )
  i1496.m_autoSizeTextContainer = !!i1497[19]
  i1496.m_IsTextObjectScaleStatic = !!i1497[20]
  var i1499 = i1497[21]
  var i1498 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1499.length; i += 2) {
  request.r(i1499[i + 0], i1499[i + 1], 1, i1498, '')
  }
  i1496.m_fallbackFontAssets = i1498
  i1496.m_matchMaterialPreset = !!i1497[22]
  request.r(i1497[23], i1497[24], 0, i1496, 'm_defaultSpriteAsset')
  i1496.m_defaultSpriteAssetPath = i1497[25]
  i1496.m_enableEmojiSupport = !!i1497[26]
  i1496.m_MissingCharacterSpriteUnicode = i1497[27]
  i1496.m_defaultColorGradientPresetsPath = i1497[28]
  request.r(i1497[29], i1497[30], 0, i1496, 'm_defaultStyleSheet')
  i1496.m_StyleSheetsResourcePath = i1497[31]
  request.r(i1497[32], i1497[33], 0, i1496, 'm_leadingCharacters')
  request.r(i1497[34], i1497[35], 0, i1496, 'm_followingCharacters')
  i1496.m_UseModernHangulLineBreakingRules = !!i1497[36]
  return i1496
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1500 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1501 = data
  request.r(i1501[0], i1501[1], 0, i1500, 'spriteSheet')
  var i1503 = i1501[2]
  var i1502 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.add(request.d('TMPro.TMP_Sprite', i1503[i + 0]));
  }
  i1500.spriteInfoList = i1502
  var i1505 = i1501[3]
  var i1504 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1505.length; i += 2) {
  request.r(i1505[i + 0], i1505[i + 1], 1, i1504, '')
  }
  i1500.fallbackSpriteAssets = i1504
  i1500.hashCode = i1501[4]
  request.r(i1501[5], i1501[6], 0, i1500, 'material')
  i1500.materialHashCode = i1501[7]
  i1500.m_Version = i1501[8]
  i1500.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1501[9], i1500.m_FaceInfo)
  var i1507 = i1501[10]
  var i1506 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.add(request.d('TMPro.TMP_SpriteCharacter', i1507[i + 0]));
  }
  i1500.m_SpriteCharacterTable = i1506
  var i1509 = i1501[11]
  var i1508 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1509.length; i += 1) {
    i1508.add(request.d('TMPro.TMP_SpriteGlyph', i1509[i + 0]));
  }
  i1500.m_SpriteGlyphTable = i1508
  return i1500
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1512 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1513 = data
  i1512.name = i1513[0]
  i1512.hashCode = i1513[1]
  i1512.unicode = i1513[2]
  i1512.pivot = new pc.Vec2( i1513[3], i1513[4] )
  request.r(i1513[5], i1513[6], 0, i1512, 'sprite')
  i1512.id = i1513[7]
  i1512.x = i1513[8]
  i1512.y = i1513[9]
  i1512.width = i1513[10]
  i1512.height = i1513[11]
  i1512.xOffset = i1513[12]
  i1512.yOffset = i1513[13]
  i1512.xAdvance = i1513[14]
  i1512.scale = i1513[15]
  return i1512
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1518 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1519 = data
  i1518.m_Name = i1519[0]
  i1518.m_HashCode = i1519[1]
  i1518.m_ElementType = i1519[2]
  i1518.m_Unicode = i1519[3]
  i1518.m_GlyphIndex = i1519[4]
  i1518.m_Scale = i1519[5]
  return i1518
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1522 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1523 = data
  request.r(i1523[0], i1523[1], 0, i1522, 'sprite')
  i1522.m_Index = i1523[2]
  i1522.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1523[3], i1522.m_Metrics)
  i1522.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1523[4], i1522.m_GlyphRect)
  i1522.m_Scale = i1523[5]
  i1522.m_AtlasIndex = i1523[6]
  i1522.m_ClassDefinitionType = i1523[7]
  return i1522
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1524 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1525 = data
  var i1527 = i1525[0]
  var i1526 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.add(request.d('TMPro.TMP_Style', i1527[i + 0]));
  }
  i1524.m_StyleList = i1526
  return i1524
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1530 = root || request.c( 'TMPro.TMP_Style' )
  var i1531 = data
  i1530.m_Name = i1531[0]
  i1530.m_HashCode = i1531[1]
  i1530.m_OpeningDefinition = i1531[2]
  i1530.m_ClosingDefinition = i1531[3]
  i1530.m_OpeningTagArray = i1531[4]
  i1530.m_ClosingTagArray = i1531[5]
  i1530.m_OpeningTagUnicodeArray = i1531[6]
  i1530.m_ClosingTagUnicodeArray = i1531[7]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1533 = data
  var i1535 = i1533[0]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1535[i + 0]) );
  }
  i1532.files = i1534
  i1532.componentToPrefabIds = i1533[1]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1539 = data
  i1538.path = i1539[0]
  request.r(i1539[1], i1539[2], 0, i1538, 'unityObject')
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1541 = data
  var i1543 = i1541[0]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1543[i + 0]) );
  }
  i1540.scriptsExecutionOrder = i1542
  var i1545 = i1541[1]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1545[i + 0]) );
  }
  i1540.sortingLayers = i1544
  var i1547 = i1541[2]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1547[i + 0]) );
  }
  i1540.cullingLayers = i1546
  i1540.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1541[3], i1540.timeSettings)
  i1540.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1541[4], i1540.physicsSettings)
  i1540.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1541[5], i1540.physics2DSettings)
  i1540.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1541[6], i1540.qualitySettings)
  i1540.enableRealtimeShadows = !!i1541[7]
  i1540.enableAutoInstancing = !!i1541[8]
  i1540.enableStaticBatching = !!i1541[9]
  i1540.enableDynamicBatching = !!i1541[10]
  i1540.lightmapEncodingQuality = i1541[11]
  i1540.desiredColorSpace = i1541[12]
  var i1549 = i1541[13]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.push( i1549[i + 0] );
  }
  i1540.allTags = i1548
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1553 = data
  i1552.name = i1553[0]
  i1552.value = i1553[1]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1557 = data
  i1556.id = i1557[0]
  i1556.name = i1557[1]
  i1556.value = i1557[2]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1561 = data
  i1560.id = i1561[0]
  i1560.name = i1561[1]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1563 = data
  i1562.fixedDeltaTime = i1563[0]
  i1562.maximumDeltaTime = i1563[1]
  i1562.timeScale = i1563[2]
  i1562.maximumParticleTimestep = i1563[3]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1565 = data
  i1564.gravity = new pc.Vec3( i1565[0], i1565[1], i1565[2] )
  i1564.defaultSolverIterations = i1565[3]
  i1564.bounceThreshold = i1565[4]
  i1564.autoSyncTransforms = !!i1565[5]
  i1564.autoSimulation = !!i1565[6]
  var i1567 = i1565[7]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 1) {
    i1566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1567[i + 0]) );
  }
  i1564.collisionMatrix = i1566
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1571 = data
  i1570.enabled = !!i1571[0]
  i1570.layerId = i1571[1]
  i1570.otherLayerId = i1571[2]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1573 = data
  request.r(i1573[0], i1573[1], 0, i1572, 'material')
  i1572.gravity = new pc.Vec2( i1573[2], i1573[3] )
  i1572.positionIterations = i1573[4]
  i1572.velocityIterations = i1573[5]
  i1572.velocityThreshold = i1573[6]
  i1572.maxLinearCorrection = i1573[7]
  i1572.maxAngularCorrection = i1573[8]
  i1572.maxTranslationSpeed = i1573[9]
  i1572.maxRotationSpeed = i1573[10]
  i1572.baumgarteScale = i1573[11]
  i1572.baumgarteTOIScale = i1573[12]
  i1572.timeToSleep = i1573[13]
  i1572.linearSleepTolerance = i1573[14]
  i1572.angularSleepTolerance = i1573[15]
  i1572.defaultContactOffset = i1573[16]
  i1572.autoSimulation = !!i1573[17]
  i1572.queriesHitTriggers = !!i1573[18]
  i1572.queriesStartInColliders = !!i1573[19]
  i1572.callbacksOnDisable = !!i1573[20]
  i1572.reuseCollisionCallbacks = !!i1573[21]
  i1572.autoSyncTransforms = !!i1573[22]
  var i1575 = i1573[23]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1575[i + 0]) );
  }
  i1572.collisionMatrix = i1574
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1579 = data
  i1578.enabled = !!i1579[0]
  i1578.layerId = i1579[1]
  i1578.otherLayerId = i1579[2]
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1581 = data
  var i1583 = i1581[0]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1583[i + 0]) );
  }
  i1580.qualityLevels = i1582
  var i1585 = i1581[1]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.push( i1585[i + 0] );
  }
  i1580.names = i1584
  i1580.shadows = i1581[2]
  i1580.anisotropicFiltering = i1581[3]
  i1580.antiAliasing = i1581[4]
  i1580.lodBias = i1581[5]
  i1580.shadowCascades = i1581[6]
  i1580.shadowDistance = i1581[7]
  i1580.shadowmaskMode = i1581[8]
  i1580.shadowProjection = i1581[9]
  i1580.shadowResolution = i1581[10]
  i1580.softParticles = !!i1581[11]
  i1580.softVegetation = !!i1581[12]
  i1580.activeColorSpace = i1581[13]
  i1580.desiredColorSpace = i1581[14]
  i1580.masterTextureLimit = i1581[15]
  i1580.maxQueuedFrames = i1581[16]
  i1580.particleRaycastBudget = i1581[17]
  i1580.pixelLightCount = i1581[18]
  i1580.realtimeReflectionProbes = !!i1581[19]
  i1580.shadowCascade2Split = i1581[20]
  i1580.shadowCascade4Split = new pc.Vec3( i1581[21], i1581[22], i1581[23] )
  i1580.streamingMipmapsActive = !!i1581[24]
  i1580.vSyncCount = i1581[25]
  i1580.asyncUploadBufferSize = i1581[26]
  i1580.asyncUploadTimeSlice = i1581[27]
  i1580.billboardsFaceCameraPosition = !!i1581[28]
  i1580.shadowNearPlaneOffset = i1581[29]
  i1580.streamingMipmapsMemoryBudget = i1581[30]
  i1580.maximumLODLevel = i1581[31]
  i1580.streamingMipmapsAddAllCameras = !!i1581[32]
  i1580.streamingMipmapsMaxLevelReduction = i1581[33]
  i1580.streamingMipmapsRenderersPerFrame = i1581[34]
  i1580.resolutionScalingFixedDPIFactor = i1581[35]
  i1580.streamingMipmapsMaxFileIORequests = i1581[36]
  i1580.currentQualityLevel = i1581[37]
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1589 = data
  i1588.name = i1589[0]
  var i1591 = i1589[1]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1591[i + 0]) );
  }
  i1588.tos = i1590
  var i1593 = i1589[2]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( i1593[i + 0] );
  }
  i1588.constant = i1592
  i1588.isValid = !!i1589[3]
  i1588.isHuman = !!i1589[4]
  i1588.hasRootMotion = !!i1589[5]
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1597 = data
  i1596.hash = i1597[0]
  i1596.path = i1597[1]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1601 = data
  i1600.weight = i1601[0]
  i1600.vertices = i1601[1]
  i1600.normals = i1601[2]
  i1600.tangents = i1601[3]
  return i1600
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1602 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1603 = data
  i1602.xPlacement = i1603[0]
  i1602.yPlacement = i1603[1]
  i1602.xAdvance = i1603[2]
  i1602.yAdvance = i1603[3]
  return i1602
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"enabled":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[13],"98":[21],"99":[9],"100":[9],"101":[9],"102":[9],"103":[9],"104":[9],"105":[9],"106":[107],"108":[107],"109":[107],"110":[107],"111":[107],"112":[107],"113":[107],"114":[107],"115":[107],"116":[107],"117":[107],"118":[107],"119":[107],"120":[21],"121":[33],"122":[123],"124":[123],"36":[28],"125":[126],"127":[28],"128":[28],"38":[36],"24":[29,28],"129":[28],"37":[36],"130":[28],"131":[28],"132":[28],"133":[28],"134":[28],"135":[28],"136":[28],"137":[28],"138":[28],"139":[29,28],"140":[28],"141":[28],"142":[28],"41":[28],"143":[29,28],"144":[28],"145":[77],"146":[77],"78":[77],"147":[77],"148":[21],"149":[21],"150":[126],"151":[21],"152":[28],"153":[33,28],"27":[28,29],"154":[28],"155":[29,28],"156":[33],"157":[29,28],"158":[28],"159":[126],"160":[21],"161":[162]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","PlayerController","PlayerBaggage","UnityEngine.ParticleSystem","PlayerStateMachine","PlayerInteraction","PlayerMoney","PlayerAnimation","UnityEngine.Rigidbody","UnityEngine.CapsuleCollider","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SkinnedMeshRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.ParticleSystemRenderer","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","FloatingJoystick","ElementsActivator","UnityEngine.UI.Image","UnityEngine.GameObject","UnityEngine.BoxCollider","TMPro.TextMeshProUGUI","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","StairsController","StairAttachTrigger","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","MeshPainter","UnityEngine.UI.Slider","UnityEngine.UI.Button","CustomerController","CustomerData","CustomerStateMachine","CustomerAnimation","CustomerColor","UnityEngine.Avatar","Money","UnityEngine.TrailRenderer","Baggage","BaggageData","BaggageColor","GameManager","GameData","SpawnController","CustomerSystemManager","CustomerPathController","UnityEngine.AudioListener","Cinemachine.CinemachineBrain","Cinemachine.CinemachineBlenderSettings","CameraManager","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","UnityEngine.Light","UnityEngine.MeshCollider","BoardPlaneArea","Plane","TruckController","BoardBaggageArea","XRayMachine","XRayBaggageArea","BaggageLift","MoneyArea","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","TutorialManager","SFXManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Cubemap","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","ToonyColorsPro.Runtime.TCP2_CameraDepth","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.24f1";

Deserializers.productName = "Panteon_DemoProject";

Deserializers.lunaInitializationTime = "10/05/2025 22:54:57";

Deserializers.lunaDaysRunning = "0.8";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1823";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4493";

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

Deserializers.buildID = "cc483c56-69db-4406-b415-795f3eddde1d";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

