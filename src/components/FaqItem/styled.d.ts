/// <reference types="react" />
export declare const Container: import('@emotion/styled').StyledComponent<
  {
    children?: import('react').ReactNode;
    classes?: Partial<import('@mui/material').PaperClasses> | undefined;
    elevation?: number | undefined;
    square?: boolean | undefined;
    sx?: import('@mui/material').SxProps<import('@mui/material').Theme> | undefined;
    variant?: 'elevation' | 'outlined' | undefined;
  } & import('@mui/material/OverridableComponent').CommonProps &
    Omit<
      Pick<
        import('react').DetailedHTMLProps<
          import('react').HTMLAttributes<HTMLDivElement>,
          HTMLDivElement
        >,
        'key' | keyof import('react').HTMLAttributes<HTMLDivElement>
      > & {
        ref?:
          | ((instance: HTMLDivElement | null) => void)
          | import('react').RefObject<HTMLDivElement>
          | null
          | undefined;
      },
      | 'children'
      | keyof import('@mui/material/OverridableComponent').CommonProps
      | 'sx'
      | 'elevation'
      | 'variant'
      | 'square'
    > &
    import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme>,
  {},
  {}
>;
export declare const FaqTitle: import('@emotion/styled').StyledComponent<
  import('@mui/system').SystemProps<import('@mui/material').Theme> & {
    ref?: import('react').Ref<unknown> | undefined;
    children?: import('react').ReactNode;
    direction?:
      | import('@mui/system').ResponsiveStyleValue<
          'row' | 'row-reverse' | 'column' | 'column-reverse'
        >
      | undefined;
    spacing?: import('@mui/system').ResponsiveStyleValue<string | number> | undefined;
    divider?: import('react').ReactNode;
    sx?: import('@mui/material').SxProps<import('@mui/material').Theme> | undefined;
  } & import('@mui/material/OverridableComponent').CommonProps &
    Omit<
      Pick<
        import('react').DetailedHTMLProps<
          import('react').HTMLAttributes<HTMLDivElement>,
          HTMLDivElement
        >,
        'key' | keyof import('react').HTMLAttributes<HTMLDivElement>
      > & {
        ref?:
          | ((instance: HTMLDivElement | null) => void)
          | import('react').RefObject<HTMLDivElement>
          | null
          | undefined;
      },
      | 'ref'
      | 'children'
      | keyof import('@mui/material/OverridableComponent').CommonProps
      | 'direction'
      | (
          | 'p'
          | 'color'
          | 'border'
          | 'borderTop'
          | 'borderRight'
          | 'borderBottom'
          | 'borderLeft'
          | 'borderColor'
          | 'borderRadius'
          | 'display'
          | 'displayPrint'
          | 'overflow'
          | 'textOverflow'
          | 'visibility'
          | 'whiteSpace'
          | 'flexBasis'
          | 'flexDirection'
          | 'flexWrap'
          | 'justifyContent'
          | 'alignItems'
          | 'alignContent'
          | 'order'
          | 'flex'
          | 'flexGrow'
          | 'flexShrink'
          | 'alignSelf'
          | 'justifyItems'
          | 'justifySelf'
          | 'gap'
          | 'columnGap'
          | 'rowGap'
          | 'gridColumn'
          | 'gridRow'
          | 'gridAutoFlow'
          | 'gridAutoColumns'
          | 'gridAutoRows'
          | 'gridTemplateColumns'
          | 'gridTemplateRows'
          | 'gridTemplateAreas'
          | 'gridArea'
          | 'bgcolor'
          | 'zIndex'
          | 'position'
          | 'top'
          | 'right'
          | 'bottom'
          | 'left'
          | 'boxShadow'
          | 'width'
          | 'maxWidth'
          | 'minWidth'
          | 'height'
          | 'maxHeight'
          | 'minHeight'
          | 'boxSizing'
          | 'm'
          | 'mt'
          | 'mr'
          | 'mb'
          | 'ml'
          | 'mx'
          | 'my'
          | 'pt'
          | 'pr'
          | 'pb'
          | 'pl'
          | 'px'
          | 'py'
          | 'margin'
          | 'marginTop'
          | 'marginRight'
          | 'marginBottom'
          | 'marginLeft'
          | 'marginX'
          | 'marginY'
          | 'padding'
          | 'paddingTop'
          | 'paddingRight'
          | 'paddingBottom'
          | 'paddingLeft'
          | 'paddingX'
          | 'paddingY'
          | 'typography'
          | 'fontFamily'
          | 'fontSize'
          | 'fontStyle'
          | 'fontWeight'
          | 'letterSpacing'
          | 'lineHeight'
          | 'textAlign'
          | 'textTransform'
        )
      | 'spacing'
      | 'sx'
      | 'divider'
    > &
    import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme>,
  {},
  {}
>;
