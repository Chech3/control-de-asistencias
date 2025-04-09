
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Estudiante
 * 
 */
export type Estudiante = $Result.DefaultSelection<Prisma.$EstudiantePayload>
/**
 * Model Profesor
 * 
 */
export type Profesor = $Result.DefaultSelection<Prisma.$ProfesorPayload>
/**
 * Model Obrero
 * 
 */
export type Obrero = $Result.DefaultSelection<Prisma.$ObreroPayload>
/**
 * Model Asistencia
 * 
 */
export type Asistencia = $Result.DefaultSelection<Prisma.$AsistenciaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Estudiantes
 * const estudiantes = await prisma.estudiante.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Estudiantes
   * const estudiantes = await prisma.estudiante.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.estudiante`: Exposes CRUD operations for the **Estudiante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estudiantes
    * const estudiantes = await prisma.estudiante.findMany()
    * ```
    */
  get estudiante(): Prisma.EstudianteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profesor`: Exposes CRUD operations for the **Profesor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profesors
    * const profesors = await prisma.profesor.findMany()
    * ```
    */
  get profesor(): Prisma.ProfesorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.obrero`: Exposes CRUD operations for the **Obrero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Obreros
    * const obreros = await prisma.obrero.findMany()
    * ```
    */
  get obrero(): Prisma.ObreroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asistencia`: Exposes CRUD operations for the **Asistencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asistencias
    * const asistencias = await prisma.asistencia.findMany()
    * ```
    */
  get asistencia(): Prisma.AsistenciaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Estudiante: 'Estudiante',
    Profesor: 'Profesor',
    Obrero: 'Obrero',
    Asistencia: 'Asistencia'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "estudiante" | "profesor" | "obrero" | "asistencia"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Estudiante: {
        payload: Prisma.$EstudiantePayload<ExtArgs>
        fields: Prisma.EstudianteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstudianteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstudianteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          findFirst: {
            args: Prisma.EstudianteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstudianteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          findMany: {
            args: Prisma.EstudianteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          create: {
            args: Prisma.EstudianteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          createMany: {
            args: Prisma.EstudianteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstudianteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          delete: {
            args: Prisma.EstudianteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          update: {
            args: Prisma.EstudianteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          deleteMany: {
            args: Prisma.EstudianteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstudianteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstudianteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          upsert: {
            args: Prisma.EstudianteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          aggregate: {
            args: Prisma.EstudianteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudiante>
          }
          groupBy: {
            args: Prisma.EstudianteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstudianteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstudianteCountArgs<ExtArgs>
            result: $Utils.Optional<EstudianteCountAggregateOutputType> | number
          }
        }
      }
      Profesor: {
        payload: Prisma.$ProfesorPayload<ExtArgs>
        fields: Prisma.ProfesorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfesorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfesorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          findFirst: {
            args: Prisma.ProfesorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfesorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          findMany: {
            args: Prisma.ProfesorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>[]
          }
          create: {
            args: Prisma.ProfesorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          createMany: {
            args: Prisma.ProfesorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfesorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>[]
          }
          delete: {
            args: Prisma.ProfesorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          update: {
            args: Prisma.ProfesorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          deleteMany: {
            args: Prisma.ProfesorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfesorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfesorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>[]
          }
          upsert: {
            args: Prisma.ProfesorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          aggregate: {
            args: Prisma.ProfesorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfesor>
          }
          groupBy: {
            args: Prisma.ProfesorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfesorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfesorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfesorCountAggregateOutputType> | number
          }
        }
      }
      Obrero: {
        payload: Prisma.$ObreroPayload<ExtArgs>
        fields: Prisma.ObreroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObreroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObreroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreroPayload>
          }
          findFirst: {
            args: Prisma.ObreroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObreroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreroPayload>
          }
          findMany: {
            args: Prisma.ObreroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreroPayload>[]
          }
          create: {
            args: Prisma.ObreroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreroPayload>
          }
          createMany: {
            args: Prisma.ObreroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObreroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreroPayload>[]
          }
          delete: {
            args: Prisma.ObreroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreroPayload>
          }
          update: {
            args: Prisma.ObreroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreroPayload>
          }
          deleteMany: {
            args: Prisma.ObreroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObreroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObreroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreroPayload>[]
          }
          upsert: {
            args: Prisma.ObreroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObreroPayload>
          }
          aggregate: {
            args: Prisma.ObreroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObrero>
          }
          groupBy: {
            args: Prisma.ObreroGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObreroGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObreroCountArgs<ExtArgs>
            result: $Utils.Optional<ObreroCountAggregateOutputType> | number
          }
        }
      }
      Asistencia: {
        payload: Prisma.$AsistenciaPayload<ExtArgs>
        fields: Prisma.AsistenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsistenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsistenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          findFirst: {
            args: Prisma.AsistenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsistenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          findMany: {
            args: Prisma.AsistenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>[]
          }
          create: {
            args: Prisma.AsistenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          createMany: {
            args: Prisma.AsistenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsistenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>[]
          }
          delete: {
            args: Prisma.AsistenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          update: {
            args: Prisma.AsistenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          deleteMany: {
            args: Prisma.AsistenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsistenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsistenciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>[]
          }
          upsert: {
            args: Prisma.AsistenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          aggregate: {
            args: Prisma.AsistenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsistencia>
          }
          groupBy: {
            args: Prisma.AsistenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsistenciaCountArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    estudiante?: EstudianteOmit
    profesor?: ProfesorOmit
    obrero?: ObreroOmit
    asistencia?: AsistenciaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EstudianteCountOutputType
   */

  export type EstudianteCountOutputType = {
    asistencias: number
  }

  export type EstudianteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | EstudianteCountOutputTypeCountAsistenciasArgs
  }

  // Custom InputTypes
  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteCountOutputType
     */
    select?: EstudianteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeCountAsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
  }


  /**
   * Count Type ProfesorCountOutputType
   */

  export type ProfesorCountOutputType = {
    asistencias: number
  }

  export type ProfesorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | ProfesorCountOutputTypeCountAsistenciasArgs
  }

  // Custom InputTypes
  /**
   * ProfesorCountOutputType without action
   */
  export type ProfesorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfesorCountOutputType
     */
    select?: ProfesorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfesorCountOutputType without action
   */
  export type ProfesorCountOutputTypeCountAsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
  }


  /**
   * Count Type ObreroCountOutputType
   */

  export type ObreroCountOutputType = {
    asistencias: number
  }

  export type ObreroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | ObreroCountOutputTypeCountAsistenciasArgs
  }

  // Custom InputTypes
  /**
   * ObreroCountOutputType without action
   */
  export type ObreroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObreroCountOutputType
     */
    select?: ObreroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObreroCountOutputType without action
   */
  export type ObreroCountOutputTypeCountAsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Estudiante
   */

  export type AggregateEstudiante = {
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  export type EstudianteAvgAggregateOutputType = {
    id: number | null
  }

  export type EstudianteSumAggregateOutputType = {
    id: number | null
  }

  export type EstudianteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    grado: string | null
    seccion: string | null
    creadoEn: Date | null
  }

  export type EstudianteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    grado: string | null
    seccion: string | null
    creadoEn: Date | null
  }

  export type EstudianteCountAggregateOutputType = {
    id: number
    nombre: number
    grado: number
    seccion: number
    creadoEn: number
    _all: number
  }


  export type EstudianteAvgAggregateInputType = {
    id?: true
  }

  export type EstudianteSumAggregateInputType = {
    id?: true
  }

  export type EstudianteMinAggregateInputType = {
    id?: true
    nombre?: true
    grado?: true
    seccion?: true
    creadoEn?: true
  }

  export type EstudianteMaxAggregateInputType = {
    id?: true
    nombre?: true
    grado?: true
    seccion?: true
    creadoEn?: true
  }

  export type EstudianteCountAggregateInputType = {
    id?: true
    nombre?: true
    grado?: true
    seccion?: true
    creadoEn?: true
    _all?: true
  }

  export type EstudianteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiante to aggregate.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estudiantes
    **/
    _count?: true | EstudianteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstudianteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstudianteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstudianteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstudianteMaxAggregateInputType
  }

  export type GetEstudianteAggregateType<T extends EstudianteAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudiante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudiante[P]>
      : GetScalarType<T[P], AggregateEstudiante[P]>
  }




  export type EstudianteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteWhereInput
    orderBy?: EstudianteOrderByWithAggregationInput | EstudianteOrderByWithAggregationInput[]
    by: EstudianteScalarFieldEnum[] | EstudianteScalarFieldEnum
    having?: EstudianteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstudianteCountAggregateInputType | true
    _avg?: EstudianteAvgAggregateInputType
    _sum?: EstudianteSumAggregateInputType
    _min?: EstudianteMinAggregateInputType
    _max?: EstudianteMaxAggregateInputType
  }

  export type EstudianteGroupByOutputType = {
    id: number
    nombre: string
    grado: string
    seccion: string
    creadoEn: Date
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  type GetEstudianteGroupByPayload<T extends EstudianteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstudianteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstudianteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
            : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
        }
      >
    >


  export type EstudianteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    grado?: boolean
    seccion?: boolean
    creadoEn?: boolean
    asistencias?: boolean | Estudiante$asistenciasArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    grado?: boolean
    seccion?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    grado?: boolean
    seccion?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectScalar = {
    id?: boolean
    nombre?: boolean
    grado?: boolean
    seccion?: boolean
    creadoEn?: boolean
  }

  export type EstudianteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "grado" | "seccion" | "creadoEn", ExtArgs["result"]["estudiante"]>
  export type EstudianteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | Estudiante$asistenciasArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstudianteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EstudianteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EstudiantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estudiante"
    objects: {
      asistencias: Prisma.$AsistenciaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      grado: string
      seccion: string
      creadoEn: Date
    }, ExtArgs["result"]["estudiante"]>
    composites: {}
  }

  type EstudianteGetPayload<S extends boolean | null | undefined | EstudianteDefaultArgs> = $Result.GetResult<Prisma.$EstudiantePayload, S>

  type EstudianteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstudianteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstudianteCountAggregateInputType | true
    }

  export interface EstudianteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estudiante'], meta: { name: 'Estudiante' } }
    /**
     * Find zero or one Estudiante that matches the filter.
     * @param {EstudianteFindUniqueArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstudianteFindUniqueArgs>(args: SelectSubset<T, EstudianteFindUniqueArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estudiante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstudianteFindUniqueOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstudianteFindUniqueOrThrowArgs>(args: SelectSubset<T, EstudianteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindFirstArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstudianteFindFirstArgs>(args?: SelectSubset<T, EstudianteFindFirstArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindFirstOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstudianteFindFirstOrThrowArgs>(args?: SelectSubset<T, EstudianteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estudiantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estudiantes
     * const estudiantes = await prisma.estudiante.findMany()
     * 
     * // Get first 10 Estudiantes
     * const estudiantes = await prisma.estudiante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estudianteWithIdOnly = await prisma.estudiante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstudianteFindManyArgs>(args?: SelectSubset<T, EstudianteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estudiante.
     * @param {EstudianteCreateArgs} args - Arguments to create a Estudiante.
     * @example
     * // Create one Estudiante
     * const Estudiante = await prisma.estudiante.create({
     *   data: {
     *     // ... data to create a Estudiante
     *   }
     * })
     * 
     */
    create<T extends EstudianteCreateArgs>(args: SelectSubset<T, EstudianteCreateArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estudiantes.
     * @param {EstudianteCreateManyArgs} args - Arguments to create many Estudiantes.
     * @example
     * // Create many Estudiantes
     * const estudiante = await prisma.estudiante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstudianteCreateManyArgs>(args?: SelectSubset<T, EstudianteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estudiantes and returns the data saved in the database.
     * @param {EstudianteCreateManyAndReturnArgs} args - Arguments to create many Estudiantes.
     * @example
     * // Create many Estudiantes
     * const estudiante = await prisma.estudiante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estudiantes and only return the `id`
     * const estudianteWithIdOnly = await prisma.estudiante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstudianteCreateManyAndReturnArgs>(args?: SelectSubset<T, EstudianteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estudiante.
     * @param {EstudianteDeleteArgs} args - Arguments to delete one Estudiante.
     * @example
     * // Delete one Estudiante
     * const Estudiante = await prisma.estudiante.delete({
     *   where: {
     *     // ... filter to delete one Estudiante
     *   }
     * })
     * 
     */
    delete<T extends EstudianteDeleteArgs>(args: SelectSubset<T, EstudianteDeleteArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estudiante.
     * @param {EstudianteUpdateArgs} args - Arguments to update one Estudiante.
     * @example
     * // Update one Estudiante
     * const estudiante = await prisma.estudiante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstudianteUpdateArgs>(args: SelectSubset<T, EstudianteUpdateArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estudiantes.
     * @param {EstudianteDeleteManyArgs} args - Arguments to filter Estudiantes to delete.
     * @example
     * // Delete a few Estudiantes
     * const { count } = await prisma.estudiante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstudianteDeleteManyArgs>(args?: SelectSubset<T, EstudianteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estudiantes
     * const estudiante = await prisma.estudiante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstudianteUpdateManyArgs>(args: SelectSubset<T, EstudianteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiantes and returns the data updated in the database.
     * @param {EstudianteUpdateManyAndReturnArgs} args - Arguments to update many Estudiantes.
     * @example
     * // Update many Estudiantes
     * const estudiante = await prisma.estudiante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estudiantes and only return the `id`
     * const estudianteWithIdOnly = await prisma.estudiante.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EstudianteUpdateManyAndReturnArgs>(args: SelectSubset<T, EstudianteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estudiante.
     * @param {EstudianteUpsertArgs} args - Arguments to update or create a Estudiante.
     * @example
     * // Update or create a Estudiante
     * const estudiante = await prisma.estudiante.upsert({
     *   create: {
     *     // ... data to create a Estudiante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estudiante we want to update
     *   }
     * })
     */
    upsert<T extends EstudianteUpsertArgs>(args: SelectSubset<T, EstudianteUpsertArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteCountArgs} args - Arguments to filter Estudiantes to count.
     * @example
     * // Count the number of Estudiantes
     * const count = await prisma.estudiante.count({
     *   where: {
     *     // ... the filter for the Estudiantes we want to count
     *   }
     * })
    **/
    count<T extends EstudianteCountArgs>(
      args?: Subset<T, EstudianteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstudianteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstudianteAggregateArgs>(args: Subset<T, EstudianteAggregateArgs>): Prisma.PrismaPromise<GetEstudianteAggregateType<T>>

    /**
     * Group by Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstudianteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstudianteGroupByArgs['orderBy'] }
        : { orderBy?: EstudianteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstudianteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudianteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estudiante model
   */
  readonly fields: EstudianteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estudiante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstudianteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asistencias<T extends Estudiante$asistenciasArgs<ExtArgs> = {}>(args?: Subset<T, Estudiante$asistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Estudiante model
   */
  interface EstudianteFieldRefs {
    readonly id: FieldRef<"Estudiante", 'Int'>
    readonly nombre: FieldRef<"Estudiante", 'String'>
    readonly grado: FieldRef<"Estudiante", 'String'>
    readonly seccion: FieldRef<"Estudiante", 'String'>
    readonly creadoEn: FieldRef<"Estudiante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Estudiante findUnique
   */
  export type EstudianteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante findUniqueOrThrow
   */
  export type EstudianteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante findFirst
   */
  export type EstudianteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante findFirstOrThrow
   */
  export type EstudianteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante findMany
   */
  export type EstudianteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiantes to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante create
   */
  export type EstudianteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The data needed to create a Estudiante.
     */
    data: XOR<EstudianteCreateInput, EstudianteUncheckedCreateInput>
  }

  /**
   * Estudiante createMany
   */
  export type EstudianteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estudiantes.
     */
    data: EstudianteCreateManyInput | EstudianteCreateManyInput[]
  }

  /**
   * Estudiante createManyAndReturn
   */
  export type EstudianteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * The data used to create many Estudiantes.
     */
    data: EstudianteCreateManyInput | EstudianteCreateManyInput[]
  }

  /**
   * Estudiante update
   */
  export type EstudianteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The data needed to update a Estudiante.
     */
    data: XOR<EstudianteUpdateInput, EstudianteUncheckedUpdateInput>
    /**
     * Choose, which Estudiante to update.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante updateMany
   */
  export type EstudianteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estudiantes.
     */
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyInput>
    /**
     * Filter which Estudiantes to update
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to update.
     */
    limit?: number
  }

  /**
   * Estudiante updateManyAndReturn
   */
  export type EstudianteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * The data used to update Estudiantes.
     */
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyInput>
    /**
     * Filter which Estudiantes to update
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to update.
     */
    limit?: number
  }

  /**
   * Estudiante upsert
   */
  export type EstudianteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The filter to search for the Estudiante to update in case it exists.
     */
    where: EstudianteWhereUniqueInput
    /**
     * In case the Estudiante found by the `where` argument doesn't exist, create a new Estudiante with this data.
     */
    create: XOR<EstudianteCreateInput, EstudianteUncheckedCreateInput>
    /**
     * In case the Estudiante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstudianteUpdateInput, EstudianteUncheckedUpdateInput>
  }

  /**
   * Estudiante delete
   */
  export type EstudianteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter which Estudiante to delete.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante deleteMany
   */
  export type EstudianteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiantes to delete
     */
    where?: EstudianteWhereInput
    /**
     * Limit how many Estudiantes to delete.
     */
    limit?: number
  }

  /**
   * Estudiante.asistencias
   */
  export type Estudiante$asistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    cursor?: AsistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Estudiante without action
   */
  export type EstudianteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
  }


  /**
   * Model Profesor
   */

  export type AggregateProfesor = {
    _count: ProfesorCountAggregateOutputType | null
    _avg: ProfesorAvgAggregateOutputType | null
    _sum: ProfesorSumAggregateOutputType | null
    _min: ProfesorMinAggregateOutputType | null
    _max: ProfesorMaxAggregateOutputType | null
  }

  export type ProfesorAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfesorSumAggregateOutputType = {
    id: number | null
  }

  export type ProfesorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    materia: string | null
    creadoEn: Date | null
  }

  export type ProfesorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    materia: string | null
    creadoEn: Date | null
  }

  export type ProfesorCountAggregateOutputType = {
    id: number
    nombre: number
    materia: number
    creadoEn: number
    _all: number
  }


  export type ProfesorAvgAggregateInputType = {
    id?: true
  }

  export type ProfesorSumAggregateInputType = {
    id?: true
  }

  export type ProfesorMinAggregateInputType = {
    id?: true
    nombre?: true
    materia?: true
    creadoEn?: true
  }

  export type ProfesorMaxAggregateInputType = {
    id?: true
    nombre?: true
    materia?: true
    creadoEn?: true
  }

  export type ProfesorCountAggregateInputType = {
    id?: true
    nombre?: true
    materia?: true
    creadoEn?: true
    _all?: true
  }

  export type ProfesorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profesor to aggregate.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profesors
    **/
    _count?: true | ProfesorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfesorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfesorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfesorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfesorMaxAggregateInputType
  }

  export type GetProfesorAggregateType<T extends ProfesorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfesor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfesor[P]>
      : GetScalarType<T[P], AggregateProfesor[P]>
  }




  export type ProfesorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfesorWhereInput
    orderBy?: ProfesorOrderByWithAggregationInput | ProfesorOrderByWithAggregationInput[]
    by: ProfesorScalarFieldEnum[] | ProfesorScalarFieldEnum
    having?: ProfesorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfesorCountAggregateInputType | true
    _avg?: ProfesorAvgAggregateInputType
    _sum?: ProfesorSumAggregateInputType
    _min?: ProfesorMinAggregateInputType
    _max?: ProfesorMaxAggregateInputType
  }

  export type ProfesorGroupByOutputType = {
    id: number
    nombre: string
    materia: string
    creadoEn: Date
    _count: ProfesorCountAggregateOutputType | null
    _avg: ProfesorAvgAggregateOutputType | null
    _sum: ProfesorSumAggregateOutputType | null
    _min: ProfesorMinAggregateOutputType | null
    _max: ProfesorMaxAggregateOutputType | null
  }

  type GetProfesorGroupByPayload<T extends ProfesorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfesorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfesorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfesorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfesorGroupByOutputType[P]>
        }
      >
    >


  export type ProfesorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    materia?: boolean
    creadoEn?: boolean
    asistencias?: boolean | Profesor$asistenciasArgs<ExtArgs>
    _count?: boolean | ProfesorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profesor"]>

  export type ProfesorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    materia?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["profesor"]>

  export type ProfesorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    materia?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["profesor"]>

  export type ProfesorSelectScalar = {
    id?: boolean
    nombre?: boolean
    materia?: boolean
    creadoEn?: boolean
  }

  export type ProfesorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "materia" | "creadoEn", ExtArgs["result"]["profesor"]>
  export type ProfesorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | Profesor$asistenciasArgs<ExtArgs>
    _count?: boolean | ProfesorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfesorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfesorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfesorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profesor"
    objects: {
      asistencias: Prisma.$AsistenciaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      materia: string
      creadoEn: Date
    }, ExtArgs["result"]["profesor"]>
    composites: {}
  }

  type ProfesorGetPayload<S extends boolean | null | undefined | ProfesorDefaultArgs> = $Result.GetResult<Prisma.$ProfesorPayload, S>

  type ProfesorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfesorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfesorCountAggregateInputType | true
    }

  export interface ProfesorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profesor'], meta: { name: 'Profesor' } }
    /**
     * Find zero or one Profesor that matches the filter.
     * @param {ProfesorFindUniqueArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfesorFindUniqueArgs>(args: SelectSubset<T, ProfesorFindUniqueArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profesor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfesorFindUniqueOrThrowArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfesorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfesorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profesor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorFindFirstArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfesorFindFirstArgs>(args?: SelectSubset<T, ProfesorFindFirstArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profesor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorFindFirstOrThrowArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfesorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfesorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profesors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profesors
     * const profesors = await prisma.profesor.findMany()
     * 
     * // Get first 10 Profesors
     * const profesors = await prisma.profesor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profesorWithIdOnly = await prisma.profesor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfesorFindManyArgs>(args?: SelectSubset<T, ProfesorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profesor.
     * @param {ProfesorCreateArgs} args - Arguments to create a Profesor.
     * @example
     * // Create one Profesor
     * const Profesor = await prisma.profesor.create({
     *   data: {
     *     // ... data to create a Profesor
     *   }
     * })
     * 
     */
    create<T extends ProfesorCreateArgs>(args: SelectSubset<T, ProfesorCreateArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profesors.
     * @param {ProfesorCreateManyArgs} args - Arguments to create many Profesors.
     * @example
     * // Create many Profesors
     * const profesor = await prisma.profesor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfesorCreateManyArgs>(args?: SelectSubset<T, ProfesorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profesors and returns the data saved in the database.
     * @param {ProfesorCreateManyAndReturnArgs} args - Arguments to create many Profesors.
     * @example
     * // Create many Profesors
     * const profesor = await prisma.profesor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profesors and only return the `id`
     * const profesorWithIdOnly = await prisma.profesor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfesorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfesorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profesor.
     * @param {ProfesorDeleteArgs} args - Arguments to delete one Profesor.
     * @example
     * // Delete one Profesor
     * const Profesor = await prisma.profesor.delete({
     *   where: {
     *     // ... filter to delete one Profesor
     *   }
     * })
     * 
     */
    delete<T extends ProfesorDeleteArgs>(args: SelectSubset<T, ProfesorDeleteArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profesor.
     * @param {ProfesorUpdateArgs} args - Arguments to update one Profesor.
     * @example
     * // Update one Profesor
     * const profesor = await prisma.profesor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfesorUpdateArgs>(args: SelectSubset<T, ProfesorUpdateArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profesors.
     * @param {ProfesorDeleteManyArgs} args - Arguments to filter Profesors to delete.
     * @example
     * // Delete a few Profesors
     * const { count } = await prisma.profesor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfesorDeleteManyArgs>(args?: SelectSubset<T, ProfesorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profesors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profesors
     * const profesor = await prisma.profesor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfesorUpdateManyArgs>(args: SelectSubset<T, ProfesorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profesors and returns the data updated in the database.
     * @param {ProfesorUpdateManyAndReturnArgs} args - Arguments to update many Profesors.
     * @example
     * // Update many Profesors
     * const profesor = await prisma.profesor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profesors and only return the `id`
     * const profesorWithIdOnly = await prisma.profesor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfesorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfesorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profesor.
     * @param {ProfesorUpsertArgs} args - Arguments to update or create a Profesor.
     * @example
     * // Update or create a Profesor
     * const profesor = await prisma.profesor.upsert({
     *   create: {
     *     // ... data to create a Profesor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profesor we want to update
     *   }
     * })
     */
    upsert<T extends ProfesorUpsertArgs>(args: SelectSubset<T, ProfesorUpsertArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profesors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorCountArgs} args - Arguments to filter Profesors to count.
     * @example
     * // Count the number of Profesors
     * const count = await prisma.profesor.count({
     *   where: {
     *     // ... the filter for the Profesors we want to count
     *   }
     * })
    **/
    count<T extends ProfesorCountArgs>(
      args?: Subset<T, ProfesorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfesorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profesor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfesorAggregateArgs>(args: Subset<T, ProfesorAggregateArgs>): Prisma.PrismaPromise<GetProfesorAggregateType<T>>

    /**
     * Group by Profesor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfesorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfesorGroupByArgs['orderBy'] }
        : { orderBy?: ProfesorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfesorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfesorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profesor model
   */
  readonly fields: ProfesorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profesor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfesorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asistencias<T extends Profesor$asistenciasArgs<ExtArgs> = {}>(args?: Subset<T, Profesor$asistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profesor model
   */
  interface ProfesorFieldRefs {
    readonly id: FieldRef<"Profesor", 'Int'>
    readonly nombre: FieldRef<"Profesor", 'String'>
    readonly materia: FieldRef<"Profesor", 'String'>
    readonly creadoEn: FieldRef<"Profesor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profesor findUnique
   */
  export type ProfesorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor findUniqueOrThrow
   */
  export type ProfesorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor findFirst
   */
  export type ProfesorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profesors.
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profesors.
     */
    distinct?: ProfesorScalarFieldEnum | ProfesorScalarFieldEnum[]
  }

  /**
   * Profesor findFirstOrThrow
   */
  export type ProfesorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profesors.
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profesors.
     */
    distinct?: ProfesorScalarFieldEnum | ProfesorScalarFieldEnum[]
  }

  /**
   * Profesor findMany
   */
  export type ProfesorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesors to fetch.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profesors.
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    distinct?: ProfesorScalarFieldEnum | ProfesorScalarFieldEnum[]
  }

  /**
   * Profesor create
   */
  export type ProfesorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * The data needed to create a Profesor.
     */
    data: XOR<ProfesorCreateInput, ProfesorUncheckedCreateInput>
  }

  /**
   * Profesor createMany
   */
  export type ProfesorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profesors.
     */
    data: ProfesorCreateManyInput | ProfesorCreateManyInput[]
  }

  /**
   * Profesor createManyAndReturn
   */
  export type ProfesorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * The data used to create many Profesors.
     */
    data: ProfesorCreateManyInput | ProfesorCreateManyInput[]
  }

  /**
   * Profesor update
   */
  export type ProfesorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * The data needed to update a Profesor.
     */
    data: XOR<ProfesorUpdateInput, ProfesorUncheckedUpdateInput>
    /**
     * Choose, which Profesor to update.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor updateMany
   */
  export type ProfesorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profesors.
     */
    data: XOR<ProfesorUpdateManyMutationInput, ProfesorUncheckedUpdateManyInput>
    /**
     * Filter which Profesors to update
     */
    where?: ProfesorWhereInput
    /**
     * Limit how many Profesors to update.
     */
    limit?: number
  }

  /**
   * Profesor updateManyAndReturn
   */
  export type ProfesorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * The data used to update Profesors.
     */
    data: XOR<ProfesorUpdateManyMutationInput, ProfesorUncheckedUpdateManyInput>
    /**
     * Filter which Profesors to update
     */
    where?: ProfesorWhereInput
    /**
     * Limit how many Profesors to update.
     */
    limit?: number
  }

  /**
   * Profesor upsert
   */
  export type ProfesorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * The filter to search for the Profesor to update in case it exists.
     */
    where: ProfesorWhereUniqueInput
    /**
     * In case the Profesor found by the `where` argument doesn't exist, create a new Profesor with this data.
     */
    create: XOR<ProfesorCreateInput, ProfesorUncheckedCreateInput>
    /**
     * In case the Profesor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfesorUpdateInput, ProfesorUncheckedUpdateInput>
  }

  /**
   * Profesor delete
   */
  export type ProfesorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter which Profesor to delete.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor deleteMany
   */
  export type ProfesorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profesors to delete
     */
    where?: ProfesorWhereInput
    /**
     * Limit how many Profesors to delete.
     */
    limit?: number
  }

  /**
   * Profesor.asistencias
   */
  export type Profesor$asistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    cursor?: AsistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Profesor without action
   */
  export type ProfesorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
  }


  /**
   * Model Obrero
   */

  export type AggregateObrero = {
    _count: ObreroCountAggregateOutputType | null
    _avg: ObreroAvgAggregateOutputType | null
    _sum: ObreroSumAggregateOutputType | null
    _min: ObreroMinAggregateOutputType | null
    _max: ObreroMaxAggregateOutputType | null
  }

  export type ObreroAvgAggregateOutputType = {
    id: number | null
  }

  export type ObreroSumAggregateOutputType = {
    id: number | null
  }

  export type ObreroMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    area: string | null
    creadoEn: Date | null
  }

  export type ObreroMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    area: string | null
    creadoEn: Date | null
  }

  export type ObreroCountAggregateOutputType = {
    id: number
    nombre: number
    area: number
    creadoEn: number
    _all: number
  }


  export type ObreroAvgAggregateInputType = {
    id?: true
  }

  export type ObreroSumAggregateInputType = {
    id?: true
  }

  export type ObreroMinAggregateInputType = {
    id?: true
    nombre?: true
    area?: true
    creadoEn?: true
  }

  export type ObreroMaxAggregateInputType = {
    id?: true
    nombre?: true
    area?: true
    creadoEn?: true
  }

  export type ObreroCountAggregateInputType = {
    id?: true
    nombre?: true
    area?: true
    creadoEn?: true
    _all?: true
  }

  export type ObreroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obrero to aggregate.
     */
    where?: ObreroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obreros to fetch.
     */
    orderBy?: ObreroOrderByWithRelationInput | ObreroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObreroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obreros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obreros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Obreros
    **/
    _count?: true | ObreroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObreroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObreroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObreroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObreroMaxAggregateInputType
  }

  export type GetObreroAggregateType<T extends ObreroAggregateArgs> = {
        [P in keyof T & keyof AggregateObrero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObrero[P]>
      : GetScalarType<T[P], AggregateObrero[P]>
  }




  export type ObreroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObreroWhereInput
    orderBy?: ObreroOrderByWithAggregationInput | ObreroOrderByWithAggregationInput[]
    by: ObreroScalarFieldEnum[] | ObreroScalarFieldEnum
    having?: ObreroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObreroCountAggregateInputType | true
    _avg?: ObreroAvgAggregateInputType
    _sum?: ObreroSumAggregateInputType
    _min?: ObreroMinAggregateInputType
    _max?: ObreroMaxAggregateInputType
  }

  export type ObreroGroupByOutputType = {
    id: number
    nombre: string
    area: string
    creadoEn: Date
    _count: ObreroCountAggregateOutputType | null
    _avg: ObreroAvgAggregateOutputType | null
    _sum: ObreroSumAggregateOutputType | null
    _min: ObreroMinAggregateOutputType | null
    _max: ObreroMaxAggregateOutputType | null
  }

  type GetObreroGroupByPayload<T extends ObreroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObreroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObreroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObreroGroupByOutputType[P]>
            : GetScalarType<T[P], ObreroGroupByOutputType[P]>
        }
      >
    >


  export type ObreroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    area?: boolean
    creadoEn?: boolean
    asistencias?: boolean | Obrero$asistenciasArgs<ExtArgs>
    _count?: boolean | ObreroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obrero"]>

  export type ObreroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    area?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["obrero"]>

  export type ObreroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    area?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["obrero"]>

  export type ObreroSelectScalar = {
    id?: boolean
    nombre?: boolean
    area?: boolean
    creadoEn?: boolean
  }

  export type ObreroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "area" | "creadoEn", ExtArgs["result"]["obrero"]>
  export type ObreroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | Obrero$asistenciasArgs<ExtArgs>
    _count?: boolean | ObreroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObreroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ObreroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ObreroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Obrero"
    objects: {
      asistencias: Prisma.$AsistenciaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      area: string
      creadoEn: Date
    }, ExtArgs["result"]["obrero"]>
    composites: {}
  }

  type ObreroGetPayload<S extends boolean | null | undefined | ObreroDefaultArgs> = $Result.GetResult<Prisma.$ObreroPayload, S>

  type ObreroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObreroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObreroCountAggregateInputType | true
    }

  export interface ObreroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Obrero'], meta: { name: 'Obrero' } }
    /**
     * Find zero or one Obrero that matches the filter.
     * @param {ObreroFindUniqueArgs} args - Arguments to find a Obrero
     * @example
     * // Get one Obrero
     * const obrero = await prisma.obrero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObreroFindUniqueArgs>(args: SelectSubset<T, ObreroFindUniqueArgs<ExtArgs>>): Prisma__ObreroClient<$Result.GetResult<Prisma.$ObreroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Obrero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObreroFindUniqueOrThrowArgs} args - Arguments to find a Obrero
     * @example
     * // Get one Obrero
     * const obrero = await prisma.obrero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObreroFindUniqueOrThrowArgs>(args: SelectSubset<T, ObreroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObreroClient<$Result.GetResult<Prisma.$ObreroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obrero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreroFindFirstArgs} args - Arguments to find a Obrero
     * @example
     * // Get one Obrero
     * const obrero = await prisma.obrero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObreroFindFirstArgs>(args?: SelectSubset<T, ObreroFindFirstArgs<ExtArgs>>): Prisma__ObreroClient<$Result.GetResult<Prisma.$ObreroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obrero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreroFindFirstOrThrowArgs} args - Arguments to find a Obrero
     * @example
     * // Get one Obrero
     * const obrero = await prisma.obrero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObreroFindFirstOrThrowArgs>(args?: SelectSubset<T, ObreroFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObreroClient<$Result.GetResult<Prisma.$ObreroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Obreros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Obreros
     * const obreros = await prisma.obrero.findMany()
     * 
     * // Get first 10 Obreros
     * const obreros = await prisma.obrero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obreroWithIdOnly = await prisma.obrero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObreroFindManyArgs>(args?: SelectSubset<T, ObreroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObreroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Obrero.
     * @param {ObreroCreateArgs} args - Arguments to create a Obrero.
     * @example
     * // Create one Obrero
     * const Obrero = await prisma.obrero.create({
     *   data: {
     *     // ... data to create a Obrero
     *   }
     * })
     * 
     */
    create<T extends ObreroCreateArgs>(args: SelectSubset<T, ObreroCreateArgs<ExtArgs>>): Prisma__ObreroClient<$Result.GetResult<Prisma.$ObreroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Obreros.
     * @param {ObreroCreateManyArgs} args - Arguments to create many Obreros.
     * @example
     * // Create many Obreros
     * const obrero = await prisma.obrero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObreroCreateManyArgs>(args?: SelectSubset<T, ObreroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Obreros and returns the data saved in the database.
     * @param {ObreroCreateManyAndReturnArgs} args - Arguments to create many Obreros.
     * @example
     * // Create many Obreros
     * const obrero = await prisma.obrero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Obreros and only return the `id`
     * const obreroWithIdOnly = await prisma.obrero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObreroCreateManyAndReturnArgs>(args?: SelectSubset<T, ObreroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObreroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Obrero.
     * @param {ObreroDeleteArgs} args - Arguments to delete one Obrero.
     * @example
     * // Delete one Obrero
     * const Obrero = await prisma.obrero.delete({
     *   where: {
     *     // ... filter to delete one Obrero
     *   }
     * })
     * 
     */
    delete<T extends ObreroDeleteArgs>(args: SelectSubset<T, ObreroDeleteArgs<ExtArgs>>): Prisma__ObreroClient<$Result.GetResult<Prisma.$ObreroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Obrero.
     * @param {ObreroUpdateArgs} args - Arguments to update one Obrero.
     * @example
     * // Update one Obrero
     * const obrero = await prisma.obrero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObreroUpdateArgs>(args: SelectSubset<T, ObreroUpdateArgs<ExtArgs>>): Prisma__ObreroClient<$Result.GetResult<Prisma.$ObreroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Obreros.
     * @param {ObreroDeleteManyArgs} args - Arguments to filter Obreros to delete.
     * @example
     * // Delete a few Obreros
     * const { count } = await prisma.obrero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObreroDeleteManyArgs>(args?: SelectSubset<T, ObreroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obreros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Obreros
     * const obrero = await prisma.obrero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObreroUpdateManyArgs>(args: SelectSubset<T, ObreroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obreros and returns the data updated in the database.
     * @param {ObreroUpdateManyAndReturnArgs} args - Arguments to update many Obreros.
     * @example
     * // Update many Obreros
     * const obrero = await prisma.obrero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Obreros and only return the `id`
     * const obreroWithIdOnly = await prisma.obrero.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ObreroUpdateManyAndReturnArgs>(args: SelectSubset<T, ObreroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObreroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Obrero.
     * @param {ObreroUpsertArgs} args - Arguments to update or create a Obrero.
     * @example
     * // Update or create a Obrero
     * const obrero = await prisma.obrero.upsert({
     *   create: {
     *     // ... data to create a Obrero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Obrero we want to update
     *   }
     * })
     */
    upsert<T extends ObreroUpsertArgs>(args: SelectSubset<T, ObreroUpsertArgs<ExtArgs>>): Prisma__ObreroClient<$Result.GetResult<Prisma.$ObreroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Obreros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreroCountArgs} args - Arguments to filter Obreros to count.
     * @example
     * // Count the number of Obreros
     * const count = await prisma.obrero.count({
     *   where: {
     *     // ... the filter for the Obreros we want to count
     *   }
     * })
    **/
    count<T extends ObreroCountArgs>(
      args?: Subset<T, ObreroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObreroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Obrero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObreroAggregateArgs>(args: Subset<T, ObreroAggregateArgs>): Prisma.PrismaPromise<GetObreroAggregateType<T>>

    /**
     * Group by Obrero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObreroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObreroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObreroGroupByArgs['orderBy'] }
        : { orderBy?: ObreroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObreroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObreroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Obrero model
   */
  readonly fields: ObreroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Obrero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObreroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asistencias<T extends Obrero$asistenciasArgs<ExtArgs> = {}>(args?: Subset<T, Obrero$asistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Obrero model
   */
  interface ObreroFieldRefs {
    readonly id: FieldRef<"Obrero", 'Int'>
    readonly nombre: FieldRef<"Obrero", 'String'>
    readonly area: FieldRef<"Obrero", 'String'>
    readonly creadoEn: FieldRef<"Obrero", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Obrero findUnique
   */
  export type ObreroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obrero
     */
    select?: ObreroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obrero
     */
    omit?: ObreroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreroInclude<ExtArgs> | null
    /**
     * Filter, which Obrero to fetch.
     */
    where: ObreroWhereUniqueInput
  }

  /**
   * Obrero findUniqueOrThrow
   */
  export type ObreroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obrero
     */
    select?: ObreroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obrero
     */
    omit?: ObreroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreroInclude<ExtArgs> | null
    /**
     * Filter, which Obrero to fetch.
     */
    where: ObreroWhereUniqueInput
  }

  /**
   * Obrero findFirst
   */
  export type ObreroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obrero
     */
    select?: ObreroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obrero
     */
    omit?: ObreroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreroInclude<ExtArgs> | null
    /**
     * Filter, which Obrero to fetch.
     */
    where?: ObreroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obreros to fetch.
     */
    orderBy?: ObreroOrderByWithRelationInput | ObreroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obreros.
     */
    cursor?: ObreroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obreros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obreros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obreros.
     */
    distinct?: ObreroScalarFieldEnum | ObreroScalarFieldEnum[]
  }

  /**
   * Obrero findFirstOrThrow
   */
  export type ObreroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obrero
     */
    select?: ObreroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obrero
     */
    omit?: ObreroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreroInclude<ExtArgs> | null
    /**
     * Filter, which Obrero to fetch.
     */
    where?: ObreroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obreros to fetch.
     */
    orderBy?: ObreroOrderByWithRelationInput | ObreroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obreros.
     */
    cursor?: ObreroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obreros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obreros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obreros.
     */
    distinct?: ObreroScalarFieldEnum | ObreroScalarFieldEnum[]
  }

  /**
   * Obrero findMany
   */
  export type ObreroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obrero
     */
    select?: ObreroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obrero
     */
    omit?: ObreroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreroInclude<ExtArgs> | null
    /**
     * Filter, which Obreros to fetch.
     */
    where?: ObreroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obreros to fetch.
     */
    orderBy?: ObreroOrderByWithRelationInput | ObreroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Obreros.
     */
    cursor?: ObreroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obreros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obreros.
     */
    skip?: number
    distinct?: ObreroScalarFieldEnum | ObreroScalarFieldEnum[]
  }

  /**
   * Obrero create
   */
  export type ObreroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obrero
     */
    select?: ObreroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obrero
     */
    omit?: ObreroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreroInclude<ExtArgs> | null
    /**
     * The data needed to create a Obrero.
     */
    data: XOR<ObreroCreateInput, ObreroUncheckedCreateInput>
  }

  /**
   * Obrero createMany
   */
  export type ObreroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Obreros.
     */
    data: ObreroCreateManyInput | ObreroCreateManyInput[]
  }

  /**
   * Obrero createManyAndReturn
   */
  export type ObreroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obrero
     */
    select?: ObreroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obrero
     */
    omit?: ObreroOmit<ExtArgs> | null
    /**
     * The data used to create many Obreros.
     */
    data: ObreroCreateManyInput | ObreroCreateManyInput[]
  }

  /**
   * Obrero update
   */
  export type ObreroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obrero
     */
    select?: ObreroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obrero
     */
    omit?: ObreroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreroInclude<ExtArgs> | null
    /**
     * The data needed to update a Obrero.
     */
    data: XOR<ObreroUpdateInput, ObreroUncheckedUpdateInput>
    /**
     * Choose, which Obrero to update.
     */
    where: ObreroWhereUniqueInput
  }

  /**
   * Obrero updateMany
   */
  export type ObreroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Obreros.
     */
    data: XOR<ObreroUpdateManyMutationInput, ObreroUncheckedUpdateManyInput>
    /**
     * Filter which Obreros to update
     */
    where?: ObreroWhereInput
    /**
     * Limit how many Obreros to update.
     */
    limit?: number
  }

  /**
   * Obrero updateManyAndReturn
   */
  export type ObreroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obrero
     */
    select?: ObreroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obrero
     */
    omit?: ObreroOmit<ExtArgs> | null
    /**
     * The data used to update Obreros.
     */
    data: XOR<ObreroUpdateManyMutationInput, ObreroUncheckedUpdateManyInput>
    /**
     * Filter which Obreros to update
     */
    where?: ObreroWhereInput
    /**
     * Limit how many Obreros to update.
     */
    limit?: number
  }

  /**
   * Obrero upsert
   */
  export type ObreroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obrero
     */
    select?: ObreroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obrero
     */
    omit?: ObreroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreroInclude<ExtArgs> | null
    /**
     * The filter to search for the Obrero to update in case it exists.
     */
    where: ObreroWhereUniqueInput
    /**
     * In case the Obrero found by the `where` argument doesn't exist, create a new Obrero with this data.
     */
    create: XOR<ObreroCreateInput, ObreroUncheckedCreateInput>
    /**
     * In case the Obrero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObreroUpdateInput, ObreroUncheckedUpdateInput>
  }

  /**
   * Obrero delete
   */
  export type ObreroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obrero
     */
    select?: ObreroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obrero
     */
    omit?: ObreroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreroInclude<ExtArgs> | null
    /**
     * Filter which Obrero to delete.
     */
    where: ObreroWhereUniqueInput
  }

  /**
   * Obrero deleteMany
   */
  export type ObreroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obreros to delete
     */
    where?: ObreroWhereInput
    /**
     * Limit how many Obreros to delete.
     */
    limit?: number
  }

  /**
   * Obrero.asistencias
   */
  export type Obrero$asistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    cursor?: AsistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Obrero without action
   */
  export type ObreroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obrero
     */
    select?: ObreroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obrero
     */
    omit?: ObreroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreroInclude<ExtArgs> | null
  }


  /**
   * Model Asistencia
   */

  export type AggregateAsistencia = {
    _count: AsistenciaCountAggregateOutputType | null
    _avg: AsistenciaAvgAggregateOutputType | null
    _sum: AsistenciaSumAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  export type AsistenciaAvgAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    profesorId: number | null
    obreroId: number | null
  }

  export type AsistenciaSumAggregateOutputType = {
    id: number | null
    estudianteId: number | null
    profesorId: number | null
    obreroId: number | null
  }

  export type AsistenciaMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    presente: boolean | null
    tipoPersona: string | null
    estudianteId: number | null
    profesorId: number | null
    obreroId: number | null
  }

  export type AsistenciaMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    presente: boolean | null
    tipoPersona: string | null
    estudianteId: number | null
    profesorId: number | null
    obreroId: number | null
  }

  export type AsistenciaCountAggregateOutputType = {
    id: number
    fecha: number
    presente: number
    tipoPersona: number
    estudianteId: number
    profesorId: number
    obreroId: number
    _all: number
  }


  export type AsistenciaAvgAggregateInputType = {
    id?: true
    estudianteId?: true
    profesorId?: true
    obreroId?: true
  }

  export type AsistenciaSumAggregateInputType = {
    id?: true
    estudianteId?: true
    profesorId?: true
    obreroId?: true
  }

  export type AsistenciaMinAggregateInputType = {
    id?: true
    fecha?: true
    presente?: true
    tipoPersona?: true
    estudianteId?: true
    profesorId?: true
    obreroId?: true
  }

  export type AsistenciaMaxAggregateInputType = {
    id?: true
    fecha?: true
    presente?: true
    tipoPersona?: true
    estudianteId?: true
    profesorId?: true
    obreroId?: true
  }

  export type AsistenciaCountAggregateInputType = {
    id?: true
    fecha?: true
    presente?: true
    tipoPersona?: true
    estudianteId?: true
    profesorId?: true
    obreroId?: true
    _all?: true
  }

  export type AsistenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asistencia to aggregate.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Asistencias
    **/
    _count?: true | AsistenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsistenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsistenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsistenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsistenciaMaxAggregateInputType
  }

  export type GetAsistenciaAggregateType<T extends AsistenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateAsistencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsistencia[P]>
      : GetScalarType<T[P], AggregateAsistencia[P]>
  }




  export type AsistenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithAggregationInput | AsistenciaOrderByWithAggregationInput[]
    by: AsistenciaScalarFieldEnum[] | AsistenciaScalarFieldEnum
    having?: AsistenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsistenciaCountAggregateInputType | true
    _avg?: AsistenciaAvgAggregateInputType
    _sum?: AsistenciaSumAggregateInputType
    _min?: AsistenciaMinAggregateInputType
    _max?: AsistenciaMaxAggregateInputType
  }

  export type AsistenciaGroupByOutputType = {
    id: number
    fecha: Date
    presente: boolean
    tipoPersona: string
    estudianteId: number | null
    profesorId: number | null
    obreroId: number | null
    _count: AsistenciaCountAggregateOutputType | null
    _avg: AsistenciaAvgAggregateOutputType | null
    _sum: AsistenciaSumAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  type GetAsistenciaGroupByPayload<T extends AsistenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsistenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsistenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
            : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
        }
      >
    >


  export type AsistenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    presente?: boolean
    tipoPersona?: boolean
    estudianteId?: boolean
    profesorId?: boolean
    obreroId?: boolean
    estudiante?: boolean | Asistencia$estudianteArgs<ExtArgs>
    profesor?: boolean | Asistencia$profesorArgs<ExtArgs>
    obrero?: boolean | Asistencia$obreroArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type AsistenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    presente?: boolean
    tipoPersona?: boolean
    estudianteId?: boolean
    profesorId?: boolean
    obreroId?: boolean
    estudiante?: boolean | Asistencia$estudianteArgs<ExtArgs>
    profesor?: boolean | Asistencia$profesorArgs<ExtArgs>
    obrero?: boolean | Asistencia$obreroArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type AsistenciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    presente?: boolean
    tipoPersona?: boolean
    estudianteId?: boolean
    profesorId?: boolean
    obreroId?: boolean
    estudiante?: boolean | Asistencia$estudianteArgs<ExtArgs>
    profesor?: boolean | Asistencia$profesorArgs<ExtArgs>
    obrero?: boolean | Asistencia$obreroArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type AsistenciaSelectScalar = {
    id?: boolean
    fecha?: boolean
    presente?: boolean
    tipoPersona?: boolean
    estudianteId?: boolean
    profesorId?: boolean
    obreroId?: boolean
  }

  export type AsistenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "presente" | "tipoPersona" | "estudianteId" | "profesorId" | "obreroId", ExtArgs["result"]["asistencia"]>
  export type AsistenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | Asistencia$estudianteArgs<ExtArgs>
    profesor?: boolean | Asistencia$profesorArgs<ExtArgs>
    obrero?: boolean | Asistencia$obreroArgs<ExtArgs>
  }
  export type AsistenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | Asistencia$estudianteArgs<ExtArgs>
    profesor?: boolean | Asistencia$profesorArgs<ExtArgs>
    obrero?: boolean | Asistencia$obreroArgs<ExtArgs>
  }
  export type AsistenciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | Asistencia$estudianteArgs<ExtArgs>
    profesor?: boolean | Asistencia$profesorArgs<ExtArgs>
    obrero?: boolean | Asistencia$obreroArgs<ExtArgs>
  }

  export type $AsistenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asistencia"
    objects: {
      estudiante: Prisma.$EstudiantePayload<ExtArgs> | null
      profesor: Prisma.$ProfesorPayload<ExtArgs> | null
      obrero: Prisma.$ObreroPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      presente: boolean
      tipoPersona: string
      estudianteId: number | null
      profesorId: number | null
      obreroId: number | null
    }, ExtArgs["result"]["asistencia"]>
    composites: {}
  }

  type AsistenciaGetPayload<S extends boolean | null | undefined | AsistenciaDefaultArgs> = $Result.GetResult<Prisma.$AsistenciaPayload, S>

  type AsistenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsistenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsistenciaCountAggregateInputType | true
    }

  export interface AsistenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asistencia'], meta: { name: 'Asistencia' } }
    /**
     * Find zero or one Asistencia that matches the filter.
     * @param {AsistenciaFindUniqueArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsistenciaFindUniqueArgs>(args: SelectSubset<T, AsistenciaFindUniqueArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asistencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsistenciaFindUniqueOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsistenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, AsistenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asistencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaFindFirstArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsistenciaFindFirstArgs>(args?: SelectSubset<T, AsistenciaFindFirstArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asistencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaFindFirstOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsistenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, AsistenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asistencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asistencias
     * const asistencias = await prisma.asistencia.findMany()
     * 
     * // Get first 10 Asistencias
     * const asistencias = await prisma.asistencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsistenciaFindManyArgs>(args?: SelectSubset<T, AsistenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asistencia.
     * @param {AsistenciaCreateArgs} args - Arguments to create a Asistencia.
     * @example
     * // Create one Asistencia
     * const Asistencia = await prisma.asistencia.create({
     *   data: {
     *     // ... data to create a Asistencia
     *   }
     * })
     * 
     */
    create<T extends AsistenciaCreateArgs>(args: SelectSubset<T, AsistenciaCreateArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asistencias.
     * @param {AsistenciaCreateManyArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencia = await prisma.asistencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsistenciaCreateManyArgs>(args?: SelectSubset<T, AsistenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asistencias and returns the data saved in the database.
     * @param {AsistenciaCreateManyAndReturnArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencia = await prisma.asistencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asistencias and only return the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsistenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, AsistenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asistencia.
     * @param {AsistenciaDeleteArgs} args - Arguments to delete one Asistencia.
     * @example
     * // Delete one Asistencia
     * const Asistencia = await prisma.asistencia.delete({
     *   where: {
     *     // ... filter to delete one Asistencia
     *   }
     * })
     * 
     */
    delete<T extends AsistenciaDeleteArgs>(args: SelectSubset<T, AsistenciaDeleteArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asistencia.
     * @param {AsistenciaUpdateArgs} args - Arguments to update one Asistencia.
     * @example
     * // Update one Asistencia
     * const asistencia = await prisma.asistencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsistenciaUpdateArgs>(args: SelectSubset<T, AsistenciaUpdateArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asistencias.
     * @param {AsistenciaDeleteManyArgs} args - Arguments to filter Asistencias to delete.
     * @example
     * // Delete a few Asistencias
     * const { count } = await prisma.asistencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsistenciaDeleteManyArgs>(args?: SelectSubset<T, AsistenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asistencias
     * const asistencia = await prisma.asistencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsistenciaUpdateManyArgs>(args: SelectSubset<T, AsistenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias and returns the data updated in the database.
     * @param {AsistenciaUpdateManyAndReturnArgs} args - Arguments to update many Asistencias.
     * @example
     * // Update many Asistencias
     * const asistencia = await prisma.asistencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Asistencias and only return the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AsistenciaUpdateManyAndReturnArgs>(args: SelectSubset<T, AsistenciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asistencia.
     * @param {AsistenciaUpsertArgs} args - Arguments to update or create a Asistencia.
     * @example
     * // Update or create a Asistencia
     * const asistencia = await prisma.asistencia.upsert({
     *   create: {
     *     // ... data to create a Asistencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asistencia we want to update
     *   }
     * })
     */
    upsert<T extends AsistenciaUpsertArgs>(args: SelectSubset<T, AsistenciaUpsertArgs<ExtArgs>>): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaCountArgs} args - Arguments to filter Asistencias to count.
     * @example
     * // Count the number of Asistencias
     * const count = await prisma.asistencia.count({
     *   where: {
     *     // ... the filter for the Asistencias we want to count
     *   }
     * })
    **/
    count<T extends AsistenciaCountArgs>(
      args?: Subset<T, AsistenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsistenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsistenciaAggregateArgs>(args: Subset<T, AsistenciaAggregateArgs>): Prisma.PrismaPromise<GetAsistenciaAggregateType<T>>

    /**
     * Group by Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AsistenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsistenciaGroupByArgs['orderBy'] }
        : { orderBy?: AsistenciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AsistenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsistenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asistencia model
   */
  readonly fields: AsistenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asistencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsistenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiante<T extends Asistencia$estudianteArgs<ExtArgs> = {}>(args?: Subset<T, Asistencia$estudianteArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    profesor<T extends Asistencia$profesorArgs<ExtArgs> = {}>(args?: Subset<T, Asistencia$profesorArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    obrero<T extends Asistencia$obreroArgs<ExtArgs> = {}>(args?: Subset<T, Asistencia$obreroArgs<ExtArgs>>): Prisma__ObreroClient<$Result.GetResult<Prisma.$ObreroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asistencia model
   */
  interface AsistenciaFieldRefs {
    readonly id: FieldRef<"Asistencia", 'Int'>
    readonly fecha: FieldRef<"Asistencia", 'DateTime'>
    readonly presente: FieldRef<"Asistencia", 'Boolean'>
    readonly tipoPersona: FieldRef<"Asistencia", 'String'>
    readonly estudianteId: FieldRef<"Asistencia", 'Int'>
    readonly profesorId: FieldRef<"Asistencia", 'Int'>
    readonly obreroId: FieldRef<"Asistencia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Asistencia findUnique
   */
  export type AsistenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia findUniqueOrThrow
   */
  export type AsistenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia findFirst
   */
  export type AsistenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asistencias.
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Asistencia findFirstOrThrow
   */
  export type AsistenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asistencias.
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Asistencia findMany
   */
  export type AsistenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencias to fetch.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Asistencias.
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * Asistencia create
   */
  export type AsistenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Asistencia.
     */
    data: XOR<AsistenciaCreateInput, AsistenciaUncheckedCreateInput>
  }

  /**
   * Asistencia createMany
   */
  export type AsistenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Asistencias.
     */
    data: AsistenciaCreateManyInput | AsistenciaCreateManyInput[]
  }

  /**
   * Asistencia createManyAndReturn
   */
  export type AsistenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * The data used to create many Asistencias.
     */
    data: AsistenciaCreateManyInput | AsistenciaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asistencia update
   */
  export type AsistenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Asistencia.
     */
    data: XOR<AsistenciaUpdateInput, AsistenciaUncheckedUpdateInput>
    /**
     * Choose, which Asistencia to update.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia updateMany
   */
  export type AsistenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Asistencias.
     */
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyInput>
    /**
     * Filter which Asistencias to update
     */
    where?: AsistenciaWhereInput
    /**
     * Limit how many Asistencias to update.
     */
    limit?: number
  }

  /**
   * Asistencia updateManyAndReturn
   */
  export type AsistenciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * The data used to update Asistencias.
     */
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyInput>
    /**
     * Filter which Asistencias to update
     */
    where?: AsistenciaWhereInput
    /**
     * Limit how many Asistencias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asistencia upsert
   */
  export type AsistenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Asistencia to update in case it exists.
     */
    where: AsistenciaWhereUniqueInput
    /**
     * In case the Asistencia found by the `where` argument doesn't exist, create a new Asistencia with this data.
     */
    create: XOR<AsistenciaCreateInput, AsistenciaUncheckedCreateInput>
    /**
     * In case the Asistencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsistenciaUpdateInput, AsistenciaUncheckedUpdateInput>
  }

  /**
   * Asistencia delete
   */
  export type AsistenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter which Asistencia to delete.
     */
    where: AsistenciaWhereUniqueInput
  }

  /**
   * Asistencia deleteMany
   */
  export type AsistenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asistencias to delete
     */
    where?: AsistenciaWhereInput
    /**
     * Limit how many Asistencias to delete.
     */
    limit?: number
  }

  /**
   * Asistencia.estudiante
   */
  export type Asistencia$estudianteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudiante
     */
    omit?: EstudianteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    where?: EstudianteWhereInput
  }

  /**
   * Asistencia.profesor
   */
  export type Asistencia$profesorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesor
     */
    omit?: ProfesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    where?: ProfesorWhereInput
  }

  /**
   * Asistencia.obrero
   */
  export type Asistencia$obreroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obrero
     */
    select?: ObreroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obrero
     */
    omit?: ObreroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObreroInclude<ExtArgs> | null
    where?: ObreroWhereInput
  }

  /**
   * Asistencia without action
   */
  export type AsistenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asistencia
     */
    omit?: AsistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsistenciaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EstudianteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    grado: 'grado',
    seccion: 'seccion',
    creadoEn: 'creadoEn'
  };

  export type EstudianteScalarFieldEnum = (typeof EstudianteScalarFieldEnum)[keyof typeof EstudianteScalarFieldEnum]


  export const ProfesorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    materia: 'materia',
    creadoEn: 'creadoEn'
  };

  export type ProfesorScalarFieldEnum = (typeof ProfesorScalarFieldEnum)[keyof typeof ProfesorScalarFieldEnum]


  export const ObreroScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    area: 'area',
    creadoEn: 'creadoEn'
  };

  export type ObreroScalarFieldEnum = (typeof ObreroScalarFieldEnum)[keyof typeof ObreroScalarFieldEnum]


  export const AsistenciaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    presente: 'presente',
    tipoPersona: 'tipoPersona',
    estudianteId: 'estudianteId',
    profesorId: 'profesorId',
    obreroId: 'obreroId'
  };

  export type AsistenciaScalarFieldEnum = (typeof AsistenciaScalarFieldEnum)[keyof typeof AsistenciaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EstudianteWhereInput = {
    AND?: EstudianteWhereInput | EstudianteWhereInput[]
    OR?: EstudianteWhereInput[]
    NOT?: EstudianteWhereInput | EstudianteWhereInput[]
    id?: IntFilter<"Estudiante"> | number
    nombre?: StringFilter<"Estudiante"> | string
    grado?: StringFilter<"Estudiante"> | string
    seccion?: StringFilter<"Estudiante"> | string
    creadoEn?: DateTimeFilter<"Estudiante"> | Date | string
    asistencias?: AsistenciaListRelationFilter
  }

  export type EstudianteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    grado?: SortOrder
    seccion?: SortOrder
    creadoEn?: SortOrder
    asistencias?: AsistenciaOrderByRelationAggregateInput
  }

  export type EstudianteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstudianteWhereInput | EstudianteWhereInput[]
    OR?: EstudianteWhereInput[]
    NOT?: EstudianteWhereInput | EstudianteWhereInput[]
    nombre?: StringFilter<"Estudiante"> | string
    grado?: StringFilter<"Estudiante"> | string
    seccion?: StringFilter<"Estudiante"> | string
    creadoEn?: DateTimeFilter<"Estudiante"> | Date | string
    asistencias?: AsistenciaListRelationFilter
  }, "id">

  export type EstudianteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    grado?: SortOrder
    seccion?: SortOrder
    creadoEn?: SortOrder
    _count?: EstudianteCountOrderByAggregateInput
    _avg?: EstudianteAvgOrderByAggregateInput
    _max?: EstudianteMaxOrderByAggregateInput
    _min?: EstudianteMinOrderByAggregateInput
    _sum?: EstudianteSumOrderByAggregateInput
  }

  export type EstudianteScalarWhereWithAggregatesInput = {
    AND?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
    OR?: EstudianteScalarWhereWithAggregatesInput[]
    NOT?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estudiante"> | number
    nombre?: StringWithAggregatesFilter<"Estudiante"> | string
    grado?: StringWithAggregatesFilter<"Estudiante"> | string
    seccion?: StringWithAggregatesFilter<"Estudiante"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Estudiante"> | Date | string
  }

  export type ProfesorWhereInput = {
    AND?: ProfesorWhereInput | ProfesorWhereInput[]
    OR?: ProfesorWhereInput[]
    NOT?: ProfesorWhereInput | ProfesorWhereInput[]
    id?: IntFilter<"Profesor"> | number
    nombre?: StringFilter<"Profesor"> | string
    materia?: StringFilter<"Profesor"> | string
    creadoEn?: DateTimeFilter<"Profesor"> | Date | string
    asistencias?: AsistenciaListRelationFilter
  }

  export type ProfesorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    materia?: SortOrder
    creadoEn?: SortOrder
    asistencias?: AsistenciaOrderByRelationAggregateInput
  }

  export type ProfesorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfesorWhereInput | ProfesorWhereInput[]
    OR?: ProfesorWhereInput[]
    NOT?: ProfesorWhereInput | ProfesorWhereInput[]
    nombre?: StringFilter<"Profesor"> | string
    materia?: StringFilter<"Profesor"> | string
    creadoEn?: DateTimeFilter<"Profesor"> | Date | string
    asistencias?: AsistenciaListRelationFilter
  }, "id">

  export type ProfesorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    materia?: SortOrder
    creadoEn?: SortOrder
    _count?: ProfesorCountOrderByAggregateInput
    _avg?: ProfesorAvgOrderByAggregateInput
    _max?: ProfesorMaxOrderByAggregateInput
    _min?: ProfesorMinOrderByAggregateInput
    _sum?: ProfesorSumOrderByAggregateInput
  }

  export type ProfesorScalarWhereWithAggregatesInput = {
    AND?: ProfesorScalarWhereWithAggregatesInput | ProfesorScalarWhereWithAggregatesInput[]
    OR?: ProfesorScalarWhereWithAggregatesInput[]
    NOT?: ProfesorScalarWhereWithAggregatesInput | ProfesorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profesor"> | number
    nombre?: StringWithAggregatesFilter<"Profesor"> | string
    materia?: StringWithAggregatesFilter<"Profesor"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Profesor"> | Date | string
  }

  export type ObreroWhereInput = {
    AND?: ObreroWhereInput | ObreroWhereInput[]
    OR?: ObreroWhereInput[]
    NOT?: ObreroWhereInput | ObreroWhereInput[]
    id?: IntFilter<"Obrero"> | number
    nombre?: StringFilter<"Obrero"> | string
    area?: StringFilter<"Obrero"> | string
    creadoEn?: DateTimeFilter<"Obrero"> | Date | string
    asistencias?: AsistenciaListRelationFilter
  }

  export type ObreroOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    area?: SortOrder
    creadoEn?: SortOrder
    asistencias?: AsistenciaOrderByRelationAggregateInput
  }

  export type ObreroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ObreroWhereInput | ObreroWhereInput[]
    OR?: ObreroWhereInput[]
    NOT?: ObreroWhereInput | ObreroWhereInput[]
    nombre?: StringFilter<"Obrero"> | string
    area?: StringFilter<"Obrero"> | string
    creadoEn?: DateTimeFilter<"Obrero"> | Date | string
    asistencias?: AsistenciaListRelationFilter
  }, "id">

  export type ObreroOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    area?: SortOrder
    creadoEn?: SortOrder
    _count?: ObreroCountOrderByAggregateInput
    _avg?: ObreroAvgOrderByAggregateInput
    _max?: ObreroMaxOrderByAggregateInput
    _min?: ObreroMinOrderByAggregateInput
    _sum?: ObreroSumOrderByAggregateInput
  }

  export type ObreroScalarWhereWithAggregatesInput = {
    AND?: ObreroScalarWhereWithAggregatesInput | ObreroScalarWhereWithAggregatesInput[]
    OR?: ObreroScalarWhereWithAggregatesInput[]
    NOT?: ObreroScalarWhereWithAggregatesInput | ObreroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Obrero"> | number
    nombre?: StringWithAggregatesFilter<"Obrero"> | string
    area?: StringWithAggregatesFilter<"Obrero"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Obrero"> | Date | string
  }

  export type AsistenciaWhereInput = {
    AND?: AsistenciaWhereInput | AsistenciaWhereInput[]
    OR?: AsistenciaWhereInput[]
    NOT?: AsistenciaWhereInput | AsistenciaWhereInput[]
    id?: IntFilter<"Asistencia"> | number
    fecha?: DateTimeFilter<"Asistencia"> | Date | string
    presente?: BoolFilter<"Asistencia"> | boolean
    tipoPersona?: StringFilter<"Asistencia"> | string
    estudianteId?: IntNullableFilter<"Asistencia"> | number | null
    profesorId?: IntNullableFilter<"Asistencia"> | number | null
    obreroId?: IntNullableFilter<"Asistencia"> | number | null
    estudiante?: XOR<EstudianteNullableScalarRelationFilter, EstudianteWhereInput> | null
    profesor?: XOR<ProfesorNullableScalarRelationFilter, ProfesorWhereInput> | null
    obrero?: XOR<ObreroNullableScalarRelationFilter, ObreroWhereInput> | null
  }

  export type AsistenciaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    presente?: SortOrder
    tipoPersona?: SortOrder
    estudianteId?: SortOrderInput | SortOrder
    profesorId?: SortOrderInput | SortOrder
    obreroId?: SortOrderInput | SortOrder
    estudiante?: EstudianteOrderByWithRelationInput
    profesor?: ProfesorOrderByWithRelationInput
    obrero?: ObreroOrderByWithRelationInput
  }

  export type AsistenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AsistenciaWhereInput | AsistenciaWhereInput[]
    OR?: AsistenciaWhereInput[]
    NOT?: AsistenciaWhereInput | AsistenciaWhereInput[]
    fecha?: DateTimeFilter<"Asistencia"> | Date | string
    presente?: BoolFilter<"Asistencia"> | boolean
    tipoPersona?: StringFilter<"Asistencia"> | string
    estudianteId?: IntNullableFilter<"Asistencia"> | number | null
    profesorId?: IntNullableFilter<"Asistencia"> | number | null
    obreroId?: IntNullableFilter<"Asistencia"> | number | null
    estudiante?: XOR<EstudianteNullableScalarRelationFilter, EstudianteWhereInput> | null
    profesor?: XOR<ProfesorNullableScalarRelationFilter, ProfesorWhereInput> | null
    obrero?: XOR<ObreroNullableScalarRelationFilter, ObreroWhereInput> | null
  }, "id">

  export type AsistenciaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    presente?: SortOrder
    tipoPersona?: SortOrder
    estudianteId?: SortOrderInput | SortOrder
    profesorId?: SortOrderInput | SortOrder
    obreroId?: SortOrderInput | SortOrder
    _count?: AsistenciaCountOrderByAggregateInput
    _avg?: AsistenciaAvgOrderByAggregateInput
    _max?: AsistenciaMaxOrderByAggregateInput
    _min?: AsistenciaMinOrderByAggregateInput
    _sum?: AsistenciaSumOrderByAggregateInput
  }

  export type AsistenciaScalarWhereWithAggregatesInput = {
    AND?: AsistenciaScalarWhereWithAggregatesInput | AsistenciaScalarWhereWithAggregatesInput[]
    OR?: AsistenciaScalarWhereWithAggregatesInput[]
    NOT?: AsistenciaScalarWhereWithAggregatesInput | AsistenciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Asistencia"> | number
    fecha?: DateTimeWithAggregatesFilter<"Asistencia"> | Date | string
    presente?: BoolWithAggregatesFilter<"Asistencia"> | boolean
    tipoPersona?: StringWithAggregatesFilter<"Asistencia"> | string
    estudianteId?: IntNullableWithAggregatesFilter<"Asistencia"> | number | null
    profesorId?: IntNullableWithAggregatesFilter<"Asistencia"> | number | null
    obreroId?: IntNullableWithAggregatesFilter<"Asistencia"> | number | null
  }

  export type EstudianteCreateInput = {
    nombre: string
    grado: string
    seccion: string
    creadoEn?: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateInput = {
    id?: number
    nombre: string
    grado: string
    seccion: string
    creadoEn?: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    grado?: StringFieldUpdateOperationsInput | string
    seccion?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    grado?: StringFieldUpdateOperationsInput | string
    seccion?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteCreateManyInput = {
    id?: number
    nombre: string
    grado: string
    seccion: string
    creadoEn?: Date | string
  }

  export type EstudianteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    grado?: StringFieldUpdateOperationsInput | string
    seccion?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstudianteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    grado?: StringFieldUpdateOperationsInput | string
    seccion?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesorCreateInput = {
    nombre: string
    materia: string
    creadoEn?: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorUncheckedCreateInput = {
    id?: number
    nombre: string
    materia: string
    creadoEn?: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    materia?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutProfesorNestedInput
  }

  export type ProfesorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    materia?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutProfesorNestedInput
  }

  export type ProfesorCreateManyInput = {
    id?: number
    nombre: string
    materia: string
    creadoEn?: Date | string
  }

  export type ProfesorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    materia?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    materia?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObreroCreateInput = {
    nombre: string
    area: string
    creadoEn?: Date | string
    asistencias?: AsistenciaCreateNestedManyWithoutObreroInput
  }

  export type ObreroUncheckedCreateInput = {
    id?: number
    nombre: string
    area: string
    creadoEn?: Date | string
    asistencias?: AsistenciaUncheckedCreateNestedManyWithoutObreroInput
  }

  export type ObreroUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUpdateManyWithoutObreroNestedInput
  }

  export type ObreroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: AsistenciaUncheckedUpdateManyWithoutObreroNestedInput
  }

  export type ObreroCreateManyInput = {
    id?: number
    nombre: string
    area: string
    creadoEn?: Date | string
  }

  export type ObreroUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObreroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaCreateInput = {
    fecha?: Date | string
    presente: boolean
    tipoPersona: string
    estudiante?: EstudianteCreateNestedOneWithoutAsistenciasInput
    profesor?: ProfesorCreateNestedOneWithoutAsistenciasInput
    obrero?: ObreroCreateNestedOneWithoutAsistenciasInput
  }

  export type AsistenciaUncheckedCreateInput = {
    id?: number
    fecha?: Date | string
    presente: boolean
    tipoPersona: string
    estudianteId?: number | null
    profesorId?: number | null
    obreroId?: number | null
  }

  export type AsistenciaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    tipoPersona?: StringFieldUpdateOperationsInput | string
    estudiante?: EstudianteUpdateOneWithoutAsistenciasNestedInput
    profesor?: ProfesorUpdateOneWithoutAsistenciasNestedInput
    obrero?: ObreroUpdateOneWithoutAsistenciasNestedInput
  }

  export type AsistenciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    tipoPersona?: StringFieldUpdateOperationsInput | string
    estudianteId?: NullableIntFieldUpdateOperationsInput | number | null
    profesorId?: NullableIntFieldUpdateOperationsInput | number | null
    obreroId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AsistenciaCreateManyInput = {
    id?: number
    fecha?: Date | string
    presente: boolean
    tipoPersona: string
    estudianteId?: number | null
    profesorId?: number | null
    obreroId?: number | null
  }

  export type AsistenciaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    tipoPersona?: StringFieldUpdateOperationsInput | string
  }

  export type AsistenciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    tipoPersona?: StringFieldUpdateOperationsInput | string
    estudianteId?: NullableIntFieldUpdateOperationsInput | number | null
    profesorId?: NullableIntFieldUpdateOperationsInput | number | null
    obreroId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AsistenciaListRelationFilter = {
    every?: AsistenciaWhereInput
    some?: AsistenciaWhereInput
    none?: AsistenciaWhereInput
  }

  export type AsistenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstudianteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    grado?: SortOrder
    seccion?: SortOrder
    creadoEn?: SortOrder
  }

  export type EstudianteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstudianteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    grado?: SortOrder
    seccion?: SortOrder
    creadoEn?: SortOrder
  }

  export type EstudianteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    grado?: SortOrder
    seccion?: SortOrder
    creadoEn?: SortOrder
  }

  export type EstudianteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProfesorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    materia?: SortOrder
    creadoEn?: SortOrder
  }

  export type ProfesorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfesorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    materia?: SortOrder
    creadoEn?: SortOrder
  }

  export type ProfesorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    materia?: SortOrder
    creadoEn?: SortOrder
  }

  export type ProfesorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ObreroCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    area?: SortOrder
    creadoEn?: SortOrder
  }

  export type ObreroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ObreroMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    area?: SortOrder
    creadoEn?: SortOrder
  }

  export type ObreroMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    area?: SortOrder
    creadoEn?: SortOrder
  }

  export type ObreroSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EstudianteNullableScalarRelationFilter = {
    is?: EstudianteWhereInput | null
    isNot?: EstudianteWhereInput | null
  }

  export type ProfesorNullableScalarRelationFilter = {
    is?: ProfesorWhereInput | null
    isNot?: ProfesorWhereInput | null
  }

  export type ObreroNullableScalarRelationFilter = {
    is?: ObreroWhereInput | null
    isNot?: ObreroWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AsistenciaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    presente?: SortOrder
    tipoPersona?: SortOrder
    estudianteId?: SortOrder
    profesorId?: SortOrder
    obreroId?: SortOrder
  }

  export type AsistenciaAvgOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    profesorId?: SortOrder
    obreroId?: SortOrder
  }

  export type AsistenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    presente?: SortOrder
    tipoPersona?: SortOrder
    estudianteId?: SortOrder
    profesorId?: SortOrder
    obreroId?: SortOrder
  }

  export type AsistenciaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    presente?: SortOrder
    tipoPersona?: SortOrder
    estudianteId?: SortOrder
    profesorId?: SortOrder
    obreroId?: SortOrder
  }

  export type AsistenciaSumOrderByAggregateInput = {
    id?: SortOrder
    estudianteId?: SortOrder
    profesorId?: SortOrder
    obreroId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AsistenciaCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<AsistenciaCreateWithoutEstudianteInput, AsistenciaUncheckedCreateWithoutEstudianteInput> | AsistenciaCreateWithoutEstudianteInput[] | AsistenciaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutEstudianteInput | AsistenciaCreateOrConnectWithoutEstudianteInput[]
    createMany?: AsistenciaCreateManyEstudianteInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type AsistenciaUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<AsistenciaCreateWithoutEstudianteInput, AsistenciaUncheckedCreateWithoutEstudianteInput> | AsistenciaCreateWithoutEstudianteInput[] | AsistenciaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutEstudianteInput | AsistenciaCreateOrConnectWithoutEstudianteInput[]
    createMany?: AsistenciaCreateManyEstudianteInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AsistenciaUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<AsistenciaCreateWithoutEstudianteInput, AsistenciaUncheckedCreateWithoutEstudianteInput> | AsistenciaCreateWithoutEstudianteInput[] | AsistenciaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutEstudianteInput | AsistenciaCreateOrConnectWithoutEstudianteInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutEstudianteInput | AsistenciaUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: AsistenciaCreateManyEstudianteInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutEstudianteInput | AsistenciaUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutEstudianteInput | AsistenciaUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AsistenciaUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<AsistenciaCreateWithoutEstudianteInput, AsistenciaUncheckedCreateWithoutEstudianteInput> | AsistenciaCreateWithoutEstudianteInput[] | AsistenciaUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutEstudianteInput | AsistenciaCreateOrConnectWithoutEstudianteInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutEstudianteInput | AsistenciaUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: AsistenciaCreateManyEstudianteInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutEstudianteInput | AsistenciaUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutEstudianteInput | AsistenciaUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type AsistenciaCreateNestedManyWithoutProfesorInput = {
    create?: XOR<AsistenciaCreateWithoutProfesorInput, AsistenciaUncheckedCreateWithoutProfesorInput> | AsistenciaCreateWithoutProfesorInput[] | AsistenciaUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutProfesorInput | AsistenciaCreateOrConnectWithoutProfesorInput[]
    createMany?: AsistenciaCreateManyProfesorInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type AsistenciaUncheckedCreateNestedManyWithoutProfesorInput = {
    create?: XOR<AsistenciaCreateWithoutProfesorInput, AsistenciaUncheckedCreateWithoutProfesorInput> | AsistenciaCreateWithoutProfesorInput[] | AsistenciaUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutProfesorInput | AsistenciaCreateOrConnectWithoutProfesorInput[]
    createMany?: AsistenciaCreateManyProfesorInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type AsistenciaUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<AsistenciaCreateWithoutProfesorInput, AsistenciaUncheckedCreateWithoutProfesorInput> | AsistenciaCreateWithoutProfesorInput[] | AsistenciaUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutProfesorInput | AsistenciaCreateOrConnectWithoutProfesorInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutProfesorInput | AsistenciaUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: AsistenciaCreateManyProfesorInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutProfesorInput | AsistenciaUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutProfesorInput | AsistenciaUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type AsistenciaUncheckedUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<AsistenciaCreateWithoutProfesorInput, AsistenciaUncheckedCreateWithoutProfesorInput> | AsistenciaCreateWithoutProfesorInput[] | AsistenciaUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutProfesorInput | AsistenciaCreateOrConnectWithoutProfesorInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutProfesorInput | AsistenciaUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: AsistenciaCreateManyProfesorInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutProfesorInput | AsistenciaUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutProfesorInput | AsistenciaUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type AsistenciaCreateNestedManyWithoutObreroInput = {
    create?: XOR<AsistenciaCreateWithoutObreroInput, AsistenciaUncheckedCreateWithoutObreroInput> | AsistenciaCreateWithoutObreroInput[] | AsistenciaUncheckedCreateWithoutObreroInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutObreroInput | AsistenciaCreateOrConnectWithoutObreroInput[]
    createMany?: AsistenciaCreateManyObreroInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type AsistenciaUncheckedCreateNestedManyWithoutObreroInput = {
    create?: XOR<AsistenciaCreateWithoutObreroInput, AsistenciaUncheckedCreateWithoutObreroInput> | AsistenciaCreateWithoutObreroInput[] | AsistenciaUncheckedCreateWithoutObreroInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutObreroInput | AsistenciaCreateOrConnectWithoutObreroInput[]
    createMany?: AsistenciaCreateManyObreroInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type AsistenciaUpdateManyWithoutObreroNestedInput = {
    create?: XOR<AsistenciaCreateWithoutObreroInput, AsistenciaUncheckedCreateWithoutObreroInput> | AsistenciaCreateWithoutObreroInput[] | AsistenciaUncheckedCreateWithoutObreroInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutObreroInput | AsistenciaCreateOrConnectWithoutObreroInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutObreroInput | AsistenciaUpsertWithWhereUniqueWithoutObreroInput[]
    createMany?: AsistenciaCreateManyObreroInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutObreroInput | AsistenciaUpdateWithWhereUniqueWithoutObreroInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutObreroInput | AsistenciaUpdateManyWithWhereWithoutObreroInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type AsistenciaUncheckedUpdateManyWithoutObreroNestedInput = {
    create?: XOR<AsistenciaCreateWithoutObreroInput, AsistenciaUncheckedCreateWithoutObreroInput> | AsistenciaCreateWithoutObreroInput[] | AsistenciaUncheckedCreateWithoutObreroInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutObreroInput | AsistenciaCreateOrConnectWithoutObreroInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutObreroInput | AsistenciaUpsertWithWhereUniqueWithoutObreroInput[]
    createMany?: AsistenciaCreateManyObreroInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutObreroInput | AsistenciaUpdateWithWhereUniqueWithoutObreroInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutObreroInput | AsistenciaUpdateManyWithWhereWithoutObreroInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type EstudianteCreateNestedOneWithoutAsistenciasInput = {
    create?: XOR<EstudianteCreateWithoutAsistenciasInput, EstudianteUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutAsistenciasInput
    connect?: EstudianteWhereUniqueInput
  }

  export type ProfesorCreateNestedOneWithoutAsistenciasInput = {
    create?: XOR<ProfesorCreateWithoutAsistenciasInput, ProfesorUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: ProfesorCreateOrConnectWithoutAsistenciasInput
    connect?: ProfesorWhereUniqueInput
  }

  export type ObreroCreateNestedOneWithoutAsistenciasInput = {
    create?: XOR<ObreroCreateWithoutAsistenciasInput, ObreroUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: ObreroCreateOrConnectWithoutAsistenciasInput
    connect?: ObreroWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EstudianteUpdateOneWithoutAsistenciasNestedInput = {
    create?: XOR<EstudianteCreateWithoutAsistenciasInput, EstudianteUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutAsistenciasInput
    upsert?: EstudianteUpsertWithoutAsistenciasInput
    disconnect?: EstudianteWhereInput | boolean
    delete?: EstudianteWhereInput | boolean
    connect?: EstudianteWhereUniqueInput
    update?: XOR<XOR<EstudianteUpdateToOneWithWhereWithoutAsistenciasInput, EstudianteUpdateWithoutAsistenciasInput>, EstudianteUncheckedUpdateWithoutAsistenciasInput>
  }

  export type ProfesorUpdateOneWithoutAsistenciasNestedInput = {
    create?: XOR<ProfesorCreateWithoutAsistenciasInput, ProfesorUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: ProfesorCreateOrConnectWithoutAsistenciasInput
    upsert?: ProfesorUpsertWithoutAsistenciasInput
    disconnect?: ProfesorWhereInput | boolean
    delete?: ProfesorWhereInput | boolean
    connect?: ProfesorWhereUniqueInput
    update?: XOR<XOR<ProfesorUpdateToOneWithWhereWithoutAsistenciasInput, ProfesorUpdateWithoutAsistenciasInput>, ProfesorUncheckedUpdateWithoutAsistenciasInput>
  }

  export type ObreroUpdateOneWithoutAsistenciasNestedInput = {
    create?: XOR<ObreroCreateWithoutAsistenciasInput, ObreroUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: ObreroCreateOrConnectWithoutAsistenciasInput
    upsert?: ObreroUpsertWithoutAsistenciasInput
    disconnect?: ObreroWhereInput | boolean
    delete?: ObreroWhereInput | boolean
    connect?: ObreroWhereUniqueInput
    update?: XOR<XOR<ObreroUpdateToOneWithWhereWithoutAsistenciasInput, ObreroUpdateWithoutAsistenciasInput>, ObreroUncheckedUpdateWithoutAsistenciasInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AsistenciaCreateWithoutEstudianteInput = {
    fecha?: Date | string
    presente: boolean
    tipoPersona: string
    profesor?: ProfesorCreateNestedOneWithoutAsistenciasInput
    obrero?: ObreroCreateNestedOneWithoutAsistenciasInput
  }

  export type AsistenciaUncheckedCreateWithoutEstudianteInput = {
    id?: number
    fecha?: Date | string
    presente: boolean
    tipoPersona: string
    profesorId?: number | null
    obreroId?: number | null
  }

  export type AsistenciaCreateOrConnectWithoutEstudianteInput = {
    where: AsistenciaWhereUniqueInput
    create: XOR<AsistenciaCreateWithoutEstudianteInput, AsistenciaUncheckedCreateWithoutEstudianteInput>
  }

  export type AsistenciaCreateManyEstudianteInputEnvelope = {
    data: AsistenciaCreateManyEstudianteInput | AsistenciaCreateManyEstudianteInput[]
  }

  export type AsistenciaUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: AsistenciaWhereUniqueInput
    update: XOR<AsistenciaUpdateWithoutEstudianteInput, AsistenciaUncheckedUpdateWithoutEstudianteInput>
    create: XOR<AsistenciaCreateWithoutEstudianteInput, AsistenciaUncheckedCreateWithoutEstudianteInput>
  }

  export type AsistenciaUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: AsistenciaWhereUniqueInput
    data: XOR<AsistenciaUpdateWithoutEstudianteInput, AsistenciaUncheckedUpdateWithoutEstudianteInput>
  }

  export type AsistenciaUpdateManyWithWhereWithoutEstudianteInput = {
    where: AsistenciaScalarWhereInput
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type AsistenciaScalarWhereInput = {
    AND?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
    OR?: AsistenciaScalarWhereInput[]
    NOT?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
    id?: IntFilter<"Asistencia"> | number
    fecha?: DateTimeFilter<"Asistencia"> | Date | string
    presente?: BoolFilter<"Asistencia"> | boolean
    tipoPersona?: StringFilter<"Asistencia"> | string
    estudianteId?: IntNullableFilter<"Asistencia"> | number | null
    profesorId?: IntNullableFilter<"Asistencia"> | number | null
    obreroId?: IntNullableFilter<"Asistencia"> | number | null
  }

  export type AsistenciaCreateWithoutProfesorInput = {
    fecha?: Date | string
    presente: boolean
    tipoPersona: string
    estudiante?: EstudianteCreateNestedOneWithoutAsistenciasInput
    obrero?: ObreroCreateNestedOneWithoutAsistenciasInput
  }

  export type AsistenciaUncheckedCreateWithoutProfesorInput = {
    id?: number
    fecha?: Date | string
    presente: boolean
    tipoPersona: string
    estudianteId?: number | null
    obreroId?: number | null
  }

  export type AsistenciaCreateOrConnectWithoutProfesorInput = {
    where: AsistenciaWhereUniqueInput
    create: XOR<AsistenciaCreateWithoutProfesorInput, AsistenciaUncheckedCreateWithoutProfesorInput>
  }

  export type AsistenciaCreateManyProfesorInputEnvelope = {
    data: AsistenciaCreateManyProfesorInput | AsistenciaCreateManyProfesorInput[]
  }

  export type AsistenciaUpsertWithWhereUniqueWithoutProfesorInput = {
    where: AsistenciaWhereUniqueInput
    update: XOR<AsistenciaUpdateWithoutProfesorInput, AsistenciaUncheckedUpdateWithoutProfesorInput>
    create: XOR<AsistenciaCreateWithoutProfesorInput, AsistenciaUncheckedCreateWithoutProfesorInput>
  }

  export type AsistenciaUpdateWithWhereUniqueWithoutProfesorInput = {
    where: AsistenciaWhereUniqueInput
    data: XOR<AsistenciaUpdateWithoutProfesorInput, AsistenciaUncheckedUpdateWithoutProfesorInput>
  }

  export type AsistenciaUpdateManyWithWhereWithoutProfesorInput = {
    where: AsistenciaScalarWhereInput
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyWithoutProfesorInput>
  }

  export type AsistenciaCreateWithoutObreroInput = {
    fecha?: Date | string
    presente: boolean
    tipoPersona: string
    estudiante?: EstudianteCreateNestedOneWithoutAsistenciasInput
    profesor?: ProfesorCreateNestedOneWithoutAsistenciasInput
  }

  export type AsistenciaUncheckedCreateWithoutObreroInput = {
    id?: number
    fecha?: Date | string
    presente: boolean
    tipoPersona: string
    estudianteId?: number | null
    profesorId?: number | null
  }

  export type AsistenciaCreateOrConnectWithoutObreroInput = {
    where: AsistenciaWhereUniqueInput
    create: XOR<AsistenciaCreateWithoutObreroInput, AsistenciaUncheckedCreateWithoutObreroInput>
  }

  export type AsistenciaCreateManyObreroInputEnvelope = {
    data: AsistenciaCreateManyObreroInput | AsistenciaCreateManyObreroInput[]
  }

  export type AsistenciaUpsertWithWhereUniqueWithoutObreroInput = {
    where: AsistenciaWhereUniqueInput
    update: XOR<AsistenciaUpdateWithoutObreroInput, AsistenciaUncheckedUpdateWithoutObreroInput>
    create: XOR<AsistenciaCreateWithoutObreroInput, AsistenciaUncheckedCreateWithoutObreroInput>
  }

  export type AsistenciaUpdateWithWhereUniqueWithoutObreroInput = {
    where: AsistenciaWhereUniqueInput
    data: XOR<AsistenciaUpdateWithoutObreroInput, AsistenciaUncheckedUpdateWithoutObreroInput>
  }

  export type AsistenciaUpdateManyWithWhereWithoutObreroInput = {
    where: AsistenciaScalarWhereInput
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyWithoutObreroInput>
  }

  export type EstudianteCreateWithoutAsistenciasInput = {
    nombre: string
    grado: string
    seccion: string
    creadoEn?: Date | string
  }

  export type EstudianteUncheckedCreateWithoutAsistenciasInput = {
    id?: number
    nombre: string
    grado: string
    seccion: string
    creadoEn?: Date | string
  }

  export type EstudianteCreateOrConnectWithoutAsistenciasInput = {
    where: EstudianteWhereUniqueInput
    create: XOR<EstudianteCreateWithoutAsistenciasInput, EstudianteUncheckedCreateWithoutAsistenciasInput>
  }

  export type ProfesorCreateWithoutAsistenciasInput = {
    nombre: string
    materia: string
    creadoEn?: Date | string
  }

  export type ProfesorUncheckedCreateWithoutAsistenciasInput = {
    id?: number
    nombre: string
    materia: string
    creadoEn?: Date | string
  }

  export type ProfesorCreateOrConnectWithoutAsistenciasInput = {
    where: ProfesorWhereUniqueInput
    create: XOR<ProfesorCreateWithoutAsistenciasInput, ProfesorUncheckedCreateWithoutAsistenciasInput>
  }

  export type ObreroCreateWithoutAsistenciasInput = {
    nombre: string
    area: string
    creadoEn?: Date | string
  }

  export type ObreroUncheckedCreateWithoutAsistenciasInput = {
    id?: number
    nombre: string
    area: string
    creadoEn?: Date | string
  }

  export type ObreroCreateOrConnectWithoutAsistenciasInput = {
    where: ObreroWhereUniqueInput
    create: XOR<ObreroCreateWithoutAsistenciasInput, ObreroUncheckedCreateWithoutAsistenciasInput>
  }

  export type EstudianteUpsertWithoutAsistenciasInput = {
    update: XOR<EstudianteUpdateWithoutAsistenciasInput, EstudianteUncheckedUpdateWithoutAsistenciasInput>
    create: XOR<EstudianteCreateWithoutAsistenciasInput, EstudianteUncheckedCreateWithoutAsistenciasInput>
    where?: EstudianteWhereInput
  }

  export type EstudianteUpdateToOneWithWhereWithoutAsistenciasInput = {
    where?: EstudianteWhereInput
    data: XOR<EstudianteUpdateWithoutAsistenciasInput, EstudianteUncheckedUpdateWithoutAsistenciasInput>
  }

  export type EstudianteUpdateWithoutAsistenciasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    grado?: StringFieldUpdateOperationsInput | string
    seccion?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstudianteUncheckedUpdateWithoutAsistenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    grado?: StringFieldUpdateOperationsInput | string
    seccion?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesorUpsertWithoutAsistenciasInput = {
    update: XOR<ProfesorUpdateWithoutAsistenciasInput, ProfesorUncheckedUpdateWithoutAsistenciasInput>
    create: XOR<ProfesorCreateWithoutAsistenciasInput, ProfesorUncheckedCreateWithoutAsistenciasInput>
    where?: ProfesorWhereInput
  }

  export type ProfesorUpdateToOneWithWhereWithoutAsistenciasInput = {
    where?: ProfesorWhereInput
    data: XOR<ProfesorUpdateWithoutAsistenciasInput, ProfesorUncheckedUpdateWithoutAsistenciasInput>
  }

  export type ProfesorUpdateWithoutAsistenciasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    materia?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesorUncheckedUpdateWithoutAsistenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    materia?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObreroUpsertWithoutAsistenciasInput = {
    update: XOR<ObreroUpdateWithoutAsistenciasInput, ObreroUncheckedUpdateWithoutAsistenciasInput>
    create: XOR<ObreroCreateWithoutAsistenciasInput, ObreroUncheckedCreateWithoutAsistenciasInput>
    where?: ObreroWhereInput
  }

  export type ObreroUpdateToOneWithWhereWithoutAsistenciasInput = {
    where?: ObreroWhereInput
    data: XOR<ObreroUpdateWithoutAsistenciasInput, ObreroUncheckedUpdateWithoutAsistenciasInput>
  }

  export type ObreroUpdateWithoutAsistenciasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObreroUncheckedUpdateWithoutAsistenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaCreateManyEstudianteInput = {
    id?: number
    fecha?: Date | string
    presente: boolean
    tipoPersona: string
    profesorId?: number | null
    obreroId?: number | null
  }

  export type AsistenciaUpdateWithoutEstudianteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    tipoPersona?: StringFieldUpdateOperationsInput | string
    profesor?: ProfesorUpdateOneWithoutAsistenciasNestedInput
    obrero?: ObreroUpdateOneWithoutAsistenciasNestedInput
  }

  export type AsistenciaUncheckedUpdateWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    tipoPersona?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableIntFieldUpdateOperationsInput | number | null
    obreroId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AsistenciaUncheckedUpdateManyWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    tipoPersona?: StringFieldUpdateOperationsInput | string
    profesorId?: NullableIntFieldUpdateOperationsInput | number | null
    obreroId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AsistenciaCreateManyProfesorInput = {
    id?: number
    fecha?: Date | string
    presente: boolean
    tipoPersona: string
    estudianteId?: number | null
    obreroId?: number | null
  }

  export type AsistenciaUpdateWithoutProfesorInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    tipoPersona?: StringFieldUpdateOperationsInput | string
    estudiante?: EstudianteUpdateOneWithoutAsistenciasNestedInput
    obrero?: ObreroUpdateOneWithoutAsistenciasNestedInput
  }

  export type AsistenciaUncheckedUpdateWithoutProfesorInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    tipoPersona?: StringFieldUpdateOperationsInput | string
    estudianteId?: NullableIntFieldUpdateOperationsInput | number | null
    obreroId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AsistenciaUncheckedUpdateManyWithoutProfesorInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    tipoPersona?: StringFieldUpdateOperationsInput | string
    estudianteId?: NullableIntFieldUpdateOperationsInput | number | null
    obreroId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AsistenciaCreateManyObreroInput = {
    id?: number
    fecha?: Date | string
    presente: boolean
    tipoPersona: string
    estudianteId?: number | null
    profesorId?: number | null
  }

  export type AsistenciaUpdateWithoutObreroInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    tipoPersona?: StringFieldUpdateOperationsInput | string
    estudiante?: EstudianteUpdateOneWithoutAsistenciasNestedInput
    profesor?: ProfesorUpdateOneWithoutAsistenciasNestedInput
  }

  export type AsistenciaUncheckedUpdateWithoutObreroInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    tipoPersona?: StringFieldUpdateOperationsInput | string
    estudianteId?: NullableIntFieldUpdateOperationsInput | number | null
    profesorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AsistenciaUncheckedUpdateManyWithoutObreroInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    tipoPersona?: StringFieldUpdateOperationsInput | string
    estudianteId?: NullableIntFieldUpdateOperationsInput | number | null
    profesorId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}