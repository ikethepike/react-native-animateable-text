/*
 * Custom
 */


#import <React/RCTTextShadowView.h>

NS_ASSUME_NONNULL_BEGIN

@interface JBTextShadowView : RCTTextShadowView

@property (nonatomic, copy) NSString* text;
@property (nonatomic, strong) UIColor* color;
@property (nonatomic, assign) CGFloat fontSize;
@property (nonatomic, copy) NSString* fontFamily;
@property (nonatomic, copy) NSString* fontWeight;
@property (nonatomic, copy) NSString* fontStyle;
@property (nonatomic, copy) NSString* textAlign;
@property (nonatomic, assign) NSInteger numberOfLines;
@property (nonatomic, assign) CGFloat lineHeight;
@property (nonatomic, assign) CGFloat letterSpacing;
@property (nonatomic, copy) NSString* textDecorationLine;

@end

NS_ASSUME_NONNULL_END
