if ( TRACE ) { TRACE( JSON.parse( '["AutoDestroy#init","AutoDestroy#OnEnable","AutoDestroy#Update","AutoDestroy#OnDestroy","AutoDestroy#OnDisable","AutoDestructor#init","AutoDestructor#OnEnable","AutoDestructor#AutoDestroy","AutoDestructor#OnDisable","Brick#SetHp","Brick#Start","Brick#OnTriggerEnter2D","Brick#OnCollisionEnter2D","Brick#Update","Brick#Debunk","BrickManager#init","BrickManager#Init","BrickManager#CreateMap","BrickManager#ParsePNGToMap","BrickManager#CreateBrick","BrickManager#GetBrickLocation","BrickManager#Update","BrickManager#OnDestroy","SingletonMono$1#init","SingletonMono$1#Awake","BucketCrusher2#init","BucketCrusher2#Start","BucketCrusher2#AnimationCap","BucketCrusher2#AnimationCandy","BucketCrusher2#AnimationWillMid","BucketCrusher2#ChangeCaptain","BucketCrusher2#ChangeCandy","BucketCrusher2#ChangeWildMill","BucketCrusher2#Update","BucketCrusher2#ChooseCaptain","BucketCrusher2#ChooseCandy","BucketCrusher2#ChooseWindMill","BucketCrusher2#EndGame","BucketCrusher2#InstallFullGame","Conveyor#Init","Conveyor#Accept","Conveyor#UpdateConveyor","Conveyor#Resize","DefineHelper#init","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","Joystick#Horizontal#get","Joystick#Vertical#get","Joystick#Direction#get","Joystick#HandleRange#get","Joystick#HandleRange#set","Joystick#DeadZone#get","Joystick#DeadZone#set","Joystick#AxisOptions#get","Joystick#AxisOptions#set","Joystick#SnapX#get","Joystick#SnapX#set","Joystick#SnapY#get","Joystick#SnapY#set","Joystick#init","Joystick#Start","Joystick#OnPointerDown","Joystick#OnDrag","Joystick#HandleInput","Joystick#FormatInput","Joystick#SnapFloat","Joystick#OnPointerUp","Joystick#ScreenPointToAnchoredPosition","EventDispatcher#Instance#get","EventDispatcher#Instance#set","EventDispatcher#HasInstance","EventDispatcher#init","EventDispatcher#Awake","EventDispatcher#OnDestroy","EventDispatcher#RegisterListener","EventDispatcher#PostEvent","EventDispatcher#RemoveListener","EventDispatcher#ClearAllListener","EventDispatcherExtension#RegisterListener","EventDispatcherExtension#PostEvent$1","EventDispatcherExtension#PostEvent","EventDispatcherExtension#RemoveListener","GameController#Init","GameController#Update","HelperUtility#DecimalRounding","HelperUtility#DisruptiveArrayObject","HelperUtility#DisruptiveListObject$1","HelperUtility#DisruptiveListObject","HelperUtility#DisruptiveList","HelperUtility#DisruptiveListSelf","HelperUtility#SelectionSortList","HelperUtility#StartThread","HelperUtility#StartThread$1","HelperUtility#StartAction$1","HelperUtility#StartAction","HelperUtility#StartActionRealTime","HelperUtility#StartActionNotUseCorutines","HelperUtility#GetPointDistanceFromObject","HelperUtility#GetDirectionFromAngle","HelperUtility#GetDirectionFromAngle_2","HelperUtility#DOLocalRotateQuaternion","HelperUtility#GetRotateDirection","HelperUtility#LookAtToDirection","HelperUtility#LookAtToDirectionAngleDetal","HelperUtility#LookAtToPosition","HelperUtility#LookAtToPositionAngleDetal","HelperUtility#RandomCustom","HelperUtility#RandomUnduplicated$1","HelperUtility#RandomUnduplicated","HelperUtility#SetPos","HelperUtility#PosHandle","JoystickPlayerExample#FixedUpdate","JoystickSetterExample#ModeChanged","JoystickSetterExample#AxisChanged","JoystickSetterExample#SnapX","JoystickSetterExample#SnapY","JoystickSetterExample#Update","MMMaths#Vector3ToVector2","MMMaths#Vector2ToVector3","MMMaths#Vector2ToVector3$1","MMMaths#RandomVector3","MMMaths#RotatePointAroundPivot","MMMaths#RotatePointAroundPivot$1","MMMaths#Sum","MMMaths#RollADice","MMMaths#Chance","MMMaths#Approach","NameTag#init","RotateObject#Start","Saw#init","Saw#SetMovementSpeed","Saw#SetDurability","Saw#Start","Saw#MoveToPosition","Saw#FixedUpdate","Saw#OnTriggerEnter2D","Saw#OnTriggerExit2D","SimplePool#init","SimplePool#Init","SimplePool#PoolPreLoad","SimplePool#Preload","SimplePool#Spawn$3","SimplePool#Spawn$2","SimplePool#Spawn","SimplePool#Spawn$1","SimplePool#Despawn","SimplePool#GetStackCount","SimplePool#ClearPool","SimplePool.Pool#StackCount#get","SimplePool.Pool#init","SimplePool.Pool#ctor","SimplePool.Pool#Preload","SimplePool.Pool#Spawn$1","SimplePool.Pool#Spawn","SimplePool.Pool#Despawn","SingletonWithouMono$1#Instance#get","SingletonWithouMono$1#init","SingletonWithouMono$1#init","SingletonWithouMono$1#Initialize","SingletonWithouMono$1#Preload","UltimateJoystick#init","UltimateJoystick#JoystickConfirmed","UltimateJoystick#GetUltimateJoystick","UltimateJoystick#GetHorizontalAxis","UltimateJoystick#GetVerticalAxis","UltimateJoystick#GetHorizontalAxisRaw","UltimateJoystick#GetVerticalAxisRaw","UltimateJoystick#GetDistance","UltimateJoystick#GetJoystickState","UltimateJoystick#GetTapCount","UltimateJoystick#DisableJoystick","UltimateJoystick#EnableJoystick","UltimateJoystick#init","UltimateJoystick#Awake","UltimateJoystick#Start","UltimateJoystick#OnPointerDown","UltimateJoystick#OnDrag","UltimateJoystick#OnPointerUp","UltimateJoystick#UpdateJoystick","UltimateJoystick#ConfigureImagePosition","UltimateJoystick#TensionAccentDisplay","UltimateJoystick#TensionAccentReset","UltimateJoystick#GravityHandler","UltimateJoystick#GetParentCanvas","UltimateJoystick#GetCanvasGroup","UltimateJoystick#FadeLogic","UltimateJoystick#TapCountdown","UltimateJoystick#TapCountDelay","UltimateJoystick#CheckJoystickHighlightForUse","UltimateJoystick#UpdatePositionValues","UltimateJoystick#ResetJoystick","UltimateJoystick#UpdateSizeAndPlacement","UltimateJoystick#UpdatePositioning","UltimateJoystick#GetHorizontalAxis","UltimateJoystick#GetVerticalAxis","UltimateJoystick#GetHorizontalAxisRaw","UltimateJoystick#GetVerticalAxisRaw","UltimateJoystick#GetDistance","UltimateJoystick#UpdateHighlightColor","UltimateJoystick#UpdateTensionColors","UltimateJoystick#GetJoystickState","UltimateJoystick#GetTapCount","UltimateJoystick#DisableJoystick","UltimateJoystick#EnableJoystick","UltimateJoystickExample.Spaceship.AsteroidController#init","UltimateJoystickExample.Spaceship.AsteroidController#Setup","UltimateJoystickExample.Spaceship.AsteroidController#DelayInitialDestruction","UltimateJoystickExample.Spaceship.AsteroidController#Update","UltimateJoystickExample.Spaceship.AsteroidController#OnCollisionEnter","UltimateJoystickExample.Spaceship.AsteroidController#Explode","UltimateJoystickExample.Spaceship.GameManager#Instance#get","UltimateJoystickExample.Spaceship.GameManager#init","UltimateJoystickExample.Spaceship.GameManager#Awake","UltimateJoystickExample.Spaceship.GameManager#Start","UltimateJoystickExample.Spaceship.GameManager#SpawnTimer","UltimateJoystickExample.Spaceship.GameManager#SpawnAsteroid","UltimateJoystickExample.Spaceship.GameManager#SpawnDebris","UltimateJoystickExample.Spaceship.GameManager#SpawnExplosion","UltimateJoystickExample.Spaceship.GameManager#ShowDeathScreen","UltimateJoystickExample.Spaceship.GameManager#FadeDeathScreen","UltimateJoystickExample.Spaceship.GameManager#ModifyScore","UltimateJoystickExample.Spaceship.GameManager#UpdateScoreText","UltimateJoystickExample.Spaceship.GameManager#ShakeCamera","UltimateJoystickExample.Spaceship.PlayerController#init","UltimateJoystickExample.Spaceship.PlayerController#Start","UltimateJoystickExample.Spaceship.PlayerController#Update","UltimateJoystickExample.Spaceship.PlayerController#FixedUpdate","UltimateJoystickExample.Spaceship.PlayerController#CheckExitScreen","UltimateJoystickExample.Spaceship.PlayerController#CreateBullets","UltimateJoystickScreenSizeUpdater#OnRectTransformDimensionsChange","UltimateJoystickScreenSizeUpdater#YieldPositioning","VectorUlti#GetVectorFromAngle","VectorUlti#GetAngleFromVector","VectorUlti#Set$1","VectorUlti#Set","VectorUlti#Move","VectorUlti#ToVectorXZ","ArmController#init","ArmController#Accept","ArmController#Init","ArmController#UpdateArm","ArmController#AddRoot","ArmController#AddChild","ArmController#AddSaw","Singleton$1#Instance#get","DynamicJoystick#MoveThreshold#get","DynamicJoystick#MoveThreshold#set","DynamicJoystick#init","DynamicJoystick#Start","DynamicJoystick#OnPointerDown","DynamicJoystick#OnPointerUp","DynamicJoystick#HandleInput","FloatingJoystick#Start","FloatingJoystick#OnPointerDown","FloatingJoystick#OnPointerUp","MoveToPosition#ctor","MoveToPosition#Execute","SawController#Init","SawController#Accept","SawController#UpdateSaw","VariableJoystick#MoveThreshold#get","VariableJoystick#MoveThreshold#set","VariableJoystick#init","VariableJoystick#SetMode","VariableJoystick#Start","VariableJoystick#OnPointerDown","VariableJoystick#OnPointerUp","VariableJoystick#HandleInput","BucketCrusher1#inherits","BucketCrusher1#Start","GlobalInstance#inherits","GlobalInstance#init","SingletonDontDestroyOnLoad$1#Awake","SoundController#inherits","SoundController#PlaySounClick","SoundController#PlaySoundFX","SoundController#PlaySoundBG","SoundController#StopSound"]' ) ); }
/**
 * @version 1.0.8243.20845
 * @copyright anton
 * @compiler Bridge.NET 17.9.19-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*IRobotElement start.*/
    Bridge.define("IRobotElement", {
        $kind: "interface"
    });
    /*IRobotElement end.*/

    /*AutoDestroy start.*/
    Bridge.define("AutoDestroy", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            timeOut: 0,
            typeDestroy: 0,
            timeStart: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AutoDestroy#init", this ); }

                this.timeOut = 0.5;
                this.typeDestroy = TypeDestroy.DISABLE;
            }
        },
        methods: {
            /*AutoDestroy.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "AutoDestroy#OnEnable", this ); }

                this.timeStart = UnityEngine.Time.time;
            },
            /*AutoDestroy.OnEnable end.*/

            /*AutoDestroy.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AutoDestroy#Update", this ); }

                if (UnityEngine.Time.time - this.timeStart > this.timeOut) {
                    this.OnDestroy();
                }
            },
            /*AutoDestroy.Update end.*/

            /*AutoDestroy.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "AutoDestroy#OnDestroy", this ); }

                if (this.typeDestroy === TypeDestroy.DISABLE) {
                    this.gameObject.SetActive(false);
                } else {
                    if (this.typeDestroy === TypeDestroy.RESPAWNER) {
                        SimplePool.Despawn(this.gameObject);
                    } else {
                        if (this.typeDestroy === TypeDestroy.DESTROY) {
                            UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                        }
                    }
                }
            },
            /*AutoDestroy.OnDestroy end.*/

            /*AutoDestroy.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "AutoDestroy#OnDisable", this ); }

                this.OnDestroy();
            },
            /*AutoDestroy.OnDisable end.*/


        }
    });
    /*AutoDestroy end.*/

    /*AutoDestructor start.*/
    Bridge.define("AutoDestructor", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            timeDestroy: 0,
            isPutToPool: false,
            typeDestroy: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AutoDestructor#init", this ); }

                this.timeDestroy = 1.5;
                this.isPutToPool = true;
            }
        },
        methods: {
            /*AutoDestructor.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "AutoDestructor#OnEnable", this ); }

                this.Invoke("AutoDestroy", this.timeDestroy);
            },
            /*AutoDestructor.OnEnable end.*/

            /*AutoDestructor.AutoDestroy start.*/
            AutoDestroy: function () {
if ( TRACE ) { TRACE( "AutoDestructor#AutoDestroy", this ); }

                if (this.isPutToPool) {
                    SimplePool.Despawn(this.gameObject);
                } else {
                    switch (this.typeDestroy) {
                        case AutoDestructor.TypeDestroy.Disable: 
                            this.gameObject.SetActive(false);
                            break;
                        case AutoDestructor.TypeDestroy.PutToPool: 
                            SimplePool.Despawn(this.gameObject);
                            break;
                        case AutoDestructor.TypeDestroy.Destroy: 
                        default: 
                            UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                            break;
                    }

                }
            },
            /*AutoDestructor.AutoDestroy end.*/

            /*AutoDestructor.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "AutoDestructor#OnDisable", this ); }

                this.CancelInvoke();
            },
            /*AutoDestructor.OnDisable end.*/


        }
    });
    /*AutoDestructor end.*/

    /*AutoDestructor+TypeDestroy start.*/
    Bridge.define("AutoDestructor.TypeDestroy", {
        $kind: "nested enum",
        statics: {
            fields: {
                Disable: 0,
                PutToPool: 1,
                Destroy: 2
            }
        }
    });
    /*AutoDestructor+TypeDestroy end.*/

    /*AxisOptions start.*/
    Bridge.define("AxisOptions", {
        $kind: "enum",
        statics: {
            fields: {
                Both: 0,
                Horizontal: 1,
                Vertical: 2
            }
        }
    });
    /*AxisOptions end.*/

    /*Brick start.*/
    Bridge.define("Brick", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rb: null,
            broken: false,
            collidedWithConveyor: false,
            hp: 0
        },
        methods: {
            /*Brick.SetHp start.*/
            SetHp: function (newHp) {
if ( TRACE ) { TRACE( "Brick#SetHp", this ); }

                this.hp = newHp;
            },
            /*Brick.SetHp end.*/

            /*Brick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Brick#Start", this ); }

                this.rb = this.GetComponent(UnityEngine.Rigidbody2D);
            },
            /*Brick.Start end.*/

            /*Brick.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (col) {
if ( TRACE ) { TRACE( "Brick#OnTriggerEnter2D", this ); }

                if (col.gameObject.CompareTag(NameTag.Saw)) {
                    this.hp = (this.hp - 1) | 0;
                }
                if (col.gameObject.CompareTag(NameTag.Destroyer)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);

                    // INVOKE OnBrickDestroyed EVENT FOR CoinManager TO GET COINS
                    !Bridge.staticEquals(BrickManager.onBrickDestroyed, null) ? BrickManager.onBrickDestroyed(Rarity.Brick) : null;
                }
            },
            /*Brick.OnTriggerEnter2D end.*/

            /*Brick.OnCollisionEnter2D start.*/
            OnCollisionEnter2D: function (col) {
if ( TRACE ) { TRACE( "Brick#OnCollisionEnter2D", this ); }

                if (col.gameObject.CompareTag(NameTag.Saw)) {
                    this.hp = (this.hp - 1) | 0;
                } else {
                    if (col.gameObject.CompareTag(NameTag.Conveyor)) {
                        this.collidedWithConveyor = true;
                    }
                }
            },
            /*Brick.OnCollisionEnter2D end.*/

            /*Brick.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Brick#Update", this ); }

                // if (_broken && _isInMagneticField) {
                //     Vector2 direction = -(transform.position - BrickManager.Instance.GetCleanerPosition()).normalized;
                //     _rb.velocity = direction * (10f * (Time.time / _timeStampPerMagneticField));
                // }

                if (this.broken) {
                    if (this.collidedWithConveyor) {
                        this.rb.velocity = new pc.Vec2( -pc.Vec2.RIGHT.x, pc.Vec2.RIGHT.y ).scale( (200.0 * UnityEngine.Time.deltaTime) );
                    }
                } else if (this.hp <= 0) {
                    this.Debunk();
                }
            },
            /*Brick.Update end.*/

            /*Brick.Debunk start.*/
            Debunk: function () {
if ( TRACE ) { TRACE( "Brick#Debunk", this ); }

                // MARK AS BROKEN TO PREVENT FROM INCOMING CALLS
                this.broken = true;

                // MARK AS DYNAMIC, ALLOWING FORCE AND TORQUE
                this.rb.bodyType = UnityEngine.RigidbodyType2D.Dynamic;

                this.rb.AddForce(new pc.Vec2( UnityEngine.Random.Range$1(-0.2, 0.0), 0.1 ), UnityEngine.ForceMode2D.Impulse);
                this.rb.AddTorque(UnityEngine.Random.Range$1(0, 0.2), UnityEngine.ForceMode2D.Impulse);
            },
            /*Brick.Debunk end.*/


        }
    });
    /*Brick end.*/

    /*BrickManager start.*/
    Bridge.define("BrickManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                onBrickDestroyed: null
            }
        },
        fields: {
            imageLoader: null,
            brickPrefab: null,
            brickHolder: null,
            positionBrickHold: null,
            brickSize: 0,
            brickHealth: 0,
            xOffset: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BrickManager#init", this ); }

                this.positionBrickHold = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*BrickManager.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "BrickManager#Init", this ); }

                this.brickPrefab.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( this.brickSize );
                this.CreateMap();
            },
            /*BrickManager.Init end.*/

            /*BrickManager.CreateMap start.*/
            CreateMap: function () {
if ( TRACE ) { TRACE( "BrickManager#CreateMap", this ); }

                //ParsePNGToMap(LoadImage("Levels/feelsbadman"));
                this.ParsePNGToMap(this.imageLoader);
            },
            /*BrickManager.CreateMap end.*/

            /*BrickManager.ParsePNGToMap start.*/
            ParsePNGToMap: function (image) {
if ( TRACE ) { TRACE( "BrickManager#ParsePNGToMap", this ); }

                for (var x = 0; x < image.width; x = (x + 1) | 0) {
                    for (var y = 0; y < image.height; y = (y + 1) | 0) {
                        this.CreateBrick(x, y, image.GetPixel(x, y));
                    }
                }
                this.brickHolder.transform.position = this.positionBrickHold.$clone();
            },
            /*BrickManager.ParsePNGToMap end.*/

            /*BrickManager.CreateBrick start.*/
            CreateBrick: function (x, y, pixel) {
if ( TRACE ) { TRACE( "BrickManager#CreateBrick", this ); }

                // RETURN IF THE PIXEL IS UNCLEAR
                if (Bridge.Int.clip32(pixel.a) < 1) {
                    return;
                }

                var go = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.brickPrefab, UnityEngine.Vector3.FromVector2(this.GetBrickLocation(x, y)), pc.Quat.IDENTITY.clone());
                //#if UNITY_EDITOR
                go.transform.localScale = new pc.Vec3( 0.28, 0.28, 0.28 );
                //        Debug.Log("a");
                //#endif
                //#if UNITY_LUNA
                //                go.transform.localScale = new Vector3(0.75f, 0.75f, 0.75f);
                //                  Debug.Log("b");
                //#endif
                go.transform.SetParent(this.brickHolder.transform);

                // TO MAKE BRICK MORE REALISTIC
                // RANDOM OFFSET COLOR 
                //var offset = Random.Range(0, 1) * -1 + Random.Range(0f, .15f);
                //go.GetComponent<SpriteRenderer>().color =
                // new Color(
                //     pixel.r + offset,
                //     pixel.g + offset,
                //     pixel.b + offset,
                //     1);
                go.GetComponent(UnityEngine.SpriteRenderer).color = new pc.Color( pixel.r, pixel.g, pixel.b, 1 );


                // RANDOM ANGLE
                //go.transform.eulerAngles = new Vector3(0, 0, Random.Range(-10f, 10f));

                // SET HP
                go.GetComponent(Brick).SetHp(this.brickHealth);
            },
            /*BrickManager.CreateBrick end.*/

            /*BrickManager.GetBrickLocation start.*/
            GetBrickLocation: function (x, y) {
if ( TRACE ) { TRACE( "BrickManager#GetBrickLocation", this ); }

                return new pc.Vec2( x * this.brickSize + this.xOffset, y * this.brickSize );
            },
            /*BrickManager.GetBrickLocation end.*/

            /*BrickManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BrickManager#Update", this ); }

                var $t;
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.R)) {
                    $t = Bridge.getEnumerator(this.brickHolder.transform);
                    try {
                        while ($t.moveNext()) {
                            var child = Bridge.cast($t.Current, UnityEngine.Transform);
                            UnityEngine.MonoBehaviour.Destroy(child.gameObject);
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    this.CreateMap();
                }
            },
            /*BrickManager.Update end.*/

            /*BrickManager.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "BrickManager#OnDestroy", this ); }

                this.brickPrefab.transform.localScale = new pc.Vec3( 1, 1, 1 );
            },
            /*BrickManager.OnDestroy end.*/


        }
    });
    /*BrickManager end.*/

    /*SingletonMono$1 start.*/
    Bridge.define("SingletonMono$1", function (T) { return {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: Bridge.getDefaultValue(T)
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SingletonMono$1#init", this ); }

                    this.instance = Bridge.getDefaultValue(T);
                }
            }
        },
        methods: {
            /*SingletonMono$1.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SingletonMono$1#Awake", this ); }

                if (Bridge.rValue(SingletonMono$1(T).instance) == null) {
                    SingletonMono$1(T).instance = Bridge.as(this, T);
                } else {
                    if (UnityEngine.Component.op_Inequality(this, Bridge.rValue(SingletonMono$1(T).instance))) {
                        UnityEngine.Debug.LogWarningFormat("[Singleton] Another instance of" + (Bridge.Reflection.getTypeFullName(T) || "") + "is already exist ");
                        UnityEngine.Object.DestroyImmediate(this.gameObject);
                        return;
                    }
                }
            },
            /*SingletonMono$1.Awake end.*/


        }
    }; });
    /*SingletonMono$1 end.*/

    /*BucketCrusher2 start.*/
    Bridge.define("BucketCrusher2", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            brickManager: null,
            lstSaw: null,
            lstTruc: null,
            lstTam: null,
            lstBorder: null,
            lstMateCaptain: null,
            lstMateCandy: null,
            lstWindMill: null,
            soundControll: null,
            guideChooseGroup: null,
            guideDrag: null,
            isChoosed: false,
            isEndGame: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BucketCrusher2#init", this ); }

                this.isChoosed = false;
                this.isEndGame = false;
            }
        },
        methods: {
            /*BucketCrusher2.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BucketCrusher2#Start", this ); }

                Luna.Unity.LifeCycle.GameStarted();
                this.brickManager.Init();
                this.AnimationCap();
            },
            /*BucketCrusher2.Start end.*/

            /*BucketCrusher2.AnimationCap start.*/
            AnimationCap: function () {
if ( TRACE ) { TRACE( "BucketCrusher2#AnimationCap", this ); }

                if (this.isChoosed) {
                    return;
                }
                this.ChangeCaptain();
                this.StartCoroutine$1(HelperUtility.StartAction$1(Bridge.fn.cacheBind(this, this.AnimationCandy), 1.15));
            },
            /*BucketCrusher2.AnimationCap end.*/

            /*BucketCrusher2.AnimationCandy start.*/
            AnimationCandy: function () {
if ( TRACE ) { TRACE( "BucketCrusher2#AnimationCandy", this ); }

                if (this.isChoosed) {
                    return;
                }
                this.ChangeCandy();
                this.StartCoroutine$1(HelperUtility.StartAction$1(Bridge.fn.cacheBind(this, this.AnimationWillMid), 1.15));
            },
            /*BucketCrusher2.AnimationCandy end.*/

            /*BucketCrusher2.AnimationWillMid start.*/
            AnimationWillMid: function () {
if ( TRACE ) { TRACE( "BucketCrusher2#AnimationWillMid", this ); }

                if (this.isChoosed) {
                    return;
                }
                this.ChangeWildMill();
                this.StartCoroutine$1(HelperUtility.StartAction$1(Bridge.fn.cacheBind(this, this.AnimationCap), 0.7));
            },
            /*BucketCrusher2.AnimationWillMid end.*/

            /*BucketCrusher2.ChangeCaptain start.*/
            ChangeCaptain: function () {
if ( TRACE ) { TRACE( "BucketCrusher2#ChangeCaptain", this ); }

                this.lstSaw.getItem(0).SetActive(true);
                this.lstSaw.getItem(1).SetActive(false);
                this.lstSaw.getItem(2).SetActive(false);
                for (var i = 0; i < this.lstTam.Count; i = (i + 1) | 0) {
                    this.lstTam.getItem(i).material = this.lstMateCaptain.getItem(0);
                }
                for (var i1 = 0; i1 < this.lstBorder.Count; i1 = (i1 + 1) | 0) {
                    this.lstBorder.getItem(i1).material = this.lstMateCaptain.getItem(1);
                }
                for (var i2 = 0; i2 < this.lstTruc.Count; i2 = (i2 + 1) | 0) {
                    this.lstTruc.getItem(i2).material = this.lstMateCaptain.getItem(2);
                }
            },
            /*BucketCrusher2.ChangeCaptain end.*/

            /*BucketCrusher2.ChangeCandy start.*/
            ChangeCandy: function () {
if ( TRACE ) { TRACE( "BucketCrusher2#ChangeCandy", this ); }

                this.lstSaw.getItem(0).SetActive(false);
                this.lstSaw.getItem(1).SetActive(true);
                this.lstSaw.getItem(2).SetActive(false);
                for (var i = 0; i < this.lstTam.Count; i = (i + 1) | 0) {
                    this.lstTam.getItem(i).material = this.lstMateCandy.getItem(0);
                }
                for (var i1 = 0; i1 < this.lstBorder.Count; i1 = (i1 + 1) | 0) {
                    this.lstBorder.getItem(i1).material = this.lstMateCandy.getItem(1);
                }
                for (var i2 = 0; i2 < this.lstTruc.Count; i2 = (i2 + 1) | 0) {
                    this.lstTruc.getItem(i2).material = this.lstMateCandy.getItem(2);
                }
            },
            /*BucketCrusher2.ChangeCandy end.*/

            /*BucketCrusher2.ChangeWildMill start.*/
            ChangeWildMill: function () {
if ( TRACE ) { TRACE( "BucketCrusher2#ChangeWildMill", this ); }

                this.lstSaw.getItem(0).SetActive(false);
                this.lstSaw.getItem(1).SetActive(false);
                this.lstSaw.getItem(2).SetActive(true);
                for (var i = 0; i < this.lstTam.Count; i = (i + 1) | 0) {
                    this.lstTam.getItem(i).material = this.lstWindMill.getItem(0);
                }
                for (var i1 = 0; i1 < this.lstBorder.Count; i1 = (i1 + 1) | 0) {
                    this.lstBorder.getItem(i1).material = this.lstWindMill.getItem(1);
                }
                for (var i2 = 0; i2 < this.lstTruc.Count; i2 = (i2 + 1) | 0) {
                    this.lstTruc.getItem(i2).material = this.lstWindMill.getItem(2);
                }
            },
            /*BucketCrusher2.ChangeWildMill end.*/

            /*BucketCrusher2.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BucketCrusher2#Update", this ); }

                if (this.isEndGame) {
                    if (UnityEngine.Input.GetMouseButtonDown(0)) {
                        this.InstallFullGame();
                    }
                }
            },
            /*BucketCrusher2.Update end.*/

            /*BucketCrusher2.ChooseCaptain start.*/
            ChooseCaptain: function () {
if ( TRACE ) { TRACE( "BucketCrusher2#ChooseCaptain", this ); }

                this.guideChooseGroup.SetActive(false);
                Luna.Unity.Analytics.LogEvent$1("Choose Saw Captian", 0);
                this.ChangeCaptain();
                this.guideDrag.SetActive(true);
                this.guideDrag.GetComponent(UnityEngine.Animation).Play();
                this.soundControll.PlaySounClick();
                this.EndGame();
            },
            /*BucketCrusher2.ChooseCaptain end.*/

            /*BucketCrusher2.ChooseCandy start.*/
            ChooseCandy: function () {
if ( TRACE ) { TRACE( "BucketCrusher2#ChooseCandy", this ); }

                this.guideChooseGroup.SetActive(false);
                Luna.Unity.Analytics.LogEvent$1("Choose Saw Candy", 0);
                this.ChangeCandy();
                this.guideDrag.SetActive(true);
                this.guideDrag.GetComponent(UnityEngine.Animation).Play();
                this.soundControll.PlaySounClick();
                this.EndGame();
            },
            /*BucketCrusher2.ChooseCandy end.*/

            /*BucketCrusher2.ChooseWindMill start.*/
            ChooseWindMill: function () {
if ( TRACE ) { TRACE( "BucketCrusher2#ChooseWindMill", this ); }

                this.guideChooseGroup.SetActive(false);
                Luna.Unity.Analytics.LogEvent$1("Choose Saw WindMill", 0);
                this.ChangeWildMill();
                this.guideDrag.SetActive(true);
                this.guideDrag.GetComponent(UnityEngine.Animation).Play();
                this.soundControll.PlaySounClick();
                this.EndGame();
            },
            /*BucketCrusher2.ChooseWindMill end.*/

            /*BucketCrusher2.EndGame start.*/
            EndGame: function () {
if ( TRACE ) { TRACE( "BucketCrusher2#EndGame", this ); }

                Luna.Unity.LifeCycle.GameEnded();
                this.isEndGame = true;
                this.isChoosed = true;
            },
            /*BucketCrusher2.EndGame end.*/

            /*BucketCrusher2.InstallFullGame start.*/
            InstallFullGame: function () {
if ( TRACE ) { TRACE( "BucketCrusher2#InstallFullGame", this ); }

                Luna.Unity.Playable.InstallFullGame();
            },
            /*BucketCrusher2.InstallFullGame end.*/


        }
    });
    /*BucketCrusher2 end.*/

    /*Conveyor start.*/
    Bridge.define("Conveyor", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            conveyor: null,
            length: 0
        },
        methods: {
            /*Conveyor.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "Conveyor#Init", this ); }

                this.UpdateConveyor();
            },
            /*Conveyor.Init end.*/

            /*Conveyor.Accept start.*/
            Accept: function (visitor) {
if ( TRACE ) { TRACE( "Conveyor#Accept", this ); }

                visitor.IRobotVisitor$Visit$1(this);
                this.UpdateConveyor();
            },
            /*Conveyor.Accept end.*/

            /*Conveyor.UpdateConveyor start.*/
            UpdateConveyor: function () {
if ( TRACE ) { TRACE( "Conveyor#UpdateConveyor", this ); }

                this.Resize(this.length, pc.Vec3.RIGHT.clone());
            },
            /*Conveyor.UpdateConveyor end.*/

            /*Conveyor.Resize start.*/
            Resize: function (amount, direction) {
if ( TRACE ) { TRACE( "Conveyor#Resize", this ); }

                this.conveyor.transform.position = this.conveyor.transform.position.$clone().add( direction.$clone().clone().scale( amount ).scale( 1.0 / ( 2 ) ) );
                this.conveyor.transform.localScale = this.conveyor.transform.localScale.$clone().add( direction.$clone().clone().scale( amount ) );
            },
            /*Conveyor.Resize end.*/


        }
    });
    /*Conveyor end.*/

    /*DefineHelper start.*/
    Bridge.define("DefineHelper", {
        statics: {
            fields: {
                JoyStick: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "DefineHelper#init", this ); }

                    this.JoyStick = "JoyStick";
                }
            }
        }
    });
    /*DefineHelper end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos.$clone());
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x.$clone());
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x.$clone());
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Gradient}          gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       strength      The shake strength
                 * @param   {number}                       vibrato       Indicates how much will the shake vibrate
                 * @param   {number}                       randomness    Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                      fadeOut       If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {UnityEngine.Vector2}          strength      The shake strength on each axis
                 * @param   {number}                       vibrato       Indicates how much will the shake vibrate
                 * @param   {number}                       randomness    Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                      fadeOut       If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: "nested class",
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position.$clone());
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color.$clone());
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x.$clone());
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x.$clone());
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: "nested class",
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*Difficult start.*/
    Bridge.define("Difficult", {
        $kind: "enum",
        statics: {
            fields: {
                EASY: 0,
                NORMAL: 1,
                HARD: 2
            }
        }
    });
    /*Difficult end.*/

    /*Joystick start.*/
    Bridge.define("Joystick", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            handleRange: 0,
            deadZone: 0,
            axisOptions: 0,
            snapX: false,
            snapY: false,
            background: null,
            handle$1: null,
            baseRect: null,
            canvas: null,
            cam: null,
            input: null
        },
        props: {
            Horizontal: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Horizontal#get", this ); }

                    return (this.snapX) ? this.SnapFloat(this.input.x, AxisOptions.Horizontal) : this.input.x;
                }
            },
            Vertical: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Vertical#get", this ); }

                    return (this.snapY) ? this.SnapFloat(this.input.y, AxisOptions.Vertical) : this.input.y;
                }
            },
            Direction: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Direction#get", this ); }

                    return new pc.Vec2( this.Horizontal, this.Vertical );
                }
            },
            HandleRange: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#HandleRange#get", this ); }

                    return this.handleRange;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#HandleRange#set", this ); }

                    this.handleRange = Math.abs(value);
                }
            },
            DeadZone: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#DeadZone#get", this ); }

                    return this.deadZone;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#DeadZone#set", this ); }

                    this.deadZone = Math.abs(value);
                }
            },
            AxisOptions: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#get", this ); }

                    return this.AxisOptions;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#set", this ); }

                    this.axisOptions = value;
                }
            },
            SnapX: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapX#get", this ); }

                    return this.snapX;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapX#set", this ); }

                    this.snapX = value;
                }
            },
            SnapY: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapY#get", this ); }

                    return this.snapY;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapY#set", this ); }

                    this.snapY = value;
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Joystick#init", this ); }

                this.input = new UnityEngine.Vector2();
                this.handleRange = 1;
                this.deadZone = 0;
                this.axisOptions = AxisOptions.Both;
                this.snapX = false;
                this.snapY = false;
                this.input = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*Joystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Joystick#Start", this ); }

                this.HandleRange = this.handleRange;
                this.DeadZone = this.deadZone;
                this.baseRect = this.GetComponent(UnityEngine.RectTransform);
                this.canvas = this.GetComponentInParent(UnityEngine.Canvas);
                if (UnityEngine.Component.op_Equality(this.canvas, null)) {
                    UnityEngine.Debug.LogError$2("The Joystick is not placed inside a canvas");
                }

                var center = new pc.Vec2( 0.5, 0.5 );
                this.background.pivot = center.$clone();
                this.handle$1.anchorMin = center.$clone();
                this.handle$1.anchorMax = center.$clone();
                this.handle$1.pivot = center.$clone();
                this.handle$1.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.Start end.*/

            /*Joystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerDown", this ); }

                this.OnDrag(eventData);
            },
            /*Joystick.OnPointerDown end.*/

            /*Joystick.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnDrag", this ); }

                this.cam = null;
                if (this.canvas.renderMode === UnityEngine.RenderMode.ScreenSpaceCamera) {
                    this.cam = this.canvas.worldCamera;
                }

                var position = UnityEngine.RectTransformUtility.WorldToScreenPoint(this.cam, this.background.position.$clone());
                var radius = this.background.sizeDelta.$clone().scale( 1.0 / ( 2 ) );
                this.input = (eventData.position.$clone().sub( position )).div( (radius.$clone().scale( this.canvas.scaleFactor )) );
                this.FormatInput();
                this.HandleInput(this.input.length(), this.input.clone().normalize().$clone(), radius.$clone(), this.cam);
                this.handle$1.anchoredPosition = this.input.$clone().mul( radius ).scale( this.handleRange );
            },
            /*Joystick.OnDrag end.*/

            /*Joystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "Joystick#HandleInput", this ); }

                if (magnitude > this.deadZone) {
                    if (magnitude > 1) {
                        this.input = normalised.$clone();
                    }
                } else {
                    this.input = pc.Vec2.ZERO.clone();
                }
            },
            /*Joystick.HandleInput end.*/

            /*Joystick.FormatInput start.*/
            FormatInput: function () {
if ( TRACE ) { TRACE( "Joystick#FormatInput", this ); }

                if (this.axisOptions === AxisOptions.Horizontal) {
                    this.input = new pc.Vec2( this.input.x, 0.0 );
                } else {
                    if (this.axisOptions === AxisOptions.Vertical) {
                        this.input = new pc.Vec2( 0.0, this.input.y );
                    }
                }
            },
            /*Joystick.FormatInput end.*/

            /*Joystick.SnapFloat start.*/
            SnapFloat: function (value, snapAxis) {
if ( TRACE ) { TRACE( "Joystick#SnapFloat", this ); }

                if (value === 0) {
                    return value;
                }

                if (this.axisOptions === AxisOptions.Both) {
                    var angle = pc.Vec2.angle( this.input, pc.Vec2.UP.clone() );
                    if (snapAxis === AxisOptions.Horizontal) {
                        if (angle < 22.5 || angle > 157.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    } else if (snapAxis === AxisOptions.Vertical) {
                        if (angle > 67.5 && angle < 112.5) {
                            return 0;
                        } else {
                            return (value > 0) ? 1 : -1;
                        }
                    }
                    return value;
                } else {
                    if (value > 0) {
                        return 1;
                    }
                    if (value < 0) {
                        return -1;
                    }
                }
                return 0;
            },
            /*Joystick.SnapFloat end.*/

            /*Joystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerUp", this ); }

                this.input = pc.Vec2.ZERO.clone();
                this.handle$1.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.OnPointerUp end.*/

            /*Joystick.ScreenPointToAnchoredPosition start.*/
            ScreenPointToAnchoredPosition: function (screenPosition) {
if ( TRACE ) { TRACE( "Joystick#ScreenPointToAnchoredPosition", this ); }

                var localPoint = { v : pc.Vec2.ZERO.clone() };
                if (UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.baseRect, screenPosition, this.cam, localPoint)) {
                    var pivotOffset = this.baseRect.pivot.$clone().mul( this.baseRect.sizeDelta );
                    return localPoint.v.$clone().sub( (this.background.anchorMax.$clone().mul( this.baseRect.sizeDelta )) ).add( pivotOffset );
                }
                return pc.Vec2.ZERO.clone();
            },
            /*Joystick.ScreenPointToAnchoredPosition end.*/


        }
    });
    /*Joystick end.*/
    /** @namespace System */

    /**
     * @memberof System
     * @callback System.Action
     * @param   {System.Object}    arg
     * @return  {void}
     */


    /*EventDispatcher start.*/
    Bridge.define("EventDispatcher", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                s_instance: null
            },
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "EventDispatcher#Instance#get", this ); }

                        // instance not exist, then create new one
                        if (UnityEngine.MonoBehaviour.op_Equality(EventDispatcher.s_instance, null)) {
                            // create new Gameobject, and add EventDispatcher component
                            var singletonObject = new UnityEngine.GameObject.ctor();
                            EventDispatcher.s_instance = singletonObject.AddComponent(EventDispatcher);
                            singletonObject.name = "Singleton - EventDispatcher";
                            //Commons.Log("Create singleton : {0}", singletonObject.name);
                        }
                        return EventDispatcher.s_instance;
                    },
                    set: function (value) {
if ( TRACE ) { TRACE( "EventDispatcher#Instance#set", this ); }
 }
                }
            },
            methods: {
                /*EventDispatcher.HasInstance:static start.*/
                HasInstance: function () {
if ( TRACE ) { TRACE( "EventDispatcher#HasInstance", this ); }

                    return UnityEngine.MonoBehaviour.op_Inequality(EventDispatcher.s_instance, null);
                },
                /*EventDispatcher.HasInstance:static end.*/


            }
        },
        fields: {
            /**
             * @instance
             * @private
             * @memberof EventDispatcher
             * @type System.Collections.Generic.Dictionary$2
             */
            _listeners: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EventDispatcher#init", this ); }

                this._listeners = new (System.Collections.Generic.Dictionary$2(EventID,Function)).ctor();
            }
        },
        methods: {
            /*EventDispatcher.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "EventDispatcher#Awake", this ); }

                // check if there's another instance already exist in scene
                if (UnityEngine.MonoBehaviour.op_Inequality(EventDispatcher.s_instance, null) && EventDispatcher.s_instance.GetInstanceID() !== this.GetInstanceID()) {
                    // Destroy this instances because already exist the singleton of EventsDispatcer
                    //Commons.Log("An instance of EventDispatcher already exist : <{1}>, So destroy this instance : <{2}>!!", s_instance.name, name);
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                } else {
                    // set instance
                    EventDispatcher.s_instance = this;
                }

                //DontDestroyOnLoad(this);
            },
            /*EventDispatcher.Awake end.*/

            /*EventDispatcher.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "EventDispatcher#OnDestroy", this ); }

                // reset this static var to null if it's the singleton instance
                if (UnityEngine.MonoBehaviour.op_Equality(EventDispatcher.s_instance, this)) {
                    this.ClearAllListener();
                    EventDispatcher.s_instance = null;
                }
            },
            /*EventDispatcher.OnDestroy end.*/

            /*EventDispatcher.RegisterListener start.*/
            /**
             * Register to listen for eventID
             *
             * @instance
             * @public
             * @this EventDispatcher
             * @memberof EventDispatcher
             * @param   {EventID}          eventID     
             * @param   {System.Action}    callback
             * @return  {void}
             */
            RegisterListener: function (eventID, callback) {
if ( TRACE ) { TRACE( "EventDispatcher#RegisterListener", this ); }

                // checking params
                //Commons.Assert(callback != null, "AddListener, event {0}, callback = null !!", eventID.ToString());
                //Commons.Assert(eventID != EventID.None, "RegisterListener, event = None !!");

                // check if listener exist in distionary
                if (this._listeners.containsKey(eventID)) {
                    // add callback to our collection
                    this._listeners.setItem(eventID, Bridge.fn.combine(this._listeners.getItem(eventID), callback));
                } else {
                    // add new key-value pair
                    this._listeners.add(eventID, null);
                    this._listeners.setItem(eventID, Bridge.fn.combine(this._listeners.getItem(eventID), callback));
                }
            },
            /*EventDispatcher.RegisterListener end.*/

            /*EventDispatcher.PostEvent start.*/
            /**
             * Posts the event. This will notify all listener that register for this event
             *
             * @instance
             * @public
             * @this EventDispatcher
             * @memberof EventDispatcher
             * @param   {EventID}          eventID    
             * @param   {System.Object}    param
             * @return  {void}
             */
            PostEvent: function (eventID, param) {
if ( TRACE ) { TRACE( "EventDispatcher#PostEvent", this ); }

                if (param === void 0) { param = null; }
                if (!this._listeners.containsKey(eventID)) {
                    //Commons.Log("No listeners for this event : {0}", eventID);
                    return;
                }

                // posting event
                var callbacks = this._listeners.getItem(eventID);
                // if there's no listener remain, then do nothing
                if (!Bridge.staticEquals(callbacks, null)) {
                    callbacks(param);
                } else {
                    //Commons.Log("PostEvent {0}, but no listener remain, Remove this key", eventID);
                    this._listeners.remove(eventID);
                }
            },
            /*EventDispatcher.PostEvent end.*/

            /*EventDispatcher.RemoveListener start.*/
            /**
             * Removes the listener. Use to Unregister listener
             *
             * @instance
             * @public
             * @this EventDispatcher
             * @memberof EventDispatcher
             * @param   {EventID}          eventID     
             * @param   {System.Action}    callback
             * @return  {void}
             */
            RemoveListener: function (eventID, callback) {
if ( TRACE ) { TRACE( "EventDispatcher#RemoveListener", this ); }

                // checking params
                //Commons.Assert(callback != null, "RemoveListener, event {0}, callback = null !!", eventID.ToString());
                //Commons.Assert(eventID != EventID.None, "AddListener, event = None !!");

                if (this._listeners.containsKey(eventID)) {
                    this._listeners.setItem(eventID, Bridge.fn.remove(this._listeners.getItem(eventID), callback));
                } else {
                    //Commons.Warning(false, "RemoveListener, not found key : " + eventID);
                }
            },
            /*EventDispatcher.RemoveListener end.*/

            /*EventDispatcher.ClearAllListener start.*/
            /**
             * Clears all the listener.
             *
             * @instance
             * @public
             * @this EventDispatcher
             * @memberof EventDispatcher
             * @return  {void}
             */
            ClearAllListener: function () {
if ( TRACE ) { TRACE( "EventDispatcher#ClearAllListener", this ); }

                this._listeners.clear();
            },
            /*EventDispatcher.ClearAllListener end.*/


        }
    });
    /*EventDispatcher end.*/

    /*EventDispatcherExtension start.*/
    /**
     * Delare some "shortcut" for using EventDispatcher easier
     *
     * @static
     * @abstract
     * @public
     * @class EventDispatcherExtension
     */
    Bridge.define("EventDispatcherExtension", {
        statics: {
            methods: {
                /*EventDispatcherExtension.RegisterListener:static start.*/
                /**
                 * @static
                 * @public
                 * @this EventDispatcherExtension
                 * @memberof EventDispatcherExtension
                 * @param   {UnityEngine.MonoBehaviour}    listener    
                 * @param   {EventID}                      eventID     
                 * @param   {System.Action}                callback
                 * @return  {void}
                 */
                RegisterListener: function (listener, eventID, callback) {
if ( TRACE ) { TRACE( "EventDispatcherExtension#RegisterListener", this ); }

                    EventDispatcher.Instance.RegisterListener(eventID, callback);
                },
                /*EventDispatcherExtension.RegisterListener:static end.*/

                /*EventDispatcherExtension.PostEvent$1:static start.*/
                /**
                 * @static
                 * @public
                 * @this EventDispatcherExtension
                 * @memberof EventDispatcherExtension
                 * @param   {UnityEngine.MonoBehaviour}    listener    
                 * @param   {EventID}                      eventID     
                 * @param   {System.Object}                param
                 * @return  {void}
                 */
                PostEvent$1: function (listener, eventID, param) {
if ( TRACE ) { TRACE( "EventDispatcherExtension#PostEvent$1", this ); }

                    EventDispatcher.Instance.PostEvent(eventID, param);
                },
                /*EventDispatcherExtension.PostEvent$1:static end.*/

                /*EventDispatcherExtension.PostEvent:static start.*/
                /**
                 * @static
                 * @public
                 * @this EventDispatcherExtension
                 * @memberof EventDispatcherExtension
                 * @param   {UnityEngine.MonoBehaviour}    sender     
                 * @param   {EventID}                      eventID
                 * @return  {void}
                 */
                PostEvent: function (sender, eventID) {
if ( TRACE ) { TRACE( "EventDispatcherExtension#PostEvent", this ); }

                    EventDispatcher.Instance.PostEvent(eventID, null);
                },
                /*EventDispatcherExtension.PostEvent:static end.*/

                /*EventDispatcherExtension.RemoveListener:static start.*/
                /**
                 * @static
                 * @public
                 * @this EventDispatcherExtension
                 * @memberof EventDispatcherExtension
                 * @param   {UnityEngine.MonoBehaviour}    sender      
                 * @param   {EventID}                      eventID     
                 * @param   {System.Action}                callback
                 * @return  {void}
                 */
                RemoveListener: function (sender, eventID, callback) {
if ( TRACE ) { TRACE( "EventDispatcherExtension#RemoveListener", this ); }

                    EventDispatcher.Instance.RemoveListener(eventID, callback);
                },
                /*EventDispatcherExtension.RemoveListener:static end.*/


            }
        }
    });
    /*EventDispatcherExtension end.*/

    /*EventID start.*/
    Bridge.define("EventID", {
        $kind: "enum",
        statics: {
            fields: {
                Win: 0
            }
        }
    });
    /*EventID end.*/

    /*GameController start.*/
    Bridge.define("GameController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            moveToPosition: null,
            saw: null,
            ultiJoyStick: null
        },
        methods: {
            /*GameController.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "GameController#Init", this ); }

                this.saw = UnityEngine.Object.FindObjectOfType(Saw);
                this.moveToPosition = new MoveToPosition(this.saw);
            },
            /*GameController.Init end.*/

            /*GameController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameController#Update", this ); }

                var input = new pc.Vec2( UltimateJoystick.GetHorizontalAxis(DefineHelper.JoyStick), UltimateJoystick.GetVerticalAxis(DefineHelper.JoyStick) );

                this.moveToPosition.ICommand$Execute(input.$clone());
            },
            /*GameController.Update end.*/


        }
    });
    /*GameController end.*/
    /**
     * @memberof System
     * @callback System.Func
     * @return  {boolean}
     */

    /** @namespace UnityEngine.Events */

    /**
     * @memberof UnityEngine.Events
     * @callback UnityEngine.Events.UnityAction
     * @return  {void}
     */

    /**
     * @callback HelperUtility.Compare
     * @param   {System.Object}    a1    
     * @param   {System.Object}    a2
     * @return  {number}
     */


    /*HelperUtility start.*/
    Bridge.define("HelperUtility", {
        statics: {
            methods: {
                /*HelperUtility.DecimalRounding:static start.*/
                /**
                 * Bỏ các số sau dấu phẩy của số thập
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {number}    Num      
                 * @param   {number}    Round    Số chữ số sau dấu phẩy
                 * @return  {number}
                 */
                DecimalRounding: function (Num, Round) {
if ( TRACE ) { TRACE( "HelperUtility#DecimalRounding", this ); }

                    Num = (Bridge.Int.clip32(Math.pow(10, Round) * Num)) / Math.pow(10, Round);
                    return Num;
                },
                /*HelperUtility.DecimalRounding:static end.*/

                /*HelperUtility.DisruptiveArrayObject:static start.*/
                DisruptiveArrayObject: function (T, array) {
if ( TRACE ) { TRACE( "HelperUtility#DisruptiveArrayObject", this ); }

                    for (var i = 0; i < array.length; i = (i + 1) | 0) {
                        //int r1 = System.Random.Next
                        var r1 = UnityEngine.Random.Range(0, array.length);
                        var r2 = UnityEngine.Random.Range(0, array.length);

                        var temp = Bridge.rValue(array[r1]);
                        array[r1] = Bridge.rValue(array[r2]);
                        array[r2] = Bridge.rValue(temp);
                    }

                    return array;
                },
                /*HelperUtility.DisruptiveArrayObject:static end.*/

                /*HelperUtility.DisruptiveListObject$1:static start.*/
                DisruptiveListObject$1: function (array) {
if ( TRACE ) { TRACE( "HelperUtility#DisruptiveListObject$1", this ); }

                    for (var i = 0; i < array.Count; i = (i + 1) | 0) {
                        //int r1 = System.Random.Next
                        var r1 = UnityEngine.Random.Range(0, array.Count);
                        var r2 = UnityEngine.Random.Range(0, array.Count);

                        var temp = array.getItem(r1);
                        array.setItem(r1, array.getItem(r2));
                        array.setItem(r2, temp);
                    }

                    return array;
                },
                /*HelperUtility.DisruptiveListObject$1:static end.*/

                /*HelperUtility.DisruptiveListObject:static start.*/
                DisruptiveListObject: function (T, array) {
if ( TRACE ) { TRACE( "HelperUtility#DisruptiveListObject", this ); }

                    for (var i = 0; i < array.Count; i = (i + 1) | 0) {
                        //int r1 = System.Random.Next
                        var r1 = UnityEngine.Random.Range(0, array.Count);
                        var r2 = UnityEngine.Random.Range(0, array.Count);

                        var temp = Bridge.rValue(array.getItem(r1));
                        array.setItem(r1, Bridge.rValue(array.getItem(r2)));
                        array.setItem(r2, Bridge.rValue(temp));
                    }

                    return array;
                },
                /*HelperUtility.DisruptiveListObject:static end.*/

                /*HelperUtility.DisruptiveList:static start.*/
                DisruptiveList: function (T, array) {
if ( TRACE ) { TRACE( "HelperUtility#DisruptiveList", this ); }

                    for (var i = 0; i < array.Count; i = (i + 1) | 0) {
                        //int r1 = System.Random.Next
                        var r1 = UnityEngine.Random.Range(0, array.Count);
                        var r2 = UnityEngine.Random.Range(0, array.Count);

                        var temp = Bridge.rValue(array.getItem(r1));
                        array.setItem(r1, Bridge.rValue(array.getItem(r2)));
                        array.setItem(r2, Bridge.rValue(temp));
                    }

                    return array;
                },
                /*HelperUtility.DisruptiveList:static end.*/

                /*HelperUtility.DisruptiveListSelf:static start.*/
                DisruptiveListSelf: function (T, array) {
if ( TRACE ) { TRACE( "HelperUtility#DisruptiveListSelf", this ); }

                    for (var i = 0; i < array.Count; i = (i + 1) | 0) {
                        //int r1 = System.Random.Next
                        var r1 = UnityEngine.Random.Range(0, array.Count);
                        var r2 = UnityEngine.Random.Range(0, array.Count);

                        var temp = Bridge.rValue(array.getItem(r1));
                        array.setItem(r1, Bridge.rValue(array.getItem(r2)));
                        array.setItem(r2, Bridge.rValue(temp));
                    }

                    return array;
                },
                /*HelperUtility.DisruptiveListSelf:static end.*/

                /*HelperUtility.SelectionSortList:static start.*/
                /**
                 * Sắp xếp giảm dần
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {System.Collections.Generic.List$1}    A                     
                 * @param   {HelperUtility.Compare}                compareElementList
                 * @return  {System.Collections.Generic.List$1}
                 */
                SelectionSortList: function (A, compareElementList) {
if ( TRACE ) { TRACE( "HelperUtility#SelectionSortList", this ); }

                    var i, j, min_idx;
                    var n = A.Count;

                    for (i = 0; i < ((n - 1) | 0); i = (i + 1) | 0) {
                        // Tìm phần tử nhỏ nhất trong mảng
                        min_idx = i;
                        for (j = (i + 1) | 0; j < n; j = (j + 1) | 0) {
                            if (compareElementList(A.getItem(j), A.getItem(min_idx)) < 0) {
                                min_idx = j;
                            }
                        }

                        // Đổi chỗ phần tử nhỏ nhất trong mảng
                        var temp = A.getItem(min_idx);
                        A.setItem(min_idx, A.getItem(i));
                        A.setItem(i, temp);
                    }

                    return A;
                },
                /*HelperUtility.SelectionSortList:static end.*/

                /*HelperUtility.StartThread:static start.*/
                /**
                 * Gọi một Hàm chạy liên tục
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {UnityEngine.Events.UnityAction}    action           
                 * @param   {System.Func}                       conditionStop    
                 * @param   {UnityEngine.Events.UnityAction}    actionStop       
                 * @param   {number}                            time
                 * @return  {System.Collections.IEnumerator}
                 */
                StartThread: function (action, conditionStop, actionStop, time) {
if ( TRACE ) { TRACE( "HelperUtility#StartThread", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        isStop,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        if (actionStop === void 0) { actionStop = null; }
                                            if (time === void 0) { time = 0.01; }
                                            isStop = false;
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        if ( isStop === false ) {
                                                $step = 2;
                                                continue;
                                            } 
                                            $step = 4;
                                            continue;
                                    }
                                    case 2: {
                                        $enumerator.current = new UnityEngine.WaitForSecondsRealtime(time);
                                            $step = 3;
                                            return true;
                                    }
                                    case 3: {
                                        // Debug.Log("conditionStop " + conditionStop());
                                            if (conditionStop() === true) {
                                                isStop = true;
                                                if (!Bridge.staticEquals(actionStop, null)) {
                                                    actionStop();
                                                }
                                            } else {
                                                action();
                                            }

                                            $step = 1;
                                            continue;
                                    }
                                    case 4: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*HelperUtility.StartThread:static end.*/

                /*HelperUtility.StartThread$1:static start.*/
                /**
                 * Gọi một Hàm chạy liên tục
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {UnityEngine.Events.UnityAction}    action        
                 * @param   {number}                            timeToStop    
                 * @param   {UnityEngine.Events.UnityAction}    actionStop
                 * @return  {System.Collections.IEnumerator}
                 */
                StartThread$1: function (action, timeToStop, actionStop) {
if ( TRACE ) { TRACE( "HelperUtility#StartThread$1", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        isStop,
                        timer,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        if (actionStop === void 0) { actionStop = null; }
                                            isStop = false;

                                            timer = 0;
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        if ( isStop === false ) {
                                                $step = 2;
                                                continue;
                                            } 
                                            $step = 4;
                                            continue;
                                    }
                                    case 2: {
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.02);
                                            $step = 3;
                                            return true;
                                    }
                                    case 3: {
                                        timer += 0.02;
                                            //Debug.Log(timer);
                                            if (timer >= timeToStop - 1) {
                                                isStop = true;
                                                if (!Bridge.staticEquals(actionStop, null)) {
                                                    actionStop();
                                                }
                                            } else {
                                                action();
                                            }

                                            $step = 1;
                                            continue;
                                    }
                                    case 4: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*HelperUtility.StartThread$1:static end.*/

                /*HelperUtility.StartAction$1:static start.*/
                /**
                 * Tạo một hàm chạy sau một khoảng thời gian
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {UnityEngine.Events.UnityAction}    action    
                 * @param   {number}                            time
                 * @return  {System.Collections.IEnumerator}
                 */
                StartAction$1: function (action, time) {
if ( TRACE ) { TRACE( "HelperUtility#StartAction$1", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = new UnityEngine.WaitForSeconds(time);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {
                                        action();

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*HelperUtility.StartAction$1:static end.*/

                /*HelperUtility.StartAction:static start.*/
                /**
                 * Tạo một hàm chạy khi một điều kiện thỏa mãn
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {UnityEngine.Events.UnityAction}    action       
                 * @param   {System.Func}                       condition
                 * @return  {System.Collections.IEnumerator}
                 */
                StartAction: function (action, condition) {
if ( TRACE ) { TRACE( "HelperUtility#StartAction", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = new UnityEngine.WaitUntil(condition);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {
                                        action();

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*HelperUtility.StartAction:static end.*/

                /*HelperUtility.StartActionRealTime:static start.*/
                StartActionRealTime: function (action, time) {
if ( TRACE ) { TRACE( "HelperUtility#StartActionRealTime", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = new UnityEngine.WaitForSecondsRealtime(time);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {
                                        action();

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*HelperUtility.StartActionRealTime:static end.*/

                /*HelperUtility.StartActionNotUseCorutines:static start.*/
                StartActionNotUseCorutines: function (action, time) {
if ( TRACE ) { TRACE( "HelperUtility#StartActionNotUseCorutines", this ); }

                    // Observable.Timer(TimeSpan.FromSeconds(time)).Subscribe(l => { action(); });
                },
                /*HelperUtility.StartActionNotUseCorutines:static end.*/

                /*HelperUtility.GetPointDistanceFromObject:static start.*/
                /**
                 * Lấy một điểm cách 1 điểm cho trước và theo 1 hướng
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {number}                 distance     
                 * @param   {UnityEngine.Vector3}    direction    
                 * @param   {UnityEngine.Vector3}    fromPoint
                 * @return  {UnityEngine.Vector3}
                 */
                GetPointDistanceFromObject: function (distance, direction, fromPoint) {
if ( TRACE ) { TRACE( "HelperUtility#GetPointDistanceFromObject", this ); }

                    distance -= 1;
                    //if (distance < 0)
                    //    distance = 0;

                    var finalDirection = direction.$clone().add( direction.clone().normalize().$clone().clone().scale( distance ) );
                    var targetPosition = fromPoint.$clone().add( finalDirection );

                    return targetPosition.$clone();
                },
                /*HelperUtility.GetPointDistanceFromObject:static end.*/

                /*HelperUtility.GetDirectionFromAngle:static start.*/
                /**
                 * Lấy ra một Vector hợp với VectorP một góc angle. Điểm đầu của Vector là PositionStart
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {UnityEngine.Vector3}    vectorP          
                 * @param   {number}                 angle            
                 * @param   {UnityEngine.Vector3}    positionStart
                 * @return  {UnityEngine.Vector3}
                 */
                GetDirectionFromAngle: function (vectorP, angle, positionStart) {
if ( TRACE ) { TRACE( "HelperUtility#GetDirectionFromAngle", this ); }

                    if (angle === 90) {
                        return new pc.Vec3( vectorP.y, -vectorP.x, 0 ).clone().normalize().$clone();
                    } else if (angle === 0) {
                        return vectorP.$clone();
                    } else if (angle === 180) {
                        return vectorP.$clone().scale( -1 );
                    } else if (angle === 360) {
                        return new pc.Vec3( -vectorP.y, vectorP.x, 0 ).clone().normalize().$clone();
                    }

                    if (angle > 360) {
                        angle -= 360;
                    }
                    if (angle < 0) {
                        angle *= -1;
                    }

                    var radiaAngle = (angle * UnityEngine.Mathf.PI) / 180;
                    var tanAngle = Math.tan(radiaAngle);
                    var u = new pc.Vec2( vectorP.y, -vectorP.x );

                    var B = HelperUtility.GetPointDistanceFromObject(1, vectorP.$clone(), positionStart.$clone());
                    //Debug.Log("Distance "+ Vector3.Distance(positionStart, B));

                    var result = HelperUtility.GetPointDistanceFromObject(tanAngle, UnityEngine.Vector3.FromVector2(u.$clone()), B.$clone());

                    return (result.$clone().sub( positionStart )).clone().normalize().$clone();
                },
                /*HelperUtility.GetDirectionFromAngle:static end.*/

                /*HelperUtility.GetDirectionFromAngle_2:static start.*/
                /**
                 * Lấy ra một Vector hợp với VectorP một góc angle. Điểm đầu của Vector là PositionStart
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {UnityEngine.Vector3}    vectorP          
                 * @param   {number}                 angle            
                 * @param   {UnityEngine.Vector3}    positionStart
                 * @return  {UnityEngine.Vector3}
                 */
                GetDirectionFromAngle_2: function (vectorP, angle, positionStart) {
if ( TRACE ) { TRACE( "HelperUtility#GetDirectionFromAngle_2", this ); }

                    if (angle === 90) {
                        return new pc.Vec3( vectorP.y, -vectorP.x, 0 ).clone().normalize().$clone();
                    } else if (angle === 0) {
                        return vectorP.$clone();
                    } else if (angle === 180) {
                        return vectorP.$clone().scale( -1 );
                    } else if (angle === 360) {
                        return new pc.Vec3( -vectorP.y, vectorP.x, 0 ).clone().normalize().$clone();
                    }

                    if (angle > 360) {
                        angle -= 360;
                    }
                    if (angle < 0) {
                        angle *= -1;
                    }

                    if (angle > 90 && angle < 270) {
                        vectorP = vectorP.$clone().scale( -1 );
                    }

                    var radiaAngle = (angle * UnityEngine.Mathf.PI) / 180;
                    var tanAngle = Math.tan(radiaAngle);
                    var u = new pc.Vec2( vectorP.y, -vectorP.x );

                    var B = HelperUtility.GetPointDistanceFromObject(1, vectorP.$clone(), positionStart.$clone());
                    //Debug.Log("Distance "+ Vector3.Distance(positionStart, B));

                    var result = HelperUtility.GetPointDistanceFromObject(tanAngle, UnityEngine.Vector3.FromVector2(u.$clone()), B.$clone());

                    return (result.$clone().sub( positionStart )).clone().normalize().$clone();
                },
                /*HelperUtility.GetDirectionFromAngle_2:static end.*/

                /*HelperUtility.DOLocalRotateQuaternion:static start.*/
                DOLocalRotateQuaternion: function (endValue, speedRotate, objLookAt, actionComplete) {
if ( TRACE ) { TRACE( "HelperUtility#DOLocalRotateQuaternion", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        isStop,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        isStop = false;
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        if ( isStop === false ) {
                                                $step = 2;
                                                continue;
                                            } 
                                            $step = 4;
                                            continue;
                                    }
                                    case 2: {
                                        $enumerator.current = new UnityEngine.WaitForSecondsRealtime(UnityEngine.Time.deltaTime);
                                            $step = 3;
                                            return true;
                                    }
                                    case 3: {
                                        //Debug.Log(objLookAt.name + " "   + Quaternion.Angle(objLookAt.transform.localRotation, endValue));
                                            if (pc.Quat.angle( objLookAt.transform.localRotation.$clone(), endValue.$clone() ) <= 8.0) {
                                                isStop = true;
                                                $step = 4;
                                                continue;
                                            } else {
                                                objLookAt.transform.localRotation = new pc.Quat().slerp( objLookAt.transform.localRotation, endValue, UnityEngine.Time.deltaTime * speedRotate );
                                            }

                                            $step = 1;
                                            continue;
                                    }
                                    case 4: {
                                        actionComplete();

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*HelperUtility.DOLocalRotateQuaternion:static end.*/

                /*HelperUtility.GetRotateDirection:static start.*/
                GetRotateDirection: function (from, to) {
if ( TRACE ) { TRACE( "HelperUtility#GetRotateDirection", this ); }

                    var fromY = from.getPositiveEulerAngles().y;
                    var toY = to.getPositiveEulerAngles().y;
                    var clockWise = 0.0;
                    var counterClockWise = 0.0;

                    if (fromY <= toY) {
                        clockWise = toY - fromY;
                        counterClockWise = fromY + (360 - toY);
                    } else {
                        clockWise = (360 - fromY) + toY;
                        counterClockWise = fromY - toY;
                    }
                    return (clockWise <= counterClockWise);
                },
                /*HelperUtility.GetRotateDirection:static end.*/

                /*HelperUtility.LookAtToDirection:static start.*/
                LookAtToDirection: function (diretion, objLookAt, speedLockAt) {
if ( TRACE ) { TRACE( "HelperUtility#LookAtToDirection", this ); }

                    if (speedLockAt === void 0) { speedLockAt = 500.0; }
                    var xTarget = diretion.x;
                    var yTarget = diretion.y;
                    var angle = Math.atan2(yTarget, xTarget) * UnityEngine.Mathf.Rad2Deg + 90;

                    var q = new pc.Quat().setFromAxisAngle( new pc.Vec3( 0, 0, 1 ), angle );



                    objLookAt.transform.rotation = new pc.Quat().slerp( objLookAt.transform.rotation, q, UnityEngine.Time.deltaTime * speedLockAt );
                },
                /*HelperUtility.LookAtToDirection:static end.*/

                /*HelperUtility.LookAtToDirectionAngleDetal:static start.*/
                LookAtToDirectionAngleDetal: function (diretion, objLookAt, AngleDetal, speedLockAt) {
if ( TRACE ) { TRACE( "HelperUtility#LookAtToDirectionAngleDetal", this ); }

                    if (speedLockAt === void 0) { speedLockAt = 500.0; }
                    var xTarget = diretion.x;
                    var yTarget = diretion.y;
                    var angle = Math.atan2(yTarget, xTarget) * UnityEngine.Mathf.Rad2Deg + 90 + AngleDetal;
                    var q = new pc.Quat().setFromAxisAngle( new pc.Vec3( 0, 0, 1 ), angle );
                    objLookAt.transform.rotation = new pc.Quat().slerp( objLookAt.transform.rotation, q, UnityEngine.Time.deltaTime * speedLockAt );
                },
                /*HelperUtility.LookAtToDirectionAngleDetal:static end.*/

                /*HelperUtility.LookAtToPosition:static start.*/
                LookAtToPosition: function (position, objLookAt, speedRotate) {
if ( TRACE ) { TRACE( "HelperUtility#LookAtToPosition", this ); }

                    if (speedRotate === void 0) { speedRotate = 500.0; }
                    var xTarget = position.x - objLookAt.transform.position.x;
                    var yTarget = position.z - objLookAt.transform.position.z;
                    var angle = Math.atan2(yTarget, xTarget) * UnityEngine.Mathf.Rad2Deg + 90;
                    var q = new pc.Quat().setFromAxisAngle( new pc.Vec3( 0, 0, 1 ), angle );
                    objLookAt.transform.rotation = new pc.Quat().slerp( objLookAt.transform.rotation, q, UnityEngine.Time.deltaTime * speedRotate );
                },
                /*HelperUtility.LookAtToPosition:static end.*/

                /*HelperUtility.LookAtToPositionAngleDetal:static start.*/
                LookAtToPositionAngleDetal: function (position, objLookAt, AngleDetal, speedRotate) {
if ( TRACE ) { TRACE( "HelperUtility#LookAtToPositionAngleDetal", this ); }

                    if (speedRotate === void 0) { speedRotate = 500.0; }
                    var xTarget = position.x - objLookAt.transform.position.x;
                    var yTarget = position.y - objLookAt.transform.position.y;
                    var angle = Math.atan2(yTarget, xTarget) * UnityEngine.Mathf.Rad2Deg + 90 + AngleDetal;
                    var q = new pc.Quat().setFromAxisAngle( new pc.Vec3( 0, 0, 1 ), angle );
                    objLookAt.transform.rotation = new pc.Quat().slerp( objLookAt.transform.rotation, q, UnityEngine.Time.deltaTime * speedRotate );
                },
                /*HelperUtility.LookAtToPositionAngleDetal:static end.*/

                /*HelperUtility.RandomCustom:static start.*/
                RandomCustom: function (first, last, diff) {
if ( TRACE ) { TRACE( "HelperUtility#RandomCustom", this ); }

                    var r = -1;
                    while (r < 0) {
                        r = UnityEngine.Random.Range(first, last);
                        for (var i = 0; i < diff.Count; i = (i + 1) | 0) {
                            if (r === diff.getItem(i)) {
                                r = -1;
                                break;
                            }
                        }
                    }
                    return r;
                },
                /*HelperUtility.RandomCustom:static end.*/

                /*HelperUtility.RandomUnduplicated$1:static start.*/
                /**
                 * Random một phần tử trong 1 mảng không trùng lặp với 1 phần tử cho trước
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {number}                               oldValue    Giá trị mẫu không được trùng lặp
                 * @param   {System.Collections.Generic.List$1}    diff        List giá trị
                 * @return  {number}
                 */
                RandomUnduplicated$1: function (oldValue, diff) {
if ( TRACE ) { TRACE( "HelperUtility#RandomUnduplicated$1", this ); }

                    var m_diff = new (System.Collections.Generic.List$1(System.Int32)).$ctor1(diff);

                    //Trộn List
                    m_diff = HelperUtility.DisruptiveListObject(System.Int32, m_diff);

                    for (var i = 0; i < m_diff.Count; i = (i + 1) | 0) {
                        if (oldValue !== m_diff.getItem(i)) {
                            return m_diff.getItem(i);
                        }
                    }

                    return oldValue;
                },
                /*HelperUtility.RandomUnduplicated$1:static end.*/

                /*HelperUtility.RandomUnduplicated:static start.*/
                /**
                 * Random một phần tử trong 1 mảng không trùng lặp với 1 phần tử cho trước
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {System.Collections.Generic.List$1}    diff         List giá trị
                 * @param   {Array.<number>}                       oldValues    Giá trị mẫu không được trùng lặp
                 * @return  {number}
                 */
                RandomUnduplicated: function (diff, oldValues) {
if ( TRACE ) { TRACE( "HelperUtility#RandomUnduplicated", this ); }

                    if (oldValues === void 0) { oldValues = []; }
                    var m_diff = new (System.Collections.Generic.List$1(System.Int32)).$ctor1(diff);

                    //Trộn List
                    m_diff = HelperUtility.DisruptiveListObject(System.Int32, m_diff);

                    for (var i = 0; i < m_diff.Count; i = (i + 1) | 0) {
                        var isHasSame = false;
                        for (var j = 0; j < oldValues.length; j = (j + 1) | 0) {
                            if (oldValues[j] === m_diff.getItem(i)) {
                                isHasSame = true;
                                break;
                            }
                        }

                        if (!isHasSame) {
                            return m_diff.getItem(i);
                        }
                    }

                    return 0;
                },
                /*HelperUtility.RandomUnduplicated:static end.*/

                /*HelperUtility.SetPos:static start.*/
                SetPos: function (numCount, MaxERow) {
if ( TRACE ) { TRACE( "HelperUtility#SetPos", this ); }

                    var result = new (System.Collections.Generic.List$1(System.Int32)).ctor();


                    if (numCount === 1) {
                        return function (_o1) {
                                _o1.add(1);
                                return _o1;
                            }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                    } else {
                        if (numCount === 2) {
                            return function (_o2) {
                                    _o2.add(2);
                                    return _o2;
                                }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                        } else {
                            if (numCount === 3) {
                                return function (_o3) {
                                        _o3.add(1);
                                        _o3.add(2);
                                        return _o3;
                                    }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                            } else {
                                if (numCount === 4) {
                                    return function (_o4) {
                                            _o4.add(2);
                                            _o4.add(2);
                                            return _o4;
                                        }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                                } else {
                                    if (numCount === 5) {
                                        return function (_o5) {
                                                _o5.add(1);
                                                _o5.add(2);
                                                _o5.add(2);
                                                return _o5;
                                            }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                                    } else {
                                        if (numCount === 6) {
                                            return function (_o6) {
                                                    _o6.add(1);
                                                    _o6.add(2);
                                                    _o6.add(2);
                                                    _o6.add(1);
                                                    return _o6;
                                                }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                                        } else {
                                            if (numCount === 7) {
                                                return function (_o7) {
                                                        _o7.add(1);
                                                        _o7.add(2);
                                                        _o7.add(2);
                                                        _o7.add(2);
                                                        return _o7;
                                                    }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                                            } else {
                                                if (numCount === 8) {
                                                    return function (_o8) {
                                                            _o8.add(1);
                                                            _o8.add(2);
                                                            _o8.add(3);
                                                            _o8.add(2);
                                                            return _o8;
                                                        }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                                                } else {
                                                    if (numCount === 9) {
                                                        return function (_o9) {
                                                                _o9.add(1);
                                                                _o9.add(2);
                                                                _o9.add(3);
                                                                _o9.add(3);
                                                                return _o9;
                                                            }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                                                    } else {
                                                        if (numCount === 10) {
                                                            return function (_o10) {
                                                                    _o10.add(2);
                                                                    _o10.add(3);
                                                                    _o10.add(3);
                                                                    _o10.add(2);
                                                                    return _o10;
                                                                }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                                                        } else {
                                                            var numCount_1 = (Bridge.Int.div(numCount, 2)) | 0;
                                                            var lst_1 = HelperUtility.PosHandle(numCount_1, MaxERow);
                                                            result.AddRange(lst_1);

                                                            var numCount_2 = (numCount - numCount_1) | 0;
                                                            var lst_2 = HelperUtility.PosHandle(numCount_2, MaxERow);
                                                            lst_2.Reverse();

                                                            result.AddRange(lst_2);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    return result;
                },
                /*HelperUtility.SetPos:static end.*/

                /*HelperUtility.PosHandle:static start.*/
                PosHandle: function (numCount, MaxERow) {
if ( TRACE ) { TRACE( "HelperUtility#PosHandle", this ); }

                    var minCountInRow = 5;

                    var result = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                    var hs = minCountInRow;

                    var index = 0;
                    while (numCount > 0) {
                        if (numCount >= hs && hs >= MaxERow) {
                            result.add(hs);
                        }

                        if (numCount < hs) {
                            if (numCount < result.getItem(((index - 1) | 0))) {
                                if (numCount <= minCountInRow) {
                                    result.insert(0, numCount);
                                    break;
                                } else {
                                    while (numCount > 0) {
                                        for (var i = 0; i < result.Count; i = (i + 1) | 0) {
                                            if (i === 0) {
                                                result.insert(0, minCountInRow);
                                                numCount = (numCount - minCountInRow) | 0;
                                                if (numCount <= 0) {
                                                    break;
                                                }
                                            } else {
                                                var value = result.getItem(i);
                                                value = (value + 1) | 0;
                                                if (value > MaxERow) {
                                                    break;
                                                }

                                                result.setItem(i, (result.getItem(i) + 1) | 0);

                                                numCount = (numCount - 1) | 0;
                                                if (numCount <= 0) {
                                                    break;
                                                }
                                            }



                                        }
                                    }
                                }
                            } else {
                                result.add(numCount);
                            }
                            break;
                        }

                        numCount = (numCount - hs) | 0;

                        result.add(hs);
                        hs = (hs + 1) | 0;
                        if (hs >= MaxERow) {
                            hs = MaxERow;
                        }
                        index = (index + 1) | 0;
                    }

                    return result;
                },
                /*HelperUtility.PosHandle:static end.*/


            }
        }
    });
    /*HelperUtility end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*ICommand start.*/
    Bridge.define("ICommand", {
        $kind: "interface"
    });
    /*ICommand end.*/

    /*IRobotVisitor start.*/
    Bridge.define("IRobotVisitor", {
        $kind: "interface"
    });
    /*IRobotVisitor end.*/

    /*JoystickPlayerExample start.*/
    Bridge.define("JoystickPlayerExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            variableJoystick: null,
            rb: null
        },
        methods: {
            /*JoystickPlayerExample.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "JoystickPlayerExample#FixedUpdate", this ); }

                var direction = new pc.Vec3( 0, 0, 1 ).clone().scale( this.variableJoystick.Vertical ).add( pc.Vec3.RIGHT.clone().clone().scale( this.variableJoystick.Horizontal ) );
                this.rb.AddForce$1(direction.$clone().clone().scale( this.speed ).clone().scale( UnityEngine.Time.fixedDeltaTime ), UnityEngine.ForceMode.VelocityChange);
            },
            /*JoystickPlayerExample.FixedUpdate end.*/


        }
    });
    /*JoystickPlayerExample end.*/

    /*JoystickSetterExample start.*/
    Bridge.define("JoystickSetterExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            variableJoystick: null,
            valueText: null,
            background: null,
            axisSprites: null
        },
        methods: {
            /*JoystickSetterExample.ModeChanged start.*/
            ModeChanged: function (index) {
if ( TRACE ) { TRACE( "JoystickSetterExample#ModeChanged", this ); }

                switch (index) {
                    case 0: 
                        this.variableJoystick.SetMode(JoystickType.Fixed);
                        break;
                    case 1: 
                        this.variableJoystick.SetMode(JoystickType.Floating);
                        break;
                    case 2: 
                        this.variableJoystick.SetMode(JoystickType.Dynamic);
                        break;
                    default: 
                        break;
                }
            },
            /*JoystickSetterExample.ModeChanged end.*/

            /*JoystickSetterExample.AxisChanged start.*/
            AxisChanged: function (index) {
if ( TRACE ) { TRACE( "JoystickSetterExample#AxisChanged", this ); }

                switch (index) {
                    case 0: 
                        this.variableJoystick.AxisOptions = AxisOptions.Both;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    case 1: 
                        this.variableJoystick.AxisOptions = AxisOptions.Horizontal;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    case 2: 
                        this.variableJoystick.AxisOptions = AxisOptions.Vertical;
                        this.background.sprite = this.axisSprites[index];
                        break;
                    default: 
                        break;
                }
            },
            /*JoystickSetterExample.AxisChanged end.*/

            /*JoystickSetterExample.SnapX start.*/
            SnapX: function (value) {
if ( TRACE ) { TRACE( "JoystickSetterExample#SnapX", this ); }

                this.variableJoystick.SnapX = value;
            },
            /*JoystickSetterExample.SnapX end.*/

            /*JoystickSetterExample.SnapY start.*/
            SnapY: function (value) {
if ( TRACE ) { TRACE( "JoystickSetterExample#SnapY", this ); }

                this.variableJoystick.SnapY = value;
            },
            /*JoystickSetterExample.SnapY end.*/

            /*JoystickSetterExample.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "JoystickSetterExample#Update", this ); }

                this.valueText.text = "Current Value: " + this.variableJoystick.Direction;
            },
            /*JoystickSetterExample.Update end.*/


        }
    });
    /*JoystickSetterExample end.*/

    /*JoystickType start.*/
    Bridge.define("JoystickType", {
        $kind: "enum",
        statics: {
            fields: {
                Fixed: 0,
                Floating: 1,
                Dynamic: 2
            }
        }
    });
    /*JoystickType end.*/

    /*MMMaths start.*/
    Bridge.define("MMMaths", {
        statics: {
            methods: {
                /*MMMaths.Vector3ToVector2:static start.*/
                /**
                 * Takes a Vector3 and turns it into a Vector2
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {UnityEngine.Vector3}    target    The Vector3 to turn into a Vector2.
                 * @return  {UnityEngine.Vector2}              The vector2.
                 */
                Vector3ToVector2: function (target) {
if ( TRACE ) { TRACE( "MMMaths#Vector3ToVector2", this ); }

                    return new pc.Vec2( target.x, target.y );
                },
                /*MMMaths.Vector3ToVector2:static end.*/

                /*MMMaths.Vector2ToVector3:static start.*/
                /**
                 * Takes a Vector2 and turns it into a Vector3 with a null z value
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {UnityEngine.Vector2}    target    The Vector2 to turn into a Vector3.
                 * @return  {UnityEngine.Vector3}              The vector3.
                 */
                Vector2ToVector3: function (target) {
if ( TRACE ) { TRACE( "MMMaths#Vector2ToVector3", this ); }

                    return new pc.Vec3( target.x, target.y, 0 );
                },
                /*MMMaths.Vector2ToVector3:static end.*/

                /*MMMaths.Vector2ToVector3$1:static start.*/
                /**
                 * Takes a Vector2 and turns it into a Vector3 with the specified z value
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {UnityEngine.Vector2}    target       The Vector2 to turn into a Vector3.
                 * @param   {number}                 newZValue    New Z value.
                 * @return  {UnityEngine.Vector3}                 The vector3.
                 */
                Vector2ToVector3$1: function (target, newZValue) {
if ( TRACE ) { TRACE( "MMMaths#Vector2ToVector3$1", this ); }

                    return new pc.Vec3( target.x, target.y, newZValue );
                },
                /*MMMaths.Vector2ToVector3$1:static end.*/

                /*MMMaths.RandomVector3:static start.*/
                /**
                 * Returns a random vector3 from 2 defined vector3.
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {UnityEngine.Vector3}    minimum    
                 * @param   {UnityEngine.Vector3}    maximum
                 * @return  {UnityEngine.Vector3}               The vector3.
                 */
                RandomVector3: function (minimum, maximum) {
if ( TRACE ) { TRACE( "MMMaths#RandomVector3", this ); }

                    return new pc.Vec3( UnityEngine.Random.Range$1(minimum.x, maximum.x), UnityEngine.Random.Range$1(minimum.y, maximum.y), UnityEngine.Random.Range$1(minimum.z, maximum.z) );
                },
                /*MMMaths.RandomVector3:static end.*/

                /*MMMaths.RotatePointAroundPivot:static start.*/
                /**
                 * Rotates a point around the given pivot.
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {UnityEngine.Vector3}    point    The point to rotate.
                 * @param   {UnityEngine.Vector3}    pivot    The pivot's position.
                 * @param   {number}                 angle    The angle we want to rotate our point.
                 * @return  {UnityEngine.Vector3}             The new point position.
                 */
                RotatePointAroundPivot: function (point, pivot, angle) {
if ( TRACE ) { TRACE( "MMMaths#RotatePointAroundPivot", this ); }

                    angle = angle * (0.0174532924);
                    var rotatedX = Math.cos(angle) * (point.x - pivot.x) - Math.sin(angle) * (point.y - pivot.y) + pivot.x;
                    var rotatedY = Math.sin(angle) * (point.x - pivot.x) + Math.cos(angle) * (point.y - pivot.y) + pivot.y;
                    return new pc.Vec3( rotatedX, rotatedY, 0 );
                },
                /*MMMaths.RotatePointAroundPivot:static end.*/

                /*MMMaths.RotatePointAroundPivot$1:static start.*/
                /**
                 * Rotates a point around the given pivot.
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {UnityEngine.Vector3}    point    The point to rotate.
                 * @param   {UnityEngine.Vector3}    pivot    The pivot's position.
                 * @param   {UnityEngine.Vector3}    angle
                 * @return  {UnityEngine.Vector3}             The new point position.
                 */
                RotatePointAroundPivot$1: function (point, pivot, angle) {
if ( TRACE ) { TRACE( "MMMaths#RotatePointAroundPivot$1", this ); }

                    // we get point direction from the point to the pivot
                    var direction = point.$clone().sub( pivot );
                    // we rotate the direction
                    direction = new pc.Quat().setFromEulerAngles_Unity( angle.x, angle.y, angle.z ).transformVector( direction );
                    // we determine the rotated point's position
                    point = direction.$clone().add( pivot );
                    return point.$clone();
                },
                /*MMMaths.RotatePointAroundPivot$1:static end.*/

                /*MMMaths.Sum:static start.*/
                /**
                 * Returns the sum of all the int passed in parameters
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {Array.<number>}    thingsToAdd    Things to add.
                 * @return  {number}
                 */
                Sum: function (thingsToAdd) {
if ( TRACE ) { TRACE( "MMMaths#Sum", this ); }

                    if (thingsToAdd === void 0) { thingsToAdd = []; }
                    var result = 0;
                    for (var i = 0; i < thingsToAdd.length; i = (i + 1) | 0) {
                        result = (result + thingsToAdd[i]) | 0;
                    }
                    return result;
                },
                /*MMMaths.Sum:static end.*/

                /*MMMaths.RollADice:static start.*/
                /**
                 * Returns the result of rolling a dice of the specified number of sides
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {number}    numberOfSides    Number of sides of the dice.
                 * @return  {number}                     The result of the dice roll.
                 */
                RollADice: function (numberOfSides) {
if ( TRACE ) { TRACE( "MMMaths#RollADice", this ); }

                    return (UnityEngine.Random.Range(1, numberOfSides));
                },
                /*MMMaths.RollADice:static end.*/

                /*MMMaths.Chance:static start.*/
                /**
                 * Returns a random success based on X% of chance.
                 Example : I have 20% of chance to do X, Chance(20) &gt; true, yay!
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {number}     percent    Percent of chance.
                 * @return  {boolean}
                 */
                Chance: function (percent) {
if ( TRACE ) { TRACE( "MMMaths#Chance", this ); }

                    return (UnityEngine.Random.Range(0, 100) <= percent);
                },
                /*MMMaths.Chance:static end.*/

                /*MMMaths.Approach:static start.*/
                /**
                 * Moves from "from" to "to" by the specified amount and returns the corresponding value
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {number}    from      From.
                 * @param   {number}    to        To.
                 * @param   {number}    amount    Amount.
                 * @return  {number}
                 */
                Approach: function (from, to, amount) {
if ( TRACE ) { TRACE( "MMMaths#Approach", this ); }

                    if (from < to) {
                        from += amount;
                        if (from > to) {
                            return to;
                        }
                    } else {
                        from -= amount;
                        if (from < to) {
                            return to;
                        }
                    }
                    return from;
                },
                /*MMMaths.Approach:static end.*/


            }
        }
    });
    /*MMMaths end.*/

    /*NameTag start.*/
    Bridge.define("NameTag", {
        statics: {
            fields: {
                Brick: null,
                Saw: null,
                Conveyor: null,
                Destroyer: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "NameTag#init", this ); }

                    this.Brick = "Brick";
                    this.Saw = "Saw";
                    this.Conveyor = "Conveyor";
                    this.Destroyer = "Destroyer";
                }
            }
        }
    });
    /*NameTag end.*/

    /*Rarity start.*/
    Bridge.define("Rarity", {
        $kind: "enum",
        statics: {
            fields: {
                Brick: 0,
                Gold: 1,
                Diamond: 2
            }
        }
    });
    /*Rarity end.*/

    /*RobotController start.*/
    Bridge.define("RobotController", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*RobotController end.*/

    /*RotateObject start.*/
    Bridge.define("RotateObject", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            duration: 0,
            angle: 0
        },
        methods: {
            /*RotateObject.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "RotateObject#Start", this ); }

                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetLoops(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.ShortcutExtensions.DORotate(this.transform, new pc.Vec3( 0, this.angle, 0 ), this.duration, DG.Tweening.RotateMode.LocalAxisAdd), -1), DG.Tweening.Ease.Linear);
            },
            /*RotateObject.Start end.*/


        }
    });
    /*RotateObject end.*/

    /*Saw start.*/
    Bridge.define("Saw", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rb: null,
            movementSpeed: 0,
            durability: 0,
            timer: 0,
            reset: 0,
            isCollingBrick: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Saw#init", this ); }

                this.timer = 1.0;
                this.reset = 1.0;
            }
        },
        methods: {
            /*Saw.SetMovementSpeed start.*/
            SetMovementSpeed: function (newMovementSpeed) {
if ( TRACE ) { TRACE( "Saw#SetMovementSpeed", this ); }

                this.movementSpeed = newMovementSpeed;
            },
            /*Saw.SetMovementSpeed end.*/

            /*Saw.SetDurability start.*/
            SetDurability: function (newDurability) {
if ( TRACE ) { TRACE( "Saw#SetDurability", this ); }

                this.durability = newDurability;
            },
            /*Saw.SetDurability end.*/

            /*Saw.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Saw#Start", this ); }

                this.rb = this.GetComponent(UnityEngine.Rigidbody2D);
            },
            /*Saw.Start end.*/

            /*Saw.MoveToPosition start.*/
            MoveToPosition: function (position) {
if ( TRACE ) { TRACE( "Saw#MoveToPosition", this ); }

                if (pc.Vec2.equals( position, pc.Vec2.ZERO.clone() )) {
                    this.rb.constraints = UnityEngine.RigidbodyConstraints2D.FreezeAll;
                } else {
                    this.rb.constraints = UnityEngine.RigidbodyConstraints2D.None;

                    var movePosition = pc.Vec3.moveTowards( this.transform.position, UnityEngine.Vector3.FromVector2(position.clone().normalize().$clone().scale( 99 )), UnityEngine.Time.deltaTime * this.movementSpeed );

                    this.rb.MovePosition$1(movePosition.$clone());
                }
            },
            /*Saw.MoveToPosition end.*/

            /*Saw.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "Saw#FixedUpdate", this ); }

                if (this.isCollingBrick) {
                    this.timer -= UnityEngine.Time.fixedDeltaTime;

                    if (this.timer <= 0) {
                        //if (_durability-- < 0)
                        //GameManager.Instance.UpdateGameState(GameState.Lose);
                        this.timer = this.reset;
                        // Debug.Log(_durability);
                    }
                }
            },
            /*Saw.FixedUpdate end.*/

            /*Saw.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (col) {
if ( TRACE ) { TRACE( "Saw#OnTriggerEnter2D", this ); }

                if (col.gameObject.CompareTag("Brick")) {
                    this.isCollingBrick = true;
                }
            },
            /*Saw.OnTriggerEnter2D end.*/

            /*Saw.OnTriggerExit2D start.*/
            OnTriggerExit2D: function (col) {
if ( TRACE ) { TRACE( "Saw#OnTriggerExit2D", this ); }

                if (col.gameObject.CompareTag("Brick")) {
                    this.isCollingBrick = false;
                }
            },
            /*Saw.OnTriggerExit2D end.*/


        }
    });
    /*Saw end.*/

    /*SelfDefine start.*/
    Bridge.define("SelfDefine", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*SelfDefine end.*/

    /*SimplePool start.*/
    Bridge.define("SimplePool", {
        statics: {
            fields: {
                DEFAULT_POOL_SIZE: 0,
                _pools: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SimplePool#init", this ); }

                    this.DEFAULT_POOL_SIZE = 3;
                }
            },
            methods: {
                /*SimplePool.Init:static start.*/
                /**
                 * Initialize our dictionary.
                 *
                 * @static
                 * @private
                 * @this SimplePool
                 * @memberof SimplePool
                 * @param   {UnityEngine.GameObject}    prefab    
                 * @param   {number}                    qty
                 * @return  {void}
                 */
                Init: function (prefab, qty) {
if ( TRACE ) { TRACE( "SimplePool#Init", this ); }

                    if (prefab === void 0) { prefab = null; }
                    if (qty === void 0) { qty = 3; }
                    if (SimplePool._pools == null) {
                        SimplePool._pools = new (System.Collections.Generic.Dictionary$2(System.Int32,SimplePool.Pool)).ctor();
                    }

                    if (UnityEngine.GameObject.op_Inequality(prefab, null)) {
                        //changed from (prefab, Pool) to (int, Pool) which should be faster if we have 
                        //many different prefabs.
                        var prefabID = prefab.GetInstanceID();
                        if (!SimplePool._pools.containsKey(prefabID)) {
                            SimplePool._pools.setItem(prefabID, new SimplePool.Pool(prefab, qty));
                        }
                    }
                },
                /*SimplePool.Init:static end.*/

                /*SimplePool.PoolPreLoad:static start.*/
                PoolPreLoad: function (prefab, qty, newParent) {
if ( TRACE ) { TRACE( "SimplePool#PoolPreLoad", this ); }

                    if (newParent === void 0) { newParent = null; }
                    SimplePool.Init(prefab, 1);
                    SimplePool._pools.getItem(prefab.GetInstanceID()).Preload(qty, newParent);
                },
                /*SimplePool.PoolPreLoad:static end.*/

                /*SimplePool.Preload:static start.*/
                /**
                 * If you want to preload a few copies of an object at the start
                 of a scene, you can use this. Really not needed unless you're
                 going to go from zero instances to 100+ very quickly.
                 Could technically be optimized more, but in practice the
                 Spawn/Despawn sequence is going to be pretty darn quick and
                 this avoids code duplication.
                 *
                 * @static
                 * @public
                 * @this SimplePool
                 * @memberof SimplePool
                 * @param   {UnityEngine.GameObject}            prefab       
                 * @param   {number}                            qty          
                 * @param   {UnityEngine.Transform}             newParent
                 * @return  {Array.<UnityEngine.GameObject>}
                 */
                Preload: function (prefab, qty, newParent) {
if ( TRACE ) { TRACE( "SimplePool#Preload", this ); }

                    if (qty === void 0) { qty = 1; }
                    if (newParent === void 0) { newParent = null; }
                    SimplePool.Init(prefab, qty);
                    // Make an array to grab the objects we're about to pre-spawn.
                    var obs = System.Array.init(qty, null, UnityEngine.GameObject);
                    for (var i = 0; i < qty; i = (i + 1) | 0) {
                        obs[i] = SimplePool.Spawn$3(prefab, pc.Vec3.ZERO.clone(), pc.Quat.IDENTITY.clone());
                        if (UnityEngine.Component.op_Inequality(newParent, null)) {
                            obs[i].transform.SetParent(newParent);
                        }
                    }

                    // Now despawn them all.
                    for (var i1 = 0; i1 < qty; i1 = (i1 + 1) | 0) {
                        SimplePool.Despawn(obs[i1]);
                    }
                    return obs;
                },
                /*SimplePool.Preload:static end.*/

                /*SimplePool.Spawn$3:static start.*/
                /**
                 * Spawns a copy of the specified prefab (instantiating one if required).
                 NOTE: Remember that Awake() or Start() will only run on the very first
                 spawn and that member variables won't get reset.  OnEnable will run
                 after spawning -- but remember that toggling IsActive will also
                 call that function.
                 *
                 * @static
                 * @public
                 * @this SimplePool
                 * @memberof SimplePool
                 * @param   {UnityEngine.GameObject}    prefab    
                 * @param   {UnityEngine.Vector3}       pos       
                 * @param   {UnityEngine.Quaternion}    rot
                 * @return  {UnityEngine.GameObject}
                 */
                Spawn$3: function (prefab, pos, rot) {
if ( TRACE ) { TRACE( "SimplePool#Spawn$3", this ); }

                    SimplePool.Init(prefab);

                    return SimplePool._pools.getItem(prefab.GetInstanceID()).Spawn$1(pos.$clone(), rot.$clone());
                },
                /*SimplePool.Spawn$3:static end.*/

                /*SimplePool.Spawn$2:static start.*/
                Spawn$2: function (prefab) {
if ( TRACE ) { TRACE( "SimplePool#Spawn$2", this ); }

                    return SimplePool.Spawn$3(prefab, pc.Vec3.ZERO.clone(), pc.Quat.IDENTITY.clone());
                },
                /*SimplePool.Spawn$2:static end.*/

                /*SimplePool.Spawn:static start.*/
                Spawn: function (T, prefab) {
if ( TRACE ) { TRACE( "SimplePool#Spawn", this ); }

                    return SimplePool.Spawn$1(T, Bridge.rValue(prefab), pc.Vec3.ZERO.clone(), pc.Quat.IDENTITY.clone());
                },
                /*SimplePool.Spawn:static end.*/

                /*SimplePool.Spawn$1:static start.*/
                Spawn$1: function (T, prefab, pos, rot) {
if ( TRACE ) { TRACE( "SimplePool#Spawn$1", this ); }

                    SimplePool.Init(Bridge.rValue(prefab).gameObject);
                    return SimplePool._pools.getItem(Bridge.rValue(prefab).gameObject.GetInstanceID()).Spawn(T, pos.$clone(), rot.$clone());
                },
                /*SimplePool.Spawn$1:static end.*/

                /*SimplePool.Despawn:static start.*/
                /**
                 * Despawn the specified gameobject back into its pool.
                 *
                 * @static
                 * @public
                 * @this SimplePool
                 * @memberof SimplePool
                 * @param   {UnityEngine.GameObject}    obj
                 * @return  {void}
                 */
                Despawn: function (obj) {
if ( TRACE ) { TRACE( "SimplePool#Despawn", this ); }

                    var $t;
                    var p = null;
                    $t = Bridge.getEnumerator(SimplePool._pools.Values);
                    try {
                        while ($t.moveNext()) {
                            var pool = $t.Current;
                            if (pool.MemberIDs.contains(obj.GetInstanceID())) {
                                p = pool;
                                break;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    if (p == null) {
                        UnityEngine.Debug.LogFormat("Object '{0}' wasn't spawned from a pool. Destroying it instead.", [obj.name]);
                        UnityEngine.Object.Destroy(obj);
                    } else {
                        p.Despawn(obj);
                    }
                },
                /*SimplePool.Despawn:static end.*/

                /*SimplePool.GetStackCount:static start.*/
                GetStackCount: function (prefab) {
if ( TRACE ) { TRACE( "SimplePool#GetStackCount", this ); }

                    if (SimplePool._pools == null) {
                        SimplePool._pools = new (System.Collections.Generic.Dictionary$2(System.Int32,SimplePool.Pool)).ctor();
                    }
                    if (UnityEngine.GameObject.op_Equality(prefab, null)) {
                        return 0;
                    }
                    return SimplePool._pools.containsKey(prefab.GetInstanceID()) ? SimplePool._pools.getItem(prefab.GetInstanceID()).StackCount : 0;
                },
                /*SimplePool.GetStackCount:static end.*/

                /*SimplePool.ClearPool:static start.*/
                ClearPool: function () {
if ( TRACE ) { TRACE( "SimplePool#ClearPool", this ); }

                    if (SimplePool._pools != null) {
                        SimplePool._pools.clear();
                    }
                },
                /*SimplePool.ClearPool:static end.*/


            }
        }
    });
    /*SimplePool end.*/

    /*SimplePool+Pool start.*/
    /**
     * The Pool class represents the pool for a particular prefab.
     *
     * @public
     * @class SimplePool.Pool
     */
    Bridge.define("SimplePool.Pool", {
        $kind: "nested class",
        fields: {
            _nextId: 0,
            _inactive: null,
            MemberIDs: null,
            _prefab: null
        },
        props: {
            StackCount: {
                get: function () {
if ( TRACE ) { TRACE( "SimplePool.Pool#StackCount#get", this ); }

                    return this._inactive.Count;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimplePool.Pool#init", this ); }

                this._nextId = 1;
            },
            ctor: function (prefab, initialQty) {
if ( TRACE ) { TRACE( "SimplePool.Pool#ctor", this ); }

                this.$initialize();
                this._prefab = prefab;
                // If Stack uses a linked list internally, then this
                // whole initialQty thing is a placebo that we could
                // strip out for more minimal code. But it can't *hurt*.
                this._inactive = new (System.Collections.Generic.Queue$1(UnityEngine.GameObject)).$ctor2(initialQty);
                this.MemberIDs = new (System.Collections.Generic.HashSet$1(System.Int32)).ctor();
            }
        },
        methods: {
            /*SimplePool+Pool.Preload start.*/
            Preload: function (initialQty, parent) {
if ( TRACE ) { TRACE( "SimplePool.Pool#Preload", this ); }

                if (parent === void 0) { parent = null; }
                for (var i = 0; i < initialQty; i = (i + 1) | 0) {
                    // instantiate a whole new object.
                    var obj = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this._prefab, parent);
                    obj.name = System.String.format("{0} ({1})", this._prefab.name, Bridge.box(Bridge.identity(this._nextId, ((this._nextId = (this._nextId + 1) | 0))), System.Int32));

                    // Add the unique GameObject ID to our MemberHashset so we know this GO belongs to us.
                    this.MemberIDs.add(obj.GetInstanceID());

                    obj.SetActive(false);

                    this._inactive.Enqueue(obj);
                }
            },
            /*SimplePool+Pool.Preload end.*/

            /*SimplePool+Pool.Spawn$1 start.*/
            Spawn$1: function (pos, rot) {
if ( TRACE ) { TRACE( "SimplePool.Pool#Spawn$1", this ); }

                while (true) {
                    var obj;
                    if (this._inactive.Count === 0) {
                        // We don't have an object in our pool, so we
                        // instantiate a whole new object.
                        obj = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this._prefab, pos.$clone(), rot.$clone());
                        obj.name = System.String.format("{0} ({1})", this._prefab.name, Bridge.box(Bridge.identity(this._nextId, ((this._nextId = (this._nextId + 1) | 0))), System.Int32));

                        // Add the unique GameObject ID to our MemberHashset so we know this GO belongs to us.
                        this.MemberIDs.add(obj.GetInstanceID());
                    } else {
                        // Grab the last object in the inactive array
                        obj = this._inactive.Dequeue();

                        if (UnityEngine.GameObject.op_Equality(obj, null)) {
                            // The inactive object we expected to find no longer exists.
                            // The most likely causes are:
                            //   - Someone calling Destroy() on our object
                            //   - A scene change (which will destroy all our objects).
                            //     NOTE: This could be prevented with a DontDestroyOnLoad
                            //	   if you really don't want this.
                            // No worries -- we'll just try the next one in our sequence.

                            continue;
                        }
                    }
                    obj.transform.position = pos.$clone();
                    obj.transform.rotation = rot.$clone();
                    obj.SetActive(true);
                    return obj;
                }
            },
            /*SimplePool+Pool.Spawn$1 end.*/

            /*SimplePool+Pool.Spawn start.*/
            Spawn: function (T, pos, rot) {
if ( TRACE ) { TRACE( "SimplePool.Pool#Spawn", this ); }

                return this.Spawn$1(pos.$clone(), rot.$clone()).GetComponent(T);
            },
            /*SimplePool+Pool.Spawn end.*/

            /*SimplePool+Pool.Despawn start.*/
            Despawn: function (obj) {
if ( TRACE ) { TRACE( "SimplePool.Pool#Despawn", this ); }

                if (!obj.activeSelf) {
                    return;
                }
                obj.SetActive(false);
                // Since Stack doesn't have a Capacity member, we can't control
                // the growth factor if it does have to expand an internal array.
                // On the other hand, it might simply be using a linked list 
                // internally.  But then, why does it allow us to specify a size
                // in the constructor? Maybe it's a placebo? Stack is weird.
                this._inactive.Enqueue(obj);
            },
            /*SimplePool+Pool.Despawn end.*/


        },
        overloads: {
            "Spawn(Vector3, Quaternion)": "Spawn$1"
        }
    });
    /*SimplePool+Pool end.*/

    /*SingletonWithouMono$1 start.*/
    Bridge.define("SingletonWithouMono$1", function (T) { return {
        statics: {
            fields: {
                instance: Bridge.getDefaultValue(T)
            },
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "SingletonWithouMono$1#Instance#get", this ); }

                        if (Bridge.rValue(SingletonWithouMono$1(T).instance) != null) {
                            return Bridge.rValue(SingletonWithouMono$1(T).instance);
                        }
                        SingletonWithouMono$1(T).instance = Bridge.createInstance(T);
                        (Bridge.as(Bridge.rValue(SingletonWithouMono$1(T).instance), SingletonWithouMono$1(T))).Initialize();
                        return Bridge.rValue(SingletonWithouMono$1(T).instance);
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SingletonWithouMono$1#init", this ); }

                    this.instance = Bridge.getDefaultValue(T);
                }
            }
        },
        fields: {
            initialized: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SingletonWithouMono$1#init", this ); }

                this.initialized = false;
            }
        },
        methods: {
            /*SingletonWithouMono$1.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "SingletonWithouMono$1#Initialize", this ); }

                if (this.initialized) {
                    return;
                }
                this.initialized = true;
            },
            /*SingletonWithouMono$1.Initialize end.*/

            /*SingletonWithouMono$1.Preload start.*/
            Preload: function () {
if ( TRACE ) { TRACE( "SingletonWithouMono$1#Preload", this ); }
 },
            /*SingletonWithouMono$1.Preload end.*/


        }
    }; });
    /*SingletonWithouMono$1 end.*/

    /*TypeDestroy start.*/
    Bridge.define("TypeDestroy", {
        $kind: "enum",
        statics: {
            fields: {
                DISABLE: 0,
                RESPAWNER: 1,
                DESTROY: 2
            }
        }
    });
    /*TypeDestroy end.*/

    /*UltimateJoystick start.*/
    Bridge.define("UltimateJoystick", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler],
        statics: {
            fields: {
                UltimateJoysticks: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#init", this ); }

                    this.UltimateJoysticks = new (System.Collections.Generic.Dictionary$2(System.String,UltimateJoystick)).ctor();
                }
            },
            methods: {
                /*UltimateJoystick.JoystickConfirmed:static start.*/
                /**
                 * Returns with a confirmation about the existence of the targeted Ultimate Joystick.
                 *
                 * @static
                 * @private
                 * @this UltimateJoystick
                 * @memberof UltimateJoystick
                 * @param   {string}     joystickName
                 * @return  {boolean}
                 */
                JoystickConfirmed: function (joystickName) {
if ( TRACE ) { TRACE( "UltimateJoystick#JoystickConfirmed", this ); }

                    if (!UltimateJoystick.UltimateJoysticks.containsKey(joystickName)) {
                        UnityEngine.Debug.LogWarning$1("Ultimate Joystick - No Ultimate Joystick has been registered with the name: " + (joystickName || "") + ".");
                        return false;
                    }
                    return true;
                },
                /*UltimateJoystick.JoystickConfirmed:static end.*/

                /*UltimateJoystick.GetUltimateJoystick:static start.*/
                /**
                 * Returns the Ultimate Joystick of the targeted name if it exists within the scene.
                 *
                 * @static
                 * @public
                 * @this UltimateJoystick
                 * @memberof UltimateJoystick
                 * @param   {string}              joystickName    The Joystick Name of the desired Ultimate Joystick.
                 * @return  {UltimateJoystick}
                 */
                GetUltimateJoystick: function (joystickName) {
if ( TRACE ) { TRACE( "UltimateJoystick#GetUltimateJoystick", this ); }

                    if (!UltimateJoystick.JoystickConfirmed(joystickName)) {
                        return null;
                    }

                    return UltimateJoystick.UltimateJoysticks.getItem(joystickName);
                },
                /*UltimateJoystick.GetUltimateJoystick:static end.*/

                /*UltimateJoystick.GetHorizontalAxis:static start.*/
                /**
                 * Returns a float value between -1 and 1 representing the horizontal value of the Ultimate Joystick.
                 *
                 * @static
                 * @public
                 * @this UltimateJoystick
                 * @memberof UltimateJoystick
                 * @param   {string}    joystickName    The name of the desired Ultimate Joystick.
                 * @return  {number}
                 */
                GetHorizontalAxis: function (joystickName) {
if ( TRACE ) { TRACE( "UltimateJoystick#GetHorizontalAxis", this ); }

                    if (!UltimateJoystick.JoystickConfirmed(joystickName)) {
                        return 0.0;
                    }

                    return UltimateJoystick.UltimateJoysticks.getItem(joystickName).GetHorizontalAxis();
                },
                /*UltimateJoystick.GetHorizontalAxis:static end.*/

                /*UltimateJoystick.GetVerticalAxis:static start.*/
                /**
                 * Returns a float value between -1 and 1 representing the vertical value of the Ultimate Joystick.
                 *
                 * @static
                 * @public
                 * @this UltimateJoystick
                 * @memberof UltimateJoystick
                 * @param   {string}    joystickName    The name of the desired Ultimate Joystick.
                 * @return  {number}
                 */
                GetVerticalAxis: function (joystickName) {
if ( TRACE ) { TRACE( "UltimateJoystick#GetVerticalAxis", this ); }

                    if (!UltimateJoystick.JoystickConfirmed(joystickName)) {
                        return 0.0;
                    }

                    return UltimateJoystick.UltimateJoysticks.getItem(joystickName).GetVerticalAxis();
                },
                /*UltimateJoystick.GetVerticalAxis:static end.*/

                /*UltimateJoystick.GetHorizontalAxisRaw:static start.*/
                /**
                 * Returns a value of -1, 0 or 1 representing the raw horizontal value of the Ultimate Joystick.
                 *
                 * @static
                 * @public
                 * @this UltimateJoystick
                 * @memberof UltimateJoystick
                 * @param   {string}    joystickName    The name of the desired Ultimate Joystick.
                 * @return  {number}
                 */
                GetHorizontalAxisRaw: function (joystickName) {
if ( TRACE ) { TRACE( "UltimateJoystick#GetHorizontalAxisRaw", this ); }

                    if (!UltimateJoystick.JoystickConfirmed(joystickName)) {
                        return 0.0;
                    }

                    return UltimateJoystick.UltimateJoysticks.getItem(joystickName).GetHorizontalAxisRaw();
                },
                /*UltimateJoystick.GetHorizontalAxisRaw:static end.*/

                /*UltimateJoystick.GetVerticalAxisRaw:static start.*/
                /**
                 * Returns a value of -1, 0 or 1 representing the raw vertical value of the Ultimate Joystick.
                 *
                 * @static
                 * @public
                 * @this UltimateJoystick
                 * @memberof UltimateJoystick
                 * @param   {string}    joystickName    The name of the desired Ultimate Joystick.
                 * @return  {number}
                 */
                GetVerticalAxisRaw: function (joystickName) {
if ( TRACE ) { TRACE( "UltimateJoystick#GetVerticalAxisRaw", this ); }

                    if (!UltimateJoystick.JoystickConfirmed(joystickName)) {
                        return 0.0;
                    }

                    return UltimateJoystick.UltimateJoysticks.getItem(joystickName).GetVerticalAxisRaw();
                },
                /*UltimateJoystick.GetVerticalAxisRaw:static end.*/

                /*UltimateJoystick.GetDistance:static start.*/
                /**
                 * Returns a float value between 0 and 1 representing the distance of the joystick from the base.
                 *
                 * @static
                 * @public
                 * @this UltimateJoystick
                 * @memberof UltimateJoystick
                 * @param   {string}    joystickName    The name of the desired Ultimate Joystick.
                 * @return  {number}
                 */
                GetDistance: function (joystickName) {
if ( TRACE ) { TRACE( "UltimateJoystick#GetDistance", this ); }

                    if (!UltimateJoystick.JoystickConfirmed(joystickName)) {
                        return 0.0;
                    }

                    return UltimateJoystick.UltimateJoysticks.getItem(joystickName).GetDistance();
                },
                /*UltimateJoystick.GetDistance:static end.*/

                /*UltimateJoystick.GetJoystickState:static start.*/
                /**
                 * Returns the current interaction state of the Ultimate Joystick.
                 *
                 * @static
                 * @public
                 * @this UltimateJoystick
                 * @memberof UltimateJoystick
                 * @param   {string}     joystickName    The name of the desired Ultimate Joystick.
                 * @return  {boolean}
                 */
                GetJoystickState: function (joystickName) {
if ( TRACE ) { TRACE( "UltimateJoystick#GetJoystickState", this ); }

                    if (!UltimateJoystick.JoystickConfirmed(joystickName)) {
                        return false;
                    }

                    return UltimateJoystick.UltimateJoysticks.getItem(joystickName).joystickState;
                },
                /*UltimateJoystick.GetJoystickState:static end.*/

                /*UltimateJoystick.GetTapCount:static start.*/
                /**
                 * Returns the current state of the tap count according to the options set.
                 *
                 * @static
                 * @public
                 * @this UltimateJoystick
                 * @memberof UltimateJoystick
                 * @param   {string}     joystickName    The name of the desired Ultimate Joystick.
                 * @return  {boolean}
                 */
                GetTapCount: function (joystickName) {
if ( TRACE ) { TRACE( "UltimateJoystick#GetTapCount", this ); }

                    if (!UltimateJoystick.JoystickConfirmed(joystickName)) {
                        return false;
                    }

                    return UltimateJoystick.UltimateJoysticks.getItem(joystickName).GetTapCount();
                },
                /*UltimateJoystick.GetTapCount:static end.*/

                /*UltimateJoystick.DisableJoystick:static start.*/
                /**
                 * Disables the targeted Ultimate Joystick.
                 *
                 * @static
                 * @public
                 * @this UltimateJoystick
                 * @memberof UltimateJoystick
                 * @param   {string}    joystickName    The name of the desired Ultimate Joystick.
                 * @return  {void}
                 */
                DisableJoystick: function (joystickName) {
if ( TRACE ) { TRACE( "UltimateJoystick#DisableJoystick", this ); }

                    if (!UltimateJoystick.JoystickConfirmed(joystickName)) {
                        return;
                    }

                    UltimateJoystick.UltimateJoysticks.getItem(joystickName).DisableJoystick();
                },
                /*UltimateJoystick.DisableJoystick:static end.*/

                /*UltimateJoystick.EnableJoystick:static start.*/
                /**
                 * Enables the targeted Ultimate Joystick.
                 *
                 * @static
                 * @public
                 * @this UltimateJoystick
                 * @memberof UltimateJoystick
                 * @param   {string}    joystickName    The name of the desired Ultimate Joystick.
                 * @return  {void}
                 */
                EnableJoystick: function (joystickName) {
if ( TRACE ) { TRACE( "UltimateJoystick#EnableJoystick", this ); }

                    if (!UltimateJoystick.JoystickConfirmed(joystickName)) {
                        return;
                    }

                    UltimateJoystick.UltimateJoysticks.getItem(joystickName).EnableJoystick();
                },
                /*UltimateJoystick.EnableJoystick:static end.*/


            }
        },
        fields: {
            joystick: null,
            joystickSizeFolder: null,
            joystickBase: null,
            baseTrans: null,
            textureCenter: null,
            defaultPos: null,
            joystickCenter: null,
            highlightBase: null,
            highlightJoystick: null,
            tensionAccentUp: null,
            tensionAccentDown: null,
            tensionAccentLeft: null,
            tensionAccentRight: null,
            scalingAxis: 0,
            anchor: 0,
            joystickTouchSize: 0,
            joystickSize: 0,
            radiusModifier: 0,
            radius: 0,
            dynamicPositioning: false,
            customTouchSize_X: 0,
            customTouchSize_Y: 0,
            customTouchSizePos_X: 0,
            customTouchSizePos_Y: 0,
            customSpacing_X: 0,
            customSpacing_Y: 0,
            gravity: 0,
            gravityActive: false,
            extendRadius: false,
            axis: 0,
            boundary: 0,
            tapCountOption: 0,
            tapCountDuration: 0,
            targetTapCount: 0,
            currentTapTime: 0,
            tapCount: 0,
            deadZone: 0,
            disableVisuals: false,
            useFade: false,
            joystickGroup: null,
            fadeUntouched: 0,
            fadeTouched: 0,
            fadeInDuration: 0,
            fadeOutDuration: 0,
            fadeInSpeed: 0,
            fadeOutSpeed: 0,
            useAnimation: false,
            joystickAnimator: null,
            animationID: 0,
            showHighlight: false,
            highlightColor: null,
            showTension: false,
            tensionColorNone: null,
            tensionColorFull: null,
            joystickName: null,
            joystickState: false,
            tapCountAchieved: false,
            updateHighlightPosition: false,
            _pointerId: 0,
            /**
             * Returns the current value of the horizontal axis.
             *
             * @instance
             * @public
             * @memberof UltimateJoystick
             * @function HorizontalAxis
             * @type number
             */
            HorizontalAxis: 0,
            /**
             * Returns the current value of the vertical axis.
             *
             * @instance
             * @public
             * @memberof UltimateJoystick
             * @function VerticalAxis
             * @type number
             */
            VerticalAxis: 0
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#init", this ); }

                this.textureCenter = new UnityEngine.Vector2();
                this.defaultPos = new UnityEngine.Vector2();
                this.joystickCenter = new UnityEngine.Vector3();
                this.highlightColor = new UnityEngine.Color();
                this.tensionColorNone = new UnityEngine.Color();
                this.tensionColorFull = new UnityEngine.Color();
                this.textureCenter = pc.Vec2.ZERO.clone();
                this.defaultPos = pc.Vec2.ZERO.clone();
                this.joystickCenter = pc.Vec3.ZERO.clone();
                this.scalingAxis = UltimateJoystick.ScalingAxis.Height;
                this.anchor = UltimateJoystick.Anchor.Left;
                this.joystickTouchSize = UltimateJoystick.JoystickTouchSize.Default;
                this.joystickSize = 1.75;
                this.radiusModifier = 4.5;
                this.radius = 1.0;
                this.dynamicPositioning = false;
                this.customTouchSize_X = 50.0;
                this.customTouchSize_Y = 75.0;
                this.customTouchSizePos_X = 0.0;
                this.customTouchSizePos_Y = 0.0;
                this.customSpacing_X = 5.0;
                this.customSpacing_Y = 20.0;
                this.gravity = 60.0;
                this.gravityActive = false;
                this.extendRadius = false;
                this.axis = UltimateJoystick.Axis.Both;
                this.boundary = UltimateJoystick.Boundary.Circular;
                this.tapCountOption = UltimateJoystick.TapCountOption.NoCount;
                this.tapCountDuration = 0.5;
                this.targetTapCount = 2;
                this.currentTapTime = 0.0;
                this.tapCount = 0;
                this.deadZone = 0.0;
                this.disableVisuals = false;
                this.useFade = false;
                this.fadeUntouched = 1.0;
                this.fadeTouched = 0.5;
                this.fadeInDuration = 1.0;
                this.fadeOutDuration = 1.0;
                this.fadeInSpeed = 1.0;
                this.fadeOutSpeed = 1.0;
                this.useAnimation = false;
                this.animationID = 0;
                this.showHighlight = false;
                this.highlightColor = new pc.Color( 1, 1, 1, 1 );
                this.showTension = false;
                this.tensionColorNone = new pc.Color( 1, 1, 1, 1 );
                this.tensionColorFull = new pc.Color( 1, 1, 1, 1 );
                this.joystickState = false;
                this.tapCountAchieved = false;
                this.updateHighlightPosition = false;
                this._pointerId = -10;
            }
        },
        methods: {
            /*UltimateJoystick.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#Awake", this ); }

                // If the game is not being run and the joystick name has been assigned, then register the joystick.
                if (UnityEngine.Application.isPlaying === true && !Bridge.referenceEquals(this.joystickName, "")) {
                    if (UltimateJoystick.UltimateJoysticks.containsKey(this.joystickName)) {
                        UltimateJoystick.UltimateJoysticks.remove(this.joystickName);
                    }

                    UltimateJoystick.UltimateJoysticks.add(this.joystickName, this.GetComponent(UltimateJoystick));
                }
            },
            /*UltimateJoystick.Awake end.*/

            /*UltimateJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#Start", this ); }

                // If the game is not running then return.
                if (UnityEngine.Application.isPlaying === false) {
                    return;
                }

                // Update the size and placement of the joystick.
                this.UpdateSizeAndPlacement();

                // Check all options to see if the joystick highlight image should be moved with use input.
                this.CheckJoystickHighlightForUse();

                // Set the highlight is the user is wanting to show highlight.
                if (this.showHighlight === true) {
                    this.UpdateHighlightColor(this.highlightColor.$clone());
                }

                // Reset the tension accents if the user is wanting to show tension.
                if (this.showTension === true) {
                    this.TensionAccentReset();
                }

                // If the user is wanting to use fade...
                if (this.useFade === true) {
                    // Configure the fade speeds.
                    this.fadeInSpeed = 1.0 / this.fadeInDuration;
                    this.fadeOutSpeed = 1.0 / this.fadeOutDuration;
                }

                // Get the hash ID of the targeted animation if the user is wanting to show animation.
                if (this.useAnimation === true) {
                    // If the animator is null, then try to assign it.
                    if (UnityEngine.Component.op_Equality(this.joystickAnimator, null)) {
                        this.joystickAnimator = this.GetComponent(UnityEngine.Animator);
                    }

                    // If it is still null, then set useAnimation to false to avoid errors.
                    if (UnityEngine.Component.op_Equality(this.joystickAnimator, null)) {
                        UnityEngine.Debug.LogError$2("Ultimate Joystick - This object does not have an Animator component attached to it. Please make sure to attach an Animator to this object before using the Use Animation option.\n\nObject Name: " + (this.gameObject.name || "") + "\n");
                        this.useAnimation = false;
                    } else {
                        this.animationID = UnityEngine.Animator.StringToHash("Touch");
                    }
                }

                // If there is no Updater script attached, then attach an Updater script.
                if (!UnityEngine.Object.op_Implicit(this.GetParentCanvas().GetComponent(UltimateJoystickScreenSizeUpdater))) {
                    this.GetParentCanvas().gameObject.AddComponent$1(UltimateJoystickScreenSizeUpdater);
                }
            },
            /*UltimateJoystick.Start end.*/

            /*UltimateJoystick.OnPointerDown start.*/
            OnPointerDown: function (touchInfo) {
if ( TRACE ) { TRACE( "UltimateJoystick#OnPointerDown", this ); }

                // If the joystick is already in use, then return.
                if (this.joystickState === true) {
                    return;
                }

                // Set the joystick state since the joystick is being interacted with.
                this.joystickState = true;

                // Assign the pointerId so that the other functions can know if the pointer calling the function is the correct one.
                this._pointerId = touchInfo.pointerId;

                // If the throwable option is selected and isThrowing, then stop the current movement.
                if (this.gravity > 0 && this.gravityActive) {
                    this.StopCoroutine$1("GravityHandler");
                }

                // If dynamicPositioning or disableVisuals are enabled...
                if (this.dynamicPositioning === true || this.disableVisuals === true) {
                    // Then move the joystickSizeFolder to the position of the touch.
                    this.joystickSizeFolder.position = UnityEngine.Vector3.FromVector2(touchInfo.position.$clone().sub( this.textureCenter ));

                    // Set the joystickCenter so that the position can be calculated correctly.
                    this.joystickCenter = UnityEngine.Vector3.FromVector2(touchInfo.position.$clone());
                }

                // If the user wants animation to be shown, do that here.
                if (this.useAnimation === true) {
                    this.joystickAnimator.SetBool(this.animationID, true);
                }

                // If the user wants the joystick to fade, do that here.
                if (this.useFade === true && UnityEngine.MonoBehaviour.op_Inequality(this.joystickGroup, null)) {
                    this.StartCoroutine$2("FadeLogic");
                }

                // If the user is wanting to use any tap count...
                if (this.tapCountOption !== UltimateJoystick.TapCountOption.NoCount) {
                    // If the user is accumulating taps...
                    if (this.tapCountOption === UltimateJoystick.TapCountOption.Accumulate) {
                        // If the TapCountdown is not counting down...
                        if (this.currentTapTime <= 0) {
                            // Set tapCount to 1 since this is the initial touch and start the TapCountdown.
                            this.tapCount = 1;
                            this.StartCoroutine$2("TapCountdown");
                        } else {
                            this.tapCount = (this.tapCount + 1) | 0;
                        }

                        if (this.currentTapTime > 0 && this.tapCount >= this.targetTapCount) {
                            // Set the current time to 0 to interrupt the coroutine.
                            this.currentTapTime = 0;

                            // Start the delay of the reference for one frame.
                            this.StartCoroutine$2("TapCountDelay");
                        }
                    } else {
                        this.StartCoroutine$2("TapCountdown");
                    }
                }

                // Call UpdateJoystick with the info from the current PointerEventData.
                this.UpdateJoystick(touchInfo);
            },
            /*UltimateJoystick.OnPointerDown end.*/

            /*UltimateJoystick.OnDrag start.*/
            OnDrag: function (touchInfo) {
if ( TRACE ) { TRACE( "UltimateJoystick#OnDrag", this ); }

                // If the pointer event that is calling this function is not the same as the one that initiated the joystick, then return.
                if (touchInfo.pointerId !== this._pointerId) {
                    return;
                }

                // Then call UpdateJoystick with the info from the current PointerEventData.
                this.UpdateJoystick(touchInfo);
            },
            /*UltimateJoystick.OnDrag end.*/

            /*UltimateJoystick.OnPointerUp start.*/
            OnPointerUp: function (touchInfo) {
if ( TRACE ) { TRACE( "UltimateJoystick#OnPointerUp", this ); }

                // If the pointer event that is calling this function is not the same as the one that initiated the joystick, then return.
                if (touchInfo.pointerId !== this._pointerId) {
                    return;
                }

                // Since the touch has lifted, set the state to false and reset the local pointerId.
                this.joystickState = false;
                this._pointerId = -10;

                // If dynamicPositioning, disableVisuals, or draggable are enabled...
                if (this.dynamicPositioning === true || this.disableVisuals === true || this.extendRadius === true) {
                    // The joystickSizeFolder needs to be reset back to the default position.
                    this.joystickSizeFolder.position = UnityEngine.Vector3.FromVector2(this.defaultPos.$clone());

                    // Reset the joystickCenter since the touch has been released.
                    this.joystickCenter = this.joystickBase.position.$clone();
                }

                // If the user has the gravity set to something more than 0 but less than 60, begin GravityHandler().
                if (this.gravity > 0 && this.gravity < 60) {
                    this.StartCoroutine$2("GravityHandler");
                } else {
                    // Reset the joystick's position back to center.
                    this.joystick.position = this.joystickCenter.$clone();

                    // If the user has showHighlight enabled, and the highlightJoystick variable is assigned, reset it too.
                    if (this.updateHighlightPosition === true) {
                        this.highlightJoystick.transform.position = this.joystickCenter.$clone();
                    }
                }

                // If the user has showTension enabled, then reset the tension if throwable is disabled.
                if (this.showTension === true && (this.gravity <= 0 || this.gravity >= 60)) {
                    this.TensionAccentReset();
                }

                // If the user has useAnimation enabled, set that here.
                if (this.useAnimation === true) {
                    this.joystickAnimator.SetBool(this.animationID, false);
                }

                // If the user is wanting to use the TouchAndRelease tap count...
                if (this.tapCountOption === UltimateJoystick.TapCountOption.TouchRelease) {
                    // If the tapTime is still above zero, then start the delay function.
                    if (this.currentTapTime > 0) {
                        this.StartCoroutine$2("TapCountDelay");
                    }

                    // Reset the current tap time to zero.
                    this.currentTapTime = 0;
                }

                this.UpdatePositionValues();
            },
            /*UltimateJoystick.OnPointerUp end.*/

            /*UltimateJoystick.UpdateJoystick start.*/
            UpdateJoystick: function (touchInfo) {
if ( TRACE ) { TRACE( "UltimateJoystick#UpdateJoystick", this ); }

                // Create a new Vector2 to equal the vector from the current touch to the center of joystick.
                var tempVector = touchInfo.position.$clone().sub( UnityEngine.Vector2.FromVector3(this.joystickCenter) );

                // If the user wants only one axis, then zero out the opposite value.
                if (this.axis === UltimateJoystick.Axis.X) {
                    tempVector.y = 0;
                } else {
                    if (this.axis === UltimateJoystick.Axis.Y) {
                        tempVector.x = 0;
                    }
                }

                // If the user wants a circular boundary for the joystick, then clamp the magnitude by the radius.
                if (this.boundary === UltimateJoystick.Boundary.Circular) {
                    tempVector = pc.Vec2.lengthClamp( tempVector, this.radius );
                } else {
                    if (this.boundary === UltimateJoystick.Boundary.Square) {
                        tempVector.x = Math.max(-this.radius, Math.min(tempVector.x, this.radius));
                        tempVector.y = Math.max(-this.radius, Math.min(tempVector.y, this.radius));
                    }
                }

                // Apply the tempVector to the joystick's position.
                this.joystick.transform.position = UnityEngine.Vector3.FromVector2(UnityEngine.Vector2.FromVector3(this.joystickCenter).add( tempVector ));

                // If the user is showing highlight and the highlightJoystick is assigned, then move the highlight to match the joystick's position.
                if (this.updateHighlightPosition === true) {
                    this.highlightJoystick.transform.position = this.joystick.transform.position.$clone();
                }

                // If the user has showTension enabled, then display the Tension.
                if (this.showTension === true) {
                    this.TensionAccentDisplay();
                }

                // If the user wants to drag the joystick along with the touch...
                if (this.extendRadius === true) {
                    // Store the position of the current touch.
                    var currentTouchPosition = UnityEngine.Vector3.FromVector2(touchInfo.position.$clone());

                    // If the user is using any axis option, then align the current touch position.
                    if (this.axis !== UltimateJoystick.Axis.Both) {
                        if (this.axis === UltimateJoystick.Axis.X) {
                            currentTouchPosition.y = this.joystickCenter.y;
                        } else {
                            currentTouchPosition.x = this.joystickCenter.x;
                        }
                    }
                    // Then find the distance that the touch is from the center of the joystick.
                    var touchDistance = pc.Vec3.distance( this.joystickCenter, currentTouchPosition );

                    // If the touchDistance is greater than the set radius...
                    if (touchDistance >= this.radius) {
                        // Figure out the current position of the joystick.
                        var joystickPosition = UnityEngine.Vector2.FromVector3((this.joystick.position.$clone().sub( this.joystickCenter )).scale( 1.0 / ( this.radius ) ));

                        // Move the joystickSizeFolder in the direction that the joystick is, multiplied by the difference in distance of the max radius.
                        this.joystickSizeFolder.position = this.joystickSizeFolder.position.$clone().add( new pc.Vec3( joystickPosition.x, joystickPosition.y, 0 ).clone().scale( (touchDistance - this.radius) ) );

                        // Reconfigure the joystickCenter since the joystick has now moved it position.
                        this.joystickCenter = this.joystickBase.position.$clone();
                    }
                }

                this.UpdatePositionValues();
            },
            /*UltimateJoystick.UpdateJoystick end.*/

            /*UltimateJoystick.ConfigureImagePosition start.*/
            ConfigureImagePosition: function (textureSize, customSpacing) {
if ( TRACE ) { TRACE( "UltimateJoystick#ConfigureImagePosition", this ); }

                // First, fix the customSpacing to be a value between 0.0f and 1.0f.
                var fixedCustomSpacing = customSpacing.$clone().scale( 1.0 / ( 100 ) );

                // Then configure position spacers according to the screen's dimensions, the fixed spacing and texture size.
                var positionSpacerX = UnityEngine.Screen.width * fixedCustomSpacing.x - (textureSize.x * fixedCustomSpacing.x);
                var positionSpacerY = UnityEngine.Screen.height * fixedCustomSpacing.y - (textureSize.y * fixedCustomSpacing.y);

                // Create a temporary Vector2 to modify and return.
                var tempVector = new UnityEngine.Vector2();

                // If it's left, simply apply the positionxSpacerX, else calculate out from the right side and apply the positionSpaceX.
                tempVector.x = this.anchor === UltimateJoystick.Anchor.Left ? positionSpacerX : (UnityEngine.Screen.width - textureSize.x) - positionSpacerX;

                // Apply the positionSpacerY variable.
                tempVector.y = positionSpacerY;

                // Return the updated temporary Vector.
                return tempVector.$clone();
            },
            /*UltimateJoystick.ConfigureImagePosition end.*/

            /*UltimateJoystick.TensionAccentDisplay start.*/
            TensionAccentDisplay: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#TensionAccentDisplay", this ); }

                // Create a temporary Vector2 for the joystick current position.
                var tension = UnityEngine.Vector2.FromVector3((this.joystick.position.$clone().sub( this.joystickCenter )).scale( 1.0 / ( this.radius ) ));

                // If the joystick is to the right...
                if (tension.x > 0) {
                    // Then lerp the color according to tension's X position.
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.tensionAccentRight, null)) {
                        this.tensionAccentRight.color = pc.Color.lerp( this.tensionColorNone, this.tensionColorFull, tension.x );
                    }

                    // If the opposite tension is not tensionColorNone, the make it so.
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.tensionAccentLeft, null) && !pc.Color.equals( this.tensionAccentLeft.color, this.tensionColorNone )) {
                        this.tensionAccentLeft.color = this.tensionColorNone.$clone();
                    }
                } else {
                    // Mathf.Abs gives a positive number to lerp with.
                    tension.x = Math.abs(tension.x);

                    // Repeat above steps...
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.tensionAccentLeft, null)) {
                        this.tensionAccentLeft.color = pc.Color.lerp( this.tensionColorNone, this.tensionColorFull, tension.x );
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.tensionAccentRight, null) && !pc.Color.equals( this.tensionAccentRight.color, this.tensionColorNone )) {
                        this.tensionAccentRight.color = this.tensionColorNone.$clone();
                    }
                }

                // If the joystick is up...
                if (tension.y > 0) {
                    // Then lerp the color according to tension's Y position.
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.tensionAccentUp, null)) {
                        this.tensionAccentUp.color = pc.Color.lerp( this.tensionColorNone, this.tensionColorFull, tension.y );
                    }

                    // If the opposite tension is not tensionColorNone, the make it so.
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.tensionAccentDown, null) && !pc.Color.equals( this.tensionAccentDown.color, this.tensionColorNone )) {
                        this.tensionAccentDown.color = this.tensionColorNone.$clone();
                    }
                } else {
                    // Mathf.Abs gives a positive number to lerp with.
                    tension.y = Math.abs(tension.y);

                    if (UnityEngine.MonoBehaviour.op_Inequality(this.tensionAccentDown, null)) {
                        this.tensionAccentDown.color = pc.Color.lerp( this.tensionColorNone, this.tensionColorFull, tension.y );
                    }

                    // Repeat above steps...
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.tensionAccentUp, null) && !pc.Color.equals( this.tensionAccentUp.color, this.tensionColorNone )) {
                        this.tensionAccentUp.color = this.tensionColorNone.$clone();
                    }
                }
            },
            /*UltimateJoystick.TensionAccentDisplay end.*/

            /*UltimateJoystick.TensionAccentReset start.*/
            TensionAccentReset: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#TensionAccentReset", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tensionAccentUp, null)) {
                    this.tensionAccentUp.color = this.tensionColorNone.$clone();
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tensionAccentDown, null)) {
                    this.tensionAccentDown.color = this.tensionColorNone.$clone();
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tensionAccentLeft, null)) {
                    this.tensionAccentLeft.color = this.tensionColorNone.$clone();
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tensionAccentRight, null)) {
                    this.tensionAccentRight.color = this.tensionColorNone.$clone();
                }
            },
            /*UltimateJoystick.TensionAccentReset end.*/

            /*UltimateJoystick.GravityHandler start.*/
            GravityHandler: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#GravityHandler", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    speed,
                    startJoyPos,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.gravityActive = true;
                                        speed = 1.0 / (this.GetDistance() / this.gravity);
                                        // Store the position of where the joystick is currently.
                                        startJoyPos = this.joystick.position.$clone();
                                        t = 0.0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( t < 1.0 && this.gravityActive ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 2: {
                                    // Lerp the joystick's position from where this coroutine started to the center.
                                        this.joystick.position = new pc.Vec3().lerp( startJoyPos, this.joystickCenter, t );

                                        // If the user a direction display option enabled, then display the direction as the joystick moves.
                                        if (this.showTension) {
                                            this.TensionAccentDisplay();
                                        }

                                        this.UpdatePositionValues();

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    t += UnityEngine.Time.deltaTime * speed;
                                    $step = 1;
                                    continue;
                                }
                                case 5: {
                                    // Finalize the joystick's position.
                                        if (this.gravityActive) {
                                            this.joystick.position = this.joystickCenter.$clone();

                                            // Here at the end, reset the direction display.
                                            if (this.showTension) {
                                                this.TensionAccentReset();
                                            }

                                            this.UpdatePositionValues();
                                        }

                                        this.gravityActive = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UltimateJoystick.GravityHandler end.*/

            /*UltimateJoystick.GetParentCanvas start.*/
            GetParentCanvas: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#GetParentCanvas", this ); }

                var parent = this.transform.parent;
                while (UnityEngine.Component.op_Inequality(parent, null)) {
                    if (UnityEngine.Object.op_Implicit(parent.transform.GetComponent(UnityEngine.Canvas))) {
                        return parent.transform.GetComponent(UnityEngine.Canvas);
                    }

                    parent = parent.transform.parent;
                }
                return null;
            },
            /*UltimateJoystick.GetParentCanvas end.*/

            /*UltimateJoystick.GetCanvasGroup start.*/
            GetCanvasGroup: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#GetCanvasGroup", this ); }

                if (UnityEngine.Object.op_Implicit(this.GetComponent(UnityEngine.CanvasGroup))) {
                    return this.GetComponent(UnityEngine.CanvasGroup);
                } else {
                    this.gameObject.AddComponent(UnityEngine.CanvasGroup);
                    return this.GetComponent(UnityEngine.CanvasGroup);
                }
            },
            /*UltimateJoystick.GetCanvasGroup end.*/

            /*UltimateJoystick.FadeLogic start.*/
            FadeLogic: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#FadeLogic", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    currentFade,
                    fadeIn,
                    fadeOut,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // Store the current value for the alpha of the joystickGroup.
                                        currentFade = this.joystickGroup.alpha;

                                        // If the fadeInSpeed is NaN, then just set the alpha to the desired fade.
                                        if ((Math.abs(this.fadeInSpeed) === Number.POSITIVE_INFINITY)) {
                                            $step = 1;
                                            continue;
                                        } else  {
                                            $step = 2;
                                            continue;
                                        }
                                }
                                case 1: {
                                    this.joystickGroup.alpha = this.fadeTouched;
                                    $step = 8;
                                    continue;
                                }
                                case 2: {
                                    fadeIn = 0.0;
                                        $step = 3;
                                        continue;
                                }
                                case 3: {
                                    if ( fadeIn < 1.0 && this.joystickState === true ) {
                                            $step = 4;
                                            continue;
                                        }
                                    $step = 7;
                                    continue;
                                }
                                case 4: {
                                    this.joystickGroup.alpha = pc.math.lerp(currentFade, this.fadeTouched, fadeIn);
                                        $enumerator.current = null;
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    fadeIn += UnityEngine.Time.deltaTime * this.fadeInSpeed;
                                    $step = 3;
                                    continue;
                                }
                                case 7: {
                                    if (this.joystickState === true) {
                                            this.joystickGroup.alpha = this.fadeTouched;
                                        }
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    // while loop for while joystickState is true
                                    $step = 9;
                                    continue;
                                }
                                case 9: {
                                    if ( this.joystickState === true ) {
                                            $step = 10;
                                            continue;
                                        } 
                                        $step = 12;
                                        continue;
                                }
                                case 10: {
                                    $enumerator.current = null;
                                        $step = 11;
                                        return true;
                                }
                                case 11: {
                                    
                                        $step = 9;
                                        continue;
                                }
                                case 12: {
                                    // Set the current fade value.
                                        currentFade = this.joystickGroup.alpha;

                                        // If the fadeOutSpeed value is NaN, then apply the desired alpha.
                                        if ((Math.abs(this.fadeOutSpeed) === Number.POSITIVE_INFINITY)) {
                                            $step = 13;
                                            continue;
                                        } else  {
                                            $step = 14;
                                            continue;
                                        }
                                }
                                case 13: {
                                    this.joystickGroup.alpha = this.fadeUntouched;
                                    $step = 20;
                                    continue;
                                }
                                case 14: {
                                    fadeOut = 0.0;
                                        $step = 15;
                                        continue;
                                }
                                case 15: {
                                    if ( fadeOut < 1.0 && this.joystickState === false ) {
                                            $step = 16;
                                            continue;
                                        }
                                    $step = 19;
                                    continue;
                                }
                                case 16: {
                                    this.joystickGroup.alpha = pc.math.lerp(currentFade, this.fadeUntouched, fadeOut);
                                        $enumerator.current = null;
                                        $step = 17;
                                        return true;
                                }
                                case 17: {
                                    $step = 18;
                                    continue;
                                }
                                case 18: {
                                    fadeOut += UnityEngine.Time.deltaTime * this.fadeOutSpeed;
                                    $step = 15;
                                    continue;
                                }
                                case 19: {
                                    if (this.joystickState === false) {
                                            this.joystickGroup.alpha = this.fadeUntouched;
                                        }
                                    $step = 20;
                                    continue;
                                }
                                case 20: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UltimateJoystick.FadeLogic end.*/

            /*UltimateJoystick.TapCountdown start.*/
            /**
             * This function counts down the tap count duration. The current tap time that is being modified is check within the input functions.
             *
             * @instance
             * @private
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @return  {System.Collections.IEnumerator}
             */
            TapCountdown: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#TapCountdown", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // Set the current tap time to the max.
                                        this.currentTapTime = this.tapCountDuration;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( this.currentTapTime > 0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    // Reduce the current time.
                                        this.currentTapTime -= UnityEngine.Time.deltaTime;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UltimateJoystick.TapCountdown end.*/

            /*UltimateJoystick.TapCountDelay start.*/
            /**
             * This function delays for one frame so that it can be correctly referenced as soon as it is achieved.
             *
             * @instance
             * @private
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @return  {System.Collections.IEnumerator}
             */
            TapCountDelay: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#TapCountDelay", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.tapCountAchieved = true;
                                        $enumerator.current = new UnityEngine.WaitForEndOfFrame();
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.tapCountAchieved = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UltimateJoystick.TapCountDelay end.*/

            /*UltimateJoystick.CheckJoystickHighlightForUse start.*/
            /**
             * This function check each option and component in relation to the joystick highlight. It updates the updateHighlightPosition bool according to set options.
             *
             * @instance
             * @private
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @return  {void}
             */
            CheckJoystickHighlightForUse: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#CheckJoystickHighlightForUse", this ); }

                if (this.showHighlight === false) {
                    this.updateHighlightPosition = false;
                } else {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.highlightJoystick, null)) {
                        this.updateHighlightPosition = false;
                    } else {
                        if (UnityEngine.MonoBehaviour.op_Equality(this.joystick.GetComponent(UnityEngine.UI.Image), this.highlightJoystick)) {
                            this.updateHighlightPosition = false;
                        } else {
                            this.updateHighlightPosition = true;
                        }
                    }
                }
            },
            /*UltimateJoystick.CheckJoystickHighlightForUse end.*/

            /*UltimateJoystick.UpdatePositionValues start.*/
            UpdatePositionValues: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#UpdatePositionValues", this ); }

                var rawJoystickPosition = UnityEngine.Vector2.FromVector3((this.joystick.position.$clone().sub( this.joystickCenter )).scale( 1.0 / ( this.radius ) ));

                if (this.GetDistance() <= this.deadZone) {
                    rawJoystickPosition.x = 0.0;
                    rawJoystickPosition.y = 0.0;
                }

                this.HorizontalAxis = rawJoystickPosition.x;
                this.VerticalAxis = rawJoystickPosition.y;
            },
            /*UltimateJoystick.UpdatePositionValues end.*/

            /*UltimateJoystick.ResetJoystick start.*/
            ResetJoystick: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#ResetJoystick", this ); }

                this.gravityActive = false;
                this.StopCoroutine$1("GravityHandler");

                // Since the touch has lifted, set the state to false and reset the local pointerId.
                this.joystickState = false;
                this._pointerId = -10;

                // If dynamicPositioning, disableVisuals, or draggable are enabled...
                if (this.dynamicPositioning === true || this.disableVisuals === true || this.extendRadius === true) {
                    // The joystickSizeFolder needs to be reset back to the default position.
                    this.joystickSizeFolder.position = UnityEngine.Vector3.FromVector2(this.defaultPos.$clone());

                    // Reset the joystickCenter since the touch has been released.
                    this.joystickCenter = this.joystickBase.position.$clone();
                }
                // Reset the joystick's position back to center.
                this.joystick.position = this.joystickCenter.$clone();

                // If the user has showHighlight enabled, and the highlightJoystick variable is assigned, reset it too.
                if (this.updateHighlightPosition === true) {
                    this.highlightJoystick.transform.position = this.joystickCenter.$clone();
                }

                // If the user has showTension enabled, then reset the tension if throwable is disabled.
                if (this.showTension === true) {
                    this.TensionAccentReset();
                }

                // If the user has useAnimation enabled, set that here.
                if (this.useAnimation === true) {
                    this.joystickAnimator.SetBool(this.animationID, false);
                }
            },
            /*UltimateJoystick.ResetJoystick end.*/

            /*UltimateJoystick.UpdateSizeAndPlacement start.*/
            /**
             * Updates the Size and Placement of the Ultimate Joystick according to the user's options.
             *
             * @instance
             * @private
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @return  {void}
             */
            UpdateSizeAndPlacement: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#UpdateSizeAndPlacement", this ); }

                // If any of the needed components are left unassigned, then inform the user and return.
                if (UnityEngine.Component.op_Equality(this.joystickSizeFolder, null) || UnityEngine.Component.op_Equality(this.joystickBase, null) || UnityEngine.Component.op_Equality(this.joystick, null)) {
                    if (UnityEngine.Application.isPlaying) {
                        UnityEngine.Debug.LogError$2("Ultimate Joystick - There are some needed components that are not currently assigned. Please check the Assigned Variables section and be sure to assign all of the components.");
                    }
                    return;
                }

                // Set the current reference size for scaling.
                var referenceSize = this.scalingAxis === UltimateJoystick.ScalingAxis.Height ? UnityEngine.Screen.height : UnityEngine.Screen.width;

                // Configure the target size for the joystick graphic.
                var textureSize = referenceSize * (this.joystickSize / 10);

                // If baseTrans is null, store this object's RectTrans so that it can be positioned.
                if (UnityEngine.Component.op_Equality(this.baseTrans, null)) {
                    this.baseTrans = this.GetComponent(UnityEngine.RectTransform);
                }

                // Get a position for the joystick based on the position variables.
                var imagePosition = this.ConfigureImagePosition(new pc.Vec2( textureSize, textureSize ), new pc.Vec2( this.customSpacing_X, this.customSpacing_Y ));

                // If the user wants a custom touch size...
                if (this.joystickTouchSize === UltimateJoystick.JoystickTouchSize.Custom) {
                    // Fix the custom size variables.
                    var fixedFBPX = this.customTouchSize_X / 100;
                    var fixedFBPY = this.customTouchSize_Y / 100;

                    // Depending on the joystickTouchSize options, configure the size.
                    this.baseTrans.sizeDelta = new pc.Vec2( UnityEngine.Screen.width * fixedFBPX, UnityEngine.Screen.height * fixedFBPY );

                    // Send the size and custom positioning to the ConfigureImagePosition function to get the exact position.
                    var imagePos = this.ConfigureImagePosition(this.baseTrans.sizeDelta.$clone(), new pc.Vec2( this.customTouchSizePos_X, this.customTouchSizePos_Y ));

                    // Apply the new position.
                    this.baseTrans.position = UnityEngine.Vector3.FromVector2(imagePos.$clone());
                } else {
                    // Temporary float to store a modifier for the touch area size.
                    var fixedTouchSize = this.joystickTouchSize === UltimateJoystick.JoystickTouchSize.Large ? 2.0 : this.joystickTouchSize === UltimateJoystick.JoystickTouchSize.Medium ? 1.51 : 1.01;

                    // Temporary Vector2 to store the default size of the joystick.
                    var tempVector = new pc.Vec2( textureSize, textureSize );

                    // Apply the joystick size multiplied by the fixedTouchSize.
                    this.baseTrans.sizeDelta = tempVector.$clone().scale( fixedTouchSize );

                    // Apply the imagePosition modified with the difference of the sizeDelta divided by 2, multiplied by the scale of the parent canvas.
                    this.baseTrans.position = UnityEngine.Vector3.FromVector2(imagePosition.$clone().sub( ((this.baseTrans.sizeDelta.$clone().sub( tempVector )).scale( 1.0 / ( 2 ) )) ));
                }

                // If the options dictate that the default position needs to be stored...
                if (this.dynamicPositioning === true || this.disableVisuals === true || this.extendRadius === true) {
                    // Set the texture center so that the joystick can move to the touch position correctly.
                    this.textureCenter = new pc.Vec2( textureSize / 2, textureSize / 2 );

                    // Also need to store the default position so that it can return after the touch has been lifted.
                    this.defaultPos = imagePosition.$clone();
                }

                // Apply the size and position to the joystickSizeFolder.
                this.joystickSizeFolder.sizeDelta = new pc.Vec2( textureSize, textureSize );
                this.joystickSizeFolder.position = UnityEngine.Vector3.FromVector2(imagePosition.$clone());

                // Configure the size of the Ultimate Joystick's radius.
                this.radius = this.joystickSizeFolder.sizeDelta.x * (this.radiusModifier / 10);

                // Store the joystick's center so that JoystickPosition can be configured correctly.
                this.joystickCenter = this.joystickSizeFolder.position.$clone().add( new pc.Vec3( this.joystickSizeFolder.sizeDelta.x / 2, this.joystickSizeFolder.sizeDelta.y / 2, 0 ) );

                // If the user wants to fade, and the joystickGroup is unassigned, find the CanvasGroup.
                if (this.useFade === true && UnityEngine.MonoBehaviour.op_Equality(this.joystickGroup, null)) {
                    this.joystickGroup = this.GetCanvasGroup();
                }
            },
            /*UltimateJoystick.UpdateSizeAndPlacement end.*/

            /*UltimateJoystick.UpdatePositioning start.*/
            /**
             * Resets the joystick and updates the size and placement of the Ultimate Joystick. Useful for screen rotations, changing of screen size, or changing of size and placement options.
             *
             * @instance
             * @public
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @return  {void}
             */
            UpdatePositioning: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#UpdatePositioning", this ); }

                if (UnityEngine.Application.isPlaying) {
                    this.ResetJoystick();
                }

                this.UpdateSizeAndPlacement();
            },
            /*UltimateJoystick.UpdatePositioning end.*/

            /*UltimateJoystick.GetHorizontalAxis start.*/
            /**
             * Returns a float value between -1 and 1 representing the horizontal value of the Ultimate Joystick.
             *
             * @instance
             * @public
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @return  {number}
             */
            GetHorizontalAxis: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#GetHorizontalAxis", this ); }

                return this.HorizontalAxis;
            },
            /*UltimateJoystick.GetHorizontalAxis end.*/

            /*UltimateJoystick.GetVerticalAxis start.*/
            /**
             * Returns a float value between -1 and 1 representing the vertical value of the Ultimate Joystick.
             *
             * @instance
             * @public
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @return  {number}
             */
            GetVerticalAxis: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#GetVerticalAxis", this ); }

                return this.VerticalAxis;
            },
            /*UltimateJoystick.GetVerticalAxis end.*/

            /*UltimateJoystick.GetHorizontalAxisRaw start.*/
            /**
             * Returns a value of -1, 0 or 1 representing the raw horizontal value of the Ultimate Joystick.
             *
             * @instance
             * @public
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @return  {number}
             */
            GetHorizontalAxisRaw: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#GetHorizontalAxisRaw", this ); }

                var temp = this.HorizontalAxis;

                if (Math.abs(temp) <= this.deadZone) {
                    temp = 0.0;
                } else {
                    temp = temp < 0.0 ? -1.0 : 1.0;
                }

                return temp;
            },
            /*UltimateJoystick.GetHorizontalAxisRaw end.*/

            /*UltimateJoystick.GetVerticalAxisRaw start.*/
            /**
             * Returns a value of -1, 0 or 1 representing the raw vertical value of the Ultimate Joystick.
             *
             * @instance
             * @public
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @return  {number}
             */
            GetVerticalAxisRaw: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#GetVerticalAxisRaw", this ); }

                var temp = this.VerticalAxis;
                if (Math.abs(temp) <= this.deadZone) {
                    temp = 0.0;
                } else {
                    temp = temp < 0.0 ? -1.0 : 1.0;
                }

                return temp;
            },
            /*UltimateJoystick.GetVerticalAxisRaw end.*/

            /*UltimateJoystick.GetDistance start.*/
            /**
             * Returns a float value between 0 and 1 representing the distance of the joystick from the base.
             *
             * @instance
             * @public
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @return  {number}
             */
            GetDistance: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#GetDistance", this ); }

                return pc.Vec3.distance( this.joystick.position, this.joystickCenter ) / this.radius;
            },
            /*UltimateJoystick.GetDistance end.*/

            /*UltimateJoystick.UpdateHighlightColor start.*/
            /**
             * Updates the color of the highlights attached to the Ultimate Joystick with the targeted color.
             *
             * @instance
             * @public
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @param   {UnityEngine.Color}    targetColor    New highlight color.
             * @return  {void}
             */
            UpdateHighlightColor: function (targetColor) {
if ( TRACE ) { TRACE( "UltimateJoystick#UpdateHighlightColor", this ); }

                if (this.showHighlight === false) {
                    return;
                }

                this.highlightColor = targetColor.$clone();

                // Check if each variable is assigned so there is not a null reference exception when applying color.
                if (UnityEngine.MonoBehaviour.op_Inequality(this.highlightBase, null)) {
                    this.highlightBase.color = this.highlightColor.$clone();
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(this.highlightJoystick, null)) {
                    this.highlightJoystick.color = this.highlightColor.$clone();
                }
            },
            /*UltimateJoystick.UpdateHighlightColor end.*/

            /*UltimateJoystick.UpdateTensionColors start.*/
            /**
             * Updates the colors of the tension accents attached to the Ultimate Joystick with the targeted colors.
             *
             * @instance
             * @public
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @param   {UnityEngine.Color}    targetTensionNone    New idle tension color.
             * @param   {UnityEngine.Color}    targetTensionFull    New full tension color.
             * @return  {void}
             */
            UpdateTensionColors: function (targetTensionNone, targetTensionFull) {
if ( TRACE ) { TRACE( "UltimateJoystick#UpdateTensionColors", this ); }

                if (this.showTension === false) {
                    return;
                }

                this.tensionColorNone = targetTensionNone.$clone();
                this.tensionColorFull = targetTensionFull.$clone();
            },
            /*UltimateJoystick.UpdateTensionColors end.*/

            /*UltimateJoystick.GetJoystickState start.*/
            /**
             * Returns the current state of the Ultimate Joystick. This function will return true when the joystick is being interacted with, and false when not.
             *
             * @instance
             * @public
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @return  {boolean}
             */
            GetJoystickState: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#GetJoystickState", this ); }

                return this.joystickState;
            },
            /*UltimateJoystick.GetJoystickState end.*/

            /*UltimateJoystick.GetTapCount start.*/
            /**
             * Returns the tap count to the Ultimate Joystick.
             *
             * @instance
             * @public
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @return  {boolean}
             */
            GetTapCount: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#GetTapCount", this ); }

                return this.tapCountAchieved;
            },
            /*UltimateJoystick.GetTapCount end.*/

            /*UltimateJoystick.DisableJoystick start.*/
            /**
             * Disables the Ultimate Joystick.
             *
             * @instance
             * @public
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @return  {void}
             */
            DisableJoystick: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#DisableJoystick", this ); }

                // Set the states to false.
                this.joystickState = false;
                this._pointerId = -10;

                // If the joystick center has been changed, then reset it.
                if (this.dynamicPositioning === true || this.disableVisuals === true || this.extendRadius === true) {
                    this.joystickSizeFolder.position = UnityEngine.Vector3.FromVector2(this.defaultPos.$clone());
                    this.joystickCenter = this.joystickBase.position.$clone();
                }

                // Reset the position of the joystick.
                this.joystick.position = this.joystickCenter.$clone();

                // If the highlight image needs to be moved, then reset it's position to center.
                if (this.updateHighlightPosition === true) {
                    this.highlightJoystick.transform.position = this.joystickCenter.$clone();
                }

                // If the user is displaying tension accents, then reset them here.
                if (this.showTension === true) {
                    this.TensionAccentReset();
                }

                // If the user is using animations, the reset the animator.
                if (this.useAnimation === true) {
                    this.joystickAnimator.SetBool(this.animationID, false);
                }

                // If the user is displaying a fade, then reset to the untouched state.
                if (this.useFade) {
                    this.joystickGroup.alpha = this.fadeUntouched;
                }

                this.HorizontalAxis = 0;
                this.VerticalAxis = 0;

                // Disable the gameObject.
                this.gameObject.SetActive(false);
            },
            /*UltimateJoystick.DisableJoystick end.*/

            /*UltimateJoystick.EnableJoystick start.*/
            /**
             * Enables the Ultimate Joystick.
             *
             * @instance
             * @public
             * @this UltimateJoystick
             * @memberof UltimateJoystick
             * @return  {void}
             */
            EnableJoystick: function () {
if ( TRACE ) { TRACE( "UltimateJoystick#EnableJoystick", this ); }

                // Reset the joystick's position again.
                this.joystick.position = this.joystickCenter.$clone();

                // Enable the gameObject.
                this.gameObject.SetActive(true);
            },
            /*UltimateJoystick.EnableJoystick end.*/


        }
    });
    /*UltimateJoystick end.*/

    /*UltimateJoystick+Anchor start.*/
    Bridge.define("UltimateJoystick.Anchor", {
        $kind: "nested enum",
        statics: {
            fields: {
                Left: 0,
                Right: 1
            }
        }
    });
    /*UltimateJoystick+Anchor end.*/

    /*UltimateJoystick+Axis start.*/
    Bridge.define("UltimateJoystick.Axis", {
        $kind: "nested enum",
        statics: {
            fields: {
                Both: 0,
                X: 1,
                Y: 2
            }
        }
    });
    /*UltimateJoystick+Axis end.*/

    /*UltimateJoystick+Boundary start.*/
    Bridge.define("UltimateJoystick.Boundary", {
        $kind: "nested enum",
        statics: {
            fields: {
                Circular: 0,
                Square: 1
            }
        }
    });
    /*UltimateJoystick+Boundary end.*/

    /*UltimateJoystick+JoystickTouchSize start.*/
    Bridge.define("UltimateJoystick.JoystickTouchSize", {
        $kind: "nested enum",
        statics: {
            fields: {
                Default: 0,
                Medium: 1,
                Large: 2,
                Custom: 3
            }
        }
    });
    /*UltimateJoystick+JoystickTouchSize end.*/

    /*UltimateJoystick+ScalingAxis start.*/
    Bridge.define("UltimateJoystick.ScalingAxis", {
        $kind: "nested enum",
        statics: {
            fields: {
                Width: 0,
                Height: 1
            }
        }
    });
    /*UltimateJoystick+ScalingAxis end.*/

    /*UltimateJoystick+TapCountOption start.*/
    Bridge.define("UltimateJoystick.TapCountOption", {
        $kind: "nested enum",
        statics: {
            fields: {
                NoCount: 0,
                Accumulate: 1,
                TouchRelease: 2
            }
        }
    });
    /*UltimateJoystick+TapCountOption end.*/

    /*UltimateJoystickExample.Spaceship.AsteroidController start.*/
    Bridge.define("UltimateJoystickExample.Spaceship.AsteroidController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            asteroidManager: null,
            myRigidbody: null,
            canDestroy: false,
            isDestroyed: false,
            isDebris: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.AsteroidController#init", this ); }

                this.canDestroy = false;
                this.isDestroyed = false;
                this.isDebris = false;
            }
        },
        methods: {
            /*UltimateJoystickExample.Spaceship.AsteroidController.Setup start.*/
            Setup: function (force, torque) {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.AsteroidController#Setup", this ); }

                // Assign the rigidbody component attached to this game object.
                this.myRigidbody = this.GetComponent(UnityEngine.Rigidbody);

                // Add the force and torque to the rigidbody.
                this.myRigidbody.AddForce$1(force);
                this.myRigidbody.AddTorque$1(torque);

                // Delay the time that this asteroid can be destroyed for being out of the screen.
                this.StartCoroutine$1(this.DelayInitialDestruction(this.isDebris === true ? 0.25 : 1.0));
            },
            /*UltimateJoystickExample.Spaceship.AsteroidController.Setup end.*/

            /*UltimateJoystickExample.Spaceship.AsteroidController.DelayInitialDestruction start.*/
            DelayInitialDestruction: function (delayTime) {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.AsteroidController#DelayInitialDestruction", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // Wait for the designated time.
                                        $enumerator.current = new UnityEngine.WaitForSeconds(delayTime);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    // Allow this asteroid to be destoryed.
                                        this.canDestroy = true;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UltimateJoystickExample.Spaceship.AsteroidController.DelayInitialDestruction end.*/

            /*UltimateJoystickExample.Spaceship.AsteroidController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.AsteroidController#Update", this ); }

                // If the asteroid is out of the screen...
                if (Math.abs(this.transform.position.x) > UnityEngine.Camera.main.orthographicSize * UnityEngine.Camera.main.aspect * 1.3 || Math.abs(this.transform.position.z) > UnityEngine.Camera.main.orthographicSize * 1.3) {
                    // If this asteroid can be destoryed, then commence destruction!
                    if (this.canDestroy === true) {
                        UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    }
                }
            },
            /*UltimateJoystickExample.Spaceship.AsteroidController.Update end.*/

            /*UltimateJoystickExample.Spaceship.AsteroidController.OnCollisionEnter start.*/
            OnCollisionEnter: function (theCollision) {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.AsteroidController#OnCollisionEnter", this ); }

                // If the collision was from a bullet...
                if (Bridge.referenceEquals(theCollision.gameObject.name, "Bullet")) {
                    // Destroy the bullet.
                    UnityEngine.MonoBehaviour.Destroy(theCollision.gameObject);

                    // Modify the score.
                    this.asteroidManager.ModifyScore(this.isDebris);

                    // If this object is not debris, then explode.
                    if (this.isDebris === false) {
                        this.Explode();
                    } else {
                        UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    }
                } else if (Bridge.referenceEquals(theCollision.gameObject.name, "Player")) {
                    // Spawn an explosion where the player is at.
                    this.asteroidManager.SpawnExplosion(theCollision.transform.position.$clone());

                    // Destroy the player.
                    UnityEngine.MonoBehaviour.Destroy(theCollision.gameObject);

                    // If this object is not debris, then explode.
                    if (this.isDebris === false) {
                        this.Explode();
                    } else {
                        UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    }

                    // Show the user the death screen.
                    this.asteroidManager.ShowDeathScreen();
                } else {
                    // If this object is not debris and it can be destroyed, then explode.
                    if (this.isDebris === false && this.canDestroy === true) {
                        this.Explode();
                    } else {
                        if (this.isDebris === true && this.canDestroy === true) {
                            UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                        }
                    }
                }

                // Spawn an explosion particle.
                this.asteroidManager.SpawnExplosion(this.transform.position.$clone());
            },
            /*UltimateJoystickExample.Spaceship.AsteroidController.OnCollisionEnter end.*/

            /*UltimateJoystickExample.Spaceship.AsteroidController.Explode start.*/
            Explode: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.AsteroidController#Explode", this ); }

                // If this asteroid has already been destroyed, then return.
                if (this.isDestroyed === true) {
                    return;
                }

                // Let the script know that this asteroid has already been destroyed.
                this.isDestroyed = true;

                // Spawn some debris from this asteroids position.
                this.asteroidManager.SpawnDebris(this.transform.position.$clone());

                // Destory this asteroid.
                UnityEngine.MonoBehaviour.Destroy(this.gameObject);
            },
            /*UltimateJoystickExample.Spaceship.AsteroidController.Explode end.*/


        }
    });
    /*UltimateJoystickExample.Spaceship.AsteroidController end.*/

    /*UltimateJoystickExample.Spaceship.GameManager start.*/
    Bridge.define("UltimateJoystickExample.Spaceship.GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            },
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.GameManager#Instance#get", this ); }

                        return UltimateJoystickExample.Spaceship.GameManager.instance;
                    }
                }
            }
        },
        fields: {
            astroidPrefab: null,
            debrisPrefab: null,
            explosionPrefab: null,
            playerExplosionPrefab: null,
            spawning: false,
            spawnTimeMin: 0,
            spawnTimeMax: 0,
            startingAsteroids: 0,
            scoreText: null,
            score: 0,
            asteroidPoints: 0,
            debrisPoints: 0,
            gameOverScreen: null,
            gameOverText: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.GameManager#init", this ); }

                this.spawning = true;
                this.spawnTimeMin = 5.0;
                this.spawnTimeMax = 10.0;
                this.startingAsteroids = 2;
                this.score = 0;
                this.asteroidPoints = 50;
                this.debrisPoints = 10;
            }
        },
        methods: {
            /*UltimateJoystickExample.Spaceship.GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.GameManager#Awake", this ); }

                // If the instance variable is already assigned...
                if (UnityEngine.MonoBehaviour.op_Inequality(UltimateJoystickExample.Spaceship.GameManager.instance, null)) {
                    // If the instance is currently active...
                    if (UltimateJoystickExample.Spaceship.GameManager.instance.gameObject.activeInHierarchy === true) {
                        // Warn the user that there are multiple Game Managers within the scene and destroy the old manager.
                        UnityEngine.Debug.LogWarning$1("There are multiple instances of the Game Manager script. Removing the old manager from the scene.");
                        UnityEngine.MonoBehaviour.Destroy(UltimateJoystickExample.Spaceship.GameManager.instance.gameObject);
                    }

                    // Remove the old manager.
                    UltimateJoystickExample.Spaceship.GameManager.instance = null;
                }

                // Assign the instance variable as the Game Manager script on this object.
                UltimateJoystickExample.Spaceship.GameManager.instance = this.GetComponent(UltimateJoystickExample.Spaceship.GameManager);
            },
            /*UltimateJoystickExample.Spaceship.GameManager.Awake end.*/

            /*UltimateJoystickExample.Spaceship.GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.GameManager#Start", this ); }

                // Start spawning the asteroids.
                this.StartCoroutine$2("SpawnTimer");

                // Update the score text to reflect the current score on start.
                this.UpdateScoreText();
            },
            /*UltimateJoystickExample.Spaceship.GameManager.Start end.*/

            /*UltimateJoystickExample.Spaceship.GameManager.SpawnTimer start.*/
            SpawnTimer: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.GameManager#SpawnTimer", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // Wait for a bit before the initial spawn.
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    // For as many times as the startingAsteroids variable dictates, spawn an asteroid.
                                        for (var i = 0; i < this.startingAsteroids; i = (i + 1) | 0) {
                                            this.SpawnAsteroid();
                                        }

                                        // While spawning is true...
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( this.spawning ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    // Wait for a range of seconds determined my the min and max variables.
                                        $enumerator.current = new UnityEngine.WaitForSeconds(UnityEngine.Random.Range$1(this.spawnTimeMin, this.spawnTimeMax));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    // Spawn an asteroid.
                                        this.SpawnAsteroid();

                                        $step = 2;
                                        continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UltimateJoystickExample.Spaceship.GameManager.SpawnTimer end.*/

            /*UltimateJoystickExample.Spaceship.GameManager.SpawnAsteroid start.*/
            SpawnAsteroid: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.GameManager#SpawnAsteroid", this ); }

                // Get a random point within a circle area.
                var dir = UnityEngine.Random.insideUnitCircle.$clone();

                // Create a Vector3 varaible to store the spawn position.
                var pos = pc.Vec3.ZERO.clone();

                // If the X value of the spawn direction is greater than the Y, then spawn the asteroid to the left or right of the screen, determined by the value of dir.
                if (Math.abs(dir.x) > Math.abs(dir.y)) {
                    pos = new pc.Vec3( (dir.x === 0 ? 1 : Math.sign(dir.x)) * UnityEngine.Camera.main.orthographicSize * UnityEngine.Camera.main.aspect * 1.3, 0, dir.y * UnityEngine.Camera.main.orthographicSize );
                } else {
                    pos = new pc.Vec3( dir.x * UnityEngine.Camera.main.orthographicSize * UnityEngine.Camera.main.aspect * 1.3, 0, (dir.y === 0 ? 1 : Math.sign(dir.y)) * UnityEngine.Camera.main.orthographicSize );
                }

                // Create the asteroid game object at the position( determined above ), and at a random rotation.
                var ast = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.astroidPrefab, pos.$clone(), new pc.Quat().setFromEulerAngles_Unity( UnityEngine.Random.value * 360.0, UnityEngine.Random.value * 360.0, UnityEngine.Random.value * 360.0 ));

                // Call the setup function on the asteroid with the desired force and torque.
                ast.GetComponent(UltimateJoystickExample.Spaceship.AsteroidController).Setup(pos.clone().normalize().$clone().scale( -1 ).clone().scale( 1000.0 ), UnityEngine.Random.insideUnitSphere.$clone().clone().scale( UnityEngine.Random.Range$1(500.0, 1500.0) ));

                // Assign the manager component to this instance of the Game Manager.
                ast.GetComponent(UltimateJoystickExample.Spaceship.AsteroidController).asteroidManager = UltimateJoystickExample.Spaceship.GameManager.instance;
            },
            /*UltimateJoystickExample.Spaceship.GameManager.SpawnAsteroid end.*/

            /*UltimateJoystickExample.Spaceship.GameManager.SpawnDebris start.*/
            SpawnDebris: function (pos) {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.GameManager#SpawnDebris", this ); }

                // Determine how many debris should be created.
                var numberToSpawn = UnityEngine.Random.Range(3, 6);

                // For each number to spawn...
                for (var i = 0; i < numberToSpawn; i = (i + 1) | 0) {
                    // Create a force to make the debris fly away from eachother.
                    var force = new pc.Quat().setFromEulerAngles_Unity( 0, i * 360.0 / numberToSpawn, 0 ).transformVector( new pc.Vec3( 0, 0, 1 ) ).clone().scale( 5.0 ).clone().scale( 300.0 );

                    // Create the new debris game object at the asteroid's position, plus the forces position to make sure that the debris is positioned correctly. Random rotation as well.
                    var newGO = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.debrisPrefab, pos.$clone().add( force.clone().normalize().$clone().clone().scale( UnityEngine.Random.Range$1(0.0, 5.0) ) ), new pc.Quat().setFromEulerAngles_Unity( 0, UnityEngine.Random.value * 180.0, 0 ));

                    // Apply a random scale factor to make all the debris different.
                    newGO.transform.localScale = new pc.Vec3( UnityEngine.Random.Range$1(0.25, 0.5), UnityEngine.Random.Range$1(0.25, 0.5), UnityEngine.Random.Range$1(0.25, 0.5) );

                    // Setup the needed force and torque.
                    newGO.GetComponent(UltimateJoystickExample.Spaceship.AsteroidController).Setup(force.$clone().scale( 1.0 / ( 2 ) ), UnityEngine.Random.insideUnitSphere.$clone().clone().scale( UnityEngine.Random.Range$1(500.0, 1500.0) ));

                    // Assign the Game Manager component to this instance.
                    newGO.GetComponent(UltimateJoystickExample.Spaceship.AsteroidController).asteroidManager = UltimateJoystickExample.Spaceship.GameManager.instance;
                }
            },
            /*UltimateJoystickExample.Spaceship.GameManager.SpawnDebris end.*/

            /*UltimateJoystickExample.Spaceship.GameManager.SpawnExplosion start.*/
            SpawnExplosion: function (pos) {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.GameManager#SpawnExplosion", this ); }

                // Create a new explosion prefab game object at the desired position, with default rotation.
                var newParticles = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.explosionPrefab, pos.$clone(), pc.Quat.IDENTITY.clone());

                // Destory the particles after one second.
                this.Destroy(newParticles, 1);
            },
            /*UltimateJoystickExample.Spaceship.GameManager.SpawnExplosion end.*/

            /*UltimateJoystickExample.Spaceship.GameManager.ShowDeathScreen start.*/
            ShowDeathScreen: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.GameManager#ShowDeathScreen", this ); }

                // Enable the game over screen game object.
                this.gameOverScreen.gameObject.SetActive(true);

                var expl = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.playerExplosionPrefab, UnityEngine.Object.FindObjectOfType(UltimateJoystickExample.Spaceship.PlayerController).transform.position.$clone(), pc.Quat.IDENTITY.clone());

                this.Destroy(expl, 2);

                // Start the ShakeCamera coroutine for a dynamic effect.
                this.StartCoroutine$2("ShakeCamera");

                // Start the Fade coroutine so that the death screen will fade in.
                this.StartCoroutine$2("FadeDeathScreen");

                // Set spawning to false so that no more asteroids get spawned.
                this.spawning = false;

                UltimateJoystick.GetUltimateJoystick("Movement").UpdatePositioning();
            },
            /*UltimateJoystickExample.Spaceship.GameManager.ShowDeathScreen end.*/

            /*UltimateJoystickExample.Spaceship.GameManager.FadeDeathScreen start.*/
            FadeDeathScreen: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.GameManager#FadeDeathScreen", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    imageColor,
                    textColor,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // Wait for half a second for a little bit more dynamic effect.
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    // Set the text to the final score text plus the user's score.
                                        this.scoreText.text = "Final Score\n" + (Bridge.toString(this.score) || "");

                                        // Create temporary colors to be able to apply a fade to the image and text.
                                        imageColor = this.gameOverScreen.color.$clone();
                                        textColor = this.gameOverText.color.$clone();

                                        t = 0.0;
                                        $step = 2;
                                        continue;
                                }
                                case 2: {
                                    if ( t < 1.0 ) {
                                            $step = 3;
                                            continue;
                                        }
                                    $step = 6;
                                    continue;
                                }
                                case 3: {
                                    // Lerp the alpha of the temp colors from 0 to 0.75 by the amount of t. 
                                        imageColor.a = pc.math.lerp(0.0, 0.75, t);
                                        textColor.a = pc.math.lerp(0.0, 1.0, t);

                                        // Apply the temp color to the image and text.
                                        this.gameOverScreen.color = imageColor.$clone();
                                        this.gameOverText.color = textColor.$clone();

                                        // Also lerp the font size from 50 to 100 by t.
                                        this.scoreText.fontSize = Bridge.Int.clip32(pc.math.lerp(50, 100, t));

                                        // Wait for next frame.
                                        $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    t += UnityEngine.Time.deltaTime * 3.0;
                                    $step = 2;
                                    continue;
                                }
                                case 6: {
                                    // Apply a finalized amount to the alpha channels.
                                        imageColor.a = 0.75;
                                        textColor.a = 1.0;

                                        // Apply the final color values to the image and text.
                                        this.gameOverScreen.color = imageColor.$clone();
                                        this.gameOverText.color = textColor.$clone();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UltimateJoystickExample.Spaceship.GameManager.FadeDeathScreen end.*/

            /*UltimateJoystickExample.Spaceship.GameManager.ModifyScore start.*/
            ModifyScore: function (isDebris) {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.GameManager#ModifyScore", this ); }

                // Increase the score by the appropriate amount.
                this.score = (this.score + (isDebris === true ? this.debrisPoints : this.asteroidPoints)) | 0;

                // Update the score text to reflect the current score.
                this.UpdateScoreText();
            },
            /*UltimateJoystickExample.Spaceship.GameManager.ModifyScore end.*/

            /*UltimateJoystickExample.Spaceship.GameManager.UpdateScoreText start.*/
            UpdateScoreText: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.GameManager#UpdateScoreText", this ); }

                // Set the visual score amount to reflect the current score value.
                this.scoreText.text = Bridge.toString(this.score);
            },
            /*UltimateJoystickExample.Spaceship.GameManager.UpdateScoreText end.*/

            /*UltimateJoystickExample.Spaceship.GameManager.ShakeCamera start.*/
            ShakeCamera: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.GameManager#ShakeCamera", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    origPos,
                    t,
                    tempVec,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // Store the original position of the camera.
                                        origPos = UnityEngine.Vector2.FromVector3(UnityEngine.Camera.main.transform.position.$clone());
                                        t = 0.0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( t < 1.0 ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 2: {
                                    // Create a temporary vector2 with the camera's original position modified by a random distance from the origin.
                                        tempVec = origPos.$clone().add( UnityEngine.Random.insideUnitCircle );

                                        // Apply the temporary vector.
                                        UnityEngine.Camera.main.transform.position = UnityEngine.Vector3.FromVector2(tempVec.$clone());

                                        // Yield until next frame.
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    t += UnityEngine.Time.deltaTime * 2.0;
                                    $step = 1;
                                    continue;
                                }
                                case 5: {
                                    // Return back to the original position.
                                        UnityEngine.Camera.main.transform.position = UnityEngine.Vector3.FromVector2(origPos.$clone());

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UltimateJoystickExample.Spaceship.GameManager.ShakeCamera end.*/


        }
    });
    /*UltimateJoystickExample.Spaceship.GameManager end.*/

    /*UltimateJoystickExample.Spaceship.PlayerController start.*/
    Bridge.define("UltimateJoystickExample.Spaceship.PlayerController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rotationSpeed: 0,
            accelerationSpeed: 0,
            maxSpeed: 0,
            shootingCooldown: 0,
            bulletPrefab: null,
            myRigidbody: null,
            gunTrans: null,
            bulletSpawnPos: null,
            playerVisuals: null,
            shootingTimer: 0,
            canControl: false,
            movePosition: null,
            shootPosition: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.PlayerController#init", this ); }

                this.movePosition = new UnityEngine.Vector3();
                this.shootPosition = new UnityEngine.Vector3();
                this.rotationSpeed = 45.0;
                this.accelerationSpeed = 2.0;
                this.maxSpeed = 3.0;
                this.shootingCooldown = 0.2;
                this.shootingTimer = 0;
                this.canControl = true;
            }
        },
        methods: {
            /*UltimateJoystickExample.Spaceship.PlayerController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.PlayerController#Start", this ); }

                // Store the player's rigidbody.
                this.myRigidbody = this.GetComponent(UnityEngine.Rigidbody);
            },
            /*UltimateJoystickExample.Spaceship.PlayerController.Start end.*/

            /*UltimateJoystickExample.Spaceship.PlayerController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.PlayerController#Update", this ); }

                // Store the input positions
                this.movePosition = new pc.Vec3( UltimateJoystick.GetHorizontalAxis("Movement"), UltimateJoystick.GetVerticalAxis("Movement"), 0 );
                this.shootPosition = new pc.Vec3( UltimateJoystick.GetHorizontalAxis("Shooting"), UltimateJoystick.GetVerticalAxis("Shooting"), 0 );

                // If the user cannot control the player, then return.
                if (this.canControl === false) {
                    return;
                }

                // If the shooting joystick is being used and the shooting timer is ready...
                if (UltimateJoystick.GetJoystickState("Shooting") && this.shootingTimer <= 0) {
                    // Then reset the timer and shoot a bullet.
                    this.shootingTimer = this.shootingCooldown;
                    this.CreateBullets();
                }

                // If the shoot timer is above zero, reduce it.
                if (this.shootingTimer > 0) {
                    this.shootingTimer -= UnityEngine.Time.deltaTime;
                }
            },
            /*UltimateJoystickExample.Spaceship.PlayerController.Update end.*/

            /*UltimateJoystickExample.Spaceship.PlayerController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.PlayerController#FixedUpdate", this ); }

                // If the user cannot control the player...
                if (this.canControl === false) {
                    // Then reset the player's rotation, position, velocity and angular vel.
                    this.myRigidbody.rotation = pc.Quat.IDENTITY.clone();
                    this.myRigidbody.position = pc.Vec3.ZERO.clone();
                    this.myRigidbody.velocity = pc.Vec3.ZERO.clone();
                    this.myRigidbody.angularVelocity = pc.Vec3.ZERO.clone();
                } else {
                    // Figure out the rotation that the player should be facing and apply it.
                    var lookRot = new pc.Vec3( this.movePosition.x, 0, this.movePosition.y );
                    this.transform.LookAt$2(this.transform.position.$clone().add( lookRot ));

                    // Also figure out the rotation of the player's gun and apply it.
                    var gunRot = new pc.Vec3( this.shootPosition.x, 0, this.shootPosition.y );
                    this.gunTrans.LookAt$2(this.gunTrans.position.$clone().add( gunRot ));

                    // Apply the input force to the player.
                    this.myRigidbody.AddForce$1(this.transform.forward.$clone().clone().scale( UltimateJoystick.GetDistance("Movement") ).clone().scale( 1000.0 ).clone().scale( this.accelerationSpeed ).clone().scale( UnityEngine.Time.deltaTime ));

                    // If the player's force is greater than the max speed, then normalize it.
                    if (this.myRigidbody.velocity.length() > this.maxSpeed) {
                        this.myRigidbody.velocity = this.myRigidbody.velocity.clone().normalize().$clone().clone().scale( this.maxSpeed );
                    }

                    // Run the CheckExitScreen function to see if the player has left the screen.
                    this.CheckExitScreen();
                }
            },
            /*UltimateJoystickExample.Spaceship.PlayerController.FixedUpdate end.*/

            /*UltimateJoystickExample.Spaceship.PlayerController.CheckExitScreen start.*/
            CheckExitScreen: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.PlayerController#CheckExitScreen", this ); }

                var $t, $t1;
                // If the main camera is not assigned, then return.
                if (UnityEngine.Component.op_Equality(UnityEngine.Camera.main, null)) {
                    return;
                }

                // If the absolute value of the player's X position is greater than the ortho size of the camera multiplied by the camera's aspect ratio, then reset the player on the other side.
                if (Math.abs(this.myRigidbody.position.x) > UnityEngine.Camera.main.orthographicSize * UnityEngine.Camera.main.aspect) {
                    this.myRigidbody.position = new pc.Vec3( -($t = this.myRigidbody.position.x, ($t === 0 ? 1 : Math.sign($t))) * UnityEngine.Camera.main.orthographicSize * UnityEngine.Camera.main.aspect, 0, this.myRigidbody.position.z );
                }

                // If the absolute value of the player's Z position is greater than the ortho size, then reset the Z position to the other side.
                if (Math.abs(this.myRigidbody.position.z) > UnityEngine.Camera.main.orthographicSize) {
                    this.myRigidbody.position = new pc.Vec3( this.myRigidbody.position.x, this.myRigidbody.position.y, -($t1 = this.myRigidbody.position.z, ($t1 === 0 ? 1 : Math.sign($t1))) * UnityEngine.Camera.main.orthographicSize );
                }
            },
            /*UltimateJoystickExample.Spaceship.PlayerController.CheckExitScreen end.*/

            /*UltimateJoystickExample.Spaceship.PlayerController.CreateBullets start.*/
            CreateBullets: function () {
if ( TRACE ) { TRACE( "UltimateJoystickExample.Spaceship.PlayerController#CreateBullets", this ); }

                // Create a new bulletPrefab game object at the barrel's position and rotation.
                var bullet = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.bulletPrefab, this.bulletSpawnPos.position.$clone(), this.bulletSpawnPos.rotation.$clone());

                // Rename the bullet for reference within the asteroid script.
                bullet.name = this.bulletPrefab.name;

                // Apply a speed to the bullet's velocity.
                bullet.GetComponent(UnityEngine.Rigidbody).velocity = bullet.transform.forward.$clone().clone().scale( 200.0 );

                // Destroy the bullet after 3 seconds.
                this.Destroy(bullet, 3.0);
            },
            /*UltimateJoystickExample.Spaceship.PlayerController.CreateBullets end.*/


        }
    });
    /*UltimateJoystickExample.Spaceship.PlayerController end.*/

    /*UltimateJoystickScreenSizeUpdater start.*/
    Bridge.define("UltimateJoystickScreenSizeUpdater", {
        inherits: [UnityEngine.EventSystems.UIBehaviour],
        methods: {
            /*UltimateJoystickScreenSizeUpdater.OnRectTransformDimensionsChange start.*/
            OnRectTransformDimensionsChange: function () {
if ( TRACE ) { TRACE( "UltimateJoystickScreenSizeUpdater#OnRectTransformDimensionsChange", this ); }

                this.StartCoroutine$2("YieldPositioning");
            },
            /*UltimateJoystickScreenSizeUpdater.OnRectTransformDimensionsChange end.*/

            /*UltimateJoystickScreenSizeUpdater.YieldPositioning start.*/
            YieldPositioning: function () {
if ( TRACE ) { TRACE( "UltimateJoystickScreenSizeUpdater#YieldPositioning", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    allJoysticks,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForEndOfFrame();
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    allJoysticks = Bridge.as(UnityEngine.Object.FindObjectsOfType$1(UltimateJoystick), System.Array.type(UltimateJoystick));

                                        for (var i = 0; i < allJoysticks.length; i = (i + 1) | 0) {
                                            allJoysticks[i].UpdatePositioning();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*UltimateJoystickScreenSizeUpdater.YieldPositioning end.*/


        }
    });
    /*UltimateJoystickScreenSizeUpdater end.*/

    /*VectorUlti start.*/
    Bridge.define("VectorUlti", {
        statics: {
            methods: {
                /*VectorUlti.GetVectorFromAngle:static start.*/
                GetVectorFromAngle: function (angle) {
if ( TRACE ) { TRACE( "VectorUlti#GetVectorFromAngle", this ); }

                    var angleRad = angle * (0.0174532924);
                    return new pc.Vec3( Math.cos(angleRad), 0, Math.sin(angleRad) );
                },
                /*VectorUlti.GetVectorFromAngle:static end.*/

                /*VectorUlti.GetAngleFromVector:static start.*/
                GetAngleFromVector: function (dir) {
if ( TRACE ) { TRACE( "VectorUlti#GetAngleFromVector", this ); }

                    dir = dir.clone().normalize().$clone();
                    var angle = Math.atan2(dir.z, dir.x) * UnityEngine.Mathf.Rad2Deg;
                    if (angle < 0) {
                        angle += 360;
                    }
                    //int angle = Mathf.RoundToInt(n);

                    return angle;
                },
                /*VectorUlti.GetAngleFromVector:static end.*/

                /*VectorUlti.Set$1:static start.*/
                Set$1: function (vector3, x, y, z) {
if ( TRACE ) { TRACE( "VectorUlti#Set$1", this ); }

                    if (x === void 0) { x = null; }
                    if (y === void 0) { y = null; }
                    if (z === void 0) { z = null; }
                    return new pc.Vec3( x == null ? vector3.x : System.Nullable.getValue(x), y == null ? vector3.y : System.Nullable.getValue(y), z == null ? vector3.z : System.Nullable.getValue(z) );
                },
                /*VectorUlti.Set$1:static end.*/

                /*VectorUlti.Set:static start.*/
                Set: function (vector2, x, y) {
if ( TRACE ) { TRACE( "VectorUlti#Set", this ); }

                    if (x === void 0) { x = null; }
                    if (y === void 0) { y = null; }
                    return new pc.Vec2( x == null ? vector2.x : System.Nullable.getValue(x), y == null ? vector2.y : System.Nullable.getValue(y) );
                },
                /*VectorUlti.Set:static end.*/

                /*VectorUlti.Move:static start.*/
                Move: function (vector3, direction) {
if ( TRACE ) { TRACE( "VectorUlti#Move", this ); }

                    return vector3.$clone().add( direction );
                },
                /*VectorUlti.Move:static end.*/

                /*VectorUlti.ToVectorXZ:static start.*/
                ToVectorXZ: function (vector3) {
if ( TRACE ) { TRACE( "VectorUlti#ToVectorXZ", this ); }

                    return new pc.Vec2( vector3.x, vector3.z );
                },
                /*VectorUlti.ToVectorXZ:static end.*/


            }
        }
    });
    /*VectorUlti end.*/

    /*ArmController start.*/
    Bridge.define("ArmController", {
        inherits: [UnityEngine.MonoBehaviour,IRobotElement],
        fields: {
            joints: 0,
            initPosition: null,
            jointPrefab: null,
            sawPrefab: null
        },
        alias: ["Accept", "IRobotElement$Accept"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ArmController#init", this ); }

                this.initPosition = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*ArmController.Accept start.*/
            Accept: function (visitor) {
if ( TRACE ) { TRACE( "ArmController#Accept", this ); }

                visitor.IRobotVisitor$Visit(this);
                this.UpdateArm();
            },
            /*ArmController.Accept end.*/

            /*ArmController.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "ArmController#Init", this ); }

                this.UpdateArm();
            },
            /*ArmController.Init end.*/

            /*ArmController.UpdateArm start.*/
            UpdateArm: function () {
if ( TRACE ) { TRACE( "ArmController#UpdateArm", this ); }

                var $t;
                // DESTROY ALL CHILDREN BEFORE ADDING BACK
                $t = Bridge.getEnumerator(this.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        if (!Bridge.referenceEquals(child.name, "conveyor")) {
                            UnityEngine.MonoBehaviour.Destroy(child.gameObject);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                var current = this.AddRoot(-20, 90);

                for (var i = 1; i < this.joints; i = (i + 1) | 0) {
                    var child1 = this.AddChild(current, 0, 360);
                    current = child1;
                }

                this.AddSaw(current, 0, 360);
            },
            /*ArmController.UpdateArm end.*/

            /*ArmController.AddRoot start.*/
            AddRoot: function (lower, upper) {
if ( TRACE ) { TRACE( "ArmController#AddRoot", this ); }

                var root = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.jointPrefab, this.initPosition.$clone(), pc.Quat.IDENTITY.clone()).GetComponent(UnityEngine.HingeJoint2D);
                root.transform.localScale = new pc.Vec3( 0.15, 0.15, 1 );
                var limits = root.limits.$clone();
                limits.min = lower;
                limits.max = upper;
                root.attachedRigidbody.constraints = UnityEngine.RigidbodyConstraints2D.FreezePosition;
                root.limits = limits.$clone();
                root.useLimits = true;

                root.connectedAnchor = UnityEngine.Vector2.FromVector3(this.initPosition.$clone());

                root.transform.parent = this.gameObject.transform;
                return root;
            },
            /*ArmController.AddRoot end.*/

            /*ArmController.AddChild start.*/
            AddChild: function (parent, lower, upper) {
if ( TRACE ) { TRACE( "ArmController#AddChild", this ); }

                var child = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.jointPrefab, this.initPosition.$clone(), pc.Quat.IDENTITY.clone()).GetComponent(UnityEngine.HingeJoint2D);
                child.connectedBody = parent.attachedRigidbody;

                var limits = child.limits.$clone();
                limits.min = lower;
                limits.max = upper;
                child.limits = limits.$clone();
                child.useLimits = true;

                child.transform.parent = this.gameObject.transform;
                return child;
            },
            /*ArmController.AddChild end.*/

            /*ArmController.AddSaw start.*/
            AddSaw: function (parent, lower, upper) {
if ( TRACE ) { TRACE( "ArmController#AddSaw", this ); }

                var saw = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.sawPrefab, this.initPosition.$clone().add( pc.Vec3.UP.clone().clone().scale( 10 ) ), pc.Quat.IDENTITY.clone()).GetComponent(UnityEngine.HingeJoint2D);

                saw.connectedBody = parent.attachedRigidbody;
                saw.transform.localScale = new pc.Vec3( 0.35, 0.35, 1 );
                var limits = saw.limits.$clone();
                limits.min = lower;
                limits.max = upper;
                saw.limits = limits.$clone();
                saw.useLimits = true;

                saw.transform.parent = this.gameObject.transform;
            },
            /*ArmController.AddSaw end.*/


        }
    });
    /*ArmController end.*/

    /*Singleton$1 start.*/
    Bridge.define("Singleton$1", function (T) { return {
        inherits: [SingletonMono$1(T)],
        statics: {
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "Singleton$1#Instance#get", this ); }

                        if (Bridge.rValue(SingletonMono$1(T).instance) != null) {
                            return Bridge.rValue(SingletonMono$1(T).instance);
                        }
                        SingletonMono$1(T).instance = Bridge.cast(UnityEngine.Object.FindObjectOfType$1(T), T);
                        if (Bridge.rValue(SingletonMono$1(T).instance) == null) {
                            UnityEngine.Debug.LogWarningFormat("[Singleton] Class {0} not found! Create empty instance", [T]);
                            SingletonMono$1(T).instance = Bridge.rValue(new UnityEngine.GameObject.$ctor2(Bridge.Reflection.getTypeName(T)).AddComponent(T));
                        }
                        return Bridge.rValue(SingletonMono$1(T).instance);
                    }
                }
            }
        }
    }; });
    /*Singleton$1 end.*/

    /*DynamicJoystick start.*/
    Bridge.define("DynamicJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#init", this ); }

                this.moveThreshold = 1;
            }
        },
        methods: {
            /*DynamicJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#Start", this ); }

                this.MoveThreshold = this.moveThreshold;
                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*DynamicJoystick.Start end.*/

            /*DynamicJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerDown", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerDown end.*/

            /*DynamicJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerUp", this ); }

                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerUp end.*/

            /*DynamicJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "DynamicJoystick#HandleInput", this ); }

                if (magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised.$clone(), radius.$clone(), cam);
            },
            /*DynamicJoystick.HandleInput end.*/


        }
    });
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    Bridge.define("FixedJoystick", {
        inherits: [Joystick]
    });
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    Bridge.define("FloatingJoystick", {
        inherits: [Joystick],
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        methods: {
            /*FloatingJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "FloatingJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                //background.gameObject.SetActive(false);
            },
            /*FloatingJoystick.Start end.*/

            /*FloatingJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerDown", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                //background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerDown end.*/

            /*FloatingJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerUp", this ); }

                //background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerUp end.*/


        }
    });
    /*FloatingJoystick end.*/

    /*MoveToPosition start.*/
    Bridge.define("MoveToPosition", {
        inherits: [ICommand],
        fields: {
            controller: null
        },
        alias: ["Execute", "ICommand$Execute"],
        ctors: {
            ctor: function (saw) {
if ( TRACE ) { TRACE( "MoveToPosition#ctor", this ); }

                this.$initialize();
                this.controller = saw;
            }
        },
        methods: {
            /*MoveToPosition.Execute start.*/
            Execute: function (position) {
if ( TRACE ) { TRACE( "MoveToPosition#Execute", this ); }

                this.controller.MoveToPosition(position.$clone());
            },
            /*MoveToPosition.Execute end.*/


        }
    });
    /*MoveToPosition end.*/

    /*SawController start.*/
    Bridge.define("SawController", {
        inherits: [UnityEngine.MonoBehaviour,IRobotElement],
        fields: {
            saw: null,
            size: 0,
            rotationSpeed: 0,
            durability: 0,
            movementSpeed: 0,
            mass: 0
        },
        alias: ["Accept", "IRobotElement$Accept"],
        methods: {
            /*SawController.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "SawController#Init", this ); }

                this.saw = this.transform.Find("Saw(Clone)").gameObject;

                // ONE TIME CALL
                this.saw.GetComponent(Saw).SetMovementSpeed(this.movementSpeed);
                this.saw.GetComponent(UnityEngine.Rigidbody2D).mass = this.mass;
                this.UpdateSaw();
            },
            /*SawController.Init end.*/

            /*SawController.Accept start.*/
            Accept: function (visitor) {
if ( TRACE ) { TRACE( "SawController#Accept", this ); }

                visitor.IRobotVisitor$Visit$2(this);
                this.UpdateSaw();
            },
            /*SawController.Accept end.*/

            /*SawController.UpdateSaw start.*/
            UpdateSaw: function () {
if ( TRACE ) { TRACE( "SawController#UpdateSaw", this ); }

                // SIZE
                this.saw.transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( this.size );

                // ROTATION SPEED
                this.saw.GetComponent(UnityEngine.Animator).speed = this.rotationSpeed;

                // DURABILITY
                this.saw.GetComponent(Saw).SetDurability(this.durability);
            },
            /*SawController.UpdateSaw end.*/


        }
    });
    /*SawController end.*/

    /*VariableJoystick start.*/
    Bridge.define("VariableJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0,
            joystickType: 0,
            fixedPosition: null
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "VariableJoystick#init", this ); }

                this.fixedPosition = new UnityEngine.Vector2();
                this.moveThreshold = 1;
                this.joystickType = JoystickType.Fixed;
                this.fixedPosition = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*VariableJoystick.SetMode start.*/
            SetMode: function (joystickType) {
if ( TRACE ) { TRACE( "VariableJoystick#SetMode", this ); }

                this.joystickType = joystickType;
                if (joystickType === JoystickType.Fixed) {
                    this.background.anchoredPosition = this.fixedPosition.$clone();
                    this.background.gameObject.SetActive(true);
                } else {
                    this.background.gameObject.SetActive(false);
                }
            },
            /*VariableJoystick.SetMode end.*/

            /*VariableJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "VariableJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                this.fixedPosition = this.background.anchoredPosition.$clone();
                this.SetMode(this.joystickType);
            },
            /*VariableJoystick.Start end.*/

            /*VariableJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerDown", this ); }

                if (this.joystickType !== JoystickType.Fixed) {
                    this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                    this.background.gameObject.SetActive(true);
                }
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*VariableJoystick.OnPointerDown end.*/

            /*VariableJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerUp", this ); }

                if (this.joystickType !== JoystickType.Fixed) {
                    this.background.gameObject.SetActive(false);
                }

                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*VariableJoystick.OnPointerUp end.*/

            /*VariableJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "VariableJoystick#HandleInput", this ); }

                if (this.joystickType === JoystickType.Dynamic && magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised.$clone(), radius.$clone(), cam);
            },
            /*VariableJoystick.HandleInput end.*/


        }
    });
    /*VariableJoystick end.*/

    /*BucketCrusher1 start.*/
    Bridge.define("BucketCrusher1", {
        inherits: function () {
if ( TRACE ) { TRACE( "BucketCrusher1#inherits", this ); }
 return [Singleton$1(BucketCrusher1)]; },
        fields: {
            gameController: null,
            armController: null,
            sawController: null,
            conveyor: null
        },
        methods: {
            /*BucketCrusher1.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BucketCrusher1#Start", this ); }

                //brickManager.Init();
                this.armController.Init();
                this.sawController.Init();
                this.gameController.Init();
                this.conveyor.Init();
            },
            /*BucketCrusher1.Start end.*/


        }
    });
    /*BucketCrusher1 end.*/

    /*GlobalInstance start.*/
    Bridge.define("GlobalInstance", {
        inherits: function () {
if ( TRACE ) { TRACE( "GlobalInstance#inherits", this ); }
 return [Singleton$1(GlobalInstance)]; },
        fields: {
            gameManagerInstance: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GlobalInstance#init", this ); }

                this.gameManagerInstance = Singleton$1(BucketCrusher1).Instance;
            }
        }
    });
    /*GlobalInstance end.*/

    /*SingletonDontDestroyOnLoad$1 start.*/
    Bridge.define("SingletonDontDestroyOnLoad$1", function (T) { return {
        inherits: [Singleton$1(T)],
        methods: {
            /*SingletonDontDestroyOnLoad$1.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SingletonDontDestroyOnLoad$1#Awake", this ); }

                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                Singleton$1(T).prototype.Awake.call(this);
            },
            /*SingletonDontDestroyOnLoad$1.Awake end.*/


        }
    }; });
    /*SingletonDontDestroyOnLoad$1 end.*/

    /*SoundController start.*/
    Bridge.define("SoundController", {
        inherits: function () {
if ( TRACE ) { TRACE( "SoundController#inherits", this ); }
 return [Singleton$1(SoundController)]; },
        fields: {
            audioSourceFX: null,
            audioSourceBG: null,
            clipClick: null
        },
        methods: {
            /*SoundController.PlaySounClick start.*/
            PlaySounClick: function () {
if ( TRACE ) { TRACE( "SoundController#PlaySounClick", this ); }

                this.PlaySoundFX(this.clipClick);
            },
            /*SoundController.PlaySounClick end.*/

            /*SoundController.PlaySoundFX start.*/
            PlaySoundFX: function (audioClip) {
if ( TRACE ) { TRACE( "SoundController#PlaySoundFX", this ); }

                this.audioSourceFX.PlayOneShot(audioClip);
            },
            /*SoundController.PlaySoundFX end.*/

            /*SoundController.PlaySoundBG start.*/
            PlaySoundBG: function () {
if ( TRACE ) { TRACE( "SoundController#PlaySoundBG", this ); }

                this.audioSourceBG.Play();
            },
            /*SoundController.PlaySoundBG end.*/

            /*SoundController.StopSound start.*/
            StopSound: function () {
if ( TRACE ) { TRACE( "SoundController#StopSound", this ); }

                this.audioSourceBG.Stop();
                //audioSourceFX.Stop();
            },
            /*SoundController.StopSound end.*/


        }
    });
    /*SoundController end.*/

    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections.Generic","System.Collections","UnityEngine.UI","UnityEngine.EventSystems","UltimateJoystickExample.Spaceship","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*Brick start.*/
    $m("Brick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Debunk","t":8,"sn":"Debunk","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter2D","t":8,"pi":[{"n":"col","pt":$n[1].Collision2D,"ps":0}],"sn":"OnCollisionEnter2D","rt":$n[0].Void,"p":[$n[1].Collision2D]},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"col","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":2,"n":"SetHp","t":8,"pi":[{"n":"newHp","pt":$n[0].Int32,"ps":0}],"sn":"SetHp","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"broken","t":4,"rt":$n[0].Boolean,"sn":"broken","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"collidedWithConveyor","t":4,"rt":$n[0].Boolean,"sn":"collidedWithConveyor","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"hp","t":4,"rt":$n[0].Int32,"sn":"hp","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody2D,"sn":"rb"}]}; }, $n);
    /*Brick end.*/

    /*Rarity start.*/
    $m("Rarity", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Brick","is":true,"t":4,"rt":Rarity,"sn":"Brick","box":function ($v) { return Bridge.box($v, Rarity, System.Enum.toStringFn(Rarity));}},{"a":2,"n":"Diamond","is":true,"t":4,"rt":Rarity,"sn":"Diamond","box":function ($v) { return Bridge.box($v, Rarity, System.Enum.toStringFn(Rarity));}},{"a":2,"n":"Gold","is":true,"t":4,"rt":Rarity,"sn":"Gold","box":function ($v) { return Bridge.box($v, Rarity, System.Enum.toStringFn(Rarity));}}]}; }, $n);
    /*Rarity end.*/

    /*BrickManager start.*/
    $m("BrickManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CreateBrick","t":8,"pi":[{"n":"x","pt":$n[0].Int32,"ps":0},{"n":"y","pt":$n[0].Int32,"ps":1},{"n":"pixel","pt":$n[1].Color,"ps":2}],"sn":"CreateBrick","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32,$n[1].Color]},{"a":1,"n":"CreateMap","t":8,"sn":"CreateMap","rt":$n[0].Void},{"a":1,"n":"GetBrickLocation","t":8,"pi":[{"n":"x","pt":$n[0].Int32,"ps":0},{"n":"y","pt":$n[0].Int32,"ps":1}],"sn":"GetBrickLocation","rt":$n[1].Vector2,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"ParsePNGToMap","t":8,"pi":[{"n":"image","pt":$n[1].Texture2D,"ps":0}],"sn":"ParsePNGToMap","rt":$n[0].Void,"p":[$n[1].Texture2D]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"brickHealth","t":4,"rt":$n[0].Int32,"sn":"brickHealth","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"brickHolder","t":4,"rt":$n[1].GameObject,"sn":"brickHolder"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"brickPrefab","t":4,"rt":$n[1].GameObject,"sn":"brickPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"brickSize","t":4,"rt":$n[0].Single,"sn":"brickSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"imageLoader","t":4,"rt":$n[1].Texture2D,"sn":"imageLoader"},{"a":2,"n":"onBrickDestroyed","is":true,"t":4,"rt":Function,"sn":"onBrickDestroyed"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"positionBrickHold","t":4,"rt":$n[1].Vector3,"sn":"positionBrickHold"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"xOffset","t":4,"rt":$n[0].Int32,"sn":"xOffset","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*BrickManager end.*/

    /*GameController start.*/
    $m("GameController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"moveToPosition","t":4,"rt":ICommand,"sn":"moveToPosition"},{"a":1,"n":"saw","t":4,"rt":Saw,"sn":"saw"},{"a":2,"n":"ultiJoyStick","t":4,"rt":UltimateJoystick,"sn":"ultiJoyStick"}]}; }, $n);
    /*GameController end.*/

    /*ArmController start.*/
    $m("ArmController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Accept","t":8,"pi":[{"n":"visitor","pt":IRobotVisitor,"ps":0}],"sn":"Accept","rt":$n[0].Void,"p":[IRobotVisitor]},{"a":1,"n":"AddChild","t":8,"pi":[{"n":"parent","pt":$n[1].HingeJoint2D,"ps":0},{"n":"lower","pt":$n[0].Int32,"ps":1},{"n":"upper","pt":$n[0].Int32,"ps":2}],"sn":"AddChild","rt":$n[1].HingeJoint2D,"p":[$n[1].HingeJoint2D,$n[0].Int32,$n[0].Int32]},{"a":1,"n":"AddRoot","t":8,"pi":[{"n":"lower","pt":$n[0].Int32,"ps":0},{"n":"upper","pt":$n[0].Int32,"ps":1}],"sn":"AddRoot","rt":$n[1].HingeJoint2D,"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"AddSaw","t":8,"pi":[{"n":"parent","pt":$n[1].HingeJoint2D,"ps":0},{"n":"lower","pt":$n[0].Int32,"ps":1},{"n":"upper","pt":$n[0].Int32,"ps":2}],"sn":"AddSaw","rt":$n[0].Void,"p":[$n[1].HingeJoint2D,$n[0].Int32,$n[0].Int32]},{"a":2,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"UpdateArm","t":8,"sn":"UpdateArm","rt":$n[0].Void},{"a":2,"n":"initPosition","t":4,"rt":$n[1].Vector3,"sn":"initPosition"},{"at":[new UnityEngine.HeaderAttribute("Authorized personnel only")],"a":2,"n":"jointPrefab","t":4,"rt":$n[1].GameObject,"sn":"jointPrefab"},{"a":2,"n":"joints","t":4,"rt":$n[0].Int32,"sn":"joints","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"sawPrefab","t":4,"rt":$n[1].GameObject,"sn":"sawPrefab"}]}; }, $n);
    /*ArmController end.*/

    /*Conveyor start.*/
    $m("Conveyor", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Accept","t":8,"pi":[{"n":"visitor","pt":IRobotVisitor,"ps":0}],"sn":"Accept","rt":$n[0].Void,"p":[IRobotVisitor]},{"a":2,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"Resize","t":8,"pi":[{"n":"amount","pt":$n[0].Single,"ps":0},{"n":"direction","pt":$n[1].Vector3,"ps":1}],"sn":"Resize","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector3]},{"a":1,"n":"UpdateConveyor","t":8,"sn":"UpdateConveyor","rt":$n[0].Void},{"a":2,"n":"conveyor","t":4,"rt":$n[1].GameObject,"sn":"conveyor"},{"a":2,"n":"length","t":4,"rt":$n[0].Int32,"sn":"length","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Conveyor end.*/

    /*ICommand start.*/
    $m("ICommand", function () { return {"att":161,"a":2,"m":[{"ab":true,"a":2,"n":"Execute","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"ICommand$Execute","rt":$n[0].Void,"p":[$n[1].Vector2]}]}; }, $n);
    /*ICommand end.*/

    /*IRobotElement start.*/
    $m("IRobotElement", function () { return {"att":161,"a":2,"m":[{"ab":true,"a":2,"n":"Accept","t":8,"pi":[{"n":"visitor","pt":IRobotVisitor,"ps":0}],"sn":"IRobotElement$Accept","rt":$n[0].Void,"p":[IRobotVisitor]}]}; }, $n);
    /*IRobotElement end.*/

    /*IRobotVisitor start.*/
    $m("IRobotVisitor", function () { return {"att":161,"a":2,"m":[{"ab":true,"a":2,"n":"Visit","t":8,"pi":[{"n":"arm","pt":ArmController,"ps":0}],"sn":"IRobotVisitor$Visit","rt":$n[0].Void,"p":[ArmController]},{"ab":true,"a":2,"n":"Visit","t":8,"pi":[{"n":"conveyor","pt":Conveyor,"ps":0}],"sn":"IRobotVisitor$Visit$1","rt":$n[0].Void,"p":[Conveyor]},{"ab":true,"a":2,"n":"Visit","t":8,"pi":[{"n":"saw","pt":SawController,"ps":0}],"sn":"IRobotVisitor$Visit$2","rt":$n[0].Void,"p":[SawController]}]}; }, $n);
    /*IRobotVisitor end.*/

    /*MoveToPosition start.*/
    $m("MoveToPosition", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[Saw],"pi":[{"n":"saw","pt":Saw,"ps":0}],"sn":"ctor"},{"a":2,"n":"Execute","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"Execute","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"controller","t":4,"rt":Saw,"sn":"controller"}]}; }, $n);
    /*MoveToPosition end.*/

    /*RobotController start.*/
    $m("RobotController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*RobotController end.*/

    /*Saw start.*/
    $m("Saw", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"MoveToPosition","t":8,"pi":[{"n":"position","pt":$n[1].Vector2,"ps":0}],"sn":"MoveToPosition","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"col","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":1,"n":"OnTriggerExit2D","t":8,"pi":[{"n":"col","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerExit2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":2,"n":"SetDurability","t":8,"pi":[{"n":"newDurability","pt":$n[0].Int32,"ps":0}],"sn":"SetDurability","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SetMovementSpeed","t":8,"pi":[{"n":"newMovementSpeed","pt":$n[0].Single,"ps":0}],"sn":"SetMovementSpeed","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"durability","t":4,"rt":$n[0].Int32,"sn":"durability","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isCollingBrick","t":4,"rt":$n[0].Boolean,"sn":"isCollingBrick","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"movementSpeed","t":4,"rt":$n[0].Single,"sn":"movementSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody2D,"sn":"rb"},{"a":1,"n":"reset","t":4,"rt":$n[0].Single,"sn":"reset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timer","t":4,"rt":$n[0].Single,"sn":"timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Saw end.*/

    /*SawController start.*/
    $m("SawController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Accept","t":8,"pi":[{"n":"visitor","pt":IRobotVisitor,"ps":0}],"sn":"Accept","rt":$n[0].Void,"p":[IRobotVisitor]},{"a":2,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"UpdateSaw","t":8,"sn":"UpdateSaw","rt":$n[0].Void},{"a":2,"n":"durability","t":4,"rt":$n[0].Int32,"sn":"durability","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"mass","t":4,"rt":$n[0].Single,"sn":"mass","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Default value. These values are in-game un-upgradable")],"a":2,"n":"movementSpeed","t":4,"rt":$n[0].Single,"sn":"movementSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rotationSpeed","t":4,"rt":$n[0].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"saw","t":4,"rt":$n[1].GameObject,"sn":"saw"},{"a":2,"n":"size","t":4,"rt":$n[0].Single,"sn":"size","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SawController end.*/

    /*SoundController start.*/
    $m("SoundController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"PlaySounClick","t":8,"sn":"PlaySounClick","rt":$n[0].Void},{"a":2,"n":"PlaySoundBG","t":8,"sn":"PlaySoundBG","rt":$n[0].Void},{"a":1,"n":"PlaySoundFX","t":8,"pi":[{"n":"audioClip","pt":$n[1].AudioClip,"ps":0}],"sn":"PlaySoundFX","rt":$n[0].Void,"p":[$n[1].AudioClip]},{"a":2,"n":"StopSound","t":8,"sn":"StopSound","rt":$n[0].Void},{"a":2,"n":"audioSourceBG","t":4,"rt":$n[1].AudioSource,"sn":"audioSourceBG"},{"a":2,"n":"audioSourceFX","t":4,"rt":$n[1].AudioSource,"sn":"audioSourceFX"},{"a":2,"n":"clipClick","t":4,"rt":$n[1].AudioClip,"sn":"clipClick"}]}; }, $n);
    /*SoundController end.*/

    /*BucketCrusher1 start.*/
    $m("BucketCrusher1", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"armController","t":4,"rt":ArmController,"sn":"armController"},{"a":2,"n":"conveyor","t":4,"rt":Conveyor,"sn":"conveyor"},{"a":2,"n":"gameController","t":4,"rt":GameController,"sn":"gameController"},{"a":2,"n":"sawController","t":4,"rt":SawController,"sn":"sawController"}]}; }, $n);
    /*BucketCrusher1 end.*/

    /*BucketCrusher2 start.*/
    $m("BucketCrusher2", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimationCandy","t":8,"sn":"AnimationCandy","rt":$n[0].Void},{"a":1,"n":"AnimationCap","t":8,"sn":"AnimationCap","rt":$n[0].Void},{"a":1,"n":"AnimationWillMid","t":8,"sn":"AnimationWillMid","rt":$n[0].Void},{"a":1,"n":"ChangeCandy","t":8,"sn":"ChangeCandy","rt":$n[0].Void},{"a":1,"n":"ChangeCaptain","t":8,"sn":"ChangeCaptain","rt":$n[0].Void},{"a":1,"n":"ChangeWildMill","t":8,"sn":"ChangeWildMill","rt":$n[0].Void},{"a":2,"n":"ChooseCandy","t":8,"sn":"ChooseCandy","rt":$n[0].Void},{"a":2,"n":"ChooseCaptain","t":8,"sn":"ChooseCaptain","rt":$n[0].Void},{"a":2,"n":"ChooseWindMill","t":8,"sn":"ChooseWindMill","rt":$n[0].Void},{"a":1,"n":"EndGame","t":8,"sn":"EndGame","rt":$n[0].Void},{"a":2,"n":"InstallFullGame","t":8,"sn":"InstallFullGame","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"brickManager","t":4,"rt":BrickManager,"sn":"brickManager"},{"a":2,"n":"guideChooseGroup","t":4,"rt":$n[1].GameObject,"sn":"guideChooseGroup"},{"a":2,"n":"guideDrag","t":4,"rt":$n[1].GameObject,"sn":"guideDrag"},{"a":1,"n":"isChoosed","t":4,"rt":$n[0].Boolean,"sn":"isChoosed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isEndGame","t":4,"rt":$n[0].Boolean,"sn":"isEndGame","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"lstBorder","t":4,"rt":$n[2].List$1(UnityEngine.MeshRenderer),"sn":"lstBorder"},{"a":2,"n":"lstMateCandy","t":4,"rt":$n[2].List$1(UnityEngine.Material),"sn":"lstMateCandy"},{"a":2,"n":"lstMateCaptain","t":4,"rt":$n[2].List$1(UnityEngine.Material),"sn":"lstMateCaptain"},{"a":2,"n":"lstSaw","t":4,"rt":$n[2].List$1(UnityEngine.GameObject),"sn":"lstSaw"},{"a":2,"n":"lstTam","t":4,"rt":$n[2].List$1(UnityEngine.MeshRenderer),"sn":"lstTam"},{"a":2,"n":"lstTruc","t":4,"rt":$n[2].List$1(UnityEngine.MeshRenderer),"sn":"lstTruc"},{"a":2,"n":"lstWindMill","t":4,"rt":$n[2].List$1(UnityEngine.Material),"sn":"lstWindMill"},{"a":2,"n":"soundControll","t":4,"rt":SoundController,"sn":"soundControll"}]}; }, $n);
    /*BucketCrusher2 end.*/

    /*TypeDestroy start.*/
    $m("TypeDestroy", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DESTROY","is":true,"t":4,"rt":TypeDestroy,"sn":"DESTROY","box":function ($v) { return Bridge.box($v, TypeDestroy, System.Enum.toStringFn(TypeDestroy));}},{"a":2,"n":"DISABLE","is":true,"t":4,"rt":TypeDestroy,"sn":"DISABLE","box":function ($v) { return Bridge.box($v, TypeDestroy, System.Enum.toStringFn(TypeDestroy));}},{"a":2,"n":"RESPAWNER","is":true,"t":4,"rt":TypeDestroy,"sn":"RESPAWNER","box":function ($v) { return Bridge.box($v, TypeDestroy, System.Enum.toStringFn(TypeDestroy));}}]}; }, $n);
    /*TypeDestroy end.*/

    /*AutoDestroy start.*/
    $m("AutoDestroy", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"timeOut","t":4,"rt":$n[0].Single,"sn":"timeOut","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timeStart","t":4,"rt":$n[0].Single,"sn":"timeStart","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"typeDestroy","t":4,"rt":TypeDestroy,"sn":"typeDestroy","box":function ($v) { return Bridge.box($v, TypeDestroy, System.Enum.toStringFn(TypeDestroy));}}]}; }, $n);
    /*AutoDestroy end.*/

    /*AutoDestructor start.*/
    $m("AutoDestructor", function () { return {"nested":[AutoDestructor.TypeDestroy],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AutoDestroy","t":8,"sn":"AutoDestroy","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isPutToPool","t":4,"rt":$n[0].Boolean,"sn":"isPutToPool","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timeDestroy","t":4,"rt":$n[0].Single,"sn":"timeDestroy","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"typeDestroy","t":4,"rt":AutoDestructor.TypeDestroy,"sn":"typeDestroy","box":function ($v) { return Bridge.box($v, AutoDestructor.TypeDestroy, System.Enum.toStringFn(AutoDestructor.TypeDestroy));}}]}; }, $n);
    /*AutoDestructor end.*/

    /*AutoDestructor+TypeDestroy start.*/
    $m("AutoDestructor.TypeDestroy", function () { return {"td":AutoDestructor,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Destroy","is":true,"t":4,"rt":AutoDestructor.TypeDestroy,"sn":"Destroy","box":function ($v) { return Bridge.box($v, AutoDestructor.TypeDestroy, System.Enum.toStringFn(AutoDestructor.TypeDestroy));}},{"a":2,"n":"Disable","is":true,"t":4,"rt":AutoDestructor.TypeDestroy,"sn":"Disable","box":function ($v) { return Bridge.box($v, AutoDestructor.TypeDestroy, System.Enum.toStringFn(AutoDestructor.TypeDestroy));}},{"a":2,"n":"PutToPool","is":true,"t":4,"rt":AutoDestructor.TypeDestroy,"sn":"PutToPool","box":function ($v) { return Bridge.box($v, AutoDestructor.TypeDestroy, System.Enum.toStringFn(AutoDestructor.TypeDestroy));}}]}; }, $n);
    /*AutoDestructor+TypeDestroy end.*/

    /*Difficult start.*/
    $m("Difficult", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"EASY","is":true,"t":4,"rt":Difficult,"sn":"EASY","box":function ($v) { return Bridge.box($v, Difficult, System.Enum.toStringFn(Difficult));}},{"a":2,"n":"HARD","is":true,"t":4,"rt":Difficult,"sn":"HARD","box":function ($v) { return Bridge.box($v, Difficult, System.Enum.toStringFn(Difficult));}},{"a":2,"n":"NORMAL","is":true,"t":4,"rt":Difficult,"sn":"NORMAL","box":function ($v) { return Bridge.box($v, Difficult, System.Enum.toStringFn(Difficult));}}]}; }, $n);
    /*Difficult end.*/

    /*DefineHelper start.*/
    $m("DefineHelper", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"JoyStick","is":true,"t":4,"rt":$n[0].String,"sn":"JoyStick"}]}; }, $n);
    /*DefineHelper end.*/

    /*NameTag start.*/
    $m("NameTag", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Brick","is":true,"t":4,"rt":$n[0].String,"sn":"Brick"},{"a":2,"n":"Conveyor","is":true,"t":4,"rt":$n[0].String,"sn":"Conveyor"},{"a":2,"n":"Destroyer","is":true,"t":4,"rt":$n[0].String,"sn":"Destroyer"},{"a":2,"n":"Saw","is":true,"t":4,"rt":$n[0].String,"sn":"Saw"}]}; }, $n);
    /*NameTag end.*/

    /*EventID start.*/
    $m("EventID", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Win","is":true,"t":4,"rt":EventID,"sn":"Win","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}}]}; }, $n);
    /*EventID end.*/

    /*EventDispatcher start.*/
    $m("EventDispatcher", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ClearAllListener","t":8,"sn":"ClearAllListener","rt":$n[0].Void},{"a":2,"n":"HasInstance","is":true,"t":8,"sn":"HasInstance","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"PostEvent","t":8,"pi":[{"n":"eventID","pt":EventID,"ps":0},{"n":"param","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"PostEvent","rt":$n[0].Void,"p":[EventID,$n[0].Object]},{"a":2,"n":"RegisterListener","t":8,"pi":[{"n":"eventID","pt":EventID,"ps":0},{"n":"callback","pt":Function,"ps":1}],"sn":"RegisterListener","rt":$n[0].Void,"p":[EventID,Function]},{"a":2,"n":"RemoveListener","t":8,"pi":[{"n":"eventID","pt":EventID,"ps":0},{"n":"callback","pt":Function,"ps":1}],"sn":"RemoveListener","rt":$n[0].Void,"p":[EventID,Function]},{"a":2,"n":"Instance","is":true,"t":16,"rt":EventDispatcher,"g":{"a":2,"n":"get_Instance","t":8,"rt":EventDispatcher,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[EventDispatcher],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_listeners","t":4,"rt":$n[2].Dictionary$2(EventID,Function),"sn":"_listeners"},{"a":1,"n":"s_instance","is":true,"t":4,"rt":EventDispatcher,"sn":"s_instance"}]}; }, $n);
    /*EventDispatcher end.*/

    /*EventDispatcherExtension start.*/
    $m("EventDispatcherExtension", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"PostEvent","is":true,"t":8,"pi":[{"n":"sender","pt":$n[1].MonoBehaviour,"ps":0},{"n":"eventID","pt":EventID,"ps":1}],"sn":"PostEvent","rt":$n[0].Void,"p":[$n[1].MonoBehaviour,EventID]},{"a":2,"n":"PostEvent","is":true,"t":8,"pi":[{"n":"listener","pt":$n[1].MonoBehaviour,"ps":0},{"n":"eventID","pt":EventID,"ps":1},{"n":"param","pt":$n[0].Object,"ps":2}],"sn":"PostEvent$1","rt":$n[0].Void,"p":[$n[1].MonoBehaviour,EventID,$n[0].Object]},{"a":2,"n":"RegisterListener","is":true,"t":8,"pi":[{"n":"listener","pt":$n[1].MonoBehaviour,"ps":0},{"n":"eventID","pt":EventID,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"RegisterListener","rt":$n[0].Void,"p":[$n[1].MonoBehaviour,EventID,Function]},{"a":2,"n":"RemoveListener","is":true,"t":8,"pi":[{"n":"sender","pt":$n[1].MonoBehaviour,"ps":0},{"n":"eventID","pt":EventID,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"RemoveListener","rt":$n[0].Void,"p":[$n[1].MonoBehaviour,EventID,Function]}]}; }, $n);
    /*EventDispatcherExtension end.*/

    /*GlobalInstance start.*/
    $m("GlobalInstance", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"gameManagerInstance","t":4,"rt":BucketCrusher1,"sn":"gameManagerInstance"}]}; }, $n);
    /*GlobalInstance end.*/

    /*HelperUtility start.*/
    $m("HelperUtility", function () { return {"nested":[Function],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOLocalRotateQuaternion","is":true,"t":8,"pi":[{"n":"endValue","pt":$n[1].Quaternion,"ps":0},{"n":"speedRotate","pt":$n[0].Single,"ps":1},{"n":"objLookAt","pt":$n[1].GameObject,"ps":2},{"n":"actionComplete","pt":Function,"ps":3}],"sn":"DOLocalRotateQuaternion","rt":$n[3].IEnumerator,"p":[$n[1].Quaternion,$n[0].Single,$n[1].GameObject,Function]},{"a":2,"n":"DecimalRounding","is":true,"t":8,"pi":[{"n":"Num","pt":$n[0].Single,"ps":0},{"n":"Round","pt":$n[0].Int32,"ps":1}],"sn":"DecimalRounding","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"DisruptiveArrayObject","is":true,"t":8,"pi":[{"n":"array","pt":System.Array.type(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"DisruptiveArrayObject","rt":System.Array.type(System.Object),"p":[System.Array.type(System.Object)]},{"a":2,"n":"DisruptiveList","is":true,"t":8,"pi":[{"n":"array","pt":$n[2].List$1(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"DisruptiveList","rt":$n[2].List$1(System.Object),"p":[$n[2].List$1(System.Object)]},{"a":2,"n":"DisruptiveListObject","is":true,"t":8,"pi":[{"n":"array","pt":$n[2].List$1(System.Object),"ps":0}],"sn":"DisruptiveListObject$1","rt":$n[2].List$1(System.Object),"p":[$n[2].List$1(System.Object)]},{"a":2,"n":"DisruptiveListObject","is":true,"t":8,"pi":[{"n":"array","pt":$n[2].List$1(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"DisruptiveListObject","rt":$n[2].List$1(System.Object),"p":[$n[2].List$1(System.Object)]},{"a":2,"n":"DisruptiveListSelf","is":true,"t":8,"pi":[{"n":"array","pt":$n[2].List$1(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"DisruptiveListSelf","rt":$n[2].List$1(System.Object),"p":[$n[2].List$1(System.Object)]},{"a":2,"n":"GetDirectionFromAngle","is":true,"t":8,"pi":[{"n":"vectorP","pt":$n[1].Vector3,"ps":0},{"n":"angle","pt":$n[0].Single,"ps":1},{"n":"positionStart","pt":$n[1].Vector3,"ps":2}],"sn":"GetDirectionFromAngle","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[0].Single,$n[1].Vector3]},{"a":2,"n":"GetDirectionFromAngle_2","is":true,"t":8,"pi":[{"n":"vectorP","pt":$n[1].Vector3,"ps":0},{"n":"angle","pt":$n[0].Single,"ps":1},{"n":"positionStart","pt":$n[1].Vector3,"ps":2}],"sn":"GetDirectionFromAngle_2","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[0].Single,$n[1].Vector3]},{"a":2,"n":"GetPointDistanceFromObject","is":true,"t":8,"pi":[{"n":"distance","pt":$n[0].Single,"ps":0},{"n":"direction","pt":$n[1].Vector3,"ps":1},{"n":"fromPoint","pt":$n[1].Vector3,"ps":2}],"sn":"GetPointDistanceFromObject","rt":$n[1].Vector3,"p":[$n[0].Single,$n[1].Vector3,$n[1].Vector3]},{"a":2,"n":"GetRotateDirection","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].Quaternion,"ps":0},{"n":"to","pt":$n[1].Quaternion,"ps":1}],"sn":"GetRotateDirection","rt":$n[0].Boolean,"p":[$n[1].Quaternion,$n[1].Quaternion],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LookAtToDirection","is":true,"t":8,"pi":[{"n":"diretion","pt":$n[1].Vector3,"ps":0},{"n":"objLookAt","pt":$n[1].GameObject,"ps":1},{"n":"speedLockAt","dv":500.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"LookAtToDirection","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].GameObject,$n[0].Single]},{"a":2,"n":"LookAtToDirectionAngleDetal","is":true,"t":8,"pi":[{"n":"diretion","pt":$n[1].Vector3,"ps":0},{"n":"objLookAt","pt":$n[1].GameObject,"ps":1},{"n":"AngleDetal","pt":$n[0].Single,"ps":2},{"n":"speedLockAt","dv":500.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"LookAtToDirectionAngleDetal","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LookAtToPosition","is":true,"t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0},{"n":"objLookAt","pt":$n[1].GameObject,"ps":1},{"n":"speedRotate","dv":500.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"LookAtToPosition","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].GameObject,$n[0].Single]},{"a":2,"n":"LookAtToPositionAngleDetal","is":true,"t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0},{"n":"objLookAt","pt":$n[1].GameObject,"ps":1},{"n":"AngleDetal","pt":$n[0].Single,"ps":2},{"n":"speedRotate","dv":500.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"LookAtToPositionAngleDetal","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":1,"n":"PosHandle","is":true,"t":8,"pi":[{"n":"numCount","pt":$n[0].Int32,"ps":0},{"n":"MaxERow","pt":$n[0].Int32,"ps":1}],"sn":"PosHandle","rt":$n[2].List$1(System.Int32),"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"RandomCustom","is":true,"t":8,"pi":[{"n":"first","pt":$n[0].Int32,"ps":0},{"n":"last","pt":$n[0].Int32,"ps":1},{"n":"diff","pt":$n[2].List$1(System.Int32),"ps":2}],"sn":"RandomCustom","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].Int32,$n[2].List$1(System.Int32)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"RandomUnduplicated","is":true,"t":8,"pi":[{"n":"diff","pt":$n[2].List$1(System.Int32),"ps":0},{"n":"oldValues","ip":true,"pt":$n[0].Array.type(System.Int32),"ps":1}],"sn":"RandomUnduplicated","rt":$n[0].Int32,"p":[$n[2].List$1(System.Int32),$n[0].Array.type(System.Int32)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"RandomUnduplicated","is":true,"t":8,"pi":[{"n":"oldValue","pt":$n[0].Int32,"ps":0},{"n":"diff","pt":$n[2].List$1(System.Int32),"ps":1}],"sn":"RandomUnduplicated$1","rt":$n[0].Int32,"p":[$n[0].Int32,$n[2].List$1(System.Int32)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"SelectionSortList","is":true,"t":8,"pi":[{"n":"A","pt":$n[2].List$1(System.Object),"ps":0},{"n":"compareElementList","pt":Function,"ps":1}],"sn":"SelectionSortList","rt":$n[2].List$1(System.Object),"p":[$n[2].List$1(System.Object),Function]},{"a":2,"n":"SetPos","is":true,"t":8,"pi":[{"n":"numCount","pt":$n[0].Int32,"ps":0},{"n":"MaxERow","pt":$n[0].Int32,"ps":1}],"sn":"SetPos","rt":$n[2].List$1(System.Int32),"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"StartAction","is":true,"t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"condition","pt":Function,"ps":1}],"sn":"StartAction","rt":$n[3].IEnumerator,"p":[Function,Function]},{"a":2,"n":"StartAction","is":true,"t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"time","pt":$n[0].Single,"ps":1}],"sn":"StartAction$1","rt":$n[3].IEnumerator,"p":[Function,$n[0].Single]},{"a":2,"n":"StartActionNotUseCorutines","is":true,"t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"time","pt":$n[0].Single,"ps":1}],"sn":"StartActionNotUseCorutines","rt":$n[0].Void,"p":[Function,$n[0].Single]},{"a":2,"n":"StartActionRealTime","is":true,"t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"time","pt":$n[0].Single,"ps":1}],"sn":"StartActionRealTime","rt":$n[3].IEnumerator,"p":[Function,$n[0].Single]},{"a":2,"n":"StartThread","is":true,"t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"timeToStop","pt":$n[0].Single,"ps":1},{"n":"actionStop","dv":null,"o":true,"pt":Function,"ps":2}],"sn":"StartThread$1","rt":$n[3].IEnumerator,"p":[Function,$n[0].Single,Function]},{"a":2,"n":"StartThread","is":true,"t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"conditionStop","pt":Function,"ps":1},{"n":"actionStop","dv":null,"o":true,"pt":Function,"ps":2},{"n":"time","dv":0.01,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"StartThread","rt":$n[3].IEnumerator,"p":[Function,Function,Function,$n[0].Single]}]}; }, $n);
    /*HelperUtility end.*/

    /*SelfDefine start.*/
    $m("SelfDefine", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*SelfDefine end.*/

    /*MMMaths start.*/
    $m("MMMaths", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Approach","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"amount","pt":$n[0].Single,"ps":2}],"sn":"Approach","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Chance","is":true,"t":8,"pi":[{"n":"percent","pt":$n[0].Int32,"ps":0}],"sn":"Chance","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"RandomVector3","is":true,"t":8,"pi":[{"n":"minimum","pt":$n[1].Vector3,"ps":0},{"n":"maximum","pt":$n[1].Vector3,"ps":1}],"sn":"RandomVector3","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3]},{"a":2,"n":"RollADice","is":true,"t":8,"pi":[{"n":"numberOfSides","pt":$n[0].Int32,"ps":0}],"sn":"RollADice","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"RotatePointAroundPivot","is":true,"t":8,"pi":[{"n":"point","pt":$n[1].Vector3,"ps":0},{"n":"pivot","pt":$n[1].Vector3,"ps":1},{"n":"angle","pt":$n[0].Single,"ps":2}],"sn":"RotatePointAroundPivot","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"RotatePointAroundPivot","is":true,"t":8,"pi":[{"n":"point","pt":$n[1].Vector3,"ps":0},{"n":"pivot","pt":$n[1].Vector3,"ps":1},{"n":"angle","pt":$n[1].Vector3,"ps":2}],"sn":"RotatePointAroundPivot$1","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3,$n[1].Vector3]},{"a":2,"n":"Sum","is":true,"t":8,"pi":[{"n":"thingsToAdd","ip":true,"pt":$n[0].Array.type(System.Int32),"ps":0}],"sn":"Sum","rt":$n[0].Int32,"p":[$n[0].Array.type(System.Int32)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Vector2ToVector3","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Vector2,"ps":0}],"sn":"Vector2ToVector3","rt":$n[1].Vector3,"p":[$n[1].Vector2]},{"a":2,"n":"Vector2ToVector3","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Vector2,"ps":0},{"n":"newZValue","pt":$n[0].Single,"ps":1}],"sn":"Vector2ToVector3$1","rt":$n[1].Vector3,"p":[$n[1].Vector2,$n[0].Single]},{"a":2,"n":"Vector3ToVector2","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0}],"sn":"Vector3ToVector2","rt":$n[1].Vector2,"p":[$n[1].Vector3]}]}; }, $n);
    /*MMMaths end.*/

    /*RotateObject start.*/
    $m("RotateObject", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"angle","t":4,"rt":$n[0].Single,"sn":"angle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*RotateObject end.*/

    /*SimplePool start.*/
    $m("SimplePool", function () { return {"nested":[SimplePool.Pool],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"ClearPool","is":true,"t":8,"sn":"ClearPool","rt":$n[0].Void},{"a":2,"n":"Despawn","is":true,"t":8,"pi":[{"n":"obj","pt":$n[1].GameObject,"ps":0}],"sn":"Despawn","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"GetStackCount","is":true,"t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0}],"sn":"GetStackCount","rt":$n[0].Int32,"p":[$n[1].GameObject],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"Init","is":true,"t":8,"pi":[{"n":"prefab","dv":null,"o":true,"pt":$n[1].GameObject,"ps":0},{"n":"qty","dv":3,"o":true,"pt":$n[0].Int32,"ps":1}],"sn":"Init","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Int32]},{"a":2,"n":"PoolPreLoad","is":true,"t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0},{"n":"qty","pt":$n[0].Int32,"ps":1},{"n":"newParent","dv":null,"o":true,"pt":$n[1].Transform,"ps":2}],"sn":"PoolPreLoad","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Int32,$n[1].Transform]},{"a":2,"n":"Preload","is":true,"t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0},{"n":"qty","dv":1,"o":true,"pt":$n[0].Int32,"ps":1},{"n":"newParent","dv":null,"o":true,"pt":$n[1].Transform,"ps":2}],"sn":"Preload","rt":System.Array.type(UnityEngine.GameObject),"p":[$n[1].GameObject,$n[0].Int32,$n[1].Transform]},{"a":2,"n":"Spawn","is":true,"t":8,"pi":[{"n":"prefab","pt":System.Object,"ps":0}],"tpc":1,"tprm":["T"],"sn":"Spawn","rt":System.Object,"p":[System.Object]},{"a":2,"n":"Spawn","is":true,"t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0}],"sn":"Spawn$2","rt":$n[1].GameObject,"p":[$n[1].GameObject]},{"a":2,"n":"Spawn","is":true,"t":8,"pi":[{"n":"prefab","pt":System.Object,"ps":0},{"n":"pos","pt":$n[1].Vector3,"ps":1},{"n":"rot","pt":$n[1].Quaternion,"ps":2}],"tpc":1,"tprm":["T"],"sn":"Spawn$1","rt":System.Object,"p":[System.Object,$n[1].Vector3,$n[1].Quaternion]},{"a":2,"n":"Spawn","is":true,"t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0},{"n":"pos","pt":$n[1].Vector3,"ps":1},{"n":"rot","pt":$n[1].Quaternion,"ps":2}],"sn":"Spawn$3","rt":$n[1].GameObject,"p":[$n[1].GameObject,$n[1].Vector3,$n[1].Quaternion]},{"a":1,"n":"DEFAULT_POOL_SIZE","is":true,"t":4,"rt":$n[0].Int32,"sn":"DEFAULT_POOL_SIZE","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"_pools","is":true,"t":4,"rt":$n[2].Dictionary$2(System.Int32,SimplePool.Pool),"sn":"_pools"}]}; }, $n);
    /*SimplePool end.*/

    /*SimplePool+Pool start.*/
    $m("SimplePool.Pool", function () { return {"td":SimplePool,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].GameObject,$n[0].Int32],"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0},{"n":"initialQty","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"a":2,"n":"Despawn","t":8,"pi":[{"n":"obj","pt":$n[1].GameObject,"ps":0}],"sn":"Despawn","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"Preload","t":8,"pi":[{"n":"initialQty","pt":$n[0].Int32,"ps":0},{"n":"parent","dv":null,"o":true,"pt":$n[1].Transform,"ps":1}],"sn":"Preload","rt":$n[0].Void,"p":[$n[0].Int32,$n[1].Transform]},{"a":2,"n":"Spawn","t":8,"pi":[{"n":"pos","pt":$n[1].Vector3,"ps":0},{"n":"rot","pt":$n[1].Quaternion,"ps":1}],"tpc":1,"tprm":["T"],"sn":"Spawn","rt":System.Object,"p":[$n[1].Vector3,$n[1].Quaternion]},{"a":2,"n":"Spawn","t":8,"pi":[{"n":"pos","pt":$n[1].Vector3,"ps":0},{"n":"rot","pt":$n[1].Quaternion,"ps":1}],"sn":"Spawn$1","rt":$n[1].GameObject,"p":[$n[1].Vector3,$n[1].Quaternion]},{"a":2,"n":"StackCount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_StackCount","t":8,"rt":$n[0].Int32,"fg":"StackCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"StackCount"},{"a":2,"n":"MemberIDs","t":4,"rt":$n[2].HashSet$1(System.Int32),"sn":"MemberIDs","ro":true},{"a":1,"n":"_inactive","t":4,"rt":$n[2].Queue$1(UnityEngine.GameObject),"sn":"_inactive","ro":true},{"a":1,"n":"_nextId","t":4,"rt":$n[0].Int32,"sn":"_nextId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_prefab","t":4,"rt":$n[1].GameObject,"sn":"_prefab","ro":true}]}; }, $n);
    /*SimplePool+Pool end.*/

    /*SingletonWithouMono$1 start.*/
    $m("SingletonWithouMono$1", function (T) { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":3,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[0].Void},{"v":true,"a":2,"n":"Preload","t":8,"sn":"Preload","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":T,"g":{"a":2,"n":"get_Instance","t":8,"rt":T,"fg":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"initialized","t":4,"rt":$n[0].Boolean,"sn":"initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":3,"n":"instance","is":true,"t":4,"rt":T,"sn":"instance"}]}; }, $n);
    /*SingletonWithouMono$1 end.*/

    /*SingletonMono$1 start.*/
    $m("SingletonMono$1", function (T) { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":3,"n":"instance","is":true,"t":4,"rt":T,"sn":"instance"}]}; }, $n);
    /*SingletonMono$1 end.*/

    /*Singleton$1 start.*/
    $m("Singleton$1", function (T) { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Instance","is":true,"t":16,"rt":T,"g":{"a":2,"n":"get_Instance","t":8,"rt":T,"fg":"Instance","is":true},"fn":"Instance"}]}; }, $n);
    /*Singleton$1 end.*/

    /*SingletonDontDestroyOnLoad$1 start.*/
    $m("SingletonDontDestroyOnLoad$1", function (T) { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void}]}; }, $n);
    /*SingletonDontDestroyOnLoad$1 end.*/

    /*VectorUlti start.*/
    $m("VectorUlti", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GetAngleFromVector","is":true,"t":8,"pi":[{"n":"dir","pt":$n[1].Vector3,"ps":0}],"sn":"GetAngleFromVector","rt":$n[0].Single,"p":[$n[1].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetVectorFromAngle","is":true,"t":8,"pi":[{"n":"angle","pt":$n[0].Single,"ps":0}],"sn":"GetVectorFromAngle","rt":$n[1].Vector3,"p":[$n[0].Single]},{"a":2,"n":"Move","is":true,"t":8,"pi":[{"n":"vector3","pt":$n[1].Vector3,"ps":0},{"n":"direction","pt":$n[1].Vector3,"ps":1}],"sn":"Move","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3]},{"a":2,"n":"Set","is":true,"t":8,"pi":[{"n":"vector2","pt":$n[1].Vector2,"ps":0},{"n":"x","dv":null,"o":true,"pt":$n[0].Nullable$1(System.Single),"ps":1},{"n":"y","dv":null,"o":true,"pt":$n[0].Nullable$1(System.Single),"ps":2}],"sn":"Set","rt":$n[1].Vector2,"p":[$n[1].Vector2,$n[0].Nullable$1(System.Single),$n[0].Nullable$1(System.Single)]},{"a":2,"n":"Set","is":true,"t":8,"pi":[{"n":"vector3","pt":$n[1].Vector3,"ps":0},{"n":"x","dv":null,"o":true,"pt":$n[0].Nullable$1(System.Single),"ps":1},{"n":"y","dv":null,"o":true,"pt":$n[0].Nullable$1(System.Single),"ps":2},{"n":"z","dv":null,"o":true,"pt":$n[0].Nullable$1(System.Single),"ps":3}],"sn":"Set$1","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[0].Nullable$1(System.Single),$n[0].Nullable$1(System.Single),$n[0].Nullable$1(System.Single)]},{"a":2,"n":"ToVectorXZ","is":true,"t":8,"pi":[{"n":"vector3","pt":$n[1].Vector3,"ps":0}],"sn":"ToVectorXZ","rt":$n[1].Vector2,"p":[$n[1].Vector3]}]}; }, $n);
    /*VectorUlti end.*/

    /*JoystickPlayerExample start.*/
    $m("JoystickPlayerExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickPlayerExample end.*/

    /*JoystickSetterExample start.*/
    $m("JoystickSetterExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AxisChanged","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"AxisChanged","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"ModeChanged","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"ModeChanged","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SnapX","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SnapX","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SnapY","t":8,"pi":[{"n":"value","pt":$n[0].Boolean,"ps":0}],"sn":"SnapY","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"axisSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"axisSprites"},{"a":2,"n":"background","t":4,"rt":$n[4].Image,"sn":"background"},{"a":2,"n":"valueText","t":4,"rt":$n[4].Text,"sn":"valueText"},{"a":2,"n":"variableJoystick","t":4,"rt":VariableJoystick,"sn":"variableJoystick"}]}; }, $n);
    /*JoystickSetterExample end.*/

    /*Joystick start.*/
    $m("Joystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FormatInput","t":8,"sn":"FormatInput","rt":$n[0].Void},{"v":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"v":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"v":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":3,"n":"ScreenPointToAnchoredPosition","t":8,"pi":[{"n":"screenPosition","pt":$n[1].Vector2,"ps":0}],"sn":"ScreenPointToAnchoredPosition","rt":$n[1].Vector2,"p":[$n[1].Vector2]},{"a":1,"n":"SnapFloat","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"snapAxis","pt":AxisOptions,"ps":1}],"sn":"SnapFloat","rt":$n[0].Single,"p":[$n[0].Single,AxisOptions],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"v":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"AxisOptions","t":16,"rt":AxisOptions,"g":{"a":2,"n":"get_AxisOptions","t":8,"rt":AxisOptions,"fg":"AxisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},"s":{"a":2,"n":"set_AxisOptions","t":8,"p":[AxisOptions],"rt":$n[0].Void,"fs":"AxisOptions"},"fn":"AxisOptions"},{"a":2,"n":"DeadZone","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_DeadZone","t":8,"rt":$n[0].Single,"fg":"DeadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_DeadZone","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"DeadZone"},"fn":"DeadZone"},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":2,"n":"HandleRange","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HandleRange","t":8,"rt":$n[0].Single,"fg":"HandleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_HandleRange","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"HandleRange"},"fn":"HandleRange"},{"a":2,"n":"Horizontal","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Horizontal","t":8,"rt":$n[0].Single,"fg":"Horizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Horizontal"},{"a":2,"n":"SnapX","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapX","t":8,"rt":$n[0].Boolean,"fg":"SnapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapX","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapX"},"fn":"SnapX"},{"a":2,"n":"SnapY","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapY","t":8,"rt":$n[0].Boolean,"fg":"SnapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapY","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapY"},"fn":"SnapY"},{"a":2,"n":"Vertical","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Vertical","t":8,"rt":$n[0].Single,"fg":"Vertical","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Vertical"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"axisOptions","t":4,"rt":AxisOptions,"sn":"axisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"background","t":4,"rt":$n[1].RectTransform,"sn":"background"},{"a":1,"n":"baseRect","t":4,"rt":$n[1].RectTransform,"sn":"baseRect"},{"a":1,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"a":1,"n":"canvas","t":4,"rt":$n[1].Canvas,"sn":"canvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadZone","t":4,"rt":$n[0].Single,"sn":"deadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handle","t":4,"rt":$n[1].RectTransform,"sn":"handle$1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handleRange","t":4,"rt":$n[0].Single,"sn":"handleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"input","t":4,"rt":$n[1].Vector2,"sn":"input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapX","t":4,"rt":$n[0].Boolean,"sn":"snapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapY","t":4,"rt":$n[0].Boolean,"sn":"snapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Joystick end.*/

    /*AxisOptions start.*/
    $m("AxisOptions", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Both","is":true,"t":4,"rt":AxisOptions,"sn":"Both","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Horizontal","is":true,"t":4,"rt":AxisOptions,"sn":"Horizontal","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":AxisOptions,"sn":"Vertical","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}}]}; }, $n);
    /*AxisOptions end.*/

    /*DynamicJoystick start.*/
    $m("DynamicJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    $m("FixedJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    $m("FloatingJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void}]}; }, $n);
    /*FloatingJoystick end.*/

    /*VariableJoystick start.*/
    $m("VariableJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"SetMode","t":8,"pi":[{"n":"joystickType","pt":JoystickType,"ps":0}],"sn":"SetMode","rt":$n[0].Void,"p":[JoystickType]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"a":1,"n":"fixedPosition","t":4,"rt":$n[1].Vector2,"sn":"fixedPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystickType","t":4,"rt":JoystickType,"sn":"joystickType","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*VariableJoystick end.*/

    /*JoystickType start.*/
    $m("JoystickType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Dynamic","is":true,"t":4,"rt":JoystickType,"sn":"Dynamic","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Fixed","is":true,"t":4,"rt":JoystickType,"sn":"Fixed","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Floating","is":true,"t":4,"rt":JoystickType,"sn":"Floating","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}}]}; }, $n);
    /*JoystickType end.*/

    /*UltimateJoystick start.*/
    $m("UltimateJoystick", function () { return {"nested":[UltimateJoystick.ScalingAxis,UltimateJoystick.Anchor,UltimateJoystick.JoystickTouchSize,UltimateJoystick.Axis,UltimateJoystick.Boundary,UltimateJoystick.TapCountOption],"att":1048577,"a":2,"at":[new UnityEngine.ExecuteInEditModeAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CheckJoystickHighlightForUse","t":8,"sn":"CheckJoystickHighlightForUse","rt":$n[0].Void},{"a":1,"n":"ConfigureImagePosition","t":8,"pi":[{"n":"textureSize","pt":$n[1].Vector2,"ps":0},{"n":"customSpacing","pt":$n[1].Vector2,"ps":1}],"sn":"ConfigureImagePosition","rt":$n[1].Vector2,"p":[$n[1].Vector2,$n[1].Vector2]},{"a":2,"n":"DisableJoystick","t":8,"sn":"DisableJoystick","rt":$n[0].Void},{"a":2,"n":"DisableJoystick","is":true,"t":8,"pi":[{"n":"joystickName","pt":$n[0].String,"ps":0}],"sn":"DisableJoystick","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"EnableJoystick","t":8,"sn":"EnableJoystick","rt":$n[0].Void},{"a":2,"n":"EnableJoystick","is":true,"t":8,"pi":[{"n":"joystickName","pt":$n[0].String,"ps":0}],"sn":"EnableJoystick","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"FadeLogic","t":8,"sn":"FadeLogic","rt":$n[3].IEnumerator},{"a":1,"n":"GetCanvasGroup","t":8,"sn":"GetCanvasGroup","rt":$n[1].CanvasGroup},{"a":2,"n":"GetDistance","t":8,"sn":"GetDistance","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetDistance","is":true,"t":8,"pi":[{"n":"joystickName","pt":$n[0].String,"ps":0}],"sn":"GetDistance","rt":$n[0].Single,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetHorizontalAxis","t":8,"sn":"GetHorizontalAxis","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetHorizontalAxis","is":true,"t":8,"pi":[{"n":"joystickName","pt":$n[0].String,"ps":0}],"sn":"GetHorizontalAxis","rt":$n[0].Single,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetHorizontalAxisRaw","t":8,"sn":"GetHorizontalAxisRaw","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetHorizontalAxisRaw","is":true,"t":8,"pi":[{"n":"joystickName","pt":$n[0].String,"ps":0}],"sn":"GetHorizontalAxisRaw","rt":$n[0].Single,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetJoystickState","t":8,"sn":"GetJoystickState","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetJoystickState","is":true,"t":8,"pi":[{"n":"joystickName","pt":$n[0].String,"ps":0}],"sn":"GetJoystickState","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"GetParentCanvas","t":8,"sn":"GetParentCanvas","rt":$n[1].Canvas},{"a":2,"n":"GetTapCount","t":8,"sn":"GetTapCount","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetTapCount","is":true,"t":8,"pi":[{"n":"joystickName","pt":$n[0].String,"ps":0}],"sn":"GetTapCount","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GetUltimateJoystick","is":true,"t":8,"pi":[{"n":"joystickName","pt":$n[0].String,"ps":0}],"sn":"GetUltimateJoystick","rt":UltimateJoystick,"p":[$n[0].String]},{"a":2,"n":"GetVerticalAxis","t":8,"sn":"GetVerticalAxis","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetVerticalAxis","is":true,"t":8,"pi":[{"n":"joystickName","pt":$n[0].String,"ps":0}],"sn":"GetVerticalAxis","rt":$n[0].Single,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetVerticalAxisRaw","t":8,"sn":"GetVerticalAxisRaw","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetVerticalAxisRaw","is":true,"t":8,"pi":[{"n":"joystickName","pt":$n[0].String,"ps":0}],"sn":"GetVerticalAxisRaw","rt":$n[0].Single,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GravityHandler","t":8,"sn":"GravityHandler","rt":$n[3].IEnumerator},{"a":1,"n":"JoystickConfirmed","is":true,"t":8,"pi":[{"n":"joystickName","pt":$n[0].String,"ps":0}],"sn":"JoystickConfirmed","rt":$n[0].Boolean,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"touchInfo","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"touchInfo","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"touchInfo","pt":$n[5].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":1,"n":"ResetJoystick","t":8,"sn":"ResetJoystick","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"TapCountDelay","t":8,"sn":"TapCountDelay","rt":$n[3].IEnumerator},{"a":1,"n":"TapCountdown","t":8,"sn":"TapCountdown","rt":$n[3].IEnumerator},{"a":1,"n":"TensionAccentDisplay","t":8,"sn":"TensionAccentDisplay","rt":$n[0].Void},{"a":1,"n":"TensionAccentReset","t":8,"sn":"TensionAccentReset","rt":$n[0].Void},{"a":2,"n":"UpdateHighlightColor","t":8,"pi":[{"n":"targetColor","pt":$n[1].Color,"ps":0}],"sn":"UpdateHighlightColor","rt":$n[0].Void,"p":[$n[1].Color]},{"a":1,"n":"UpdateJoystick","t":8,"pi":[{"n":"touchInfo","pt":$n[5].PointerEventData,"ps":0}],"sn":"UpdateJoystick","rt":$n[0].Void,"p":[$n[5].PointerEventData]},{"a":1,"n":"UpdatePositionValues","t":8,"sn":"UpdatePositionValues","rt":$n[0].Void},{"a":2,"n":"UpdatePositioning","t":8,"sn":"UpdatePositioning","rt":$n[0].Void},{"a":1,"n":"UpdateSizeAndPlacement","t":8,"sn":"UpdateSizeAndPlacement","rt":$n[0].Void},{"a":2,"n":"UpdateTensionColors","t":8,"pi":[{"n":"targetTensionNone","pt":$n[1].Color,"ps":0},{"n":"targetTensionFull","pt":$n[1].Color,"ps":1}],"sn":"UpdateTensionColors","rt":$n[0].Void,"p":[$n[1].Color,$n[1].Color]},{"a":2,"n":"HorizontalAxis","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HorizontalAxis","t":8,"rt":$n[0].Single,"fg":"HorizontalAxis","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_HorizontalAxis","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"HorizontalAxis"},"fn":"HorizontalAxis"},{"a":2,"n":"VerticalAxis","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_VerticalAxis","t":8,"rt":$n[0].Single,"fg":"VerticalAxis","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_VerticalAxis","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"VerticalAxis"},"fn":"VerticalAxis"},{"a":1,"n":"UltimateJoysticks","is":true,"t":4,"rt":$n[2].Dictionary$2(System.String,UltimateJoystick),"sn":"UltimateJoysticks"},{"a":1,"n":"_pointerId","t":4,"rt":$n[0].Int32,"sn":"_pointerId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"anchor","t":4,"rt":UltimateJoystick.Anchor,"sn":"anchor","box":function ($v) { return Bridge.box($v, UltimateJoystick.Anchor, System.Enum.toStringFn(UltimateJoystick.Anchor));}},{"a":1,"n":"animationID","t":4,"rt":$n[0].Int32,"sn":"animationID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"axis","t":4,"rt":UltimateJoystick.Axis,"sn":"axis","box":function ($v) { return Bridge.box($v, UltimateJoystick.Axis, System.Enum.toStringFn(UltimateJoystick.Axis));}},{"a":1,"n":"baseTrans","t":4,"rt":$n[1].RectTransform,"sn":"baseTrans"},{"a":2,"n":"boundary","t":4,"rt":UltimateJoystick.Boundary,"sn":"boundary","box":function ($v) { return Bridge.box($v, UltimateJoystick.Boundary, System.Enum.toStringFn(UltimateJoystick.Boundary));}},{"a":1,"n":"currentTapTime","t":4,"rt":$n[0].Single,"sn":"currentTapTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"customSpacing_X","t":4,"rt":$n[0].Single,"sn":"customSpacing_X","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"customSpacing_Y","t":4,"rt":$n[0].Single,"sn":"customSpacing_Y","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"customTouchSizePos_X","t":4,"rt":$n[0].Single,"sn":"customTouchSizePos_X","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"customTouchSizePos_Y","t":4,"rt":$n[0].Single,"sn":"customTouchSizePos_Y","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"customTouchSize_X","t":4,"rt":$n[0].Single,"sn":"customTouchSize_X","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"customTouchSize_Y","t":4,"rt":$n[0].Single,"sn":"customTouchSize_Y","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"deadZone","t":4,"rt":$n[0].Single,"sn":"deadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"defaultPos","t":4,"rt":$n[1].Vector2,"sn":"defaultPos"},{"a":2,"n":"disableVisuals","t":4,"rt":$n[0].Boolean,"sn":"disableVisuals","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"dynamicPositioning","t":4,"rt":$n[0].Boolean,"sn":"dynamicPositioning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"extendRadius","t":4,"rt":$n[0].Boolean,"sn":"extendRadius","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"fadeInDuration","t":4,"rt":$n[0].Single,"sn":"fadeInDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"fadeInSpeed","t":4,"rt":$n[0].Single,"sn":"fadeInSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"fadeOutDuration","t":4,"rt":$n[0].Single,"sn":"fadeOutDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"fadeOutSpeed","t":4,"rt":$n[0].Single,"sn":"fadeOutSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"fadeTouched","t":4,"rt":$n[0].Single,"sn":"fadeTouched","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"fadeUntouched","t":4,"rt":$n[0].Single,"sn":"fadeUntouched","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"gravity","t":4,"rt":$n[0].Single,"sn":"gravity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"gravityActive","t":4,"rt":$n[0].Boolean,"sn":"gravityActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"highlightBase","t":4,"rt":$n[4].Image,"sn":"highlightBase"},{"a":2,"n":"highlightColor","t":4,"rt":$n[1].Color,"sn":"highlightColor"},{"a":2,"n":"highlightJoystick","t":4,"rt":$n[4].Image,"sn":"highlightJoystick"},{"a":2,"n":"joystick","t":4,"rt":$n[1].RectTransform,"sn":"joystick"},{"a":2,"n":"joystickAnimator","t":4,"rt":$n[1].Animator,"sn":"joystickAnimator"},{"a":2,"n":"joystickBase","t":4,"rt":$n[1].RectTransform,"sn":"joystickBase"},{"a":1,"n":"joystickCenter","t":4,"rt":$n[1].Vector3,"sn":"joystickCenter"},{"a":1,"n":"joystickGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"joystickGroup"},{"a":2,"n":"joystickName","t":4,"rt":$n[0].String,"sn":"joystickName"},{"a":2,"n":"joystickSize","t":4,"rt":$n[0].Single,"sn":"joystickSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"joystickSizeFolder","t":4,"rt":$n[1].RectTransform,"sn":"joystickSizeFolder"},{"a":1,"n":"joystickState","t":4,"rt":$n[0].Boolean,"sn":"joystickState","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"joystickTouchSize","t":4,"rt":UltimateJoystick.JoystickTouchSize,"sn":"joystickTouchSize","box":function ($v) { return Bridge.box($v, UltimateJoystick.JoystickTouchSize, System.Enum.toStringFn(UltimateJoystick.JoystickTouchSize));}},{"a":1,"n":"radius","t":4,"rt":$n[0].Single,"sn":"radius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"radiusModifier","t":4,"rt":$n[0].Single,"sn":"radiusModifier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"scalingAxis","t":4,"rt":UltimateJoystick.ScalingAxis,"sn":"scalingAxis","box":function ($v) { return Bridge.box($v, UltimateJoystick.ScalingAxis, System.Enum.toStringFn(UltimateJoystick.ScalingAxis));}},{"a":2,"n":"showHighlight","t":4,"rt":$n[0].Boolean,"sn":"showHighlight","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"showTension","t":4,"rt":$n[0].Boolean,"sn":"showTension","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"tapCount","t":4,"rt":$n[0].Int32,"sn":"tapCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"tapCountAchieved","t":4,"rt":$n[0].Boolean,"sn":"tapCountAchieved","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"tapCountDuration","t":4,"rt":$n[0].Single,"sn":"tapCountDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"tapCountOption","t":4,"rt":UltimateJoystick.TapCountOption,"sn":"tapCountOption","box":function ($v) { return Bridge.box($v, UltimateJoystick.TapCountOption, System.Enum.toStringFn(UltimateJoystick.TapCountOption));}},{"a":2,"n":"targetTapCount","t":4,"rt":$n[0].Int32,"sn":"targetTapCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"tensionAccentDown","t":4,"rt":$n[4].Image,"sn":"tensionAccentDown"},{"a":2,"n":"tensionAccentLeft","t":4,"rt":$n[4].Image,"sn":"tensionAccentLeft"},{"a":2,"n":"tensionAccentRight","t":4,"rt":$n[4].Image,"sn":"tensionAccentRight"},{"a":2,"n":"tensionAccentUp","t":4,"rt":$n[4].Image,"sn":"tensionAccentUp"},{"a":2,"n":"tensionColorFull","t":4,"rt":$n[1].Color,"sn":"tensionColorFull"},{"a":2,"n":"tensionColorNone","t":4,"rt":$n[1].Color,"sn":"tensionColorNone"},{"a":1,"n":"textureCenter","t":4,"rt":$n[1].Vector2,"sn":"textureCenter"},{"a":1,"n":"updateHighlightPosition","t":4,"rt":$n[0].Boolean,"sn":"updateHighlightPosition","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useAnimation","t":4,"rt":$n[0].Boolean,"sn":"useAnimation","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useFade","t":4,"rt":$n[0].Boolean,"sn":"useFade","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<HorizontalAxis>k__BackingField","t":4,"rt":$n[0].Single,"sn":"HorizontalAxis","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<VerticalAxis>k__BackingField","t":4,"rt":$n[0].Single,"sn":"VerticalAxis","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UltimateJoystick end.*/

    /*UltimateJoystick+ScalingAxis start.*/
    $m("UltimateJoystick.ScalingAxis", function () { return {"td":UltimateJoystick,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Height","is":true,"t":4,"rt":UltimateJoystick.ScalingAxis,"sn":"Height","box":function ($v) { return Bridge.box($v, UltimateJoystick.ScalingAxis, System.Enum.toStringFn(UltimateJoystick.ScalingAxis));}},{"a":2,"n":"Width","is":true,"t":4,"rt":UltimateJoystick.ScalingAxis,"sn":"Width","box":function ($v) { return Bridge.box($v, UltimateJoystick.ScalingAxis, System.Enum.toStringFn(UltimateJoystick.ScalingAxis));}}]}; }, $n);
    /*UltimateJoystick+ScalingAxis end.*/

    /*UltimateJoystick+Anchor start.*/
    $m("UltimateJoystick.Anchor", function () { return {"td":UltimateJoystick,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Left","is":true,"t":4,"rt":UltimateJoystick.Anchor,"sn":"Left","box":function ($v) { return Bridge.box($v, UltimateJoystick.Anchor, System.Enum.toStringFn(UltimateJoystick.Anchor));}},{"a":2,"n":"Right","is":true,"t":4,"rt":UltimateJoystick.Anchor,"sn":"Right","box":function ($v) { return Bridge.box($v, UltimateJoystick.Anchor, System.Enum.toStringFn(UltimateJoystick.Anchor));}}]}; }, $n);
    /*UltimateJoystick+Anchor end.*/

    /*UltimateJoystick+JoystickTouchSize start.*/
    $m("UltimateJoystick.JoystickTouchSize", function () { return {"td":UltimateJoystick,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Custom","is":true,"t":4,"rt":UltimateJoystick.JoystickTouchSize,"sn":"Custom","box":function ($v) { return Bridge.box($v, UltimateJoystick.JoystickTouchSize, System.Enum.toStringFn(UltimateJoystick.JoystickTouchSize));}},{"a":2,"n":"Default","is":true,"t":4,"rt":UltimateJoystick.JoystickTouchSize,"sn":"Default","box":function ($v) { return Bridge.box($v, UltimateJoystick.JoystickTouchSize, System.Enum.toStringFn(UltimateJoystick.JoystickTouchSize));}},{"a":2,"n":"Large","is":true,"t":4,"rt":UltimateJoystick.JoystickTouchSize,"sn":"Large","box":function ($v) { return Bridge.box($v, UltimateJoystick.JoystickTouchSize, System.Enum.toStringFn(UltimateJoystick.JoystickTouchSize));}},{"a":2,"n":"Medium","is":true,"t":4,"rt":UltimateJoystick.JoystickTouchSize,"sn":"Medium","box":function ($v) { return Bridge.box($v, UltimateJoystick.JoystickTouchSize, System.Enum.toStringFn(UltimateJoystick.JoystickTouchSize));}}]}; }, $n);
    /*UltimateJoystick+JoystickTouchSize end.*/

    /*UltimateJoystick+Axis start.*/
    $m("UltimateJoystick.Axis", function () { return {"td":UltimateJoystick,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Both","is":true,"t":4,"rt":UltimateJoystick.Axis,"sn":"Both","box":function ($v) { return Bridge.box($v, UltimateJoystick.Axis, System.Enum.toStringFn(UltimateJoystick.Axis));}},{"a":2,"n":"X","is":true,"t":4,"rt":UltimateJoystick.Axis,"sn":"X","box":function ($v) { return Bridge.box($v, UltimateJoystick.Axis, System.Enum.toStringFn(UltimateJoystick.Axis));}},{"a":2,"n":"Y","is":true,"t":4,"rt":UltimateJoystick.Axis,"sn":"Y","box":function ($v) { return Bridge.box($v, UltimateJoystick.Axis, System.Enum.toStringFn(UltimateJoystick.Axis));}}]}; }, $n);
    /*UltimateJoystick+Axis end.*/

    /*UltimateJoystick+Boundary start.*/
    $m("UltimateJoystick.Boundary", function () { return {"td":UltimateJoystick,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Circular","is":true,"t":4,"rt":UltimateJoystick.Boundary,"sn":"Circular","box":function ($v) { return Bridge.box($v, UltimateJoystick.Boundary, System.Enum.toStringFn(UltimateJoystick.Boundary));}},{"a":2,"n":"Square","is":true,"t":4,"rt":UltimateJoystick.Boundary,"sn":"Square","box":function ($v) { return Bridge.box($v, UltimateJoystick.Boundary, System.Enum.toStringFn(UltimateJoystick.Boundary));}}]}; }, $n);
    /*UltimateJoystick+Boundary end.*/

    /*UltimateJoystick+TapCountOption start.*/
    $m("UltimateJoystick.TapCountOption", function () { return {"td":UltimateJoystick,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Accumulate","is":true,"t":4,"rt":UltimateJoystick.TapCountOption,"sn":"Accumulate","box":function ($v) { return Bridge.box($v, UltimateJoystick.TapCountOption, System.Enum.toStringFn(UltimateJoystick.TapCountOption));}},{"a":2,"n":"NoCount","is":true,"t":4,"rt":UltimateJoystick.TapCountOption,"sn":"NoCount","box":function ($v) { return Bridge.box($v, UltimateJoystick.TapCountOption, System.Enum.toStringFn(UltimateJoystick.TapCountOption));}},{"a":2,"n":"TouchRelease","is":true,"t":4,"rt":UltimateJoystick.TapCountOption,"sn":"TouchRelease","box":function ($v) { return Bridge.box($v, UltimateJoystick.TapCountOption, System.Enum.toStringFn(UltimateJoystick.TapCountOption));}}]}; }, $n);
    /*UltimateJoystick+TapCountOption end.*/

    /*UltimateJoystickScreenSizeUpdater start.*/
    $m("UltimateJoystickScreenSizeUpdater", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnRectTransformDimensionsChange","t":8,"sn":"OnRectTransformDimensionsChange","rt":$n[0].Void},{"a":1,"n":"YieldPositioning","t":8,"sn":"YieldPositioning","rt":$n[3].IEnumerator}]}; }, $n);
    /*UltimateJoystickScreenSizeUpdater end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*UltimateJoystickExample.Spaceship.AsteroidController start.*/
    $m("UltimateJoystickExample.Spaceship.AsteroidController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DelayInitialDestruction","t":8,"pi":[{"n":"delayTime","pt":$n[0].Single,"ps":0}],"sn":"DelayInitialDestruction","rt":$n[3].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"Explode","t":8,"sn":"Explode","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"theCollision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":2,"n":"Setup","t":8,"pi":[{"n":"force","pt":$n[1].Vector3,"ps":0},{"n":"torque","pt":$n[1].Vector3,"ps":1}],"sn":"Setup","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].Vector3]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"asteroidManager","t":4,"rt":$n[6].GameManager,"sn":"asteroidManager"},{"a":1,"n":"canDestroy","t":4,"rt":$n[0].Boolean,"sn":"canDestroy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isDebris","t":4,"rt":$n[0].Boolean,"sn":"isDebris","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isDestroyed","t":4,"rt":$n[0].Boolean,"sn":"isDestroyed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"myRigidbody","t":4,"rt":$n[1].Rigidbody,"sn":"myRigidbody"}]}; }, $n);
    /*UltimateJoystickExample.Spaceship.AsteroidController end.*/

    /*UltimateJoystickExample.Spaceship.GameManager start.*/
    $m("UltimateJoystickExample.Spaceship.GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FadeDeathScreen","t":8,"sn":"FadeDeathScreen","rt":$n[3].IEnumerator},{"a":2,"n":"ModifyScore","t":8,"pi":[{"n":"isDebris","pt":$n[0].Boolean,"ps":0}],"sn":"ModifyScore","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"ShakeCamera","t":8,"sn":"ShakeCamera","rt":$n[3].IEnumerator},{"a":2,"n":"ShowDeathScreen","t":8,"sn":"ShowDeathScreen","rt":$n[0].Void},{"a":1,"n":"SpawnAsteroid","t":8,"sn":"SpawnAsteroid","rt":$n[0].Void},{"a":2,"n":"SpawnDebris","t":8,"pi":[{"n":"pos","pt":$n[1].Vector3,"ps":0}],"sn":"SpawnDebris","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":2,"n":"SpawnExplosion","t":8,"pi":[{"n":"pos","pt":$n[1].Vector3,"ps":0}],"sn":"SpawnExplosion","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"SpawnTimer","t":8,"sn":"SpawnTimer","rt":$n[3].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"UpdateScoreText","t":8,"sn":"UpdateScoreText","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[6].GameManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[6].GameManager,"fg":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"asteroidPoints","t":4,"rt":$n[0].Int32,"sn":"asteroidPoints","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Prefabs")],"a":2,"n":"astroidPrefab","t":4,"rt":$n[1].GameObject,"sn":"astroidPrefab"},{"a":2,"n":"debrisPoints","t":4,"rt":$n[0].Int32,"sn":"debrisPoints","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"debrisPrefab","t":4,"rt":$n[1].GameObject,"sn":"debrisPrefab"},{"a":2,"n":"explosionPrefab","t":4,"rt":$n[1].GameObject,"sn":"explosionPrefab"},{"at":[new UnityEngine.HeaderAttribute("Game Over")],"a":2,"n":"gameOverScreen","t":4,"rt":$n[4].Image,"sn":"gameOverScreen"},{"a":2,"n":"gameOverText","t":4,"rt":$n[4].Text,"sn":"gameOverText"},{"a":1,"n":"instance","is":true,"t":4,"rt":$n[6].GameManager,"sn":"instance"},{"a":2,"n":"playerExplosionPrefab","t":4,"rt":$n[1].GameObject,"sn":"playerExplosionPrefab"},{"a":1,"n":"score","t":4,"rt":$n[0].Int32,"sn":"score","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Score")],"a":2,"n":"scoreText","t":4,"rt":$n[4].Text,"sn":"scoreText"},{"a":2,"n":"spawnTimeMax","t":4,"rt":$n[0].Single,"sn":"spawnTimeMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Spawning")],"a":2,"n":"spawnTimeMin","t":4,"rt":$n[0].Single,"sn":"spawnTimeMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"spawning","t":4,"rt":$n[0].Boolean,"sn":"spawning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"startingAsteroids","t":4,"rt":$n[0].Int32,"sn":"startingAsteroids","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*UltimateJoystickExample.Spaceship.GameManager end.*/

    /*UltimateJoystickExample.Spaceship.PlayerController start.*/
    $m("UltimateJoystickExample.Spaceship.PlayerController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckExitScreen","t":8,"sn":"CheckExitScreen","rt":$n[0].Void},{"a":1,"n":"CreateBullets","t":8,"sn":"CreateBullets","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"accelerationSpeed","t":4,"rt":$n[0].Single,"sn":"accelerationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Assigned Variables")],"a":2,"n":"bulletPrefab","t":4,"rt":$n[1].GameObject,"sn":"bulletPrefab"},{"a":2,"n":"bulletSpawnPos","t":4,"rt":$n[1].Transform,"sn":"bulletSpawnPos"},{"a":1,"n":"canControl","t":4,"rt":$n[0].Boolean,"sn":"canControl","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"gunTrans","t":4,"rt":$n[1].Transform,"sn":"gunTrans"},{"a":2,"n":"maxSpeed","t":4,"rt":$n[0].Single,"sn":"maxSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"movePosition","t":4,"rt":$n[1].Vector3,"sn":"movePosition"},{"a":1,"n":"myRigidbody","t":4,"rt":$n[1].Rigidbody,"sn":"myRigidbody"},{"a":2,"n":"playerVisuals","t":4,"rt":$n[1].GameObject,"sn":"playerVisuals"},{"at":[new UnityEngine.HeaderAttribute("Speeds")],"a":2,"n":"rotationSpeed","t":4,"rt":$n[0].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"shootPosition","t":4,"rt":$n[1].Vector3,"sn":"shootPosition"},{"a":2,"n":"shootingCooldown","t":4,"rt":$n[0].Single,"sn":"shootingCooldown","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"shootingTimer","t":4,"rt":$n[0].Single,"sn":"shootingTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*UltimateJoystickExample.Spaceship.PlayerController end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[7].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[7].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[9].Sequence,"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[10].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[10].Path,$n[0].Single,$n[9].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[9].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[9].PathType,$n[9].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"towards","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[9].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[8].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[9].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[10].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[10].Path,$n[0].Single,$n[9].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[9].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[9].PathType,$n[9].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[9].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[8].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[9].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[9].Sequence,"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[10].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[10].Path,$n[0].Single,$n[9].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[9].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[9].PathType,$n[9].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[10].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[10].Path,$n[0].Single,$n[9].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[9].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[9].PathType,$n[9].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[9].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":$n[1].Gradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[9].Sequence,"p":[$n[1].SpriteRenderer,$n[1].Gradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[9].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[9].Tweener,"p":[$n[4].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[9].Tweener,"p":[$n[4].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[9].Tweener,"p":[$n[4].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[11].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[8].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[4].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[11].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[4].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Image,"ps":0},{"n":"gradient","pt":$n[1].Gradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[9].Sequence,"p":[$n[4].Image,$n[1].Gradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[9].Tweener,"p":[$n[4].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[9].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[9].Tweener,"p":[$n[4].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[9].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[4].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6}],"sn":"DOShakeAnchorPos","rt":$n[9].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6}],"sn":"DOShakeAnchorPos$1","rt":$n[9].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[9].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[8].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[4].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[9].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[4].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[4].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[9].Tweener,"p":[$n[4].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[9].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":$n[1].Gradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[9].Sequence,"p":[$n[1].Material,$n[1].Gradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":$n[1].Gradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[9].Sequence,"p":[$n[1].Material,$n[1].Gradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[9].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[9].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[9].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[9].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[9].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[9].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[9].DOTweenCYInstruction.WaitForCompletion,$n[9].DOTweenCYInstruction.WaitForRewind,$n[9].DOTweenCYInstruction.WaitForKill,$n[9].DOTweenCYInstruction.WaitForElapsedLoops,$n[9].DOTweenCYInstruction.WaitForPosition,$n[9].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[9].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[9].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[10].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[9].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[10].Path,$n[0].Single,$n[9].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[12].PathOptions,"ps":0},{"n":"t","pt":$n[9].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[12].PathOptions,$n[9].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

});
