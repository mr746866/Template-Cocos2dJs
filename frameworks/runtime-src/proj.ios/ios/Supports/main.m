#import <UIKit/UIKit.h>


int main(int argc, char* argv[])
{
    NSAutoreleasePool* autoreleasePool = [[NSAutoreleasePool alloc] init];
    int retVal = UIApplicationMain(argc, argv, nil, @"AppController");
    [autoreleasePool release];
    
    return retVal;
}
