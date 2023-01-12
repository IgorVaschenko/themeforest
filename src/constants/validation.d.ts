import * as yup from 'yup';
export declare const sendEmailSchema: yup.ObjectSchema<
  import('yup/lib/object').Assign<
    import('yup/lib/object').ObjectShape,
    {
      name: import('yup/lib/string').RequiredStringSchema<
        string | undefined,
        import('yup/lib/types').AnyObject
      >;
      email: import('yup/lib/string').RequiredStringSchema<
        string | undefined,
        import('yup/lib/types').AnyObject
      >;
      theme: import('yup/lib/string').RequiredStringSchema<
        string | undefined,
        import('yup/lib/types').AnyObject
      >;
      message: import('yup/lib/string').RequiredStringSchema<
        string | undefined,
        import('yup/lib/types').AnyObject
      >;
    }
  >,
  import('yup/lib/object').AnyObject,
  import('yup/lib/object').TypeOfShape<
    import('yup/lib/object').Assign<
      import('yup/lib/object').ObjectShape,
      {
        name: import('yup/lib/string').RequiredStringSchema<
          string | undefined,
          import('yup/lib/types').AnyObject
        >;
        email: import('yup/lib/string').RequiredStringSchema<
          string | undefined,
          import('yup/lib/types').AnyObject
        >;
        theme: import('yup/lib/string').RequiredStringSchema<
          string | undefined,
          import('yup/lib/types').AnyObject
        >;
        message: import('yup/lib/string').RequiredStringSchema<
          string | undefined,
          import('yup/lib/types').AnyObject
        >;
      }
    >
  >,
  import('yup/lib/object').AssertsShape<
    import('yup/lib/object').Assign<
      import('yup/lib/object').ObjectShape,
      {
        name: import('yup/lib/string').RequiredStringSchema<
          string | undefined,
          import('yup/lib/types').AnyObject
        >;
        email: import('yup/lib/string').RequiredStringSchema<
          string | undefined,
          import('yup/lib/types').AnyObject
        >;
        theme: import('yup/lib/string').RequiredStringSchema<
          string | undefined,
          import('yup/lib/types').AnyObject
        >;
        message: import('yup/lib/string').RequiredStringSchema<
          string | undefined,
          import('yup/lib/types').AnyObject
        >;
      }
    >
  >
>;
export declare const subscribeEmailSchema: yup.ObjectSchema<
  import('yup/lib/object').Assign<
    import('yup/lib/object').ObjectShape,
    {
      email: import('yup/lib/string').RequiredStringSchema<
        string | undefined,
        import('yup/lib/types').AnyObject
      >;
    }
  >,
  import('yup/lib/object').AnyObject,
  import('yup/lib/object').TypeOfShape<
    import('yup/lib/object').Assign<
      import('yup/lib/object').ObjectShape,
      {
        email: import('yup/lib/string').RequiredStringSchema<
          string | undefined,
          import('yup/lib/types').AnyObject
        >;
      }
    >
  >,
  import('yup/lib/object').AssertsShape<
    import('yup/lib/object').Assign<
      import('yup/lib/object').ObjectShape,
      {
        email: import('yup/lib/string').RequiredStringSchema<
          string | undefined,
          import('yup/lib/types').AnyObject
        >;
      }
    >
  >
>;
