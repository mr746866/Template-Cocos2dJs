#include "AppDelegate.h"

#include "scripting/js-bindings/auto/jsb_cocos2dx_3d_auto.hpp"
#include "scripting/js-bindings/auto/jsb_cocos2dx_3d_extension_auto.hpp"
#include "scripting/js-bindings/auto/jsb_cocos2dx_auto.hpp"
#include "scripting/js-bindings/auto/jsb_cocos2dx_builder_auto.hpp"
#include "scripting/js-bindings/auto/jsb_cocos2dx_extension_auto.hpp"
#include "scripting/js-bindings/auto/jsb_cocos2dx_network_auto.hpp"
#include "scripting/js-bindings/auto/jsb_cocos2dx_navmesh_auto.hpp"
#include "scripting/js-bindings/auto/jsb_cocos2dx_physics3d_auto.hpp"
#include "scripting/js-bindings/auto/jsb_cocos2dx_spine_auto.hpp"
#include "scripting/js-bindings/auto/jsb_cocos2dx_studio_auto.hpp"
#include "scripting/js-bindings/auto/jsb_cocos2dx_ui_auto.hpp"
#include "scripting/js-bindings/manual/3d/jsb_cocos2dx_3d_manual.h"
#include "scripting/js-bindings/manual/chipmunk/js_bindings_chipmunk_registration.h"
#include "scripting/js-bindings/manual/cocosbuilder/js_bindings_ccbreader.h"
#include "scripting/js-bindings/manual/cocostudio/jsb_cocos2dx_studio_manual.h"
#include "scripting/js-bindings/manual/extension/jsb_cocos2dx_extension_manual.h"
#include "scripting/js-bindings/manual/jsb_opengl_registration.h"
#include "scripting/js-bindings/manual/localstorage/js_bindings_system_registration.h"
#include "scripting/js-bindings/manual/navmesh/jsb_cocos2dx_navmesh_manual.h"
#include "scripting/js-bindings/manual/network/XMLHTTPRequest.h"
#include "scripting/js-bindings/manual/network/jsb_socketio.h"
#include "scripting/js-bindings/manual/network/jsb_websocket.h"
#include "scripting/js-bindings/manual/physics3d/jsb_cocos2dx_physics3d_manual.h"
#include "scripting/js-bindings/manual/spine/jsb_cocos2dx_spine_manual.h"
#include "scripting/js-bindings/manual/ui/jsb_cocos2dx_ui_manual.h"

#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID || CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
#include "scripting/js-bindings/auto/jsb_cocos2dx_experimental_video_auto.hpp"
#include "scripting/js-bindings/auto/jsb_cocos2dx_experimental_webView_auto.hpp"
#include "scripting/js-bindings/manual/experimental/jsb_cocos2dx_experimental_video_manual.h"
#include "scripting/js-bindings/manual/experimental/jsb_cocos2dx_experimental_webView_manual.h"
#endif

#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID || CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
#include "scripting/js-bindings/auto/jsb_cocos2dx_audioengine_auto.hpp"
#endif

#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
#include "cocos/scripting/js-bindings/manual/platform/android/CCJavascriptJavaBridge.h"
#elif (CC_TARGET_PLATFORM == CC_PLATFORM_IOS || CC_TARGET_PLATFORM == CC_PLATFORM_MAC)
#include "cocos/scripting/js-bindings/manual/platform/ios/JavaScriptObjCBridge.h"
#endif

#include "audio/include/SimpleAudioEngine.h"


using namespace cocos2d;
using namespace CocosDenshion;


#pragma mark - AppDelegate

#pragma mark

AppDelegate::AppDelegate()
{
}

AppDelegate::~AppDelegate()
{
    SimpleAudioEngine::end();

    ScriptEngineManager::destroyInstance();
}

#pragma mark

void AppDelegate::initGLContextAttrs()
{
    GLContextAttrs glContextAttrs = {8, 8, 8, 8, 24, 8};

    GLView::setGLContextAttrs(glContextAttrs);
}

