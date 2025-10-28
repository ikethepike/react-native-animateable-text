/*
 * Custom - attributedTextWithMeasuredAttachmentsThatFitSize (forked)
 */

#import "JBTextShadowView.h"

#import <React/RCTBridge.h>
#import <React/RCTShadowView+Layout.h>
#import <React/RCTUIManager.h>
#import <yoga/Yoga.h>

#import <React/NSTextStorage+FontScaling.h>
#import <React/RCTTextView.h>


#import "JBTextShadowView.h"

@implementation JBTextShadowView

- (instancetype)initWithBridge:(RCTBridge *)bridge
{
  if (self = [super initWithBridge:bridge]) {
    // Set default values
    _fontSize = 14.0;
  }
  return self;
}

- (void)setText:(NSString *)text
{
  _text = [text copy];
  [self dirtyLayout];
}

- (void)setColor:(UIColor *)color
{
  _color = color;
  [self dirtyLayout];
}

- (void)setFontSize:(CGFloat)fontSize
{
  _fontSize = fontSize;
  [self dirtyLayout];
}

- (void)setFontFamily:(NSString *)fontFamily
{
  _fontFamily = [fontFamily copy];
  [self dirtyLayout];
}

- (void)setFontWeight:(NSString *)fontWeight
{
  _fontWeight = [fontWeight copy];
  [self dirtyLayout];
}

- (void)setFontStyle:(NSString *)fontStyle
{
  _fontStyle = [fontStyle copy];
  [self dirtyLayout];
}

- (void)setTextAlign:(NSString *)textAlign
{
  _textAlign = [textAlign copy];
  [self dirtyLayout];
}

- (void)setLineHeight:(CGFloat)lineHeight
{
  _lineHeight = lineHeight;
  [self dirtyLayout];
}

- (void)setLetterSpacing:(CGFloat)letterSpacing
{
  _letterSpacing = letterSpacing;
  [self dirtyLayout];
}

- (void)setTextDecorationLine:(NSString *)textDecorationLine
{
  _textDecorationLine = [textDecorationLine copy];
  [self dirtyLayout];
}

- (void)didSetProps:(NSArray<NSString *> *)changedProps
{
  [super didSetProps:changedProps];
}

