#ifndef AppDelegate_h
#define AppDelegate_h


#include "platform/CCApplication.h"


class  AppDelegate : private cocos2d::Application
{
public:
    AppDelegate();
    virtual ~AppDelegate();
    
    void initGLContextAttrs() override;
    virtual bool applicationDidFinishLaunching() override;
    virtual void applicationDidEnterBackground() override;
    virtual void applicationWillEnterForeground() override;
};


#endif /* AppDelegate_h */