bool AppDelegate::applicationDidFinishLaunching()
{
    Director* director = Director::getInstance();
    GLView* glview = director->getOpenGLView();
    
    if (!glview)
    {
        glview = cocos2d::GLViewImpl::createWithRect("Template", Rect(0, 0, 800, 1200));
        
        director->setOpenGLView(glview);
    }

    director->setAnimationInterval(1.0f / 60);

    ScriptingCore* scriptingCore = ScriptingCore::getInstance();
    scriptingCore->addRegisterCallback(register_all_cocos2dx);
    scriptingCore->addRegisterCallback(register_cocos2dx_js_core);
    scriptingCore->addRegisterCallback(jsb_register_system);

    scriptingCore->addRegisterCallback(JSB_register_opengl);

    scriptingCore->addRegisterCallback(register_all_cocos2dx_extension);
    scriptingCore->addRegisterCallback(register_all_cocos2dx_extension_manual);

//    scriptingCore->addRegisterCallback(jsb_register_chipmunk);

//    scriptingCore->addRegisterCallback(register_all_cocos2dx_builder);
//    scriptingCore->addRegisterCallback(register_CCBuilderReader);

//    scriptingCore->addRegisterCallback(register_all_cocos2dx_ui);
//    scriptingCore->addRegisterCallback(register_all_cocos2dx_ui_manual);

//    scriptingCore->addRegisterCallback(register_all_cocos2dx_studio);
//    scriptingCore->addRegisterCallback(register_all_cocos2dx_studio_manual);

//    scriptingCore->addRegisterCallback(register_all_cocos2dx_spine);
//    scriptingCore->addRegisterCallback(register_all_cocos2dx_spine_manual);

//    scriptingCore->addRegisterCallback(MinXmlHttpRequest::_js_register);
//    scriptingCore->addRegisterCallback(register_jsb_websocket);
//    scriptingCore->addRegisterCallback(register_jsb_socketio);
//    scriptingCore->addRegisterCallback(register_all_cocos2dx_network);

//    scriptingCore->addRegisterCallback(register_all_cocos2dx_3d);
//    scriptingCore->addRegisterCallback(register_all_cocos2dx_3d_manual);

//    scriptingCore->addRegisterCallback(register_all_cocos2dx_3d_extension);

//    #if CC_USE_3D_PHYSICS && CC_ENABLE_BULLET_INTEGRATION
//    scriptingCore->addRegisterCallback(register_all_cocos2dx_physics3d);
//    scriptingCore->addRegisterCallback(register_all_cocos2dx_physics3d_manual);
//    #endif

//    #if CC_USE_NAVMESH
//    scriptingCore->addRegisterCallback(register_all_cocos2dx_navmesh);
//    scriptingCore->addRegisterCallback(register_all_cocos2dx_navmesh_manual);
//    #endif

//    #if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID || CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
//    scriptingCore->addRegisterCallback(register_all_cocos2dx_experimental_video);
//    scriptingCore->addRegisterCallback(register_all_cocos2dx_experimental_video_manual);
//    scriptingCore->addRegisterCallback(register_all_cocos2dx_experimental_webView);
//    scriptingCore->addRegisterCallback(register_all_cocos2dx_experimental_webView_manual);
//    #endif

    #if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID || CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
    scriptingCore->addRegisterCallback(register_all_cocos2dx_audioengine);
    #endif
    
    #if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
    scriptingCore->addRegisterCallback(JavaScriptObjCBridge::_js_register);
    #elif (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
    scriptingCore->addRegisterCallback(JavascriptJavaBridge::_js_register);
    #endif
    
    scriptingCore->start();
    scriptingCore->runScript("script/jsb_boot.js");
    
    #if defined(COCOS2D_DEBUG) && (COCOS2D_DEBUG > 0)
    scriptingCore->enableDebugger();
    #endif

    ScriptEngineProtocol* engine = ScriptingCore::getInstance();
    ScriptEngineManager::getInstance()->setScriptEngine(engine);
    ScriptingCore::getInstance()->runScript("main.js");

    return true;
}

void AppDelegate::applicationDidEnterBackground()
{
    Director* director = Director::getInstance();
    director->stopAnimation();
    director->getEventDispatcher()->dispatchCustomEvent("game_on_hide");

    SimpleAudioEngine::getInstance()->pauseAllEffects();
    SimpleAudioEngine::getInstance()->pauseBackgroundMusic();
}

void AppDelegate::applicationWillEnterForeground()
{
    Director* director = Director::getInstance();
    director->startAnimation();
    director->getEventDispatcher()->dispatchCustomEvent("game_on_show");

    SimpleAudioEngine::getInstance()->resumeAllEffects();
    SimpleAudioEngine::getInstance()->resumeBackgroundMusic();
}