- (NSAttributedString *)attributedTextWithMeasuredAttachmentsThatFitSize:(CGSize)size
{
  static UIImage *placeholderImage;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    placeholderImage = [UIImage new];
  });

  NSMutableAttributedString *attributedText =
      [[NSMutableAttributedString alloc] initWithAttributedString:[self attributedTextWithBaseTextAttributes:nil]];

  // Apply custom properties
  if (self.text.length) {
    @try {
      NSMutableDictionary *attributes = [NSMutableDictionary dictionaryWithDictionary:self.textAttributes.effectiveTextAttributes];
      
      // Apply color
      if (self.color) {
        attributes[NSForegroundColorAttributeName] = self.color;
      }
      
      // Apply font with size, weight, style, and family
      UIFont *font = nil;
      if (self.fontFamily) {
        font = [UIFont fontWithName:self.fontFamily size:self.fontSize];
      }
      if (!font) {
        font = [UIFont systemFontOfSize:self.fontSize];
      }
      
      // Apply font weight and style
      if (self.fontWeight || self.fontStyle) {
        UIFontDescriptor *descriptor = font.fontDescriptor;
        UIFontDescriptorSymbolicTraits traits = 0;
        
        if ([self.fontWeight isEqualToString:@"bold"] || 
            [self.fontWeight isEqualToString:@"700"] ||
            [self.fontWeight isEqualToString:@"800"] ||
            [self.fontWeight isEqualToString:@"900"]) {
          traits |= UIFontDescriptorTraitBold;
        }
        
        if ([self.fontStyle isEqualToString:@"italic"]) {
          traits |= UIFontDescriptorTraitItalic;
        }
        
        if (traits != 0) {
          descriptor = [descriptor fontDescriptorWithSymbolicTraits:traits];
          if (descriptor) {
            font = [UIFont fontWithDescriptor:descriptor size:self.fontSize];
          }
        }
      }
      
      attributes[NSFontAttributeName] = font;
      
      // Apply letter spacing
      if (self.letterSpacing != 0) {
        attributes[NSKernAttributeName] = @(self.letterSpacing);
      }
      
      // Apply text decoration
      if (self.textDecorationLine) {
        if ([self.textDecorationLine containsString:@"underline"]) {
          attributes[NSUnderlineStyleAttributeName] = @(NSUnderlineStyleSingle);
        }
        if ([self.textDecorationLine containsString:@"line-through"]) {
          attributes[NSStrikethroughStyleAttributeName] = @(NSUnderlineStyleSingle);
        }
      }
      
      // Apply line height
      if (self.lineHeight > 0) {
        NSMutableParagraphStyle *paragraphStyle = [[NSMutableParagraphStyle alloc] init];
        paragraphStyle.minimumLineHeight = self.lineHeight;
        paragraphStyle.maximumLineHeight = self.lineHeight;
        
        // Apply text alignment
        if (self.textAlign) {
          if ([self.textAlign isEqualToString:@"left"] || [self.textAlign isEqualToString:@"start"]) {
            paragraphStyle.alignment = NSTextAlignmentLeft;
          } else if ([self.textAlign isEqualToString:@"right"] || [self.textAlign isEqualToString:@"end"]) {
            paragraphStyle.alignment = NSTextAlignmentRight;
          } else if ([self.textAlign isEqualToString:@"center"]) {
            paragraphStyle.alignment = NSTextAlignmentCenter;
          } else if ([self.textAlign isEqualToString:@"justify"]) {
            paragraphStyle.alignment = NSTextAlignmentJustified;
          }
        }
        
        attributes[NSParagraphStyleAttributeName] = paragraphStyle;
      } else if (self.textAlign) {
        // Apply text alignment without line height
        NSMutableParagraphStyle *paragraphStyle = [[NSMutableParagraphStyle alloc] init];
        if ([self.textAlign isEqualToString:@"left"] || [self.textAlign isEqualToString:@"start"]) {
          paragraphStyle.alignment = NSTextAlignmentLeft;
        } else if ([self.textAlign isEqualToString:@"right"] || [self.textAlign isEqualToString:@"end"]) {
          paragraphStyle.alignment = NSTextAlignmentRight;
        } else if ([self.textAlign isEqualToString:@"center"]) {
          paragraphStyle.alignment = NSTextAlignmentCenter;
        } else if ([self.textAlign isEqualToString:@"justify"]) {
          paragraphStyle.alignment = NSTextAlignmentJustified;
        }
        attributes[NSParagraphStyleAttributeName] = paragraphStyle;
      }
      
      NSAttributedString *propertyAttributedText =
      [[NSAttributedString alloc] initWithString:self.text attributes:attributes];
      [attributedText insertAttributedString:propertyAttributedText atIndex:0];
    }
    @catch (NSException *exception) {
      // Fallback to plain text if styling fails
      NSAttributedString *fallbackText = [[NSAttributedString alloc] initWithString:self.text];
      [attributedText insertAttributedString:fallbackText atIndex:0];
    }
  }

  [attributedText beginEditing];

  [attributedText enumerateAttribute:RCTBaseTextShadowViewEmbeddedShadowViewAttributeName
                             inRange:NSMakeRange(0, attributedText.length)
                             options:0
                          usingBlock:^(RCTShadowView *shadowView, NSRange range, __unused BOOL *stop) {
                            if (!shadowView) {
                              return;
                            }

                            CGSize fittingSize = [shadowView sizeThatFitsMinimumSize:CGSizeZero maximumSize:size];
                            NSTextAttachment *attachment = [NSTextAttachment new];
                            attachment.bounds = (CGRect){CGPointZero, fittingSize};
                            attachment.image = placeholderImage;
                            [attributedText addAttribute:NSAttachmentAttributeName value:attachment range:range];
                          }];

  [attributedText endEditing];

  return [attributedText copy];
}

@end
