
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
 * Model ServicoEntrada
 * 
 */
export type ServicoEntrada = $Result.DefaultSelection<Prisma.$ServicoEntradaPayload>
/**
 * Model AdicionalConsultorioFechamento
 * 
 */
export type AdicionalConsultorioFechamento = $Result.DefaultSelection<Prisma.$AdicionalConsultorioFechamentoPayload>
/**
 * Model AdicionalDentistaFechamento
 * 
 */
export type AdicionalDentistaFechamento = $Result.DefaultSelection<Prisma.$AdicionalDentistaFechamentoPayload>
/**
 * Model Consultorio
 * 
 */
export type Consultorio = $Result.DefaultSelection<Prisma.$ConsultorioPayload>
/**
 * Model Dentista
 * 
 */
export type Dentista = $Result.DefaultSelection<Prisma.$DentistaPayload>
/**
 * Model Especialidade
 * 
 */
export type Especialidade = $Result.DefaultSelection<Prisma.$EspecialidadePayload>
/**
 * Model Secretaria
 * 
 */
export type Secretaria = $Result.DefaultSelection<Prisma.$SecretariaPayload>
/**
 * Model Funcionario
 * 
 */
export type Funcionario = $Result.DefaultSelection<Prisma.$FuncionarioPayload>
/**
 * Model Funcao
 * 
 */
export type Funcao = $Result.DefaultSelection<Prisma.$FuncaoPayload>
/**
 * Model Servico
 * 
 */
export type Servico = $Result.DefaultSelection<Prisma.$ServicoPayload>
/**
 * Model Entrada
 * 
 */
export type Entrada = $Result.DefaultSelection<Prisma.$EntradaPayload>
/**
 * Model Roteiro
 * 
 */
export type Roteiro = $Result.DefaultSelection<Prisma.$RoteiroPayload>
/**
 * Model Fechamento
 * 
 */
export type Fechamento = $Result.DefaultSelection<Prisma.$FechamentoPayload>
/**
 * Model Valores
 * 
 */
export type Valores = $Result.DefaultSelection<Prisma.$ValoresPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Consultorios
 * const consultorios = await prisma.consultorio.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Consultorios
   * const consultorios = await prisma.consultorio.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.consultorio`: Exposes CRUD operations for the **Consultorio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultorios
    * const consultorios = await prisma.consultorio.findMany()
    * ```
    */
  get consultorio(): Prisma.ConsultorioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dentista`: Exposes CRUD operations for the **Dentista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dentistas
    * const dentistas = await prisma.dentista.findMany()
    * ```
    */
  get dentista(): Prisma.DentistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.especialidade`: Exposes CRUD operations for the **Especialidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especialidades
    * const especialidades = await prisma.especialidade.findMany()
    * ```
    */
  get especialidade(): Prisma.EspecialidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.secretaria`: Exposes CRUD operations for the **Secretaria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Secretarias
    * const secretarias = await prisma.secretaria.findMany()
    * ```
    */
  get secretaria(): Prisma.SecretariaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionario`: Exposes CRUD operations for the **Funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.FuncionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcao`: Exposes CRUD operations for the **Funcao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcaos
    * const funcaos = await prisma.funcao.findMany()
    * ```
    */
  get funcao(): Prisma.FuncaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servico`: Exposes CRUD operations for the **Servico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicos
    * const servicos = await prisma.servico.findMany()
    * ```
    */
  get servico(): Prisma.ServicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entrada`: Exposes CRUD operations for the **Entrada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entradas
    * const entradas = await prisma.entrada.findMany()
    * ```
    */
  get entrada(): Prisma.EntradaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roteiro`: Exposes CRUD operations for the **Roteiro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roteiros
    * const roteiros = await prisma.roteiro.findMany()
    * ```
    */
  get roteiro(): Prisma.RoteiroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fechamento`: Exposes CRUD operations for the **Fechamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fechamentos
    * const fechamentos = await prisma.fechamento.findMany()
    * ```
    */
  get fechamento(): Prisma.FechamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.valores`: Exposes CRUD operations for the **Valores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Valores
    * const valores = await prisma.valores.findMany()
    * ```
    */
  get valores(): Prisma.ValoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Consultorio: 'Consultorio',
    Dentista: 'Dentista',
    Especialidade: 'Especialidade',
    Secretaria: 'Secretaria',
    Funcionario: 'Funcionario',
    Funcao: 'Funcao',
    Servico: 'Servico',
    Entrada: 'Entrada',
    Roteiro: 'Roteiro',
    Fechamento: 'Fechamento',
    Valores: 'Valores',
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification'
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
      modelProps: "consultorio" | "dentista" | "especialidade" | "secretaria" | "funcionario" | "funcao" | "servico" | "entrada" | "roteiro" | "fechamento" | "valores" | "user" | "session" | "account" | "verification"
      txIsolationLevel: never
    }
    model: {
      Consultorio: {
        payload: Prisma.$ConsultorioPayload<ExtArgs>
        fields: Prisma.ConsultorioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultorioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultorioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioPayload>
          }
          findFirst: {
            args: Prisma.ConsultorioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultorioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioPayload>
          }
          findMany: {
            args: Prisma.ConsultorioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioPayload>[]
          }
          create: {
            args: Prisma.ConsultorioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioPayload>
          }
          createMany: {
            args: Prisma.ConsultorioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConsultorioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioPayload>
          }
          update: {
            args: Prisma.ConsultorioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioPayload>
          }
          deleteMany: {
            args: Prisma.ConsultorioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultorioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConsultorioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultorioPayload>
          }
          aggregate: {
            args: Prisma.ConsultorioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultorio>
          }
          groupBy: {
            args: Prisma.ConsultorioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultorioGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ConsultorioFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ConsultorioAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ConsultorioCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultorioCountAggregateOutputType> | number
          }
        }
      }
      Dentista: {
        payload: Prisma.$DentistaPayload<ExtArgs>
        fields: Prisma.DentistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DentistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DentistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>
          }
          findFirst: {
            args: Prisma.DentistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DentistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>
          }
          findMany: {
            args: Prisma.DentistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>[]
          }
          create: {
            args: Prisma.DentistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>
          }
          createMany: {
            args: Prisma.DentistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DentistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>
          }
          update: {
            args: Prisma.DentistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>
          }
          deleteMany: {
            args: Prisma.DentistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DentistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DentistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DentistaPayload>
          }
          aggregate: {
            args: Prisma.DentistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDentista>
          }
          groupBy: {
            args: Prisma.DentistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DentistaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DentistaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DentistaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DentistaCountArgs<ExtArgs>
            result: $Utils.Optional<DentistaCountAggregateOutputType> | number
          }
        }
      }
      Especialidade: {
        payload: Prisma.$EspecialidadePayload<ExtArgs>
        fields: Prisma.EspecialidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspecialidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspecialidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          findFirst: {
            args: Prisma.EspecialidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspecialidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          findMany: {
            args: Prisma.EspecialidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>[]
          }
          create: {
            args: Prisma.EspecialidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          createMany: {
            args: Prisma.EspecialidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EspecialidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          update: {
            args: Prisma.EspecialidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          deleteMany: {
            args: Prisma.EspecialidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspecialidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EspecialidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          aggregate: {
            args: Prisma.EspecialidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecialidade>
          }
          groupBy: {
            args: Prisma.EspecialidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EspecialidadeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EspecialidadeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EspecialidadeCountArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadeCountAggregateOutputType> | number
          }
        }
      }
      Secretaria: {
        payload: Prisma.$SecretariaPayload<ExtArgs>
        fields: Prisma.SecretariaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecretariaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecretariaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          findFirst: {
            args: Prisma.SecretariaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecretariaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          findMany: {
            args: Prisma.SecretariaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>[]
          }
          create: {
            args: Prisma.SecretariaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          createMany: {
            args: Prisma.SecretariaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SecretariaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          update: {
            args: Prisma.SecretariaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          deleteMany: {
            args: Prisma.SecretariaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecretariaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SecretariaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          aggregate: {
            args: Prisma.SecretariaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecretaria>
          }
          groupBy: {
            args: Prisma.SecretariaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecretariaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SecretariaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SecretariaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SecretariaCountArgs<ExtArgs>
            result: $Utils.Optional<SecretariaCountAggregateOutputType> | number
          }
        }
      }
      Funcionario: {
        payload: Prisma.$FuncionarioPayload<ExtArgs>
        fields: Prisma.FuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findFirst: {
            args: Prisma.FuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findMany: {
            args: Prisma.FuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          create: {
            args: Prisma.FuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          createMany: {
            args: Prisma.FuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          update: {
            args: Prisma.FuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.FuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.FuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FuncionarioFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FuncionarioAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      Funcao: {
        payload: Prisma.$FuncaoPayload<ExtArgs>
        fields: Prisma.FuncaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncaoPayload>
          }
          findFirst: {
            args: Prisma.FuncaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncaoPayload>
          }
          findMany: {
            args: Prisma.FuncaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncaoPayload>[]
          }
          create: {
            args: Prisma.FuncaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncaoPayload>
          }
          createMany: {
            args: Prisma.FuncaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FuncaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncaoPayload>
          }
          update: {
            args: Prisma.FuncaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncaoPayload>
          }
          deleteMany: {
            args: Prisma.FuncaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FuncaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncaoPayload>
          }
          aggregate: {
            args: Prisma.FuncaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncao>
          }
          groupBy: {
            args: Prisma.FuncaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncaoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FuncaoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FuncaoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FuncaoCountArgs<ExtArgs>
            result: $Utils.Optional<FuncaoCountAggregateOutputType> | number
          }
        }
      }
      Servico: {
        payload: Prisma.$ServicoPayload<ExtArgs>
        fields: Prisma.ServicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findFirst: {
            args: Prisma.ServicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findMany: {
            args: Prisma.ServicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          create: {
            args: Prisma.ServicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          createMany: {
            args: Prisma.ServicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          update: {
            args: Prisma.ServicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          deleteMany: {
            args: Prisma.ServicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          aggregate: {
            args: Prisma.ServicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServico>
          }
          groupBy: {
            args: Prisma.ServicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ServicoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ServicoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ServicoCountArgs<ExtArgs>
            result: $Utils.Optional<ServicoCountAggregateOutputType> | number
          }
        }
      }
      Entrada: {
        payload: Prisma.$EntradaPayload<ExtArgs>
        fields: Prisma.EntradaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntradaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntradaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          findFirst: {
            args: Prisma.EntradaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntradaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          findMany: {
            args: Prisma.EntradaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>[]
          }
          create: {
            args: Prisma.EntradaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          createMany: {
            args: Prisma.EntradaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EntradaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          update: {
            args: Prisma.EntradaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          deleteMany: {
            args: Prisma.EntradaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntradaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EntradaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntradaPayload>
          }
          aggregate: {
            args: Prisma.EntradaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntrada>
          }
          groupBy: {
            args: Prisma.EntradaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntradaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EntradaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EntradaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EntradaCountArgs<ExtArgs>
            result: $Utils.Optional<EntradaCountAggregateOutputType> | number
          }
        }
      }
      Roteiro: {
        payload: Prisma.$RoteiroPayload<ExtArgs>
        fields: Prisma.RoteiroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoteiroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoteiroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload>
          }
          findFirst: {
            args: Prisma.RoteiroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoteiroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload>
          }
          findMany: {
            args: Prisma.RoteiroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload>[]
          }
          create: {
            args: Prisma.RoteiroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload>
          }
          createMany: {
            args: Prisma.RoteiroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoteiroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload>
          }
          update: {
            args: Prisma.RoteiroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload>
          }
          deleteMany: {
            args: Prisma.RoteiroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoteiroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoteiroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoteiroPayload>
          }
          aggregate: {
            args: Prisma.RoteiroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoteiro>
          }
          groupBy: {
            args: Prisma.RoteiroGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoteiroGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RoteiroFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RoteiroAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RoteiroCountArgs<ExtArgs>
            result: $Utils.Optional<RoteiroCountAggregateOutputType> | number
          }
        }
      }
      Fechamento: {
        payload: Prisma.$FechamentoPayload<ExtArgs>
        fields: Prisma.FechamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FechamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FechamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechamentoPayload>
          }
          findFirst: {
            args: Prisma.FechamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FechamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechamentoPayload>
          }
          findMany: {
            args: Prisma.FechamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechamentoPayload>[]
          }
          create: {
            args: Prisma.FechamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechamentoPayload>
          }
          createMany: {
            args: Prisma.FechamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FechamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechamentoPayload>
          }
          update: {
            args: Prisma.FechamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechamentoPayload>
          }
          deleteMany: {
            args: Prisma.FechamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FechamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FechamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FechamentoPayload>
          }
          aggregate: {
            args: Prisma.FechamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFechamento>
          }
          groupBy: {
            args: Prisma.FechamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FechamentoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FechamentoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FechamentoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FechamentoCountArgs<ExtArgs>
            result: $Utils.Optional<FechamentoCountAggregateOutputType> | number
          }
        }
      }
      Valores: {
        payload: Prisma.$ValoresPayload<ExtArgs>
        fields: Prisma.ValoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoresPayload>
          }
          findFirst: {
            args: Prisma.ValoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoresPayload>
          }
          findMany: {
            args: Prisma.ValoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoresPayload>[]
          }
          create: {
            args: Prisma.ValoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoresPayload>
          }
          createMany: {
            args: Prisma.ValoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ValoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoresPayload>
          }
          update: {
            args: Prisma.ValoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoresPayload>
          }
          deleteMany: {
            args: Prisma.ValoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ValoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValoresPayload>
          }
          aggregate: {
            args: Prisma.ValoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValores>
          }
          groupBy: {
            args: Prisma.ValoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValoresGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ValoresFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ValoresAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ValoresCountArgs<ExtArgs>
            result: $Utils.Optional<ValoresCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SessionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SessionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccountFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccountAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VerificationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VerificationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    consultorio?: ConsultorioOmit
    dentista?: DentistaOmit
    especialidade?: EspecialidadeOmit
    secretaria?: SecretariaOmit
    funcionario?: FuncionarioOmit
    funcao?: FuncaoOmit
    servico?: ServicoOmit
    entrada?: EntradaOmit
    roteiro?: RoteiroOmit
    fechamento?: FechamentoOmit
    valores?: ValoresOmit
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ServicoEntrada
   */





  export type ServicoEntradaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idServicoEntrada?: boolean
    servico?: boolean
    valor?: boolean
    desconto?: boolean
    quantidade?: boolean
    repeticao?: boolean
    funcionario?: boolean
    data_entrada?: boolean
    data_previsao?: boolean
    data_saida?: boolean
    roteiro?: boolean
    entregue?: boolean
    fechamento?: boolean
  }, ExtArgs["result"]["servicoEntrada"]>



  export type ServicoEntradaSelectScalar = {
    idServicoEntrada?: boolean
    servico?: boolean
    valor?: boolean
    desconto?: boolean
    quantidade?: boolean
    repeticao?: boolean
    funcionario?: boolean
    data_entrada?: boolean
    data_previsao?: boolean
    data_saida?: boolean
    roteiro?: boolean
    entregue?: boolean
    fechamento?: boolean
  }

  export type ServicoEntradaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idServicoEntrada" | "servico" | "valor" | "desconto" | "quantidade" | "repeticao" | "funcionario" | "data_entrada" | "data_previsao" | "data_saida" | "roteiro" | "entregue" | "fechamento", ExtArgs["result"]["servicoEntrada"]>

  export type $ServicoEntradaPayload = {
    name: "ServicoEntrada"
    objects: {}
    scalars: {
      idServicoEntrada: string
      servico: string
      valor: number
      desconto: number
      quantidade: number
      repeticao: number
      funcionario: string
      data_entrada: Date
      data_previsao: Date
      data_saida: Date | null
      roteiro: string | null
      entregue: boolean | null
      fechamento: string | null
    }
    composites: {}
  }

  type ServicoEntradaGetPayload<S extends boolean | null | undefined | ServicoEntradaDefaultArgs> = $Result.GetResult<Prisma.$ServicoEntradaPayload, S>





  /**
   * Fields of the ServicoEntrada model
   */
  interface ServicoEntradaFieldRefs {
    readonly idServicoEntrada: FieldRef<"ServicoEntrada", 'String'>
    readonly servico: FieldRef<"ServicoEntrada", 'String'>
    readonly valor: FieldRef<"ServicoEntrada", 'Int'>
    readonly desconto: FieldRef<"ServicoEntrada", 'Int'>
    readonly quantidade: FieldRef<"ServicoEntrada", 'Int'>
    readonly repeticao: FieldRef<"ServicoEntrada", 'Int'>
    readonly funcionario: FieldRef<"ServicoEntrada", 'String'>
    readonly data_entrada: FieldRef<"ServicoEntrada", 'DateTime'>
    readonly data_previsao: FieldRef<"ServicoEntrada", 'DateTime'>
    readonly data_saida: FieldRef<"ServicoEntrada", 'DateTime'>
    readonly roteiro: FieldRef<"ServicoEntrada", 'String'>
    readonly entregue: FieldRef<"ServicoEntrada", 'Boolean'>
    readonly fechamento: FieldRef<"ServicoEntrada", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServicoEntrada without action
   */
  export type ServicoEntradaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoEntrada
     */
    select?: ServicoEntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicoEntrada
     */
    omit?: ServicoEntradaOmit<ExtArgs> | null
  }


  /**
   * Model AdicionalConsultorioFechamento
   */





  export type AdicionalConsultorioFechamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idConsultorio?: boolean
    desconto?: boolean
    observacao?: boolean
  }, ExtArgs["result"]["adicionalConsultorioFechamento"]>



  export type AdicionalConsultorioFechamentoSelectScalar = {
    idConsultorio?: boolean
    desconto?: boolean
    observacao?: boolean
  }

  export type AdicionalConsultorioFechamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idConsultorio" | "desconto" | "observacao", ExtArgs["result"]["adicionalConsultorioFechamento"]>

  export type $AdicionalConsultorioFechamentoPayload = {
    name: "AdicionalConsultorioFechamento"
    objects: {}
    scalars: {
      idConsultorio: string
      desconto: number[]
      observacao: string | null
    }
    composites: {}
  }

  type AdicionalConsultorioFechamentoGetPayload<S extends boolean | null | undefined | AdicionalConsultorioFechamentoDefaultArgs> = $Result.GetResult<Prisma.$AdicionalConsultorioFechamentoPayload, S>





  /**
   * Fields of the AdicionalConsultorioFechamento model
   */
  interface AdicionalConsultorioFechamentoFieldRefs {
    readonly idConsultorio: FieldRef<"AdicionalConsultorioFechamento", 'String'>
    readonly desconto: FieldRef<"AdicionalConsultorioFechamento", 'Int[]'>
    readonly observacao: FieldRef<"AdicionalConsultorioFechamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AdicionalConsultorioFechamento without action
   */
  export type AdicionalConsultorioFechamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdicionalConsultorioFechamento
     */
    select?: AdicionalConsultorioFechamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdicionalConsultorioFechamento
     */
    omit?: AdicionalConsultorioFechamentoOmit<ExtArgs> | null
  }


  /**
   * Model AdicionalDentistaFechamento
   */





  export type AdicionalDentistaFechamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idDentista?: boolean
    desconto?: boolean
    observacao?: boolean
  }, ExtArgs["result"]["adicionalDentistaFechamento"]>



  export type AdicionalDentistaFechamentoSelectScalar = {
    idDentista?: boolean
    desconto?: boolean
    observacao?: boolean
  }

  export type AdicionalDentistaFechamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idDentista" | "desconto" | "observacao", ExtArgs["result"]["adicionalDentistaFechamento"]>

  export type $AdicionalDentistaFechamentoPayload = {
    name: "AdicionalDentistaFechamento"
    objects: {}
    scalars: {
      idDentista: string
      desconto: number[]
      observacao: string | null
    }
    composites: {}
  }

  type AdicionalDentistaFechamentoGetPayload<S extends boolean | null | undefined | AdicionalDentistaFechamentoDefaultArgs> = $Result.GetResult<Prisma.$AdicionalDentistaFechamentoPayload, S>





  /**
   * Fields of the AdicionalDentistaFechamento model
   */
  interface AdicionalDentistaFechamentoFieldRefs {
    readonly idDentista: FieldRef<"AdicionalDentistaFechamento", 'String'>
    readonly desconto: FieldRef<"AdicionalDentistaFechamento", 'Int[]'>
    readonly observacao: FieldRef<"AdicionalDentistaFechamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AdicionalDentistaFechamento without action
   */
  export type AdicionalDentistaFechamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdicionalDentistaFechamento
     */
    select?: AdicionalDentistaFechamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdicionalDentistaFechamento
     */
    omit?: AdicionalDentistaFechamentoOmit<ExtArgs> | null
  }


  /**
   * Model Consultorio
   */

  export type AggregateConsultorio = {
    _count: ConsultorioCountAggregateOutputType | null
    _min: ConsultorioMinAggregateOutputType | null
    _max: ConsultorioMaxAggregateOutputType | null
  }

  export type ConsultorioMinAggregateOutputType = {
    id: string | null
    cobranca: string | null
    nome: string | null
    cep: string | null
    numero: string | null
    email: string | null
    complemento: string | null
    cep_entrega: string | null
    numero_entrega: string | null
    complemento_entrega: string | null
    observacao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ConsultorioMaxAggregateOutputType = {
    id: string | null
    cobranca: string | null
    nome: string | null
    cep: string | null
    numero: string | null
    email: string | null
    complemento: string | null
    cep_entrega: string | null
    numero_entrega: string | null
    complemento_entrega: string | null
    observacao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ConsultorioCountAggregateOutputType = {
    id: number
    cobranca: number
    nome: number
    cep: number
    numero: number
    email: number
    complemento: number
    cep_entrega: number
    numero_entrega: number
    complemento_entrega: number
    observacao: number
    telefones: number
    dentistas: number
    secretarias: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ConsultorioMinAggregateInputType = {
    id?: true
    cobranca?: true
    nome?: true
    cep?: true
    numero?: true
    email?: true
    complemento?: true
    cep_entrega?: true
    numero_entrega?: true
    complemento_entrega?: true
    observacao?: true
    created_at?: true
    updated_at?: true
  }

  export type ConsultorioMaxAggregateInputType = {
    id?: true
    cobranca?: true
    nome?: true
    cep?: true
    numero?: true
    email?: true
    complemento?: true
    cep_entrega?: true
    numero_entrega?: true
    complemento_entrega?: true
    observacao?: true
    created_at?: true
    updated_at?: true
  }

  export type ConsultorioCountAggregateInputType = {
    id?: true
    cobranca?: true
    nome?: true
    cep?: true
    numero?: true
    email?: true
    complemento?: true
    cep_entrega?: true
    numero_entrega?: true
    complemento_entrega?: true
    observacao?: true
    telefones?: true
    dentistas?: true
    secretarias?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ConsultorioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultorio to aggregate.
     */
    where?: ConsultorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultorios to fetch.
     */
    orderBy?: ConsultorioOrderByWithRelationInput | ConsultorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultorios
    **/
    _count?: true | ConsultorioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultorioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultorioMaxAggregateInputType
  }

  export type GetConsultorioAggregateType<T extends ConsultorioAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultorio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultorio[P]>
      : GetScalarType<T[P], AggregateConsultorio[P]>
  }




  export type ConsultorioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultorioWhereInput
    orderBy?: ConsultorioOrderByWithAggregationInput | ConsultorioOrderByWithAggregationInput[]
    by: ConsultorioScalarFieldEnum[] | ConsultorioScalarFieldEnum
    having?: ConsultorioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultorioCountAggregateInputType | true
    _min?: ConsultorioMinAggregateInputType
    _max?: ConsultorioMaxAggregateInputType
  }

  export type ConsultorioGroupByOutputType = {
    id: string
    cobranca: string
    nome: string
    cep: string
    numero: string
    email: string
    complemento: string | null
    cep_entrega: string | null
    numero_entrega: string | null
    complemento_entrega: string | null
    observacao: string | null
    telefones: string[]
    dentistas: string[]
    secretarias: string[]
    created_at: Date
    updated_at: Date
    _count: ConsultorioCountAggregateOutputType | null
    _min: ConsultorioMinAggregateOutputType | null
    _max: ConsultorioMaxAggregateOutputType | null
  }

  type GetConsultorioGroupByPayload<T extends ConsultorioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultorioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultorioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultorioGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultorioGroupByOutputType[P]>
        }
      >
    >


  export type ConsultorioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cobranca?: boolean
    nome?: boolean
    cep?: boolean
    numero?: boolean
    email?: boolean
    complemento?: boolean
    cep_entrega?: boolean
    numero_entrega?: boolean
    complemento_entrega?: boolean
    observacao?: boolean
    telefones?: boolean
    dentistas?: boolean
    secretarias?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["consultorio"]>



  export type ConsultorioSelectScalar = {
    id?: boolean
    cobranca?: boolean
    nome?: boolean
    cep?: boolean
    numero?: boolean
    email?: boolean
    complemento?: boolean
    cep_entrega?: boolean
    numero_entrega?: boolean
    complemento_entrega?: boolean
    observacao?: boolean
    telefones?: boolean
    dentistas?: boolean
    secretarias?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ConsultorioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cobranca" | "nome" | "cep" | "numero" | "email" | "complemento" | "cep_entrega" | "numero_entrega" | "complemento_entrega" | "observacao" | "telefones" | "dentistas" | "secretarias" | "created_at" | "updated_at", ExtArgs["result"]["consultorio"]>

  export type $ConsultorioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consultorio"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Campo gerado automaticamente pelo MongoDB
       */
      id: string
      cobranca: string
      nome: string
      cep: string
      numero: string
      email: string
      complemento: string | null
      cep_entrega: string | null
      numero_entrega: string | null
      complemento_entrega: string | null
      observacao: string | null
      telefones: string[]
      dentistas: string[]
      secretarias: string[]
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["consultorio"]>
    composites: {}
  }

  type ConsultorioGetPayload<S extends boolean | null | undefined | ConsultorioDefaultArgs> = $Result.GetResult<Prisma.$ConsultorioPayload, S>

  type ConsultorioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultorioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultorioCountAggregateInputType | true
    }

  export interface ConsultorioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consultorio'], meta: { name: 'Consultorio' } }
    /**
     * Find zero or one Consultorio that matches the filter.
     * @param {ConsultorioFindUniqueArgs} args - Arguments to find a Consultorio
     * @example
     * // Get one Consultorio
     * const consultorio = await prisma.consultorio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultorioFindUniqueArgs>(args: SelectSubset<T, ConsultorioFindUniqueArgs<ExtArgs>>): Prisma__ConsultorioClient<$Result.GetResult<Prisma.$ConsultorioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consultorio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultorioFindUniqueOrThrowArgs} args - Arguments to find a Consultorio
     * @example
     * // Get one Consultorio
     * const consultorio = await prisma.consultorio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultorioFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultorioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultorioClient<$Result.GetResult<Prisma.$ConsultorioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultorio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorioFindFirstArgs} args - Arguments to find a Consultorio
     * @example
     * // Get one Consultorio
     * const consultorio = await prisma.consultorio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultorioFindFirstArgs>(args?: SelectSubset<T, ConsultorioFindFirstArgs<ExtArgs>>): Prisma__ConsultorioClient<$Result.GetResult<Prisma.$ConsultorioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultorio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorioFindFirstOrThrowArgs} args - Arguments to find a Consultorio
     * @example
     * // Get one Consultorio
     * const consultorio = await prisma.consultorio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultorioFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultorioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultorioClient<$Result.GetResult<Prisma.$ConsultorioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultorios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultorios
     * const consultorios = await prisma.consultorio.findMany()
     * 
     * // Get first 10 Consultorios
     * const consultorios = await prisma.consultorio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultorioWithIdOnly = await prisma.consultorio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultorioFindManyArgs>(args?: SelectSubset<T, ConsultorioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consultorio.
     * @param {ConsultorioCreateArgs} args - Arguments to create a Consultorio.
     * @example
     * // Create one Consultorio
     * const Consultorio = await prisma.consultorio.create({
     *   data: {
     *     // ... data to create a Consultorio
     *   }
     * })
     * 
     */
    create<T extends ConsultorioCreateArgs>(args: SelectSubset<T, ConsultorioCreateArgs<ExtArgs>>): Prisma__ConsultorioClient<$Result.GetResult<Prisma.$ConsultorioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultorios.
     * @param {ConsultorioCreateManyArgs} args - Arguments to create many Consultorios.
     * @example
     * // Create many Consultorios
     * const consultorio = await prisma.consultorio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultorioCreateManyArgs>(args?: SelectSubset<T, ConsultorioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Consultorio.
     * @param {ConsultorioDeleteArgs} args - Arguments to delete one Consultorio.
     * @example
     * // Delete one Consultorio
     * const Consultorio = await prisma.consultorio.delete({
     *   where: {
     *     // ... filter to delete one Consultorio
     *   }
     * })
     * 
     */
    delete<T extends ConsultorioDeleteArgs>(args: SelectSubset<T, ConsultorioDeleteArgs<ExtArgs>>): Prisma__ConsultorioClient<$Result.GetResult<Prisma.$ConsultorioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consultorio.
     * @param {ConsultorioUpdateArgs} args - Arguments to update one Consultorio.
     * @example
     * // Update one Consultorio
     * const consultorio = await prisma.consultorio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultorioUpdateArgs>(args: SelectSubset<T, ConsultorioUpdateArgs<ExtArgs>>): Prisma__ConsultorioClient<$Result.GetResult<Prisma.$ConsultorioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultorios.
     * @param {ConsultorioDeleteManyArgs} args - Arguments to filter Consultorios to delete.
     * @example
     * // Delete a few Consultorios
     * const { count } = await prisma.consultorio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultorioDeleteManyArgs>(args?: SelectSubset<T, ConsultorioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultorios
     * const consultorio = await prisma.consultorio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultorioUpdateManyArgs>(args: SelectSubset<T, ConsultorioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Consultorio.
     * @param {ConsultorioUpsertArgs} args - Arguments to update or create a Consultorio.
     * @example
     * // Update or create a Consultorio
     * const consultorio = await prisma.consultorio.upsert({
     *   create: {
     *     // ... data to create a Consultorio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consultorio we want to update
     *   }
     * })
     */
    upsert<T extends ConsultorioUpsertArgs>(args: SelectSubset<T, ConsultorioUpsertArgs<ExtArgs>>): Prisma__ConsultorioClient<$Result.GetResult<Prisma.$ConsultorioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultorios that matches the filter.
     * @param {ConsultorioFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const consultorio = await prisma.consultorio.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ConsultorioFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Consultorio.
     * @param {ConsultorioAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const consultorio = await prisma.consultorio.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ConsultorioAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Consultorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorioCountArgs} args - Arguments to filter Consultorios to count.
     * @example
     * // Count the number of Consultorios
     * const count = await prisma.consultorio.count({
     *   where: {
     *     // ... the filter for the Consultorios we want to count
     *   }
     * })
    **/
    count<T extends ConsultorioCountArgs>(
      args?: Subset<T, ConsultorioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultorioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consultorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultorioAggregateArgs>(args: Subset<T, ConsultorioAggregateArgs>): Prisma.PrismaPromise<GetConsultorioAggregateType<T>>

    /**
     * Group by Consultorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultorioGroupByArgs} args - Group by arguments.
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
      T extends ConsultorioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultorioGroupByArgs['orderBy'] }
        : { orderBy?: ConsultorioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsultorioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultorioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consultorio model
   */
  readonly fields: ConsultorioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consultorio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultorioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Consultorio model
   */
  interface ConsultorioFieldRefs {
    readonly id: FieldRef<"Consultorio", 'String'>
    readonly cobranca: FieldRef<"Consultorio", 'String'>
    readonly nome: FieldRef<"Consultorio", 'String'>
    readonly cep: FieldRef<"Consultorio", 'String'>
    readonly numero: FieldRef<"Consultorio", 'String'>
    readonly email: FieldRef<"Consultorio", 'String'>
    readonly complemento: FieldRef<"Consultorio", 'String'>
    readonly cep_entrega: FieldRef<"Consultorio", 'String'>
    readonly numero_entrega: FieldRef<"Consultorio", 'String'>
    readonly complemento_entrega: FieldRef<"Consultorio", 'String'>
    readonly observacao: FieldRef<"Consultorio", 'String'>
    readonly telefones: FieldRef<"Consultorio", 'String[]'>
    readonly dentistas: FieldRef<"Consultorio", 'String[]'>
    readonly secretarias: FieldRef<"Consultorio", 'String[]'>
    readonly created_at: FieldRef<"Consultorio", 'DateTime'>
    readonly updated_at: FieldRef<"Consultorio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Consultorio findUnique
   */
  export type ConsultorioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultorio
     */
    select?: ConsultorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultorio
     */
    omit?: ConsultorioOmit<ExtArgs> | null
    /**
     * Filter, which Consultorio to fetch.
     */
    where: ConsultorioWhereUniqueInput
  }

  /**
   * Consultorio findUniqueOrThrow
   */
  export type ConsultorioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultorio
     */
    select?: ConsultorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultorio
     */
    omit?: ConsultorioOmit<ExtArgs> | null
    /**
     * Filter, which Consultorio to fetch.
     */
    where: ConsultorioWhereUniqueInput
  }

  /**
   * Consultorio findFirst
   */
  export type ConsultorioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultorio
     */
    select?: ConsultorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultorio
     */
    omit?: ConsultorioOmit<ExtArgs> | null
    /**
     * Filter, which Consultorio to fetch.
     */
    where?: ConsultorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultorios to fetch.
     */
    orderBy?: ConsultorioOrderByWithRelationInput | ConsultorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultorios.
     */
    cursor?: ConsultorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultorios.
     */
    distinct?: ConsultorioScalarFieldEnum | ConsultorioScalarFieldEnum[]
  }

  /**
   * Consultorio findFirstOrThrow
   */
  export type ConsultorioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultorio
     */
    select?: ConsultorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultorio
     */
    omit?: ConsultorioOmit<ExtArgs> | null
    /**
     * Filter, which Consultorio to fetch.
     */
    where?: ConsultorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultorios to fetch.
     */
    orderBy?: ConsultorioOrderByWithRelationInput | ConsultorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultorios.
     */
    cursor?: ConsultorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultorios.
     */
    distinct?: ConsultorioScalarFieldEnum | ConsultorioScalarFieldEnum[]
  }

  /**
   * Consultorio findMany
   */
  export type ConsultorioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultorio
     */
    select?: ConsultorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultorio
     */
    omit?: ConsultorioOmit<ExtArgs> | null
    /**
     * Filter, which Consultorios to fetch.
     */
    where?: ConsultorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultorios to fetch.
     */
    orderBy?: ConsultorioOrderByWithRelationInput | ConsultorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultorios.
     */
    cursor?: ConsultorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultorios.
     */
    skip?: number
    distinct?: ConsultorioScalarFieldEnum | ConsultorioScalarFieldEnum[]
  }

  /**
   * Consultorio create
   */
  export type ConsultorioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultorio
     */
    select?: ConsultorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultorio
     */
    omit?: ConsultorioOmit<ExtArgs> | null
    /**
     * The data needed to create a Consultorio.
     */
    data: XOR<ConsultorioCreateInput, ConsultorioUncheckedCreateInput>
  }

  /**
   * Consultorio createMany
   */
  export type ConsultorioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultorios.
     */
    data: ConsultorioCreateManyInput | ConsultorioCreateManyInput[]
  }

  /**
   * Consultorio update
   */
  export type ConsultorioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultorio
     */
    select?: ConsultorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultorio
     */
    omit?: ConsultorioOmit<ExtArgs> | null
    /**
     * The data needed to update a Consultorio.
     */
    data: XOR<ConsultorioUpdateInput, ConsultorioUncheckedUpdateInput>
    /**
     * Choose, which Consultorio to update.
     */
    where: ConsultorioWhereUniqueInput
  }

  /**
   * Consultorio updateMany
   */
  export type ConsultorioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultorios.
     */
    data: XOR<ConsultorioUpdateManyMutationInput, ConsultorioUncheckedUpdateManyInput>
    /**
     * Filter which Consultorios to update
     */
    where?: ConsultorioWhereInput
    /**
     * Limit how many Consultorios to update.
     */
    limit?: number
  }

  /**
   * Consultorio upsert
   */
  export type ConsultorioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultorio
     */
    select?: ConsultorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultorio
     */
    omit?: ConsultorioOmit<ExtArgs> | null
    /**
     * The filter to search for the Consultorio to update in case it exists.
     */
    where: ConsultorioWhereUniqueInput
    /**
     * In case the Consultorio found by the `where` argument doesn't exist, create a new Consultorio with this data.
     */
    create: XOR<ConsultorioCreateInput, ConsultorioUncheckedCreateInput>
    /**
     * In case the Consultorio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultorioUpdateInput, ConsultorioUncheckedUpdateInput>
  }

  /**
   * Consultorio delete
   */
  export type ConsultorioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultorio
     */
    select?: ConsultorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultorio
     */
    omit?: ConsultorioOmit<ExtArgs> | null
    /**
     * Filter which Consultorio to delete.
     */
    where: ConsultorioWhereUniqueInput
  }

  /**
   * Consultorio deleteMany
   */
  export type ConsultorioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultorios to delete
     */
    where?: ConsultorioWhereInput
    /**
     * Limit how many Consultorios to delete.
     */
    limit?: number
  }

  /**
   * Consultorio findRaw
   */
  export type ConsultorioFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Consultorio aggregateRaw
   */
  export type ConsultorioAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Consultorio without action
   */
  export type ConsultorioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultorio
     */
    select?: ConsultorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultorio
     */
    omit?: ConsultorioOmit<ExtArgs> | null
  }


  /**
   * Model Dentista
   */

  export type AggregateDentista = {
    _count: DentistaCountAggregateOutputType | null
    _min: DentistaMinAggregateOutputType | null
    _max: DentistaMaxAggregateOutputType | null
  }

  export type DentistaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cro: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DentistaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cro: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DentistaCountAggregateOutputType = {
    id: number
    nome: number
    cro: number
    email: number
    telefones: number
    especialidades: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DentistaMinAggregateInputType = {
    id?: true
    nome?: true
    cro?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type DentistaMaxAggregateInputType = {
    id?: true
    nome?: true
    cro?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type DentistaCountAggregateInputType = {
    id?: true
    nome?: true
    cro?: true
    email?: true
    telefones?: true
    especialidades?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DentistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dentista to aggregate.
     */
    where?: DentistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dentistas to fetch.
     */
    orderBy?: DentistaOrderByWithRelationInput | DentistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DentistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dentistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dentistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dentistas
    **/
    _count?: true | DentistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DentistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DentistaMaxAggregateInputType
  }

  export type GetDentistaAggregateType<T extends DentistaAggregateArgs> = {
        [P in keyof T & keyof AggregateDentista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDentista[P]>
      : GetScalarType<T[P], AggregateDentista[P]>
  }




  export type DentistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DentistaWhereInput
    orderBy?: DentistaOrderByWithAggregationInput | DentistaOrderByWithAggregationInput[]
    by: DentistaScalarFieldEnum[] | DentistaScalarFieldEnum
    having?: DentistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DentistaCountAggregateInputType | true
    _min?: DentistaMinAggregateInputType
    _max?: DentistaMaxAggregateInputType
  }

  export type DentistaGroupByOutputType = {
    id: string
    nome: string
    cro: string
    email: string
    telefones: string[]
    especialidades: string[]
    created_at: Date
    updated_at: Date
    _count: DentistaCountAggregateOutputType | null
    _min: DentistaMinAggregateOutputType | null
    _max: DentistaMaxAggregateOutputType | null
  }

  type GetDentistaGroupByPayload<T extends DentistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DentistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DentistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DentistaGroupByOutputType[P]>
            : GetScalarType<T[P], DentistaGroupByOutputType[P]>
        }
      >
    >


  export type DentistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cro?: boolean
    email?: boolean
    telefones?: boolean
    especialidades?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["dentista"]>



  export type DentistaSelectScalar = {
    id?: boolean
    nome?: boolean
    cro?: boolean
    email?: boolean
    telefones?: boolean
    especialidades?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DentistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cro" | "email" | "telefones" | "especialidades" | "created_at" | "updated_at", ExtArgs["result"]["dentista"]>

  export type $DentistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dentista"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Campo gerado automaticamente pelo MongoDB
       */
      id: string
      nome: string
      cro: string
      email: string
      telefones: string[]
      especialidades: string[]
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["dentista"]>
    composites: {}
  }

  type DentistaGetPayload<S extends boolean | null | undefined | DentistaDefaultArgs> = $Result.GetResult<Prisma.$DentistaPayload, S>

  type DentistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DentistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DentistaCountAggregateInputType | true
    }

  export interface DentistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dentista'], meta: { name: 'Dentista' } }
    /**
     * Find zero or one Dentista that matches the filter.
     * @param {DentistaFindUniqueArgs} args - Arguments to find a Dentista
     * @example
     * // Get one Dentista
     * const dentista = await prisma.dentista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DentistaFindUniqueArgs>(args: SelectSubset<T, DentistaFindUniqueArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dentista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DentistaFindUniqueOrThrowArgs} args - Arguments to find a Dentista
     * @example
     * // Get one Dentista
     * const dentista = await prisma.dentista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DentistaFindUniqueOrThrowArgs>(args: SelectSubset<T, DentistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dentista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DentistaFindFirstArgs} args - Arguments to find a Dentista
     * @example
     * // Get one Dentista
     * const dentista = await prisma.dentista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DentistaFindFirstArgs>(args?: SelectSubset<T, DentistaFindFirstArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dentista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DentistaFindFirstOrThrowArgs} args - Arguments to find a Dentista
     * @example
     * // Get one Dentista
     * const dentista = await prisma.dentista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DentistaFindFirstOrThrowArgs>(args?: SelectSubset<T, DentistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dentistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DentistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dentistas
     * const dentistas = await prisma.dentista.findMany()
     * 
     * // Get first 10 Dentistas
     * const dentistas = await prisma.dentista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dentistaWithIdOnly = await prisma.dentista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DentistaFindManyArgs>(args?: SelectSubset<T, DentistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dentista.
     * @param {DentistaCreateArgs} args - Arguments to create a Dentista.
     * @example
     * // Create one Dentista
     * const Dentista = await prisma.dentista.create({
     *   data: {
     *     // ... data to create a Dentista
     *   }
     * })
     * 
     */
    create<T extends DentistaCreateArgs>(args: SelectSubset<T, DentistaCreateArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dentistas.
     * @param {DentistaCreateManyArgs} args - Arguments to create many Dentistas.
     * @example
     * // Create many Dentistas
     * const dentista = await prisma.dentista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DentistaCreateManyArgs>(args?: SelectSubset<T, DentistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dentista.
     * @param {DentistaDeleteArgs} args - Arguments to delete one Dentista.
     * @example
     * // Delete one Dentista
     * const Dentista = await prisma.dentista.delete({
     *   where: {
     *     // ... filter to delete one Dentista
     *   }
     * })
     * 
     */
    delete<T extends DentistaDeleteArgs>(args: SelectSubset<T, DentistaDeleteArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dentista.
     * @param {DentistaUpdateArgs} args - Arguments to update one Dentista.
     * @example
     * // Update one Dentista
     * const dentista = await prisma.dentista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DentistaUpdateArgs>(args: SelectSubset<T, DentistaUpdateArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dentistas.
     * @param {DentistaDeleteManyArgs} args - Arguments to filter Dentistas to delete.
     * @example
     * // Delete a few Dentistas
     * const { count } = await prisma.dentista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DentistaDeleteManyArgs>(args?: SelectSubset<T, DentistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dentistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DentistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dentistas
     * const dentista = await prisma.dentista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DentistaUpdateManyArgs>(args: SelectSubset<T, DentistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dentista.
     * @param {DentistaUpsertArgs} args - Arguments to update or create a Dentista.
     * @example
     * // Update or create a Dentista
     * const dentista = await prisma.dentista.upsert({
     *   create: {
     *     // ... data to create a Dentista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dentista we want to update
     *   }
     * })
     */
    upsert<T extends DentistaUpsertArgs>(args: SelectSubset<T, DentistaUpsertArgs<ExtArgs>>): Prisma__DentistaClient<$Result.GetResult<Prisma.$DentistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dentistas that matches the filter.
     * @param {DentistaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const dentista = await prisma.dentista.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DentistaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Dentista.
     * @param {DentistaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const dentista = await prisma.dentista.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DentistaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Dentistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DentistaCountArgs} args - Arguments to filter Dentistas to count.
     * @example
     * // Count the number of Dentistas
     * const count = await prisma.dentista.count({
     *   where: {
     *     // ... the filter for the Dentistas we want to count
     *   }
     * })
    **/
    count<T extends DentistaCountArgs>(
      args?: Subset<T, DentistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DentistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dentista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DentistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DentistaAggregateArgs>(args: Subset<T, DentistaAggregateArgs>): Prisma.PrismaPromise<GetDentistaAggregateType<T>>

    /**
     * Group by Dentista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DentistaGroupByArgs} args - Group by arguments.
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
      T extends DentistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DentistaGroupByArgs['orderBy'] }
        : { orderBy?: DentistaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DentistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDentistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dentista model
   */
  readonly fields: DentistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dentista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DentistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Dentista model
   */
  interface DentistaFieldRefs {
    readonly id: FieldRef<"Dentista", 'String'>
    readonly nome: FieldRef<"Dentista", 'String'>
    readonly cro: FieldRef<"Dentista", 'String'>
    readonly email: FieldRef<"Dentista", 'String'>
    readonly telefones: FieldRef<"Dentista", 'String[]'>
    readonly especialidades: FieldRef<"Dentista", 'String[]'>
    readonly created_at: FieldRef<"Dentista", 'DateTime'>
    readonly updated_at: FieldRef<"Dentista", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dentista findUnique
   */
  export type DentistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Filter, which Dentista to fetch.
     */
    where: DentistaWhereUniqueInput
  }

  /**
   * Dentista findUniqueOrThrow
   */
  export type DentistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Filter, which Dentista to fetch.
     */
    where: DentistaWhereUniqueInput
  }

  /**
   * Dentista findFirst
   */
  export type DentistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Filter, which Dentista to fetch.
     */
    where?: DentistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dentistas to fetch.
     */
    orderBy?: DentistaOrderByWithRelationInput | DentistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dentistas.
     */
    cursor?: DentistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dentistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dentistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dentistas.
     */
    distinct?: DentistaScalarFieldEnum | DentistaScalarFieldEnum[]
  }

  /**
   * Dentista findFirstOrThrow
   */
  export type DentistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Filter, which Dentista to fetch.
     */
    where?: DentistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dentistas to fetch.
     */
    orderBy?: DentistaOrderByWithRelationInput | DentistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dentistas.
     */
    cursor?: DentistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dentistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dentistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dentistas.
     */
    distinct?: DentistaScalarFieldEnum | DentistaScalarFieldEnum[]
  }

  /**
   * Dentista findMany
   */
  export type DentistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Filter, which Dentistas to fetch.
     */
    where?: DentistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dentistas to fetch.
     */
    orderBy?: DentistaOrderByWithRelationInput | DentistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dentistas.
     */
    cursor?: DentistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dentistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dentistas.
     */
    skip?: number
    distinct?: DentistaScalarFieldEnum | DentistaScalarFieldEnum[]
  }

  /**
   * Dentista create
   */
  export type DentistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * The data needed to create a Dentista.
     */
    data: XOR<DentistaCreateInput, DentistaUncheckedCreateInput>
  }

  /**
   * Dentista createMany
   */
  export type DentistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dentistas.
     */
    data: DentistaCreateManyInput | DentistaCreateManyInput[]
  }

  /**
   * Dentista update
   */
  export type DentistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * The data needed to update a Dentista.
     */
    data: XOR<DentistaUpdateInput, DentistaUncheckedUpdateInput>
    /**
     * Choose, which Dentista to update.
     */
    where: DentistaWhereUniqueInput
  }

  /**
   * Dentista updateMany
   */
  export type DentistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dentistas.
     */
    data: XOR<DentistaUpdateManyMutationInput, DentistaUncheckedUpdateManyInput>
    /**
     * Filter which Dentistas to update
     */
    where?: DentistaWhereInput
    /**
     * Limit how many Dentistas to update.
     */
    limit?: number
  }

  /**
   * Dentista upsert
   */
  export type DentistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * The filter to search for the Dentista to update in case it exists.
     */
    where: DentistaWhereUniqueInput
    /**
     * In case the Dentista found by the `where` argument doesn't exist, create a new Dentista with this data.
     */
    create: XOR<DentistaCreateInput, DentistaUncheckedCreateInput>
    /**
     * In case the Dentista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DentistaUpdateInput, DentistaUncheckedUpdateInput>
  }

  /**
   * Dentista delete
   */
  export type DentistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
    /**
     * Filter which Dentista to delete.
     */
    where: DentistaWhereUniqueInput
  }

  /**
   * Dentista deleteMany
   */
  export type DentistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dentistas to delete
     */
    where?: DentistaWhereInput
    /**
     * Limit how many Dentistas to delete.
     */
    limit?: number
  }

  /**
   * Dentista findRaw
   */
  export type DentistaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Dentista aggregateRaw
   */
  export type DentistaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Dentista without action
   */
  export type DentistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dentista
     */
    select?: DentistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dentista
     */
    omit?: DentistaOmit<ExtArgs> | null
  }


  /**
   * Model Especialidade
   */

  export type AggregateEspecialidade = {
    _count: EspecialidadeCountAggregateOutputType | null
    _min: EspecialidadeMinAggregateOutputType | null
    _max: EspecialidadeMaxAggregateOutputType | null
  }

  export type EspecialidadeMinAggregateOutputType = {
    id: string | null
    nome: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EspecialidadeMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EspecialidadeCountAggregateOutputType = {
    id: number
    nome: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EspecialidadeMinAggregateInputType = {
    id?: true
    nome?: true
    created_at?: true
    updated_at?: true
  }

  export type EspecialidadeMaxAggregateInputType = {
    id?: true
    nome?: true
    created_at?: true
    updated_at?: true
  }

  export type EspecialidadeCountAggregateInputType = {
    id?: true
    nome?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EspecialidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidade to aggregate.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Especialidades
    **/
    _count?: true | EspecialidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecialidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecialidadeMaxAggregateInputType
  }

  export type GetEspecialidadeAggregateType<T extends EspecialidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecialidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecialidade[P]>
      : GetScalarType<T[P], AggregateEspecialidade[P]>
  }




  export type EspecialidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialidadeWhereInput
    orderBy?: EspecialidadeOrderByWithAggregationInput | EspecialidadeOrderByWithAggregationInput[]
    by: EspecialidadeScalarFieldEnum[] | EspecialidadeScalarFieldEnum
    having?: EspecialidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecialidadeCountAggregateInputType | true
    _min?: EspecialidadeMinAggregateInputType
    _max?: EspecialidadeMaxAggregateInputType
  }

  export type EspecialidadeGroupByOutputType = {
    id: string
    nome: string
    created_at: Date
    updated_at: Date
    _count: EspecialidadeCountAggregateOutputType | null
    _min: EspecialidadeMinAggregateOutputType | null
    _max: EspecialidadeMaxAggregateOutputType | null
  }

  type GetEspecialidadeGroupByPayload<T extends EspecialidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecialidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecialidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecialidadeGroupByOutputType[P]>
            : GetScalarType<T[P], EspecialidadeGroupByOutputType[P]>
        }
      >
    >


  export type EspecialidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["especialidade"]>



  export type EspecialidadeSelectScalar = {
    id?: boolean
    nome?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type EspecialidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "created_at" | "updated_at", ExtArgs["result"]["especialidade"]>

  export type $EspecialidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Especialidade"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Campo gerado automaticamente pelo MongoDB
       */
      id: string
      nome: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["especialidade"]>
    composites: {}
  }

  type EspecialidadeGetPayload<S extends boolean | null | undefined | EspecialidadeDefaultArgs> = $Result.GetResult<Prisma.$EspecialidadePayload, S>

  type EspecialidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspecialidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspecialidadeCountAggregateInputType | true
    }

  export interface EspecialidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Especialidade'], meta: { name: 'Especialidade' } }
    /**
     * Find zero or one Especialidade that matches the filter.
     * @param {EspecialidadeFindUniqueArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecialidadeFindUniqueArgs>(args: SelectSubset<T, EspecialidadeFindUniqueArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Especialidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspecialidadeFindUniqueOrThrowArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecialidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, EspecialidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeFindFirstArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecialidadeFindFirstArgs>(args?: SelectSubset<T, EspecialidadeFindFirstArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeFindFirstOrThrowArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecialidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, EspecialidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Especialidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especialidades
     * const especialidades = await prisma.especialidade.findMany()
     * 
     * // Get first 10 Especialidades
     * const especialidades = await prisma.especialidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const especialidadeWithIdOnly = await prisma.especialidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspecialidadeFindManyArgs>(args?: SelectSubset<T, EspecialidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Especialidade.
     * @param {EspecialidadeCreateArgs} args - Arguments to create a Especialidade.
     * @example
     * // Create one Especialidade
     * const Especialidade = await prisma.especialidade.create({
     *   data: {
     *     // ... data to create a Especialidade
     *   }
     * })
     * 
     */
    create<T extends EspecialidadeCreateArgs>(args: SelectSubset<T, EspecialidadeCreateArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Especialidades.
     * @param {EspecialidadeCreateManyArgs} args - Arguments to create many Especialidades.
     * @example
     * // Create many Especialidades
     * const especialidade = await prisma.especialidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspecialidadeCreateManyArgs>(args?: SelectSubset<T, EspecialidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Especialidade.
     * @param {EspecialidadeDeleteArgs} args - Arguments to delete one Especialidade.
     * @example
     * // Delete one Especialidade
     * const Especialidade = await prisma.especialidade.delete({
     *   where: {
     *     // ... filter to delete one Especialidade
     *   }
     * })
     * 
     */
    delete<T extends EspecialidadeDeleteArgs>(args: SelectSubset<T, EspecialidadeDeleteArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Especialidade.
     * @param {EspecialidadeUpdateArgs} args - Arguments to update one Especialidade.
     * @example
     * // Update one Especialidade
     * const especialidade = await prisma.especialidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspecialidadeUpdateArgs>(args: SelectSubset<T, EspecialidadeUpdateArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Especialidades.
     * @param {EspecialidadeDeleteManyArgs} args - Arguments to filter Especialidades to delete.
     * @example
     * // Delete a few Especialidades
     * const { count } = await prisma.especialidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspecialidadeDeleteManyArgs>(args?: SelectSubset<T, EspecialidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especialidades
     * const especialidade = await prisma.especialidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspecialidadeUpdateManyArgs>(args: SelectSubset<T, EspecialidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Especialidade.
     * @param {EspecialidadeUpsertArgs} args - Arguments to update or create a Especialidade.
     * @example
     * // Update or create a Especialidade
     * const especialidade = await prisma.especialidade.upsert({
     *   create: {
     *     // ... data to create a Especialidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especialidade we want to update
     *   }
     * })
     */
    upsert<T extends EspecialidadeUpsertArgs>(args: SelectSubset<T, EspecialidadeUpsertArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Especialidades that matches the filter.
     * @param {EspecialidadeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const especialidade = await prisma.especialidade.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EspecialidadeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Especialidade.
     * @param {EspecialidadeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const especialidade = await prisma.especialidade.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EspecialidadeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeCountArgs} args - Arguments to filter Especialidades to count.
     * @example
     * // Count the number of Especialidades
     * const count = await prisma.especialidade.count({
     *   where: {
     *     // ... the filter for the Especialidades we want to count
     *   }
     * })
    **/
    count<T extends EspecialidadeCountArgs>(
      args?: Subset<T, EspecialidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecialidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especialidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecialidadeAggregateArgs>(args: Subset<T, EspecialidadeAggregateArgs>): Prisma.PrismaPromise<GetEspecialidadeAggregateType<T>>

    /**
     * Group by Especialidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeGroupByArgs} args - Group by arguments.
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
      T extends EspecialidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspecialidadeGroupByArgs['orderBy'] }
        : { orderBy?: EspecialidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspecialidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Especialidade model
   */
  readonly fields: EspecialidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Especialidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspecialidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Especialidade model
   */
  interface EspecialidadeFieldRefs {
    readonly id: FieldRef<"Especialidade", 'String'>
    readonly nome: FieldRef<"Especialidade", 'String'>
    readonly created_at: FieldRef<"Especialidade", 'DateTime'>
    readonly updated_at: FieldRef<"Especialidade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Especialidade findUnique
   */
  export type EspecialidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade findUniqueOrThrow
   */
  export type EspecialidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade findFirst
   */
  export type EspecialidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidades.
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidades.
     */
    distinct?: EspecialidadeScalarFieldEnum | EspecialidadeScalarFieldEnum[]
  }

  /**
   * Especialidade findFirstOrThrow
   */
  export type EspecialidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidades.
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidades.
     */
    distinct?: EspecialidadeScalarFieldEnum | EspecialidadeScalarFieldEnum[]
  }

  /**
   * Especialidade findMany
   */
  export type EspecialidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Filter, which Especialidades to fetch.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Especialidades.
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    distinct?: EspecialidadeScalarFieldEnum | EspecialidadeScalarFieldEnum[]
  }

  /**
   * Especialidade create
   */
  export type EspecialidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * The data needed to create a Especialidade.
     */
    data: XOR<EspecialidadeCreateInput, EspecialidadeUncheckedCreateInput>
  }

  /**
   * Especialidade createMany
   */
  export type EspecialidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especialidades.
     */
    data: EspecialidadeCreateManyInput | EspecialidadeCreateManyInput[]
  }

  /**
   * Especialidade update
   */
  export type EspecialidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * The data needed to update a Especialidade.
     */
    data: XOR<EspecialidadeUpdateInput, EspecialidadeUncheckedUpdateInput>
    /**
     * Choose, which Especialidade to update.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade updateMany
   */
  export type EspecialidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Especialidades.
     */
    data: XOR<EspecialidadeUpdateManyMutationInput, EspecialidadeUncheckedUpdateManyInput>
    /**
     * Filter which Especialidades to update
     */
    where?: EspecialidadeWhereInput
    /**
     * Limit how many Especialidades to update.
     */
    limit?: number
  }

  /**
   * Especialidade upsert
   */
  export type EspecialidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * The filter to search for the Especialidade to update in case it exists.
     */
    where: EspecialidadeWhereUniqueInput
    /**
     * In case the Especialidade found by the `where` argument doesn't exist, create a new Especialidade with this data.
     */
    create: XOR<EspecialidadeCreateInput, EspecialidadeUncheckedCreateInput>
    /**
     * In case the Especialidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspecialidadeUpdateInput, EspecialidadeUncheckedUpdateInput>
  }

  /**
   * Especialidade delete
   */
  export type EspecialidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Filter which Especialidade to delete.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade deleteMany
   */
  export type EspecialidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidades to delete
     */
    where?: EspecialidadeWhereInput
    /**
     * Limit how many Especialidades to delete.
     */
    limit?: number
  }

  /**
   * Especialidade findRaw
   */
  export type EspecialidadeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Especialidade aggregateRaw
   */
  export type EspecialidadeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Especialidade without action
   */
  export type EspecialidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
  }


  /**
   * Model Secretaria
   */

  export type AggregateSecretaria = {
    _count: SecretariaCountAggregateOutputType | null
    _min: SecretariaMinAggregateOutputType | null
    _max: SecretariaMaxAggregateOutputType | null
  }

  export type SecretariaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SecretariaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SecretariaCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefones: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SecretariaMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type SecretariaMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type SecretariaCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefones?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SecretariaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Secretaria to aggregate.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Secretarias
    **/
    _count?: true | SecretariaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecretariaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecretariaMaxAggregateInputType
  }

  export type GetSecretariaAggregateType<T extends SecretariaAggregateArgs> = {
        [P in keyof T & keyof AggregateSecretaria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecretaria[P]>
      : GetScalarType<T[P], AggregateSecretaria[P]>
  }




  export type SecretariaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecretariaWhereInput
    orderBy?: SecretariaOrderByWithAggregationInput | SecretariaOrderByWithAggregationInput[]
    by: SecretariaScalarFieldEnum[] | SecretariaScalarFieldEnum
    having?: SecretariaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecretariaCountAggregateInputType | true
    _min?: SecretariaMinAggregateInputType
    _max?: SecretariaMaxAggregateInputType
  }

  export type SecretariaGroupByOutputType = {
    id: string
    nome: string
    email: string
    telefones: string[]
    created_at: Date
    updated_at: Date
    _count: SecretariaCountAggregateOutputType | null
    _min: SecretariaMinAggregateOutputType | null
    _max: SecretariaMaxAggregateOutputType | null
  }

  type GetSecretariaGroupByPayload<T extends SecretariaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecretariaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecretariaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecretariaGroupByOutputType[P]>
            : GetScalarType<T[P], SecretariaGroupByOutputType[P]>
        }
      >
    >


  export type SecretariaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefones?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["secretaria"]>



  export type SecretariaSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefones?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SecretariaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefones" | "created_at" | "updated_at", ExtArgs["result"]["secretaria"]>

  export type $SecretariaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Secretaria"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Campo gerado automaticamente pelo MongoDB
       */
      id: string
      nome: string
      email: string
      telefones: string[]
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["secretaria"]>
    composites: {}
  }

  type SecretariaGetPayload<S extends boolean | null | undefined | SecretariaDefaultArgs> = $Result.GetResult<Prisma.$SecretariaPayload, S>

  type SecretariaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecretariaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecretariaCountAggregateInputType | true
    }

  export interface SecretariaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Secretaria'], meta: { name: 'Secretaria' } }
    /**
     * Find zero or one Secretaria that matches the filter.
     * @param {SecretariaFindUniqueArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecretariaFindUniqueArgs>(args: SelectSubset<T, SecretariaFindUniqueArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Secretaria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecretariaFindUniqueOrThrowArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecretariaFindUniqueOrThrowArgs>(args: SelectSubset<T, SecretariaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secretaria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaFindFirstArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecretariaFindFirstArgs>(args?: SelectSubset<T, SecretariaFindFirstArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secretaria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaFindFirstOrThrowArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecretariaFindFirstOrThrowArgs>(args?: SelectSubset<T, SecretariaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Secretarias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Secretarias
     * const secretarias = await prisma.secretaria.findMany()
     * 
     * // Get first 10 Secretarias
     * const secretarias = await prisma.secretaria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const secretariaWithIdOnly = await prisma.secretaria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecretariaFindManyArgs>(args?: SelectSubset<T, SecretariaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Secretaria.
     * @param {SecretariaCreateArgs} args - Arguments to create a Secretaria.
     * @example
     * // Create one Secretaria
     * const Secretaria = await prisma.secretaria.create({
     *   data: {
     *     // ... data to create a Secretaria
     *   }
     * })
     * 
     */
    create<T extends SecretariaCreateArgs>(args: SelectSubset<T, SecretariaCreateArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Secretarias.
     * @param {SecretariaCreateManyArgs} args - Arguments to create many Secretarias.
     * @example
     * // Create many Secretarias
     * const secretaria = await prisma.secretaria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecretariaCreateManyArgs>(args?: SelectSubset<T, SecretariaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Secretaria.
     * @param {SecretariaDeleteArgs} args - Arguments to delete one Secretaria.
     * @example
     * // Delete one Secretaria
     * const Secretaria = await prisma.secretaria.delete({
     *   where: {
     *     // ... filter to delete one Secretaria
     *   }
     * })
     * 
     */
    delete<T extends SecretariaDeleteArgs>(args: SelectSubset<T, SecretariaDeleteArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Secretaria.
     * @param {SecretariaUpdateArgs} args - Arguments to update one Secretaria.
     * @example
     * // Update one Secretaria
     * const secretaria = await prisma.secretaria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecretariaUpdateArgs>(args: SelectSubset<T, SecretariaUpdateArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Secretarias.
     * @param {SecretariaDeleteManyArgs} args - Arguments to filter Secretarias to delete.
     * @example
     * // Delete a few Secretarias
     * const { count } = await prisma.secretaria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecretariaDeleteManyArgs>(args?: SelectSubset<T, SecretariaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secretarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Secretarias
     * const secretaria = await prisma.secretaria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecretariaUpdateManyArgs>(args: SelectSubset<T, SecretariaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Secretaria.
     * @param {SecretariaUpsertArgs} args - Arguments to update or create a Secretaria.
     * @example
     * // Update or create a Secretaria
     * const secretaria = await prisma.secretaria.upsert({
     *   create: {
     *     // ... data to create a Secretaria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Secretaria we want to update
     *   }
     * })
     */
    upsert<T extends SecretariaUpsertArgs>(args: SelectSubset<T, SecretariaUpsertArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Secretarias that matches the filter.
     * @param {SecretariaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const secretaria = await prisma.secretaria.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SecretariaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Secretaria.
     * @param {SecretariaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const secretaria = await prisma.secretaria.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SecretariaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Secretarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaCountArgs} args - Arguments to filter Secretarias to count.
     * @example
     * // Count the number of Secretarias
     * const count = await prisma.secretaria.count({
     *   where: {
     *     // ... the filter for the Secretarias we want to count
     *   }
     * })
    **/
    count<T extends SecretariaCountArgs>(
      args?: Subset<T, SecretariaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecretariaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Secretaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecretariaAggregateArgs>(args: Subset<T, SecretariaAggregateArgs>): Prisma.PrismaPromise<GetSecretariaAggregateType<T>>

    /**
     * Group by Secretaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaGroupByArgs} args - Group by arguments.
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
      T extends SecretariaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecretariaGroupByArgs['orderBy'] }
        : { orderBy?: SecretariaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SecretariaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecretariaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Secretaria model
   */
  readonly fields: SecretariaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Secretaria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecretariaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Secretaria model
   */
  interface SecretariaFieldRefs {
    readonly id: FieldRef<"Secretaria", 'String'>
    readonly nome: FieldRef<"Secretaria", 'String'>
    readonly email: FieldRef<"Secretaria", 'String'>
    readonly telefones: FieldRef<"Secretaria", 'String[]'>
    readonly created_at: FieldRef<"Secretaria", 'DateTime'>
    readonly updated_at: FieldRef<"Secretaria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Secretaria findUnique
   */
  export type SecretariaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where: SecretariaWhereUniqueInput
  }

  /**
   * Secretaria findUniqueOrThrow
   */
  export type SecretariaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where: SecretariaWhereUniqueInput
  }

  /**
   * Secretaria findFirst
   */
  export type SecretariaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Secretarias.
     */
    cursor?: SecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Secretarias.
     */
    distinct?: SecretariaScalarFieldEnum | SecretariaScalarFieldEnum[]
  }

  /**
   * Secretaria findFirstOrThrow
   */
  export type SecretariaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Secretarias.
     */
    cursor?: SecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Secretarias.
     */
    distinct?: SecretariaScalarFieldEnum | SecretariaScalarFieldEnum[]
  }

  /**
   * Secretaria findMany
   */
  export type SecretariaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Filter, which Secretarias to fetch.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Secretarias.
     */
    cursor?: SecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    distinct?: SecretariaScalarFieldEnum | SecretariaScalarFieldEnum[]
  }

  /**
   * Secretaria create
   */
  export type SecretariaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * The data needed to create a Secretaria.
     */
    data: XOR<SecretariaCreateInput, SecretariaUncheckedCreateInput>
  }

  /**
   * Secretaria createMany
   */
  export type SecretariaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Secretarias.
     */
    data: SecretariaCreateManyInput | SecretariaCreateManyInput[]
  }

  /**
   * Secretaria update
   */
  export type SecretariaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * The data needed to update a Secretaria.
     */
    data: XOR<SecretariaUpdateInput, SecretariaUncheckedUpdateInput>
    /**
     * Choose, which Secretaria to update.
     */
    where: SecretariaWhereUniqueInput
  }

  /**
   * Secretaria updateMany
   */
  export type SecretariaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Secretarias.
     */
    data: XOR<SecretariaUpdateManyMutationInput, SecretariaUncheckedUpdateManyInput>
    /**
     * Filter which Secretarias to update
     */
    where?: SecretariaWhereInput
    /**
     * Limit how many Secretarias to update.
     */
    limit?: number
  }

  /**
   * Secretaria upsert
   */
  export type SecretariaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * The filter to search for the Secretaria to update in case it exists.
     */
    where: SecretariaWhereUniqueInput
    /**
     * In case the Secretaria found by the `where` argument doesn't exist, create a new Secretaria with this data.
     */
    create: XOR<SecretariaCreateInput, SecretariaUncheckedCreateInput>
    /**
     * In case the Secretaria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecretariaUpdateInput, SecretariaUncheckedUpdateInput>
  }

  /**
   * Secretaria delete
   */
  export type SecretariaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
    /**
     * Filter which Secretaria to delete.
     */
    where: SecretariaWhereUniqueInput
  }

  /**
   * Secretaria deleteMany
   */
  export type SecretariaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Secretarias to delete
     */
    where?: SecretariaWhereInput
    /**
     * Limit how many Secretarias to delete.
     */
    limit?: number
  }

  /**
   * Secretaria findRaw
   */
  export type SecretariaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Secretaria aggregateRaw
   */
  export type SecretariaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Secretaria without action
   */
  export type SecretariaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretaria
     */
    omit?: SecretariaOmit<ExtArgs> | null
  }


  /**
   * Model Funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cep: string | null
    numero: string | null
    complemento: string | null
    email: string | null
    rg: string | null
    cpf: string | null
    data_nascimento: string | null
    data_admissao: string | null
    data_recisao: string | null
    observacao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cep: string | null
    numero: string | null
    complemento: string | null
    email: string | null
    rg: string | null
    cpf: string | null
    data_nascimento: string | null
    data_admissao: string | null
    data_recisao: string | null
    observacao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FuncionarioCountAggregateOutputType = {
    id: number
    nome: number
    cep: number
    numero: number
    complemento: number
    email: number
    rg: number
    cpf: number
    data_nascimento: number
    data_admissao: number
    data_recisao: number
    observacao: number
    telefones: number
    funcoes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FuncionarioMinAggregateInputType = {
    id?: true
    nome?: true
    cep?: true
    numero?: true
    complemento?: true
    email?: true
    rg?: true
    cpf?: true
    data_nascimento?: true
    data_admissao?: true
    data_recisao?: true
    observacao?: true
    created_at?: true
    updated_at?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    id?: true
    nome?: true
    cep?: true
    numero?: true
    complemento?: true
    email?: true
    rg?: true
    cpf?: true
    data_nascimento?: true
    data_admissao?: true
    data_recisao?: true
    observacao?: true
    created_at?: true
    updated_at?: true
  }

  export type FuncionarioCountAggregateInputType = {
    id?: true
    nome?: true
    cep?: true
    numero?: true
    complemento?: true
    email?: true
    rg?: true
    cpf?: true
    data_nascimento?: true
    data_admissao?: true
    data_recisao?: true
    observacao?: true
    telefones?: true
    funcoes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionario to aggregate.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type FuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithAggregationInput | FuncionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: FuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    id: string
    nome: string
    cep: string
    numero: string
    complemento: string | null
    email: string
    rg: string
    cpf: string
    data_nascimento: string
    data_admissao: string
    data_recisao: string | null
    observacao: string | null
    telefones: string[]
    funcoes: string[]
    created_at: Date
    updated_at: Date
    _count: FuncionarioCountAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends FuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type FuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cep?: boolean
    numero?: boolean
    complemento?: boolean
    email?: boolean
    rg?: boolean
    cpf?: boolean
    data_nascimento?: boolean
    data_admissao?: boolean
    data_recisao?: boolean
    observacao?: boolean
    telefones?: boolean
    funcoes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["funcionario"]>



  export type FuncionarioSelectScalar = {
    id?: boolean
    nome?: boolean
    cep?: boolean
    numero?: boolean
    complemento?: boolean
    email?: boolean
    rg?: boolean
    cpf?: boolean
    data_nascimento?: boolean
    data_admissao?: boolean
    data_recisao?: boolean
    observacao?: boolean
    telefones?: boolean
    funcoes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cep" | "numero" | "complemento" | "email" | "rg" | "cpf" | "data_nascimento" | "data_admissao" | "data_recisao" | "observacao" | "telefones" | "funcoes" | "created_at" | "updated_at", ExtArgs["result"]["funcionario"]>

  export type $FuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Campo gerado automaticamente pelo MongoDB
       */
      id: string
      nome: string
      cep: string
      numero: string
      complemento: string | null
      email: string
      rg: string
      cpf: string
      data_nascimento: string
      data_admissao: string
      data_recisao: string | null
      observacao: string | null
      telefones: string[]
      funcoes: string[]
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type FuncionarioGetPayload<S extends boolean | null | undefined | FuncionarioDefaultArgs> = $Result.GetResult<Prisma.$FuncionarioPayload, S>

  type FuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface FuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionario'], meta: { name: 'Funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {FuncionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionarioFindUniqueArgs>(args: SelectSubset<T, FuncionarioFindUniqueArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionarioFindFirstArgs>(args?: SelectSubset<T, FuncionarioFindFirstArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuncionarioFindManyArgs>(args?: SelectSubset<T, FuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {FuncionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends FuncionarioCreateArgs>(args: SelectSubset<T, FuncionarioCreateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionarioCreateManyArgs>(args?: SelectSubset<T, FuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Funcionario.
     * @param {FuncionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends FuncionarioDeleteArgs>(args: SelectSubset<T, FuncionarioDeleteArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {FuncionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionarioUpdateArgs>(args: SelectSubset<T, FuncionarioUpdateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionarioDeleteManyArgs>(args?: SelectSubset<T, FuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionarioUpdateManyArgs>(args: SelectSubset<T, FuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Funcionario.
     * @param {FuncionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends FuncionarioUpsertArgs>(args: SelectSubset<T, FuncionarioUpsertArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * @param {FuncionarioFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const funcionario = await prisma.funcionario.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FuncionarioFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Funcionario.
     * @param {FuncionarioAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const funcionario = await prisma.funcionario.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FuncionarioAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionarioCountArgs>(
      args?: Subset<T, FuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioGroupByArgs} args - Group by arguments.
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
      T extends FuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: FuncionarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionario model
   */
  readonly fields: FuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Funcionario model
   */
  interface FuncionarioFieldRefs {
    readonly id: FieldRef<"Funcionario", 'String'>
    readonly nome: FieldRef<"Funcionario", 'String'>
    readonly cep: FieldRef<"Funcionario", 'String'>
    readonly numero: FieldRef<"Funcionario", 'String'>
    readonly complemento: FieldRef<"Funcionario", 'String'>
    readonly email: FieldRef<"Funcionario", 'String'>
    readonly rg: FieldRef<"Funcionario", 'String'>
    readonly cpf: FieldRef<"Funcionario", 'String'>
    readonly data_nascimento: FieldRef<"Funcionario", 'String'>
    readonly data_admissao: FieldRef<"Funcionario", 'String'>
    readonly data_recisao: FieldRef<"Funcionario", 'String'>
    readonly observacao: FieldRef<"Funcionario", 'String'>
    readonly telefones: FieldRef<"Funcionario", 'String[]'>
    readonly funcoes: FieldRef<"Funcionario", 'String[]'>
    readonly created_at: FieldRef<"Funcionario", 'DateTime'>
    readonly updated_at: FieldRef<"Funcionario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Funcionario findUnique
   */
  export type FuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findUniqueOrThrow
   */
  export type FuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findFirst
   */
  export type FuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findFirstOrThrow
   */
  export type FuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findMany
   */
  export type FuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario create
   */
  export type FuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Funcionario.
     */
    data: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
  }

  /**
   * Funcionario createMany
   */
  export type FuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
  }

  /**
   * Funcionario update
   */
  export type FuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Funcionario.
     */
    data: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcionario to update.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario updateMany
   */
  export type FuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario upsert
   */
  export type FuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Funcionario to update in case it exists.
     */
    where: FuncionarioWhereUniqueInput
    /**
     * In case the Funcionario found by the `where` argument doesn't exist, create a new Funcionario with this data.
     */
    create: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
    /**
     * In case the Funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
  }

  /**
   * Funcionario delete
   */
  export type FuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Filter which Funcionario to delete.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario deleteMany
   */
  export type FuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionario findRaw
   */
  export type FuncionarioFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Funcionario aggregateRaw
   */
  export type FuncionarioAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Funcionario without action
   */
  export type FuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
  }


  /**
   * Model Funcao
   */

  export type AggregateFuncao = {
    _count: FuncaoCountAggregateOutputType | null
    _min: FuncaoMinAggregateOutputType | null
    _max: FuncaoMaxAggregateOutputType | null
  }

  export type FuncaoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FuncaoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FuncaoCountAggregateOutputType = {
    id: number
    nome: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FuncaoMinAggregateInputType = {
    id?: true
    nome?: true
    created_at?: true
    updated_at?: true
  }

  export type FuncaoMaxAggregateInputType = {
    id?: true
    nome?: true
    created_at?: true
    updated_at?: true
  }

  export type FuncaoCountAggregateInputType = {
    id?: true
    nome?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FuncaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcao to aggregate.
     */
    where?: FuncaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcaos to fetch.
     */
    orderBy?: FuncaoOrderByWithRelationInput | FuncaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcaos
    **/
    _count?: true | FuncaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncaoMaxAggregateInputType
  }

  export type GetFuncaoAggregateType<T extends FuncaoAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncao[P]>
      : GetScalarType<T[P], AggregateFuncao[P]>
  }




  export type FuncaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncaoWhereInput
    orderBy?: FuncaoOrderByWithAggregationInput | FuncaoOrderByWithAggregationInput[]
    by: FuncaoScalarFieldEnum[] | FuncaoScalarFieldEnum
    having?: FuncaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncaoCountAggregateInputType | true
    _min?: FuncaoMinAggregateInputType
    _max?: FuncaoMaxAggregateInputType
  }

  export type FuncaoGroupByOutputType = {
    id: string
    nome: string
    created_at: Date
    updated_at: Date
    _count: FuncaoCountAggregateOutputType | null
    _min: FuncaoMinAggregateOutputType | null
    _max: FuncaoMaxAggregateOutputType | null
  }

  type GetFuncaoGroupByPayload<T extends FuncaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncaoGroupByOutputType[P]>
            : GetScalarType<T[P], FuncaoGroupByOutputType[P]>
        }
      >
    >


  export type FuncaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["funcao"]>



  export type FuncaoSelectScalar = {
    id?: boolean
    nome?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FuncaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "created_at" | "updated_at", ExtArgs["result"]["funcao"]>

  export type $FuncaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcao"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Campo gerado automaticamente pelo MongoDB
       */
      id: string
      nome: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["funcao"]>
    composites: {}
  }

  type FuncaoGetPayload<S extends boolean | null | undefined | FuncaoDefaultArgs> = $Result.GetResult<Prisma.$FuncaoPayload, S>

  type FuncaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncaoCountAggregateInputType | true
    }

  export interface FuncaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcao'], meta: { name: 'Funcao' } }
    /**
     * Find zero or one Funcao that matches the filter.
     * @param {FuncaoFindUniqueArgs} args - Arguments to find a Funcao
     * @example
     * // Get one Funcao
     * const funcao = await prisma.funcao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncaoFindUniqueArgs>(args: SelectSubset<T, FuncaoFindUniqueArgs<ExtArgs>>): Prisma__FuncaoClient<$Result.GetResult<Prisma.$FuncaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncaoFindUniqueOrThrowArgs} args - Arguments to find a Funcao
     * @example
     * // Get one Funcao
     * const funcao = await prisma.funcao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncaoFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncaoClient<$Result.GetResult<Prisma.$FuncaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncaoFindFirstArgs} args - Arguments to find a Funcao
     * @example
     * // Get one Funcao
     * const funcao = await prisma.funcao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncaoFindFirstArgs>(args?: SelectSubset<T, FuncaoFindFirstArgs<ExtArgs>>): Prisma__FuncaoClient<$Result.GetResult<Prisma.$FuncaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncaoFindFirstOrThrowArgs} args - Arguments to find a Funcao
     * @example
     * // Get one Funcao
     * const funcao = await prisma.funcao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncaoFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncaoClient<$Result.GetResult<Prisma.$FuncaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcaos
     * const funcaos = await prisma.funcao.findMany()
     * 
     * // Get first 10 Funcaos
     * const funcaos = await prisma.funcao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcaoWithIdOnly = await prisma.funcao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuncaoFindManyArgs>(args?: SelectSubset<T, FuncaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcao.
     * @param {FuncaoCreateArgs} args - Arguments to create a Funcao.
     * @example
     * // Create one Funcao
     * const Funcao = await prisma.funcao.create({
     *   data: {
     *     // ... data to create a Funcao
     *   }
     * })
     * 
     */
    create<T extends FuncaoCreateArgs>(args: SelectSubset<T, FuncaoCreateArgs<ExtArgs>>): Prisma__FuncaoClient<$Result.GetResult<Prisma.$FuncaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcaos.
     * @param {FuncaoCreateManyArgs} args - Arguments to create many Funcaos.
     * @example
     * // Create many Funcaos
     * const funcao = await prisma.funcao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncaoCreateManyArgs>(args?: SelectSubset<T, FuncaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Funcao.
     * @param {FuncaoDeleteArgs} args - Arguments to delete one Funcao.
     * @example
     * // Delete one Funcao
     * const Funcao = await prisma.funcao.delete({
     *   where: {
     *     // ... filter to delete one Funcao
     *   }
     * })
     * 
     */
    delete<T extends FuncaoDeleteArgs>(args: SelectSubset<T, FuncaoDeleteArgs<ExtArgs>>): Prisma__FuncaoClient<$Result.GetResult<Prisma.$FuncaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcao.
     * @param {FuncaoUpdateArgs} args - Arguments to update one Funcao.
     * @example
     * // Update one Funcao
     * const funcao = await prisma.funcao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncaoUpdateArgs>(args: SelectSubset<T, FuncaoUpdateArgs<ExtArgs>>): Prisma__FuncaoClient<$Result.GetResult<Prisma.$FuncaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcaos.
     * @param {FuncaoDeleteManyArgs} args - Arguments to filter Funcaos to delete.
     * @example
     * // Delete a few Funcaos
     * const { count } = await prisma.funcao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncaoDeleteManyArgs>(args?: SelectSubset<T, FuncaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcaos
     * const funcao = await prisma.funcao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncaoUpdateManyArgs>(args: SelectSubset<T, FuncaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Funcao.
     * @param {FuncaoUpsertArgs} args - Arguments to update or create a Funcao.
     * @example
     * // Update or create a Funcao
     * const funcao = await prisma.funcao.upsert({
     *   create: {
     *     // ... data to create a Funcao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcao we want to update
     *   }
     * })
     */
    upsert<T extends FuncaoUpsertArgs>(args: SelectSubset<T, FuncaoUpsertArgs<ExtArgs>>): Prisma__FuncaoClient<$Result.GetResult<Prisma.$FuncaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcaos that matches the filter.
     * @param {FuncaoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const funcao = await prisma.funcao.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FuncaoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Funcao.
     * @param {FuncaoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const funcao = await prisma.funcao.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FuncaoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Funcaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncaoCountArgs} args - Arguments to filter Funcaos to count.
     * @example
     * // Count the number of Funcaos
     * const count = await prisma.funcao.count({
     *   where: {
     *     // ... the filter for the Funcaos we want to count
     *   }
     * })
    **/
    count<T extends FuncaoCountArgs>(
      args?: Subset<T, FuncaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncaoAggregateArgs>(args: Subset<T, FuncaoAggregateArgs>): Prisma.PrismaPromise<GetFuncaoAggregateType<T>>

    /**
     * Group by Funcao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncaoGroupByArgs} args - Group by arguments.
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
      T extends FuncaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncaoGroupByArgs['orderBy'] }
        : { orderBy?: FuncaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FuncaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcao model
   */
  readonly fields: FuncaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Funcao model
   */
  interface FuncaoFieldRefs {
    readonly id: FieldRef<"Funcao", 'String'>
    readonly nome: FieldRef<"Funcao", 'String'>
    readonly created_at: FieldRef<"Funcao", 'DateTime'>
    readonly updated_at: FieldRef<"Funcao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Funcao findUnique
   */
  export type FuncaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao
     */
    select?: FuncaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcao
     */
    omit?: FuncaoOmit<ExtArgs> | null
    /**
     * Filter, which Funcao to fetch.
     */
    where: FuncaoWhereUniqueInput
  }

  /**
   * Funcao findUniqueOrThrow
   */
  export type FuncaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao
     */
    select?: FuncaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcao
     */
    omit?: FuncaoOmit<ExtArgs> | null
    /**
     * Filter, which Funcao to fetch.
     */
    where: FuncaoWhereUniqueInput
  }

  /**
   * Funcao findFirst
   */
  export type FuncaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao
     */
    select?: FuncaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcao
     */
    omit?: FuncaoOmit<ExtArgs> | null
    /**
     * Filter, which Funcao to fetch.
     */
    where?: FuncaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcaos to fetch.
     */
    orderBy?: FuncaoOrderByWithRelationInput | FuncaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcaos.
     */
    cursor?: FuncaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcaos.
     */
    distinct?: FuncaoScalarFieldEnum | FuncaoScalarFieldEnum[]
  }

  /**
   * Funcao findFirstOrThrow
   */
  export type FuncaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao
     */
    select?: FuncaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcao
     */
    omit?: FuncaoOmit<ExtArgs> | null
    /**
     * Filter, which Funcao to fetch.
     */
    where?: FuncaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcaos to fetch.
     */
    orderBy?: FuncaoOrderByWithRelationInput | FuncaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcaos.
     */
    cursor?: FuncaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcaos.
     */
    distinct?: FuncaoScalarFieldEnum | FuncaoScalarFieldEnum[]
  }

  /**
   * Funcao findMany
   */
  export type FuncaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao
     */
    select?: FuncaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcao
     */
    omit?: FuncaoOmit<ExtArgs> | null
    /**
     * Filter, which Funcaos to fetch.
     */
    where?: FuncaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcaos to fetch.
     */
    orderBy?: FuncaoOrderByWithRelationInput | FuncaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcaos.
     */
    cursor?: FuncaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcaos.
     */
    skip?: number
    distinct?: FuncaoScalarFieldEnum | FuncaoScalarFieldEnum[]
  }

  /**
   * Funcao create
   */
  export type FuncaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao
     */
    select?: FuncaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcao
     */
    omit?: FuncaoOmit<ExtArgs> | null
    /**
     * The data needed to create a Funcao.
     */
    data: XOR<FuncaoCreateInput, FuncaoUncheckedCreateInput>
  }

  /**
   * Funcao createMany
   */
  export type FuncaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcaos.
     */
    data: FuncaoCreateManyInput | FuncaoCreateManyInput[]
  }

  /**
   * Funcao update
   */
  export type FuncaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao
     */
    select?: FuncaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcao
     */
    omit?: FuncaoOmit<ExtArgs> | null
    /**
     * The data needed to update a Funcao.
     */
    data: XOR<FuncaoUpdateInput, FuncaoUncheckedUpdateInput>
    /**
     * Choose, which Funcao to update.
     */
    where: FuncaoWhereUniqueInput
  }

  /**
   * Funcao updateMany
   */
  export type FuncaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcaos.
     */
    data: XOR<FuncaoUpdateManyMutationInput, FuncaoUncheckedUpdateManyInput>
    /**
     * Filter which Funcaos to update
     */
    where?: FuncaoWhereInput
    /**
     * Limit how many Funcaos to update.
     */
    limit?: number
  }

  /**
   * Funcao upsert
   */
  export type FuncaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao
     */
    select?: FuncaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcao
     */
    omit?: FuncaoOmit<ExtArgs> | null
    /**
     * The filter to search for the Funcao to update in case it exists.
     */
    where: FuncaoWhereUniqueInput
    /**
     * In case the Funcao found by the `where` argument doesn't exist, create a new Funcao with this data.
     */
    create: XOR<FuncaoCreateInput, FuncaoUncheckedCreateInput>
    /**
     * In case the Funcao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncaoUpdateInput, FuncaoUncheckedUpdateInput>
  }

  /**
   * Funcao delete
   */
  export type FuncaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao
     */
    select?: FuncaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcao
     */
    omit?: FuncaoOmit<ExtArgs> | null
    /**
     * Filter which Funcao to delete.
     */
    where: FuncaoWhereUniqueInput
  }

  /**
   * Funcao deleteMany
   */
  export type FuncaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcaos to delete
     */
    where?: FuncaoWhereInput
    /**
     * Limit how many Funcaos to delete.
     */
    limit?: number
  }

  /**
   * Funcao findRaw
   */
  export type FuncaoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Funcao aggregateRaw
   */
  export type FuncaoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Funcao without action
   */
  export type FuncaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao
     */
    select?: FuncaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcao
     */
    omit?: FuncaoOmit<ExtArgs> | null
  }


  /**
   * Model Servico
   */

  export type AggregateServico = {
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  export type ServicoAvgAggregateOutputType = {
    valor_sem_nota: number | null
    valor_com_nota: number | null
    valor_unicid: number | null
    valor_pinheros: number | null
  }

  export type ServicoSumAggregateOutputType = {
    valor_sem_nota: number[]
    valor_com_nota: number[]
    valor_unicid: number[]
    valor_pinheros: number[]
  }

  export type ServicoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ServicoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ServicoCountAggregateOutputType = {
    id: number
    nome: number
    valor_sem_nota: number
    valor_com_nota: number
    valor_unicid: number
    valor_pinheros: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ServicoAvgAggregateInputType = {
    valor_sem_nota?: true
    valor_com_nota?: true
    valor_unicid?: true
    valor_pinheros?: true
  }

  export type ServicoSumAggregateInputType = {
    valor_sem_nota?: true
    valor_com_nota?: true
    valor_unicid?: true
    valor_pinheros?: true
  }

  export type ServicoMinAggregateInputType = {
    id?: true
    nome?: true
    created_at?: true
    updated_at?: true
  }

  export type ServicoMaxAggregateInputType = {
    id?: true
    nome?: true
    created_at?: true
    updated_at?: true
  }

  export type ServicoCountAggregateInputType = {
    id?: true
    nome?: true
    valor_sem_nota?: true
    valor_com_nota?: true
    valor_unicid?: true
    valor_pinheros?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servico to aggregate.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicos
    **/
    _count?: true | ServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicoMaxAggregateInputType
  }

  export type GetServicoAggregateType<T extends ServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServico[P]>
      : GetScalarType<T[P], AggregateServico[P]>
  }




  export type ServicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithAggregationInput | ServicoOrderByWithAggregationInput[]
    by: ServicoScalarFieldEnum[] | ServicoScalarFieldEnum
    having?: ServicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicoCountAggregateInputType | true
    _avg?: ServicoAvgAggregateInputType
    _sum?: ServicoSumAggregateInputType
    _min?: ServicoMinAggregateInputType
    _max?: ServicoMaxAggregateInputType
  }

  export type ServicoGroupByOutputType = {
    id: string
    nome: string
    valor_sem_nota: number[]
    valor_com_nota: number[]
    valor_unicid: number[]
    valor_pinheros: number[]
    created_at: Date
    updated_at: Date
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  type GetServicoGroupByPayload<T extends ServicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicoGroupByOutputType[P]>
            : GetScalarType<T[P], ServicoGroupByOutputType[P]>
        }
      >
    >


  export type ServicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    valor_sem_nota?: boolean
    valor_com_nota?: boolean
    valor_unicid?: boolean
    valor_pinheros?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["servico"]>



  export type ServicoSelectScalar = {
    id?: boolean
    nome?: boolean
    valor_sem_nota?: boolean
    valor_com_nota?: boolean
    valor_unicid?: boolean
    valor_pinheros?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ServicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "valor_sem_nota" | "valor_com_nota" | "valor_unicid" | "valor_pinheros" | "created_at" | "updated_at", ExtArgs["result"]["servico"]>

  export type $ServicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servico"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Campo gerado automaticamente pelo MongoDB
       */
      id: string
      nome: string
      valor_sem_nota: number[]
      valor_com_nota: number[]
      valor_unicid: number[]
      valor_pinheros: number[]
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["servico"]>
    composites: {}
  }

  type ServicoGetPayload<S extends boolean | null | undefined | ServicoDefaultArgs> = $Result.GetResult<Prisma.$ServicoPayload, S>

  type ServicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicoCountAggregateInputType | true
    }

  export interface ServicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servico'], meta: { name: 'Servico' } }
    /**
     * Find zero or one Servico that matches the filter.
     * @param {ServicoFindUniqueArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicoFindUniqueArgs>(args: SelectSubset<T, ServicoFindUniqueArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicoFindUniqueOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicoFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicoFindFirstArgs>(args?: SelectSubset<T, ServicoFindFirstArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicoFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicos
     * const servicos = await prisma.servico.findMany()
     * 
     * // Get first 10 Servicos
     * const servicos = await prisma.servico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicoWithIdOnly = await prisma.servico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicoFindManyArgs>(args?: SelectSubset<T, ServicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servico.
     * @param {ServicoCreateArgs} args - Arguments to create a Servico.
     * @example
     * // Create one Servico
     * const Servico = await prisma.servico.create({
     *   data: {
     *     // ... data to create a Servico
     *   }
     * })
     * 
     */
    create<T extends ServicoCreateArgs>(args: SelectSubset<T, ServicoCreateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicos.
     * @param {ServicoCreateManyArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicoCreateManyArgs>(args?: SelectSubset<T, ServicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servico.
     * @param {ServicoDeleteArgs} args - Arguments to delete one Servico.
     * @example
     * // Delete one Servico
     * const Servico = await prisma.servico.delete({
     *   where: {
     *     // ... filter to delete one Servico
     *   }
     * })
     * 
     */
    delete<T extends ServicoDeleteArgs>(args: SelectSubset<T, ServicoDeleteArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servico.
     * @param {ServicoUpdateArgs} args - Arguments to update one Servico.
     * @example
     * // Update one Servico
     * const servico = await prisma.servico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicoUpdateArgs>(args: SelectSubset<T, ServicoUpdateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicos.
     * @param {ServicoDeleteManyArgs} args - Arguments to filter Servicos to delete.
     * @example
     * // Delete a few Servicos
     * const { count } = await prisma.servico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicoDeleteManyArgs>(args?: SelectSubset<T, ServicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicoUpdateManyArgs>(args: SelectSubset<T, ServicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servico.
     * @param {ServicoUpsertArgs} args - Arguments to update or create a Servico.
     * @example
     * // Update or create a Servico
     * const servico = await prisma.servico.upsert({
     *   create: {
     *     // ... data to create a Servico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servico we want to update
     *   }
     * })
     */
    upsert<T extends ServicoUpsertArgs>(args: SelectSubset<T, ServicoUpsertArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicos that matches the filter.
     * @param {ServicoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const servico = await prisma.servico.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ServicoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Servico.
     * @param {ServicoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const servico = await prisma.servico.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ServicoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoCountArgs} args - Arguments to filter Servicos to count.
     * @example
     * // Count the number of Servicos
     * const count = await prisma.servico.count({
     *   where: {
     *     // ... the filter for the Servicos we want to count
     *   }
     * })
    **/
    count<T extends ServicoCountArgs>(
      args?: Subset<T, ServicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicoAggregateArgs>(args: Subset<T, ServicoAggregateArgs>): Prisma.PrismaPromise<GetServicoAggregateType<T>>

    /**
     * Group by Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoGroupByArgs} args - Group by arguments.
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
      T extends ServicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicoGroupByArgs['orderBy'] }
        : { orderBy?: ServicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servico model
   */
  readonly fields: ServicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Servico model
   */
  interface ServicoFieldRefs {
    readonly id: FieldRef<"Servico", 'String'>
    readonly nome: FieldRef<"Servico", 'String'>
    readonly valor_sem_nota: FieldRef<"Servico", 'Int[]'>
    readonly valor_com_nota: FieldRef<"Servico", 'Int[]'>
    readonly valor_unicid: FieldRef<"Servico", 'Int[]'>
    readonly valor_pinheros: FieldRef<"Servico", 'Int[]'>
    readonly created_at: FieldRef<"Servico", 'DateTime'>
    readonly updated_at: FieldRef<"Servico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Servico findUnique
   */
  export type ServicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findUniqueOrThrow
   */
  export type ServicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findFirst
   */
  export type ServicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findFirstOrThrow
   */
  export type ServicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findMany
   */
  export type ServicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Filter, which Servicos to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico create
   */
  export type ServicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data needed to create a Servico.
     */
    data: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
  }

  /**
   * Servico createMany
   */
  export type ServicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
  }

  /**
   * Servico update
   */
  export type ServicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data needed to update a Servico.
     */
    data: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
    /**
     * Choose, which Servico to update.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico updateMany
   */
  export type ServicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
  }

  /**
   * Servico upsert
   */
  export type ServicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The filter to search for the Servico to update in case it exists.
     */
    where: ServicoWhereUniqueInput
    /**
     * In case the Servico found by the `where` argument doesn't exist, create a new Servico with this data.
     */
    create: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
    /**
     * In case the Servico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
  }

  /**
   * Servico delete
   */
  export type ServicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Filter which Servico to delete.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico deleteMany
   */
  export type ServicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicos to delete
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to delete.
     */
    limit?: number
  }

  /**
   * Servico findRaw
   */
  export type ServicoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Servico aggregateRaw
   */
  export type ServicoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Servico without action
   */
  export type ServicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
  }


  /**
   * Model Entrada
   */

  export type AggregateEntrada = {
    _count: EntradaCountAggregateOutputType | null
    _min: EntradaMinAggregateOutputType | null
    _max: EntradaMaxAggregateOutputType | null
  }

  export type EntradaMinAggregateOutputType = {
    id: string | null
    consultorio: string | null
    dentista: string | null
    paciente: string | null
    observacao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EntradaMaxAggregateOutputType = {
    id: string | null
    consultorio: string | null
    dentista: string | null
    paciente: string | null
    observacao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EntradaCountAggregateOutputType = {
    id: number
    consultorio: number
    dentista: number
    paciente: number
    observacao: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EntradaMinAggregateInputType = {
    id?: true
    consultorio?: true
    dentista?: true
    paciente?: true
    observacao?: true
    created_at?: true
    updated_at?: true
  }

  export type EntradaMaxAggregateInputType = {
    id?: true
    consultorio?: true
    dentista?: true
    paciente?: true
    observacao?: true
    created_at?: true
    updated_at?: true
  }

  export type EntradaCountAggregateInputType = {
    id?: true
    consultorio?: true
    dentista?: true
    paciente?: true
    observacao?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EntradaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entrada to aggregate.
     */
    where?: EntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entradas to fetch.
     */
    orderBy?: EntradaOrderByWithRelationInput | EntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entradas
    **/
    _count?: true | EntradaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntradaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntradaMaxAggregateInputType
  }

  export type GetEntradaAggregateType<T extends EntradaAggregateArgs> = {
        [P in keyof T & keyof AggregateEntrada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntrada[P]>
      : GetScalarType<T[P], AggregateEntrada[P]>
  }




  export type EntradaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntradaWhereInput
    orderBy?: EntradaOrderByWithAggregationInput | EntradaOrderByWithAggregationInput[]
    by: EntradaScalarFieldEnum[] | EntradaScalarFieldEnum
    having?: EntradaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntradaCountAggregateInputType | true
    _min?: EntradaMinAggregateInputType
    _max?: EntradaMaxAggregateInputType
  }

  export type EntradaGroupByOutputType = {
    id: string
    consultorio: string
    dentista: string
    paciente: string
    observacao: string | null
    created_at: Date
    updated_at: Date
    _count: EntradaCountAggregateOutputType | null
    _min: EntradaMinAggregateOutputType | null
    _max: EntradaMaxAggregateOutputType | null
  }

  type GetEntradaGroupByPayload<T extends EntradaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntradaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntradaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntradaGroupByOutputType[P]>
            : GetScalarType<T[P], EntradaGroupByOutputType[P]>
        }
      >
    >


  export type EntradaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consultorio?: boolean
    dentista?: boolean
    paciente?: boolean
    observacao?: boolean
    servicos?: boolean | ServicoEntradaDefaultArgs<ExtArgs>
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["entrada"]>



  export type EntradaSelectScalar = {
    id?: boolean
    consultorio?: boolean
    dentista?: boolean
    paciente?: boolean
    observacao?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type EntradaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "consultorio" | "dentista" | "paciente" | "observacao" | "servicos" | "created_at" | "updated_at", ExtArgs["result"]["entrada"]>
  export type EntradaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EntradaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entrada"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Campo gerado automaticamente pelo MongoDB
       */
      id: string
      consultorio: string
      dentista: string
      paciente: string
      observacao: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["entrada"]>
    composites: {
      servicos: Prisma.$ServicoEntradaPayload[]
    }
  }

  type EntradaGetPayload<S extends boolean | null | undefined | EntradaDefaultArgs> = $Result.GetResult<Prisma.$EntradaPayload, S>

  type EntradaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntradaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntradaCountAggregateInputType | true
    }

  export interface EntradaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entrada'], meta: { name: 'Entrada' } }
    /**
     * Find zero or one Entrada that matches the filter.
     * @param {EntradaFindUniqueArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntradaFindUniqueArgs>(args: SelectSubset<T, EntradaFindUniqueArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entrada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntradaFindUniqueOrThrowArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntradaFindUniqueOrThrowArgs>(args: SelectSubset<T, EntradaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaFindFirstArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntradaFindFirstArgs>(args?: SelectSubset<T, EntradaFindFirstArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaFindFirstOrThrowArgs} args - Arguments to find a Entrada
     * @example
     * // Get one Entrada
     * const entrada = await prisma.entrada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntradaFindFirstOrThrowArgs>(args?: SelectSubset<T, EntradaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entradas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entradas
     * const entradas = await prisma.entrada.findMany()
     * 
     * // Get first 10 Entradas
     * const entradas = await prisma.entrada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entradaWithIdOnly = await prisma.entrada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntradaFindManyArgs>(args?: SelectSubset<T, EntradaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entrada.
     * @param {EntradaCreateArgs} args - Arguments to create a Entrada.
     * @example
     * // Create one Entrada
     * const Entrada = await prisma.entrada.create({
     *   data: {
     *     // ... data to create a Entrada
     *   }
     * })
     * 
     */
    create<T extends EntradaCreateArgs>(args: SelectSubset<T, EntradaCreateArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entradas.
     * @param {EntradaCreateManyArgs} args - Arguments to create many Entradas.
     * @example
     * // Create many Entradas
     * const entrada = await prisma.entrada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntradaCreateManyArgs>(args?: SelectSubset<T, EntradaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entrada.
     * @param {EntradaDeleteArgs} args - Arguments to delete one Entrada.
     * @example
     * // Delete one Entrada
     * const Entrada = await prisma.entrada.delete({
     *   where: {
     *     // ... filter to delete one Entrada
     *   }
     * })
     * 
     */
    delete<T extends EntradaDeleteArgs>(args: SelectSubset<T, EntradaDeleteArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entrada.
     * @param {EntradaUpdateArgs} args - Arguments to update one Entrada.
     * @example
     * // Update one Entrada
     * const entrada = await prisma.entrada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntradaUpdateArgs>(args: SelectSubset<T, EntradaUpdateArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entradas.
     * @param {EntradaDeleteManyArgs} args - Arguments to filter Entradas to delete.
     * @example
     * // Delete a few Entradas
     * const { count } = await prisma.entrada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntradaDeleteManyArgs>(args?: SelectSubset<T, EntradaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entradas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entradas
     * const entrada = await prisma.entrada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntradaUpdateManyArgs>(args: SelectSubset<T, EntradaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entrada.
     * @param {EntradaUpsertArgs} args - Arguments to update or create a Entrada.
     * @example
     * // Update or create a Entrada
     * const entrada = await prisma.entrada.upsert({
     *   create: {
     *     // ... data to create a Entrada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entrada we want to update
     *   }
     * })
     */
    upsert<T extends EntradaUpsertArgs>(args: SelectSubset<T, EntradaUpsertArgs<ExtArgs>>): Prisma__EntradaClient<$Result.GetResult<Prisma.$EntradaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entradas that matches the filter.
     * @param {EntradaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const entrada = await prisma.entrada.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EntradaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Entrada.
     * @param {EntradaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const entrada = await prisma.entrada.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EntradaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Entradas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaCountArgs} args - Arguments to filter Entradas to count.
     * @example
     * // Count the number of Entradas
     * const count = await prisma.entrada.count({
     *   where: {
     *     // ... the filter for the Entradas we want to count
     *   }
     * })
    **/
    count<T extends EntradaCountArgs>(
      args?: Subset<T, EntradaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntradaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entrada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntradaAggregateArgs>(args: Subset<T, EntradaAggregateArgs>): Prisma.PrismaPromise<GetEntradaAggregateType<T>>

    /**
     * Group by Entrada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntradaGroupByArgs} args - Group by arguments.
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
      T extends EntradaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntradaGroupByArgs['orderBy'] }
        : { orderBy?: EntradaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntradaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntradaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entrada model
   */
  readonly fields: EntradaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entrada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntradaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Entrada model
   */
  interface EntradaFieldRefs {
    readonly id: FieldRef<"Entrada", 'String'>
    readonly consultorio: FieldRef<"Entrada", 'String'>
    readonly dentista: FieldRef<"Entrada", 'String'>
    readonly paciente: FieldRef<"Entrada", 'String'>
    readonly observacao: FieldRef<"Entrada", 'String'>
    readonly created_at: FieldRef<"Entrada", 'DateTime'>
    readonly updated_at: FieldRef<"Entrada", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entrada findUnique
   */
  export type EntradaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter, which Entrada to fetch.
     */
    where: EntradaWhereUniqueInput
  }

  /**
   * Entrada findUniqueOrThrow
   */
  export type EntradaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter, which Entrada to fetch.
     */
    where: EntradaWhereUniqueInput
  }

  /**
   * Entrada findFirst
   */
  export type EntradaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter, which Entrada to fetch.
     */
    where?: EntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entradas to fetch.
     */
    orderBy?: EntradaOrderByWithRelationInput | EntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entradas.
     */
    cursor?: EntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entradas.
     */
    distinct?: EntradaScalarFieldEnum | EntradaScalarFieldEnum[]
  }

  /**
   * Entrada findFirstOrThrow
   */
  export type EntradaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter, which Entrada to fetch.
     */
    where?: EntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entradas to fetch.
     */
    orderBy?: EntradaOrderByWithRelationInput | EntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entradas.
     */
    cursor?: EntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entradas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entradas.
     */
    distinct?: EntradaScalarFieldEnum | EntradaScalarFieldEnum[]
  }

  /**
   * Entrada findMany
   */
  export type EntradaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter, which Entradas to fetch.
     */
    where?: EntradaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entradas to fetch.
     */
    orderBy?: EntradaOrderByWithRelationInput | EntradaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entradas.
     */
    cursor?: EntradaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entradas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entradas.
     */
    skip?: number
    distinct?: EntradaScalarFieldEnum | EntradaScalarFieldEnum[]
  }

  /**
   * Entrada create
   */
  export type EntradaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * The data needed to create a Entrada.
     */
    data: XOR<EntradaCreateInput, EntradaUncheckedCreateInput>
  }

  /**
   * Entrada createMany
   */
  export type EntradaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entradas.
     */
    data: EntradaCreateManyInput | EntradaCreateManyInput[]
  }

  /**
   * Entrada update
   */
  export type EntradaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * The data needed to update a Entrada.
     */
    data: XOR<EntradaUpdateInput, EntradaUncheckedUpdateInput>
    /**
     * Choose, which Entrada to update.
     */
    where: EntradaWhereUniqueInput
  }

  /**
   * Entrada updateMany
   */
  export type EntradaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entradas.
     */
    data: XOR<EntradaUpdateManyMutationInput, EntradaUncheckedUpdateManyInput>
    /**
     * Filter which Entradas to update
     */
    where?: EntradaWhereInput
    /**
     * Limit how many Entradas to update.
     */
    limit?: number
  }

  /**
   * Entrada upsert
   */
  export type EntradaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * The filter to search for the Entrada to update in case it exists.
     */
    where: EntradaWhereUniqueInput
    /**
     * In case the Entrada found by the `where` argument doesn't exist, create a new Entrada with this data.
     */
    create: XOR<EntradaCreateInput, EntradaUncheckedCreateInput>
    /**
     * In case the Entrada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntradaUpdateInput, EntradaUncheckedUpdateInput>
  }

  /**
   * Entrada delete
   */
  export type EntradaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
    /**
     * Filter which Entrada to delete.
     */
    where: EntradaWhereUniqueInput
  }

  /**
   * Entrada deleteMany
   */
  export type EntradaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entradas to delete
     */
    where?: EntradaWhereInput
    /**
     * Limit how many Entradas to delete.
     */
    limit?: number
  }

  /**
   * Entrada findRaw
   */
  export type EntradaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Entrada aggregateRaw
   */
  export type EntradaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Entrada without action
   */
  export type EntradaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrada
     */
    select?: EntradaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrada
     */
    omit?: EntradaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntradaInclude<ExtArgs> | null
  }


  /**
   * Model Roteiro
   */

  export type AggregateRoteiro = {
    _count: RoteiroCountAggregateOutputType | null
    _min: RoteiroMinAggregateOutputType | null
    _max: RoteiroMaxAggregateOutputType | null
  }

  export type RoteiroMinAggregateOutputType = {
    id: string | null
    data: string | null
    entregue: boolean | null
    observacao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoteiroMaxAggregateOutputType = {
    id: string | null
    data: string | null
    entregue: boolean | null
    observacao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoteiroCountAggregateOutputType = {
    id: number
    data: number
    entregue: number
    observacao: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RoteiroMinAggregateInputType = {
    id?: true
    data?: true
    entregue?: true
    observacao?: true
    created_at?: true
    updated_at?: true
  }

  export type RoteiroMaxAggregateInputType = {
    id?: true
    data?: true
    entregue?: true
    observacao?: true
    created_at?: true
    updated_at?: true
  }

  export type RoteiroCountAggregateInputType = {
    id?: true
    data?: true
    entregue?: true
    observacao?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RoteiroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roteiro to aggregate.
     */
    where?: RoteiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roteiros to fetch.
     */
    orderBy?: RoteiroOrderByWithRelationInput | RoteiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoteiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roteiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roteiros
    **/
    _count?: true | RoteiroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoteiroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoteiroMaxAggregateInputType
  }

  export type GetRoteiroAggregateType<T extends RoteiroAggregateArgs> = {
        [P in keyof T & keyof AggregateRoteiro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoteiro[P]>
      : GetScalarType<T[P], AggregateRoteiro[P]>
  }




  export type RoteiroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoteiroWhereInput
    orderBy?: RoteiroOrderByWithAggregationInput | RoteiroOrderByWithAggregationInput[]
    by: RoteiroScalarFieldEnum[] | RoteiroScalarFieldEnum
    having?: RoteiroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoteiroCountAggregateInputType | true
    _min?: RoteiroMinAggregateInputType
    _max?: RoteiroMaxAggregateInputType
  }

  export type RoteiroGroupByOutputType = {
    id: string
    data: string
    entregue: boolean | null
    observacao: string | null
    created_at: Date
    updated_at: Date
    _count: RoteiroCountAggregateOutputType | null
    _min: RoteiroMinAggregateOutputType | null
    _max: RoteiroMaxAggregateOutputType | null
  }

  type GetRoteiroGroupByPayload<T extends RoteiroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoteiroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoteiroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoteiroGroupByOutputType[P]>
            : GetScalarType<T[P], RoteiroGroupByOutputType[P]>
        }
      >
    >


  export type RoteiroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    entregue?: boolean
    observacao?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["roteiro"]>



  export type RoteiroSelectScalar = {
    id?: boolean
    data?: boolean
    entregue?: boolean
    observacao?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RoteiroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "entregue" | "observacao" | "created_at" | "updated_at", ExtArgs["result"]["roteiro"]>

  export type $RoteiroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roteiro"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Campo gerado automaticamente pelo MongoDB
       */
      id: string
      data: string
      entregue: boolean | null
      observacao: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["roteiro"]>
    composites: {}
  }

  type RoteiroGetPayload<S extends boolean | null | undefined | RoteiroDefaultArgs> = $Result.GetResult<Prisma.$RoteiroPayload, S>

  type RoteiroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoteiroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoteiroCountAggregateInputType | true
    }

  export interface RoteiroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roteiro'], meta: { name: 'Roteiro' } }
    /**
     * Find zero or one Roteiro that matches the filter.
     * @param {RoteiroFindUniqueArgs} args - Arguments to find a Roteiro
     * @example
     * // Get one Roteiro
     * const roteiro = await prisma.roteiro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoteiroFindUniqueArgs>(args: SelectSubset<T, RoteiroFindUniqueArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roteiro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoteiroFindUniqueOrThrowArgs} args - Arguments to find a Roteiro
     * @example
     * // Get one Roteiro
     * const roteiro = await prisma.roteiro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoteiroFindUniqueOrThrowArgs>(args: SelectSubset<T, RoteiroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roteiro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteiroFindFirstArgs} args - Arguments to find a Roteiro
     * @example
     * // Get one Roteiro
     * const roteiro = await prisma.roteiro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoteiroFindFirstArgs>(args?: SelectSubset<T, RoteiroFindFirstArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roteiro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteiroFindFirstOrThrowArgs} args - Arguments to find a Roteiro
     * @example
     * // Get one Roteiro
     * const roteiro = await prisma.roteiro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoteiroFindFirstOrThrowArgs>(args?: SelectSubset<T, RoteiroFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roteiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteiroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roteiros
     * const roteiros = await prisma.roteiro.findMany()
     * 
     * // Get first 10 Roteiros
     * const roteiros = await prisma.roteiro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roteiroWithIdOnly = await prisma.roteiro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoteiroFindManyArgs>(args?: SelectSubset<T, RoteiroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roteiro.
     * @param {RoteiroCreateArgs} args - Arguments to create a Roteiro.
     * @example
     * // Create one Roteiro
     * const Roteiro = await prisma.roteiro.create({
     *   data: {
     *     // ... data to create a Roteiro
     *   }
     * })
     * 
     */
    create<T extends RoteiroCreateArgs>(args: SelectSubset<T, RoteiroCreateArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roteiros.
     * @param {RoteiroCreateManyArgs} args - Arguments to create many Roteiros.
     * @example
     * // Create many Roteiros
     * const roteiro = await prisma.roteiro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoteiroCreateManyArgs>(args?: SelectSubset<T, RoteiroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roteiro.
     * @param {RoteiroDeleteArgs} args - Arguments to delete one Roteiro.
     * @example
     * // Delete one Roteiro
     * const Roteiro = await prisma.roteiro.delete({
     *   where: {
     *     // ... filter to delete one Roteiro
     *   }
     * })
     * 
     */
    delete<T extends RoteiroDeleteArgs>(args: SelectSubset<T, RoteiroDeleteArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roteiro.
     * @param {RoteiroUpdateArgs} args - Arguments to update one Roteiro.
     * @example
     * // Update one Roteiro
     * const roteiro = await prisma.roteiro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoteiroUpdateArgs>(args: SelectSubset<T, RoteiroUpdateArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roteiros.
     * @param {RoteiroDeleteManyArgs} args - Arguments to filter Roteiros to delete.
     * @example
     * // Delete a few Roteiros
     * const { count } = await prisma.roteiro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoteiroDeleteManyArgs>(args?: SelectSubset<T, RoteiroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roteiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteiroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roteiros
     * const roteiro = await prisma.roteiro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoteiroUpdateManyArgs>(args: SelectSubset<T, RoteiroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roteiro.
     * @param {RoteiroUpsertArgs} args - Arguments to update or create a Roteiro.
     * @example
     * // Update or create a Roteiro
     * const roteiro = await prisma.roteiro.upsert({
     *   create: {
     *     // ... data to create a Roteiro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roteiro we want to update
     *   }
     * })
     */
    upsert<T extends RoteiroUpsertArgs>(args: SelectSubset<T, RoteiroUpsertArgs<ExtArgs>>): Prisma__RoteiroClient<$Result.GetResult<Prisma.$RoteiroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roteiros that matches the filter.
     * @param {RoteiroFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const roteiro = await prisma.roteiro.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RoteiroFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Roteiro.
     * @param {RoteiroAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const roteiro = await prisma.roteiro.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RoteiroAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Roteiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteiroCountArgs} args - Arguments to filter Roteiros to count.
     * @example
     * // Count the number of Roteiros
     * const count = await prisma.roteiro.count({
     *   where: {
     *     // ... the filter for the Roteiros we want to count
     *   }
     * })
    **/
    count<T extends RoteiroCountArgs>(
      args?: Subset<T, RoteiroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoteiroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roteiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteiroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoteiroAggregateArgs>(args: Subset<T, RoteiroAggregateArgs>): Prisma.PrismaPromise<GetRoteiroAggregateType<T>>

    /**
     * Group by Roteiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoteiroGroupByArgs} args - Group by arguments.
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
      T extends RoteiroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoteiroGroupByArgs['orderBy'] }
        : { orderBy?: RoteiroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoteiroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoteiroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roteiro model
   */
  readonly fields: RoteiroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roteiro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoteiroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Roteiro model
   */
  interface RoteiroFieldRefs {
    readonly id: FieldRef<"Roteiro", 'String'>
    readonly data: FieldRef<"Roteiro", 'String'>
    readonly entregue: FieldRef<"Roteiro", 'Boolean'>
    readonly observacao: FieldRef<"Roteiro", 'String'>
    readonly created_at: FieldRef<"Roteiro", 'DateTime'>
    readonly updated_at: FieldRef<"Roteiro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Roteiro findUnique
   */
  export type RoteiroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roteiro
     */
    omit?: RoteiroOmit<ExtArgs> | null
    /**
     * Filter, which Roteiro to fetch.
     */
    where: RoteiroWhereUniqueInput
  }

  /**
   * Roteiro findUniqueOrThrow
   */
  export type RoteiroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roteiro
     */
    omit?: RoteiroOmit<ExtArgs> | null
    /**
     * Filter, which Roteiro to fetch.
     */
    where: RoteiroWhereUniqueInput
  }

  /**
   * Roteiro findFirst
   */
  export type RoteiroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roteiro
     */
    omit?: RoteiroOmit<ExtArgs> | null
    /**
     * Filter, which Roteiro to fetch.
     */
    where?: RoteiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roteiros to fetch.
     */
    orderBy?: RoteiroOrderByWithRelationInput | RoteiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roteiros.
     */
    cursor?: RoteiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roteiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roteiros.
     */
    distinct?: RoteiroScalarFieldEnum | RoteiroScalarFieldEnum[]
  }

  /**
   * Roteiro findFirstOrThrow
   */
  export type RoteiroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roteiro
     */
    omit?: RoteiroOmit<ExtArgs> | null
    /**
     * Filter, which Roteiro to fetch.
     */
    where?: RoteiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roteiros to fetch.
     */
    orderBy?: RoteiroOrderByWithRelationInput | RoteiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roteiros.
     */
    cursor?: RoteiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roteiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roteiros.
     */
    distinct?: RoteiroScalarFieldEnum | RoteiroScalarFieldEnum[]
  }

  /**
   * Roteiro findMany
   */
  export type RoteiroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roteiro
     */
    omit?: RoteiroOmit<ExtArgs> | null
    /**
     * Filter, which Roteiros to fetch.
     */
    where?: RoteiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roteiros to fetch.
     */
    orderBy?: RoteiroOrderByWithRelationInput | RoteiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roteiros.
     */
    cursor?: RoteiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roteiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roteiros.
     */
    skip?: number
    distinct?: RoteiroScalarFieldEnum | RoteiroScalarFieldEnum[]
  }

  /**
   * Roteiro create
   */
  export type RoteiroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roteiro
     */
    omit?: RoteiroOmit<ExtArgs> | null
    /**
     * The data needed to create a Roteiro.
     */
    data: XOR<RoteiroCreateInput, RoteiroUncheckedCreateInput>
  }

  /**
   * Roteiro createMany
   */
  export type RoteiroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roteiros.
     */
    data: RoteiroCreateManyInput | RoteiroCreateManyInput[]
  }

  /**
   * Roteiro update
   */
  export type RoteiroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roteiro
     */
    omit?: RoteiroOmit<ExtArgs> | null
    /**
     * The data needed to update a Roteiro.
     */
    data: XOR<RoteiroUpdateInput, RoteiroUncheckedUpdateInput>
    /**
     * Choose, which Roteiro to update.
     */
    where: RoteiroWhereUniqueInput
  }

  /**
   * Roteiro updateMany
   */
  export type RoteiroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roteiros.
     */
    data: XOR<RoteiroUpdateManyMutationInput, RoteiroUncheckedUpdateManyInput>
    /**
     * Filter which Roteiros to update
     */
    where?: RoteiroWhereInput
    /**
     * Limit how many Roteiros to update.
     */
    limit?: number
  }

  /**
   * Roteiro upsert
   */
  export type RoteiroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roteiro
     */
    omit?: RoteiroOmit<ExtArgs> | null
    /**
     * The filter to search for the Roteiro to update in case it exists.
     */
    where: RoteiroWhereUniqueInput
    /**
     * In case the Roteiro found by the `where` argument doesn't exist, create a new Roteiro with this data.
     */
    create: XOR<RoteiroCreateInput, RoteiroUncheckedCreateInput>
    /**
     * In case the Roteiro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoteiroUpdateInput, RoteiroUncheckedUpdateInput>
  }

  /**
   * Roteiro delete
   */
  export type RoteiroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roteiro
     */
    omit?: RoteiroOmit<ExtArgs> | null
    /**
     * Filter which Roteiro to delete.
     */
    where: RoteiroWhereUniqueInput
  }

  /**
   * Roteiro deleteMany
   */
  export type RoteiroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roteiros to delete
     */
    where?: RoteiroWhereInput
    /**
     * Limit how many Roteiros to delete.
     */
    limit?: number
  }

  /**
   * Roteiro findRaw
   */
  export type RoteiroFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Roteiro aggregateRaw
   */
  export type RoteiroAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Roteiro without action
   */
  export type RoteiroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roteiro
     */
    select?: RoteiroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roteiro
     */
    omit?: RoteiroOmit<ExtArgs> | null
  }


  /**
   * Model Fechamento
   */

  export type AggregateFechamento = {
    _count: FechamentoCountAggregateOutputType | null
    _avg: FechamentoAvgAggregateOutputType | null
    _sum: FechamentoSumAggregateOutputType | null
    _min: FechamentoMinAggregateOutputType | null
    _max: FechamentoMaxAggregateOutputType | null
  }

  export type FechamentoAvgAggregateOutputType = {
    valor: number | null
  }

  export type FechamentoSumAggregateOutputType = {
    valor: number | null
  }

  export type FechamentoMinAggregateOutputType = {
    id: string | null
    fechado: boolean | null
    data: Date | null
    valor: number | null
    observacao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FechamentoMaxAggregateOutputType = {
    id: string | null
    fechado: boolean | null
    data: Date | null
    valor: number | null
    observacao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FechamentoCountAggregateOutputType = {
    id: number
    fechado: number
    data: number
    valor: number
    observacao: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FechamentoAvgAggregateInputType = {
    valor?: true
  }

  export type FechamentoSumAggregateInputType = {
    valor?: true
  }

  export type FechamentoMinAggregateInputType = {
    id?: true
    fechado?: true
    data?: true
    valor?: true
    observacao?: true
    created_at?: true
    updated_at?: true
  }

  export type FechamentoMaxAggregateInputType = {
    id?: true
    fechado?: true
    data?: true
    valor?: true
    observacao?: true
    created_at?: true
    updated_at?: true
  }

  export type FechamentoCountAggregateInputType = {
    id?: true
    fechado?: true
    data?: true
    valor?: true
    observacao?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FechamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fechamento to aggregate.
     */
    where?: FechamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fechamentos to fetch.
     */
    orderBy?: FechamentoOrderByWithRelationInput | FechamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FechamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fechamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fechamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fechamentos
    **/
    _count?: true | FechamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FechamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FechamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FechamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FechamentoMaxAggregateInputType
  }

  export type GetFechamentoAggregateType<T extends FechamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateFechamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFechamento[P]>
      : GetScalarType<T[P], AggregateFechamento[P]>
  }




  export type FechamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FechamentoWhereInput
    orderBy?: FechamentoOrderByWithAggregationInput | FechamentoOrderByWithAggregationInput[]
    by: FechamentoScalarFieldEnum[] | FechamentoScalarFieldEnum
    having?: FechamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FechamentoCountAggregateInputType | true
    _avg?: FechamentoAvgAggregateInputType
    _sum?: FechamentoSumAggregateInputType
    _min?: FechamentoMinAggregateInputType
    _max?: FechamentoMaxAggregateInputType
  }

  export type FechamentoGroupByOutputType = {
    id: string
    fechado: boolean
    data: Date
    valor: number
    observacao: string | null
    created_at: Date
    updated_at: Date
    _count: FechamentoCountAggregateOutputType | null
    _avg: FechamentoAvgAggregateOutputType | null
    _sum: FechamentoSumAggregateOutputType | null
    _min: FechamentoMinAggregateOutputType | null
    _max: FechamentoMaxAggregateOutputType | null
  }

  type GetFechamentoGroupByPayload<T extends FechamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FechamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FechamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FechamentoGroupByOutputType[P]>
            : GetScalarType<T[P], FechamentoGroupByOutputType[P]>
        }
      >
    >


  export type FechamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechado?: boolean
    data?: boolean
    adicional_consultorio?: boolean | AdicionalConsultorioFechamentoDefaultArgs<ExtArgs>
    adicional_dentista?: boolean | AdicionalDentistaFechamentoDefaultArgs<ExtArgs>
    valor?: boolean
    observacao?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["fechamento"]>



  export type FechamentoSelectScalar = {
    id?: boolean
    fechado?: boolean
    data?: boolean
    valor?: boolean
    observacao?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FechamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechado" | "data" | "adicional_consultorio" | "adicional_dentista" | "valor" | "observacao" | "created_at" | "updated_at", ExtArgs["result"]["fechamento"]>
  export type FechamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FechamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fechamento"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Campo gerado automaticamente pelo MongoDB
       */
      id: string
      fechado: boolean
      data: Date
      valor: number
      observacao: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["fechamento"]>
    composites: {
      adicional_consultorio: Prisma.$AdicionalConsultorioFechamentoPayload[]
      adicional_dentista: Prisma.$AdicionalDentistaFechamentoPayload[]
    }
  }

  type FechamentoGetPayload<S extends boolean | null | undefined | FechamentoDefaultArgs> = $Result.GetResult<Prisma.$FechamentoPayload, S>

  type FechamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FechamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FechamentoCountAggregateInputType | true
    }

  export interface FechamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fechamento'], meta: { name: 'Fechamento' } }
    /**
     * Find zero or one Fechamento that matches the filter.
     * @param {FechamentoFindUniqueArgs} args - Arguments to find a Fechamento
     * @example
     * // Get one Fechamento
     * const fechamento = await prisma.fechamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FechamentoFindUniqueArgs>(args: SelectSubset<T, FechamentoFindUniqueArgs<ExtArgs>>): Prisma__FechamentoClient<$Result.GetResult<Prisma.$FechamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fechamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FechamentoFindUniqueOrThrowArgs} args - Arguments to find a Fechamento
     * @example
     * // Get one Fechamento
     * const fechamento = await prisma.fechamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FechamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, FechamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FechamentoClient<$Result.GetResult<Prisma.$FechamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fechamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechamentoFindFirstArgs} args - Arguments to find a Fechamento
     * @example
     * // Get one Fechamento
     * const fechamento = await prisma.fechamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FechamentoFindFirstArgs>(args?: SelectSubset<T, FechamentoFindFirstArgs<ExtArgs>>): Prisma__FechamentoClient<$Result.GetResult<Prisma.$FechamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fechamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechamentoFindFirstOrThrowArgs} args - Arguments to find a Fechamento
     * @example
     * // Get one Fechamento
     * const fechamento = await prisma.fechamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FechamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, FechamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FechamentoClient<$Result.GetResult<Prisma.$FechamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fechamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fechamentos
     * const fechamentos = await prisma.fechamento.findMany()
     * 
     * // Get first 10 Fechamentos
     * const fechamentos = await prisma.fechamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fechamentoWithIdOnly = await prisma.fechamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FechamentoFindManyArgs>(args?: SelectSubset<T, FechamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FechamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fechamento.
     * @param {FechamentoCreateArgs} args - Arguments to create a Fechamento.
     * @example
     * // Create one Fechamento
     * const Fechamento = await prisma.fechamento.create({
     *   data: {
     *     // ... data to create a Fechamento
     *   }
     * })
     * 
     */
    create<T extends FechamentoCreateArgs>(args: SelectSubset<T, FechamentoCreateArgs<ExtArgs>>): Prisma__FechamentoClient<$Result.GetResult<Prisma.$FechamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fechamentos.
     * @param {FechamentoCreateManyArgs} args - Arguments to create many Fechamentos.
     * @example
     * // Create many Fechamentos
     * const fechamento = await prisma.fechamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FechamentoCreateManyArgs>(args?: SelectSubset<T, FechamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fechamento.
     * @param {FechamentoDeleteArgs} args - Arguments to delete one Fechamento.
     * @example
     * // Delete one Fechamento
     * const Fechamento = await prisma.fechamento.delete({
     *   where: {
     *     // ... filter to delete one Fechamento
     *   }
     * })
     * 
     */
    delete<T extends FechamentoDeleteArgs>(args: SelectSubset<T, FechamentoDeleteArgs<ExtArgs>>): Prisma__FechamentoClient<$Result.GetResult<Prisma.$FechamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fechamento.
     * @param {FechamentoUpdateArgs} args - Arguments to update one Fechamento.
     * @example
     * // Update one Fechamento
     * const fechamento = await prisma.fechamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FechamentoUpdateArgs>(args: SelectSubset<T, FechamentoUpdateArgs<ExtArgs>>): Prisma__FechamentoClient<$Result.GetResult<Prisma.$FechamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fechamentos.
     * @param {FechamentoDeleteManyArgs} args - Arguments to filter Fechamentos to delete.
     * @example
     * // Delete a few Fechamentos
     * const { count } = await prisma.fechamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FechamentoDeleteManyArgs>(args?: SelectSubset<T, FechamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fechamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fechamentos
     * const fechamento = await prisma.fechamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FechamentoUpdateManyArgs>(args: SelectSubset<T, FechamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fechamento.
     * @param {FechamentoUpsertArgs} args - Arguments to update or create a Fechamento.
     * @example
     * // Update or create a Fechamento
     * const fechamento = await prisma.fechamento.upsert({
     *   create: {
     *     // ... data to create a Fechamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fechamento we want to update
     *   }
     * })
     */
    upsert<T extends FechamentoUpsertArgs>(args: SelectSubset<T, FechamentoUpsertArgs<ExtArgs>>): Prisma__FechamentoClient<$Result.GetResult<Prisma.$FechamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fechamentos that matches the filter.
     * @param {FechamentoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const fechamento = await prisma.fechamento.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FechamentoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Fechamento.
     * @param {FechamentoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const fechamento = await prisma.fechamento.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FechamentoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Fechamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechamentoCountArgs} args - Arguments to filter Fechamentos to count.
     * @example
     * // Count the number of Fechamentos
     * const count = await prisma.fechamento.count({
     *   where: {
     *     // ... the filter for the Fechamentos we want to count
     *   }
     * })
    **/
    count<T extends FechamentoCountArgs>(
      args?: Subset<T, FechamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FechamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fechamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FechamentoAggregateArgs>(args: Subset<T, FechamentoAggregateArgs>): Prisma.PrismaPromise<GetFechamentoAggregateType<T>>

    /**
     * Group by Fechamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FechamentoGroupByArgs} args - Group by arguments.
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
      T extends FechamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FechamentoGroupByArgs['orderBy'] }
        : { orderBy?: FechamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FechamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFechamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fechamento model
   */
  readonly fields: FechamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fechamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FechamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Fechamento model
   */
  interface FechamentoFieldRefs {
    readonly id: FieldRef<"Fechamento", 'String'>
    readonly fechado: FieldRef<"Fechamento", 'Boolean'>
    readonly data: FieldRef<"Fechamento", 'DateTime'>
    readonly valor: FieldRef<"Fechamento", 'Int'>
    readonly observacao: FieldRef<"Fechamento", 'String'>
    readonly created_at: FieldRef<"Fechamento", 'DateTime'>
    readonly updated_at: FieldRef<"Fechamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fechamento findUnique
   */
  export type FechamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fechamento
     */
    select?: FechamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fechamento
     */
    omit?: FechamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechamentoInclude<ExtArgs> | null
    /**
     * Filter, which Fechamento to fetch.
     */
    where: FechamentoWhereUniqueInput
  }

  /**
   * Fechamento findUniqueOrThrow
   */
  export type FechamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fechamento
     */
    select?: FechamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fechamento
     */
    omit?: FechamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechamentoInclude<ExtArgs> | null
    /**
     * Filter, which Fechamento to fetch.
     */
    where: FechamentoWhereUniqueInput
  }

  /**
   * Fechamento findFirst
   */
  export type FechamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fechamento
     */
    select?: FechamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fechamento
     */
    omit?: FechamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechamentoInclude<ExtArgs> | null
    /**
     * Filter, which Fechamento to fetch.
     */
    where?: FechamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fechamentos to fetch.
     */
    orderBy?: FechamentoOrderByWithRelationInput | FechamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fechamentos.
     */
    cursor?: FechamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fechamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fechamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fechamentos.
     */
    distinct?: FechamentoScalarFieldEnum | FechamentoScalarFieldEnum[]
  }

  /**
   * Fechamento findFirstOrThrow
   */
  export type FechamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fechamento
     */
    select?: FechamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fechamento
     */
    omit?: FechamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechamentoInclude<ExtArgs> | null
    /**
     * Filter, which Fechamento to fetch.
     */
    where?: FechamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fechamentos to fetch.
     */
    orderBy?: FechamentoOrderByWithRelationInput | FechamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fechamentos.
     */
    cursor?: FechamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fechamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fechamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fechamentos.
     */
    distinct?: FechamentoScalarFieldEnum | FechamentoScalarFieldEnum[]
  }

  /**
   * Fechamento findMany
   */
  export type FechamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fechamento
     */
    select?: FechamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fechamento
     */
    omit?: FechamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechamentoInclude<ExtArgs> | null
    /**
     * Filter, which Fechamentos to fetch.
     */
    where?: FechamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fechamentos to fetch.
     */
    orderBy?: FechamentoOrderByWithRelationInput | FechamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fechamentos.
     */
    cursor?: FechamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fechamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fechamentos.
     */
    skip?: number
    distinct?: FechamentoScalarFieldEnum | FechamentoScalarFieldEnum[]
  }

  /**
   * Fechamento create
   */
  export type FechamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fechamento
     */
    select?: FechamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fechamento
     */
    omit?: FechamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Fechamento.
     */
    data: XOR<FechamentoCreateInput, FechamentoUncheckedCreateInput>
  }

  /**
   * Fechamento createMany
   */
  export type FechamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fechamentos.
     */
    data: FechamentoCreateManyInput | FechamentoCreateManyInput[]
  }

  /**
   * Fechamento update
   */
  export type FechamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fechamento
     */
    select?: FechamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fechamento
     */
    omit?: FechamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Fechamento.
     */
    data: XOR<FechamentoUpdateInput, FechamentoUncheckedUpdateInput>
    /**
     * Choose, which Fechamento to update.
     */
    where: FechamentoWhereUniqueInput
  }

  /**
   * Fechamento updateMany
   */
  export type FechamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fechamentos.
     */
    data: XOR<FechamentoUpdateManyMutationInput, FechamentoUncheckedUpdateManyInput>
    /**
     * Filter which Fechamentos to update
     */
    where?: FechamentoWhereInput
    /**
     * Limit how many Fechamentos to update.
     */
    limit?: number
  }

  /**
   * Fechamento upsert
   */
  export type FechamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fechamento
     */
    select?: FechamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fechamento
     */
    omit?: FechamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Fechamento to update in case it exists.
     */
    where: FechamentoWhereUniqueInput
    /**
     * In case the Fechamento found by the `where` argument doesn't exist, create a new Fechamento with this data.
     */
    create: XOR<FechamentoCreateInput, FechamentoUncheckedCreateInput>
    /**
     * In case the Fechamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FechamentoUpdateInput, FechamentoUncheckedUpdateInput>
  }

  /**
   * Fechamento delete
   */
  export type FechamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fechamento
     */
    select?: FechamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fechamento
     */
    omit?: FechamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechamentoInclude<ExtArgs> | null
    /**
     * Filter which Fechamento to delete.
     */
    where: FechamentoWhereUniqueInput
  }

  /**
   * Fechamento deleteMany
   */
  export type FechamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fechamentos to delete
     */
    where?: FechamentoWhereInput
    /**
     * Limit how many Fechamentos to delete.
     */
    limit?: number
  }

  /**
   * Fechamento findRaw
   */
  export type FechamentoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Fechamento aggregateRaw
   */
  export type FechamentoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Fechamento without action
   */
  export type FechamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fechamento
     */
    select?: FechamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fechamento
     */
    omit?: FechamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FechamentoInclude<ExtArgs> | null
  }


  /**
   * Model Valores
   */

  export type AggregateValores = {
    _count: ValoresCountAggregateOutputType | null
    _min: ValoresMinAggregateOutputType | null
    _max: ValoresMaxAggregateOutputType | null
  }

  export type ValoresMinAggregateOutputType = {
    id: string | null
    consultorio: string | null
    dentista: string | null
    tipo: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ValoresMaxAggregateOutputType = {
    id: string | null
    consultorio: string | null
    dentista: string | null
    tipo: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ValoresCountAggregateOutputType = {
    id: number
    consultorio: number
    dentista: number
    tipo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ValoresMinAggregateInputType = {
    id?: true
    consultorio?: true
    dentista?: true
    tipo?: true
    created_at?: true
    updated_at?: true
  }

  export type ValoresMaxAggregateInputType = {
    id?: true
    consultorio?: true
    dentista?: true
    tipo?: true
    created_at?: true
    updated_at?: true
  }

  export type ValoresCountAggregateInputType = {
    id?: true
    consultorio?: true
    dentista?: true
    tipo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ValoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Valores to aggregate.
     */
    where?: ValoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Valores to fetch.
     */
    orderBy?: ValoresOrderByWithRelationInput | ValoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Valores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Valores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Valores
    **/
    _count?: true | ValoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValoresMaxAggregateInputType
  }

  export type GetValoresAggregateType<T extends ValoresAggregateArgs> = {
        [P in keyof T & keyof AggregateValores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValores[P]>
      : GetScalarType<T[P], AggregateValores[P]>
  }




  export type ValoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValoresWhereInput
    orderBy?: ValoresOrderByWithAggregationInput | ValoresOrderByWithAggregationInput[]
    by: ValoresScalarFieldEnum[] | ValoresScalarFieldEnum
    having?: ValoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValoresCountAggregateInputType | true
    _min?: ValoresMinAggregateInputType
    _max?: ValoresMaxAggregateInputType
  }

  export type ValoresGroupByOutputType = {
    id: string
    consultorio: string
    dentista: string
    tipo: string
    created_at: Date
    updated_at: Date
    _count: ValoresCountAggregateOutputType | null
    _min: ValoresMinAggregateOutputType | null
    _max: ValoresMaxAggregateOutputType | null
  }

  type GetValoresGroupByPayload<T extends ValoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValoresGroupByOutputType[P]>
            : GetScalarType<T[P], ValoresGroupByOutputType[P]>
        }
      >
    >


  export type ValoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consultorio?: boolean
    dentista?: boolean
    tipo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["valores"]>



  export type ValoresSelectScalar = {
    id?: boolean
    consultorio?: boolean
    dentista?: boolean
    tipo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ValoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "consultorio" | "dentista" | "tipo" | "created_at" | "updated_at", ExtArgs["result"]["valores"]>

  export type $ValoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Valores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Campo gerado automaticamente pelo MongoDB
       */
      id: string
      consultorio: string
      dentista: string
      tipo: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["valores"]>
    composites: {}
  }

  type ValoresGetPayload<S extends boolean | null | undefined | ValoresDefaultArgs> = $Result.GetResult<Prisma.$ValoresPayload, S>

  type ValoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValoresCountAggregateInputType | true
    }

  export interface ValoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Valores'], meta: { name: 'Valores' } }
    /**
     * Find zero or one Valores that matches the filter.
     * @param {ValoresFindUniqueArgs} args - Arguments to find a Valores
     * @example
     * // Get one Valores
     * const valores = await prisma.valores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValoresFindUniqueArgs>(args: SelectSubset<T, ValoresFindUniqueArgs<ExtArgs>>): Prisma__ValoresClient<$Result.GetResult<Prisma.$ValoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Valores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValoresFindUniqueOrThrowArgs} args - Arguments to find a Valores
     * @example
     * // Get one Valores
     * const valores = await prisma.valores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValoresFindUniqueOrThrowArgs>(args: SelectSubset<T, ValoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValoresClient<$Result.GetResult<Prisma.$ValoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Valores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValoresFindFirstArgs} args - Arguments to find a Valores
     * @example
     * // Get one Valores
     * const valores = await prisma.valores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValoresFindFirstArgs>(args?: SelectSubset<T, ValoresFindFirstArgs<ExtArgs>>): Prisma__ValoresClient<$Result.GetResult<Prisma.$ValoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Valores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValoresFindFirstOrThrowArgs} args - Arguments to find a Valores
     * @example
     * // Get one Valores
     * const valores = await prisma.valores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValoresFindFirstOrThrowArgs>(args?: SelectSubset<T, ValoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValoresClient<$Result.GetResult<Prisma.$ValoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Valores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Valores
     * const valores = await prisma.valores.findMany()
     * 
     * // Get first 10 Valores
     * const valores = await prisma.valores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const valoresWithIdOnly = await prisma.valores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ValoresFindManyArgs>(args?: SelectSubset<T, ValoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Valores.
     * @param {ValoresCreateArgs} args - Arguments to create a Valores.
     * @example
     * // Create one Valores
     * const Valores = await prisma.valores.create({
     *   data: {
     *     // ... data to create a Valores
     *   }
     * })
     * 
     */
    create<T extends ValoresCreateArgs>(args: SelectSubset<T, ValoresCreateArgs<ExtArgs>>): Prisma__ValoresClient<$Result.GetResult<Prisma.$ValoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Valores.
     * @param {ValoresCreateManyArgs} args - Arguments to create many Valores.
     * @example
     * // Create many Valores
     * const valores = await prisma.valores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValoresCreateManyArgs>(args?: SelectSubset<T, ValoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Valores.
     * @param {ValoresDeleteArgs} args - Arguments to delete one Valores.
     * @example
     * // Delete one Valores
     * const Valores = await prisma.valores.delete({
     *   where: {
     *     // ... filter to delete one Valores
     *   }
     * })
     * 
     */
    delete<T extends ValoresDeleteArgs>(args: SelectSubset<T, ValoresDeleteArgs<ExtArgs>>): Prisma__ValoresClient<$Result.GetResult<Prisma.$ValoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Valores.
     * @param {ValoresUpdateArgs} args - Arguments to update one Valores.
     * @example
     * // Update one Valores
     * const valores = await prisma.valores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValoresUpdateArgs>(args: SelectSubset<T, ValoresUpdateArgs<ExtArgs>>): Prisma__ValoresClient<$Result.GetResult<Prisma.$ValoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Valores.
     * @param {ValoresDeleteManyArgs} args - Arguments to filter Valores to delete.
     * @example
     * // Delete a few Valores
     * const { count } = await prisma.valores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValoresDeleteManyArgs>(args?: SelectSubset<T, ValoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Valores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Valores
     * const valores = await prisma.valores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValoresUpdateManyArgs>(args: SelectSubset<T, ValoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Valores.
     * @param {ValoresUpsertArgs} args - Arguments to update or create a Valores.
     * @example
     * // Update or create a Valores
     * const valores = await prisma.valores.upsert({
     *   create: {
     *     // ... data to create a Valores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Valores we want to update
     *   }
     * })
     */
    upsert<T extends ValoresUpsertArgs>(args: SelectSubset<T, ValoresUpsertArgs<ExtArgs>>): Prisma__ValoresClient<$Result.GetResult<Prisma.$ValoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Valores that matches the filter.
     * @param {ValoresFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const valores = await prisma.valores.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ValoresFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Valores.
     * @param {ValoresAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const valores = await prisma.valores.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ValoresAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Valores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValoresCountArgs} args - Arguments to filter Valores to count.
     * @example
     * // Count the number of Valores
     * const count = await prisma.valores.count({
     *   where: {
     *     // ... the filter for the Valores we want to count
     *   }
     * })
    **/
    count<T extends ValoresCountArgs>(
      args?: Subset<T, ValoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Valores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ValoresAggregateArgs>(args: Subset<T, ValoresAggregateArgs>): Prisma.PrismaPromise<GetValoresAggregateType<T>>

    /**
     * Group by Valores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValoresGroupByArgs} args - Group by arguments.
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
      T extends ValoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValoresGroupByArgs['orderBy'] }
        : { orderBy?: ValoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ValoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Valores model
   */
  readonly fields: ValoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Valores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Valores model
   */
  interface ValoresFieldRefs {
    readonly id: FieldRef<"Valores", 'String'>
    readonly consultorio: FieldRef<"Valores", 'String'>
    readonly dentista: FieldRef<"Valores", 'String'>
    readonly tipo: FieldRef<"Valores", 'String'>
    readonly created_at: FieldRef<"Valores", 'DateTime'>
    readonly updated_at: FieldRef<"Valores", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Valores findUnique
   */
  export type ValoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valores
     */
    select?: ValoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valores
     */
    omit?: ValoresOmit<ExtArgs> | null
    /**
     * Filter, which Valores to fetch.
     */
    where: ValoresWhereUniqueInput
  }

  /**
   * Valores findUniqueOrThrow
   */
  export type ValoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valores
     */
    select?: ValoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valores
     */
    omit?: ValoresOmit<ExtArgs> | null
    /**
     * Filter, which Valores to fetch.
     */
    where: ValoresWhereUniqueInput
  }

  /**
   * Valores findFirst
   */
  export type ValoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valores
     */
    select?: ValoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valores
     */
    omit?: ValoresOmit<ExtArgs> | null
    /**
     * Filter, which Valores to fetch.
     */
    where?: ValoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Valores to fetch.
     */
    orderBy?: ValoresOrderByWithRelationInput | ValoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Valores.
     */
    cursor?: ValoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Valores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Valores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Valores.
     */
    distinct?: ValoresScalarFieldEnum | ValoresScalarFieldEnum[]
  }

  /**
   * Valores findFirstOrThrow
   */
  export type ValoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valores
     */
    select?: ValoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valores
     */
    omit?: ValoresOmit<ExtArgs> | null
    /**
     * Filter, which Valores to fetch.
     */
    where?: ValoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Valores to fetch.
     */
    orderBy?: ValoresOrderByWithRelationInput | ValoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Valores.
     */
    cursor?: ValoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Valores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Valores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Valores.
     */
    distinct?: ValoresScalarFieldEnum | ValoresScalarFieldEnum[]
  }

  /**
   * Valores findMany
   */
  export type ValoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valores
     */
    select?: ValoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valores
     */
    omit?: ValoresOmit<ExtArgs> | null
    /**
     * Filter, which Valores to fetch.
     */
    where?: ValoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Valores to fetch.
     */
    orderBy?: ValoresOrderByWithRelationInput | ValoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Valores.
     */
    cursor?: ValoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Valores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Valores.
     */
    skip?: number
    distinct?: ValoresScalarFieldEnum | ValoresScalarFieldEnum[]
  }

  /**
   * Valores create
   */
  export type ValoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valores
     */
    select?: ValoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valores
     */
    omit?: ValoresOmit<ExtArgs> | null
    /**
     * The data needed to create a Valores.
     */
    data: XOR<ValoresCreateInput, ValoresUncheckedCreateInput>
  }

  /**
   * Valores createMany
   */
  export type ValoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Valores.
     */
    data: ValoresCreateManyInput | ValoresCreateManyInput[]
  }

  /**
   * Valores update
   */
  export type ValoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valores
     */
    select?: ValoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valores
     */
    omit?: ValoresOmit<ExtArgs> | null
    /**
     * The data needed to update a Valores.
     */
    data: XOR<ValoresUpdateInput, ValoresUncheckedUpdateInput>
    /**
     * Choose, which Valores to update.
     */
    where: ValoresWhereUniqueInput
  }

  /**
   * Valores updateMany
   */
  export type ValoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Valores.
     */
    data: XOR<ValoresUpdateManyMutationInput, ValoresUncheckedUpdateManyInput>
    /**
     * Filter which Valores to update
     */
    where?: ValoresWhereInput
    /**
     * Limit how many Valores to update.
     */
    limit?: number
  }

  /**
   * Valores upsert
   */
  export type ValoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valores
     */
    select?: ValoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valores
     */
    omit?: ValoresOmit<ExtArgs> | null
    /**
     * The filter to search for the Valores to update in case it exists.
     */
    where: ValoresWhereUniqueInput
    /**
     * In case the Valores found by the `where` argument doesn't exist, create a new Valores with this data.
     */
    create: XOR<ValoresCreateInput, ValoresUncheckedCreateInput>
    /**
     * In case the Valores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValoresUpdateInput, ValoresUncheckedUpdateInput>
  }

  /**
   * Valores delete
   */
  export type ValoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valores
     */
    select?: ValoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valores
     */
    omit?: ValoresOmit<ExtArgs> | null
    /**
     * Filter which Valores to delete.
     */
    where: ValoresWhereUniqueInput
  }

  /**
   * Valores deleteMany
   */
  export type ValoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Valores to delete
     */
    where?: ValoresWhereInput
    /**
     * Limit how many Valores to delete.
     */
    limit?: number
  }

  /**
   * Valores findRaw
   */
  export type ValoresFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Valores aggregateRaw
   */
  export type ValoresAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Valores without action
   */
  export type ValoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Valores
     */
    select?: ValoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Valores
     */
    omit?: ValoresOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    role: number
    banned: number
    banReason: number
    banExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    role: string
    banned: boolean
    banReason: string | null
    banExpires: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "role" | "banned" | "banReason" | "banExpires" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      role: string
      banned: boolean
      banReason: string | null
      banExpires: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'String'>
    readonly banned: FieldRef<"User", 'Boolean'>
    readonly banReason: FieldRef<"User", 'String'>
    readonly banExpires: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * @param {SessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const session = await prisma.session.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SessionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Session.
     * @param {SessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const session = await prisma.session.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SessionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session findRaw
   */
  export type SessionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session aggregateRaw
   */
  export type SessionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * @param {AccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const account = await prisma.account.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AccountFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Account.
     * @param {AccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const account = await prisma.account.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AccountAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account findRaw
   */
  export type AccountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account aggregateRaw
   */
  export type AccountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>



  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * @param {VerificationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const verification = await prisma.verification.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VerificationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Verification.
     * @param {VerificationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const verification = await prisma.verification.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VerificationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification findRaw
   */
  export type VerificationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Verification aggregateRaw
   */
  export type VerificationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ConsultorioScalarFieldEnum: {
    id: 'id',
    cobranca: 'cobranca',
    nome: 'nome',
    cep: 'cep',
    numero: 'numero',
    email: 'email',
    complemento: 'complemento',
    cep_entrega: 'cep_entrega',
    numero_entrega: 'numero_entrega',
    complemento_entrega: 'complemento_entrega',
    observacao: 'observacao',
    telefones: 'telefones',
    dentistas: 'dentistas',
    secretarias: 'secretarias',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ConsultorioScalarFieldEnum = (typeof ConsultorioScalarFieldEnum)[keyof typeof ConsultorioScalarFieldEnum]


  export const DentistaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cro: 'cro',
    email: 'email',
    telefones: 'telefones',
    especialidades: 'especialidades',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DentistaScalarFieldEnum = (typeof DentistaScalarFieldEnum)[keyof typeof DentistaScalarFieldEnum]


  export const EspecialidadeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EspecialidadeScalarFieldEnum = (typeof EspecialidadeScalarFieldEnum)[keyof typeof EspecialidadeScalarFieldEnum]


  export const SecretariaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefones: 'telefones',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SecretariaScalarFieldEnum = (typeof SecretariaScalarFieldEnum)[keyof typeof SecretariaScalarFieldEnum]


  export const FuncionarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cep: 'cep',
    numero: 'numero',
    complemento: 'complemento',
    email: 'email',
    rg: 'rg',
    cpf: 'cpf',
    data_nascimento: 'data_nascimento',
    data_admissao: 'data_admissao',
    data_recisao: 'data_recisao',
    observacao: 'observacao',
    telefones: 'telefones',
    funcoes: 'funcoes',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const FuncaoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FuncaoScalarFieldEnum = (typeof FuncaoScalarFieldEnum)[keyof typeof FuncaoScalarFieldEnum]


  export const ServicoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    valor_sem_nota: 'valor_sem_nota',
    valor_com_nota: 'valor_com_nota',
    valor_unicid: 'valor_unicid',
    valor_pinheros: 'valor_pinheros',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ServicoScalarFieldEnum = (typeof ServicoScalarFieldEnum)[keyof typeof ServicoScalarFieldEnum]


  export const EntradaScalarFieldEnum: {
    id: 'id',
    consultorio: 'consultorio',
    dentista: 'dentista',
    paciente: 'paciente',
    observacao: 'observacao',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EntradaScalarFieldEnum = (typeof EntradaScalarFieldEnum)[keyof typeof EntradaScalarFieldEnum]


  export const RoteiroScalarFieldEnum: {
    id: 'id',
    data: 'data',
    entregue: 'entregue',
    observacao: 'observacao',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RoteiroScalarFieldEnum = (typeof RoteiroScalarFieldEnum)[keyof typeof RoteiroScalarFieldEnum]


  export const FechamentoScalarFieldEnum: {
    id: 'id',
    fechado: 'fechado',
    data: 'data',
    valor: 'valor',
    observacao: 'observacao',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FechamentoScalarFieldEnum = (typeof FechamentoScalarFieldEnum)[keyof typeof FechamentoScalarFieldEnum]


  export const ValoresScalarFieldEnum: {
    id: 'id',
    consultorio: 'consultorio',
    dentista: 'dentista',
    tipo: 'tipo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ValoresScalarFieldEnum = (typeof ValoresScalarFieldEnum)[keyof typeof ValoresScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    role: 'role',
    banned: 'banned',
    banReason: 'banReason',
    banExpires: 'banExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ConsultorioWhereInput = {
    AND?: ConsultorioWhereInput | ConsultorioWhereInput[]
    OR?: ConsultorioWhereInput[]
    NOT?: ConsultorioWhereInput | ConsultorioWhereInput[]
    id?: StringFilter<"Consultorio"> | string
    cobranca?: StringFilter<"Consultorio"> | string
    nome?: StringFilter<"Consultorio"> | string
    cep?: StringFilter<"Consultorio"> | string
    numero?: StringFilter<"Consultorio"> | string
    email?: StringFilter<"Consultorio"> | string
    complemento?: StringNullableFilter<"Consultorio"> | string | null
    cep_entrega?: StringNullableFilter<"Consultorio"> | string | null
    numero_entrega?: StringNullableFilter<"Consultorio"> | string | null
    complemento_entrega?: StringNullableFilter<"Consultorio"> | string | null
    observacao?: StringNullableFilter<"Consultorio"> | string | null
    telefones?: StringNullableListFilter<"Consultorio">
    dentistas?: StringNullableListFilter<"Consultorio">
    secretarias?: StringNullableListFilter<"Consultorio">
    created_at?: DateTimeFilter<"Consultorio"> | Date | string
    updated_at?: DateTimeFilter<"Consultorio"> | Date | string
  }

  export type ConsultorioOrderByWithRelationInput = {
    id?: SortOrder
    cobranca?: SortOrder
    nome?: SortOrder
    cep?: SortOrder
    numero?: SortOrder
    email?: SortOrder
    complemento?: SortOrder
    cep_entrega?: SortOrder
    numero_entrega?: SortOrder
    complemento_entrega?: SortOrder
    observacao?: SortOrder
    telefones?: SortOrder
    dentistas?: SortOrder
    secretarias?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConsultorioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultorioWhereInput | ConsultorioWhereInput[]
    OR?: ConsultorioWhereInput[]
    NOT?: ConsultorioWhereInput | ConsultorioWhereInput[]
    cobranca?: StringFilter<"Consultorio"> | string
    nome?: StringFilter<"Consultorio"> | string
    cep?: StringFilter<"Consultorio"> | string
    numero?: StringFilter<"Consultorio"> | string
    email?: StringFilter<"Consultorio"> | string
    complemento?: StringNullableFilter<"Consultorio"> | string | null
    cep_entrega?: StringNullableFilter<"Consultorio"> | string | null
    numero_entrega?: StringNullableFilter<"Consultorio"> | string | null
    complemento_entrega?: StringNullableFilter<"Consultorio"> | string | null
    observacao?: StringNullableFilter<"Consultorio"> | string | null
    telefones?: StringNullableListFilter<"Consultorio">
    dentistas?: StringNullableListFilter<"Consultorio">
    secretarias?: StringNullableListFilter<"Consultorio">
    created_at?: DateTimeFilter<"Consultorio"> | Date | string
    updated_at?: DateTimeFilter<"Consultorio"> | Date | string
  }, "id">

  export type ConsultorioOrderByWithAggregationInput = {
    id?: SortOrder
    cobranca?: SortOrder
    nome?: SortOrder
    cep?: SortOrder
    numero?: SortOrder
    email?: SortOrder
    complemento?: SortOrder
    cep_entrega?: SortOrder
    numero_entrega?: SortOrder
    complemento_entrega?: SortOrder
    observacao?: SortOrder
    telefones?: SortOrder
    dentistas?: SortOrder
    secretarias?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ConsultorioCountOrderByAggregateInput
    _max?: ConsultorioMaxOrderByAggregateInput
    _min?: ConsultorioMinOrderByAggregateInput
  }

  export type ConsultorioScalarWhereWithAggregatesInput = {
    AND?: ConsultorioScalarWhereWithAggregatesInput | ConsultorioScalarWhereWithAggregatesInput[]
    OR?: ConsultorioScalarWhereWithAggregatesInput[]
    NOT?: ConsultorioScalarWhereWithAggregatesInput | ConsultorioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Consultorio"> | string
    cobranca?: StringWithAggregatesFilter<"Consultorio"> | string
    nome?: StringWithAggregatesFilter<"Consultorio"> | string
    cep?: StringWithAggregatesFilter<"Consultorio"> | string
    numero?: StringWithAggregatesFilter<"Consultorio"> | string
    email?: StringWithAggregatesFilter<"Consultorio"> | string
    complemento?: StringNullableWithAggregatesFilter<"Consultorio"> | string | null
    cep_entrega?: StringNullableWithAggregatesFilter<"Consultorio"> | string | null
    numero_entrega?: StringNullableWithAggregatesFilter<"Consultorio"> | string | null
    complemento_entrega?: StringNullableWithAggregatesFilter<"Consultorio"> | string | null
    observacao?: StringNullableWithAggregatesFilter<"Consultorio"> | string | null
    telefones?: StringNullableListFilter<"Consultorio">
    dentistas?: StringNullableListFilter<"Consultorio">
    secretarias?: StringNullableListFilter<"Consultorio">
    created_at?: DateTimeWithAggregatesFilter<"Consultorio"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Consultorio"> | Date | string
  }

  export type DentistaWhereInput = {
    AND?: DentistaWhereInput | DentistaWhereInput[]
    OR?: DentistaWhereInput[]
    NOT?: DentistaWhereInput | DentistaWhereInput[]
    id?: StringFilter<"Dentista"> | string
    nome?: StringFilter<"Dentista"> | string
    cro?: StringFilter<"Dentista"> | string
    email?: StringFilter<"Dentista"> | string
    telefones?: StringNullableListFilter<"Dentista">
    especialidades?: StringNullableListFilter<"Dentista">
    created_at?: DateTimeFilter<"Dentista"> | Date | string
    updated_at?: DateTimeFilter<"Dentista"> | Date | string
  }

  export type DentistaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cro?: SortOrder
    email?: SortOrder
    telefones?: SortOrder
    especialidades?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DentistaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DentistaWhereInput | DentistaWhereInput[]
    OR?: DentistaWhereInput[]
    NOT?: DentistaWhereInput | DentistaWhereInput[]
    nome?: StringFilter<"Dentista"> | string
    cro?: StringFilter<"Dentista"> | string
    email?: StringFilter<"Dentista"> | string
    telefones?: StringNullableListFilter<"Dentista">
    especialidades?: StringNullableListFilter<"Dentista">
    created_at?: DateTimeFilter<"Dentista"> | Date | string
    updated_at?: DateTimeFilter<"Dentista"> | Date | string
  }, "id">

  export type DentistaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cro?: SortOrder
    email?: SortOrder
    telefones?: SortOrder
    especialidades?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DentistaCountOrderByAggregateInput
    _max?: DentistaMaxOrderByAggregateInput
    _min?: DentistaMinOrderByAggregateInput
  }

  export type DentistaScalarWhereWithAggregatesInput = {
    AND?: DentistaScalarWhereWithAggregatesInput | DentistaScalarWhereWithAggregatesInput[]
    OR?: DentistaScalarWhereWithAggregatesInput[]
    NOT?: DentistaScalarWhereWithAggregatesInput | DentistaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dentista"> | string
    nome?: StringWithAggregatesFilter<"Dentista"> | string
    cro?: StringWithAggregatesFilter<"Dentista"> | string
    email?: StringWithAggregatesFilter<"Dentista"> | string
    telefones?: StringNullableListFilter<"Dentista">
    especialidades?: StringNullableListFilter<"Dentista">
    created_at?: DateTimeWithAggregatesFilter<"Dentista"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Dentista"> | Date | string
  }

  export type EspecialidadeWhereInput = {
    AND?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    OR?: EspecialidadeWhereInput[]
    NOT?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    id?: StringFilter<"Especialidade"> | string
    nome?: StringFilter<"Especialidade"> | string
    created_at?: DateTimeFilter<"Especialidade"> | Date | string
    updated_at?: DateTimeFilter<"Especialidade"> | Date | string
  }

  export type EspecialidadeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EspecialidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    OR?: EspecialidadeWhereInput[]
    NOT?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    nome?: StringFilter<"Especialidade"> | string
    created_at?: DateTimeFilter<"Especialidade"> | Date | string
    updated_at?: DateTimeFilter<"Especialidade"> | Date | string
  }, "id">

  export type EspecialidadeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: EspecialidadeCountOrderByAggregateInput
    _max?: EspecialidadeMaxOrderByAggregateInput
    _min?: EspecialidadeMinOrderByAggregateInput
  }

  export type EspecialidadeScalarWhereWithAggregatesInput = {
    AND?: EspecialidadeScalarWhereWithAggregatesInput | EspecialidadeScalarWhereWithAggregatesInput[]
    OR?: EspecialidadeScalarWhereWithAggregatesInput[]
    NOT?: EspecialidadeScalarWhereWithAggregatesInput | EspecialidadeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Especialidade"> | string
    nome?: StringWithAggregatesFilter<"Especialidade"> | string
    created_at?: DateTimeWithAggregatesFilter<"Especialidade"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Especialidade"> | Date | string
  }

  export type SecretariaWhereInput = {
    AND?: SecretariaWhereInput | SecretariaWhereInput[]
    OR?: SecretariaWhereInput[]
    NOT?: SecretariaWhereInput | SecretariaWhereInput[]
    id?: StringFilter<"Secretaria"> | string
    nome?: StringFilter<"Secretaria"> | string
    email?: StringFilter<"Secretaria"> | string
    telefones?: StringNullableListFilter<"Secretaria">
    created_at?: DateTimeFilter<"Secretaria"> | Date | string
    updated_at?: DateTimeFilter<"Secretaria"> | Date | string
  }

  export type SecretariaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefones?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SecretariaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SecretariaWhereInput | SecretariaWhereInput[]
    OR?: SecretariaWhereInput[]
    NOT?: SecretariaWhereInput | SecretariaWhereInput[]
    nome?: StringFilter<"Secretaria"> | string
    email?: StringFilter<"Secretaria"> | string
    telefones?: StringNullableListFilter<"Secretaria">
    created_at?: DateTimeFilter<"Secretaria"> | Date | string
    updated_at?: DateTimeFilter<"Secretaria"> | Date | string
  }, "id">

  export type SecretariaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefones?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SecretariaCountOrderByAggregateInput
    _max?: SecretariaMaxOrderByAggregateInput
    _min?: SecretariaMinOrderByAggregateInput
  }

  export type SecretariaScalarWhereWithAggregatesInput = {
    AND?: SecretariaScalarWhereWithAggregatesInput | SecretariaScalarWhereWithAggregatesInput[]
    OR?: SecretariaScalarWhereWithAggregatesInput[]
    NOT?: SecretariaScalarWhereWithAggregatesInput | SecretariaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Secretaria"> | string
    nome?: StringWithAggregatesFilter<"Secretaria"> | string
    email?: StringWithAggregatesFilter<"Secretaria"> | string
    telefones?: StringNullableListFilter<"Secretaria">
    created_at?: DateTimeWithAggregatesFilter<"Secretaria"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Secretaria"> | Date | string
  }

  export type FuncionarioWhereInput = {
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    id?: StringFilter<"Funcionario"> | string
    nome?: StringFilter<"Funcionario"> | string
    cep?: StringFilter<"Funcionario"> | string
    numero?: StringFilter<"Funcionario"> | string
    complemento?: StringNullableFilter<"Funcionario"> | string | null
    email?: StringFilter<"Funcionario"> | string
    rg?: StringFilter<"Funcionario"> | string
    cpf?: StringFilter<"Funcionario"> | string
    data_nascimento?: StringFilter<"Funcionario"> | string
    data_admissao?: StringFilter<"Funcionario"> | string
    data_recisao?: StringNullableFilter<"Funcionario"> | string | null
    observacao?: StringNullableFilter<"Funcionario"> | string | null
    telefones?: StringNullableListFilter<"Funcionario">
    funcoes?: StringNullableListFilter<"Funcionario">
    created_at?: DateTimeFilter<"Funcionario"> | Date | string
    updated_at?: DateTimeFilter<"Funcionario"> | Date | string
  }

  export type FuncionarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cep?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    email?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    data_admissao?: SortOrder
    data_recisao?: SortOrder
    observacao?: SortOrder
    telefones?: SortOrder
    funcoes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FuncionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    nome?: StringFilter<"Funcionario"> | string
    cep?: StringFilter<"Funcionario"> | string
    numero?: StringFilter<"Funcionario"> | string
    complemento?: StringNullableFilter<"Funcionario"> | string | null
    email?: StringFilter<"Funcionario"> | string
    rg?: StringFilter<"Funcionario"> | string
    cpf?: StringFilter<"Funcionario"> | string
    data_nascimento?: StringFilter<"Funcionario"> | string
    data_admissao?: StringFilter<"Funcionario"> | string
    data_recisao?: StringNullableFilter<"Funcionario"> | string | null
    observacao?: StringNullableFilter<"Funcionario"> | string | null
    telefones?: StringNullableListFilter<"Funcionario">
    funcoes?: StringNullableListFilter<"Funcionario">
    created_at?: DateTimeFilter<"Funcionario"> | Date | string
    updated_at?: DateTimeFilter<"Funcionario"> | Date | string
  }, "id">

  export type FuncionarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cep?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    email?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    data_admissao?: SortOrder
    data_recisao?: SortOrder
    observacao?: SortOrder
    telefones?: SortOrder
    funcoes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FuncionarioCountOrderByAggregateInput
    _max?: FuncionarioMaxOrderByAggregateInput
    _min?: FuncionarioMinOrderByAggregateInput
  }

  export type FuncionarioScalarWhereWithAggregatesInput = {
    AND?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    OR?: FuncionarioScalarWhereWithAggregatesInput[]
    NOT?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Funcionario"> | string
    nome?: StringWithAggregatesFilter<"Funcionario"> | string
    cep?: StringWithAggregatesFilter<"Funcionario"> | string
    numero?: StringWithAggregatesFilter<"Funcionario"> | string
    complemento?: StringNullableWithAggregatesFilter<"Funcionario"> | string | null
    email?: StringWithAggregatesFilter<"Funcionario"> | string
    rg?: StringWithAggregatesFilter<"Funcionario"> | string
    cpf?: StringWithAggregatesFilter<"Funcionario"> | string
    data_nascimento?: StringWithAggregatesFilter<"Funcionario"> | string
    data_admissao?: StringWithAggregatesFilter<"Funcionario"> | string
    data_recisao?: StringNullableWithAggregatesFilter<"Funcionario"> | string | null
    observacao?: StringNullableWithAggregatesFilter<"Funcionario"> | string | null
    telefones?: StringNullableListFilter<"Funcionario">
    funcoes?: StringNullableListFilter<"Funcionario">
    created_at?: DateTimeWithAggregatesFilter<"Funcionario"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Funcionario"> | Date | string
  }

  export type FuncaoWhereInput = {
    AND?: FuncaoWhereInput | FuncaoWhereInput[]
    OR?: FuncaoWhereInput[]
    NOT?: FuncaoWhereInput | FuncaoWhereInput[]
    id?: StringFilter<"Funcao"> | string
    nome?: StringFilter<"Funcao"> | string
    created_at?: DateTimeFilter<"Funcao"> | Date | string
    updated_at?: DateTimeFilter<"Funcao"> | Date | string
  }

  export type FuncaoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FuncaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FuncaoWhereInput | FuncaoWhereInput[]
    OR?: FuncaoWhereInput[]
    NOT?: FuncaoWhereInput | FuncaoWhereInput[]
    nome?: StringFilter<"Funcao"> | string
    created_at?: DateTimeFilter<"Funcao"> | Date | string
    updated_at?: DateTimeFilter<"Funcao"> | Date | string
  }, "id">

  export type FuncaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FuncaoCountOrderByAggregateInput
    _max?: FuncaoMaxOrderByAggregateInput
    _min?: FuncaoMinOrderByAggregateInput
  }

  export type FuncaoScalarWhereWithAggregatesInput = {
    AND?: FuncaoScalarWhereWithAggregatesInput | FuncaoScalarWhereWithAggregatesInput[]
    OR?: FuncaoScalarWhereWithAggregatesInput[]
    NOT?: FuncaoScalarWhereWithAggregatesInput | FuncaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Funcao"> | string
    nome?: StringWithAggregatesFilter<"Funcao"> | string
    created_at?: DateTimeWithAggregatesFilter<"Funcao"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Funcao"> | Date | string
  }

  export type ServicoWhereInput = {
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    id?: StringFilter<"Servico"> | string
    nome?: StringFilter<"Servico"> | string
    valor_sem_nota?: IntNullableListFilter<"Servico">
    valor_com_nota?: IntNullableListFilter<"Servico">
    valor_unicid?: IntNullableListFilter<"Servico">
    valor_pinheros?: IntNullableListFilter<"Servico">
    created_at?: DateTimeFilter<"Servico"> | Date | string
    updated_at?: DateTimeFilter<"Servico"> | Date | string
  }

  export type ServicoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    valor_sem_nota?: SortOrder
    valor_com_nota?: SortOrder
    valor_unicid?: SortOrder
    valor_pinheros?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServicoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    nome?: StringFilter<"Servico"> | string
    valor_sem_nota?: IntNullableListFilter<"Servico">
    valor_com_nota?: IntNullableListFilter<"Servico">
    valor_unicid?: IntNullableListFilter<"Servico">
    valor_pinheros?: IntNullableListFilter<"Servico">
    created_at?: DateTimeFilter<"Servico"> | Date | string
    updated_at?: DateTimeFilter<"Servico"> | Date | string
  }, "id">

  export type ServicoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    valor_sem_nota?: SortOrder
    valor_com_nota?: SortOrder
    valor_unicid?: SortOrder
    valor_pinheros?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ServicoCountOrderByAggregateInput
    _avg?: ServicoAvgOrderByAggregateInput
    _max?: ServicoMaxOrderByAggregateInput
    _min?: ServicoMinOrderByAggregateInput
    _sum?: ServicoSumOrderByAggregateInput
  }

  export type ServicoScalarWhereWithAggregatesInput = {
    AND?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    OR?: ServicoScalarWhereWithAggregatesInput[]
    NOT?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Servico"> | string
    nome?: StringWithAggregatesFilter<"Servico"> | string
    valor_sem_nota?: IntNullableListFilter<"Servico">
    valor_com_nota?: IntNullableListFilter<"Servico">
    valor_unicid?: IntNullableListFilter<"Servico">
    valor_pinheros?: IntNullableListFilter<"Servico">
    created_at?: DateTimeWithAggregatesFilter<"Servico"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Servico"> | Date | string
  }

  export type EntradaWhereInput = {
    AND?: EntradaWhereInput | EntradaWhereInput[]
    OR?: EntradaWhereInput[]
    NOT?: EntradaWhereInput | EntradaWhereInput[]
    id?: StringFilter<"Entrada"> | string
    consultorio?: StringFilter<"Entrada"> | string
    dentista?: StringFilter<"Entrada"> | string
    paciente?: StringFilter<"Entrada"> | string
    observacao?: StringNullableFilter<"Entrada"> | string | null
    servicos?: ServicoEntradaCompositeListFilter | ServicoEntradaObjectEqualityInput[]
    created_at?: DateTimeFilter<"Entrada"> | Date | string
    updated_at?: DateTimeFilter<"Entrada"> | Date | string
  }

  export type EntradaOrderByWithRelationInput = {
    id?: SortOrder
    consultorio?: SortOrder
    dentista?: SortOrder
    paciente?: SortOrder
    observacao?: SortOrder
    servicos?: ServicoEntradaOrderByCompositeAggregateInput
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EntradaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EntradaWhereInput | EntradaWhereInput[]
    OR?: EntradaWhereInput[]
    NOT?: EntradaWhereInput | EntradaWhereInput[]
    consultorio?: StringFilter<"Entrada"> | string
    dentista?: StringFilter<"Entrada"> | string
    paciente?: StringFilter<"Entrada"> | string
    observacao?: StringNullableFilter<"Entrada"> | string | null
    servicos?: ServicoEntradaCompositeListFilter | ServicoEntradaObjectEqualityInput[]
    created_at?: DateTimeFilter<"Entrada"> | Date | string
    updated_at?: DateTimeFilter<"Entrada"> | Date | string
  }, "id">

  export type EntradaOrderByWithAggregationInput = {
    id?: SortOrder
    consultorio?: SortOrder
    dentista?: SortOrder
    paciente?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: EntradaCountOrderByAggregateInput
    _max?: EntradaMaxOrderByAggregateInput
    _min?: EntradaMinOrderByAggregateInput
  }

  export type EntradaScalarWhereWithAggregatesInput = {
    AND?: EntradaScalarWhereWithAggregatesInput | EntradaScalarWhereWithAggregatesInput[]
    OR?: EntradaScalarWhereWithAggregatesInput[]
    NOT?: EntradaScalarWhereWithAggregatesInput | EntradaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Entrada"> | string
    consultorio?: StringWithAggregatesFilter<"Entrada"> | string
    dentista?: StringWithAggregatesFilter<"Entrada"> | string
    paciente?: StringWithAggregatesFilter<"Entrada"> | string
    observacao?: StringNullableWithAggregatesFilter<"Entrada"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Entrada"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Entrada"> | Date | string
  }

  export type RoteiroWhereInput = {
    AND?: RoteiroWhereInput | RoteiroWhereInput[]
    OR?: RoteiroWhereInput[]
    NOT?: RoteiroWhereInput | RoteiroWhereInput[]
    id?: StringFilter<"Roteiro"> | string
    data?: StringFilter<"Roteiro"> | string
    entregue?: BoolNullableFilter<"Roteiro"> | boolean | null
    observacao?: StringNullableFilter<"Roteiro"> | string | null
    created_at?: DateTimeFilter<"Roteiro"> | Date | string
    updated_at?: DateTimeFilter<"Roteiro"> | Date | string
  }

  export type RoteiroOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    entregue?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoteiroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoteiroWhereInput | RoteiroWhereInput[]
    OR?: RoteiroWhereInput[]
    NOT?: RoteiroWhereInput | RoteiroWhereInput[]
    data?: StringFilter<"Roteiro"> | string
    entregue?: BoolNullableFilter<"Roteiro"> | boolean | null
    observacao?: StringNullableFilter<"Roteiro"> | string | null
    created_at?: DateTimeFilter<"Roteiro"> | Date | string
    updated_at?: DateTimeFilter<"Roteiro"> | Date | string
  }, "id">

  export type RoteiroOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    entregue?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RoteiroCountOrderByAggregateInput
    _max?: RoteiroMaxOrderByAggregateInput
    _min?: RoteiroMinOrderByAggregateInput
  }

  export type RoteiroScalarWhereWithAggregatesInput = {
    AND?: RoteiroScalarWhereWithAggregatesInput | RoteiroScalarWhereWithAggregatesInput[]
    OR?: RoteiroScalarWhereWithAggregatesInput[]
    NOT?: RoteiroScalarWhereWithAggregatesInput | RoteiroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Roteiro"> | string
    data?: StringWithAggregatesFilter<"Roteiro"> | string
    entregue?: BoolNullableWithAggregatesFilter<"Roteiro"> | boolean | null
    observacao?: StringNullableWithAggregatesFilter<"Roteiro"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Roteiro"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Roteiro"> | Date | string
  }

  export type FechamentoWhereInput = {
    AND?: FechamentoWhereInput | FechamentoWhereInput[]
    OR?: FechamentoWhereInput[]
    NOT?: FechamentoWhereInput | FechamentoWhereInput[]
    id?: StringFilter<"Fechamento"> | string
    fechado?: BoolFilter<"Fechamento"> | boolean
    data?: DateTimeFilter<"Fechamento"> | Date | string
    adicional_consultorio?: AdicionalConsultorioFechamentoCompositeListFilter | AdicionalConsultorioFechamentoObjectEqualityInput[]
    adicional_dentista?: AdicionalDentistaFechamentoCompositeListFilter | AdicionalDentistaFechamentoObjectEqualityInput[]
    valor?: IntFilter<"Fechamento"> | number
    observacao?: StringNullableFilter<"Fechamento"> | string | null
    created_at?: DateTimeFilter<"Fechamento"> | Date | string
    updated_at?: DateTimeFilter<"Fechamento"> | Date | string
  }

  export type FechamentoOrderByWithRelationInput = {
    id?: SortOrder
    fechado?: SortOrder
    data?: SortOrder
    adicional_consultorio?: AdicionalConsultorioFechamentoOrderByCompositeAggregateInput
    adicional_dentista?: AdicionalDentistaFechamentoOrderByCompositeAggregateInput
    valor?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FechamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FechamentoWhereInput | FechamentoWhereInput[]
    OR?: FechamentoWhereInput[]
    NOT?: FechamentoWhereInput | FechamentoWhereInput[]
    fechado?: BoolFilter<"Fechamento"> | boolean
    data?: DateTimeFilter<"Fechamento"> | Date | string
    adicional_consultorio?: AdicionalConsultorioFechamentoCompositeListFilter | AdicionalConsultorioFechamentoObjectEqualityInput[]
    adicional_dentista?: AdicionalDentistaFechamentoCompositeListFilter | AdicionalDentistaFechamentoObjectEqualityInput[]
    valor?: IntFilter<"Fechamento"> | number
    observacao?: StringNullableFilter<"Fechamento"> | string | null
    created_at?: DateTimeFilter<"Fechamento"> | Date | string
    updated_at?: DateTimeFilter<"Fechamento"> | Date | string
  }, "id">

  export type FechamentoOrderByWithAggregationInput = {
    id?: SortOrder
    fechado?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FechamentoCountOrderByAggregateInput
    _avg?: FechamentoAvgOrderByAggregateInput
    _max?: FechamentoMaxOrderByAggregateInput
    _min?: FechamentoMinOrderByAggregateInput
    _sum?: FechamentoSumOrderByAggregateInput
  }

  export type FechamentoScalarWhereWithAggregatesInput = {
    AND?: FechamentoScalarWhereWithAggregatesInput | FechamentoScalarWhereWithAggregatesInput[]
    OR?: FechamentoScalarWhereWithAggregatesInput[]
    NOT?: FechamentoScalarWhereWithAggregatesInput | FechamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fechamento"> | string
    fechado?: BoolWithAggregatesFilter<"Fechamento"> | boolean
    data?: DateTimeWithAggregatesFilter<"Fechamento"> | Date | string
    valor?: IntWithAggregatesFilter<"Fechamento"> | number
    observacao?: StringNullableWithAggregatesFilter<"Fechamento"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Fechamento"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Fechamento"> | Date | string
  }

  export type ValoresWhereInput = {
    AND?: ValoresWhereInput | ValoresWhereInput[]
    OR?: ValoresWhereInput[]
    NOT?: ValoresWhereInput | ValoresWhereInput[]
    id?: StringFilter<"Valores"> | string
    consultorio?: StringFilter<"Valores"> | string
    dentista?: StringFilter<"Valores"> | string
    tipo?: StringFilter<"Valores"> | string
    created_at?: DateTimeFilter<"Valores"> | Date | string
    updated_at?: DateTimeFilter<"Valores"> | Date | string
  }

  export type ValoresOrderByWithRelationInput = {
    id?: SortOrder
    consultorio?: SortOrder
    dentista?: SortOrder
    tipo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ValoresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ValoresWhereInput | ValoresWhereInput[]
    OR?: ValoresWhereInput[]
    NOT?: ValoresWhereInput | ValoresWhereInput[]
    consultorio?: StringFilter<"Valores"> | string
    dentista?: StringFilter<"Valores"> | string
    tipo?: StringFilter<"Valores"> | string
    created_at?: DateTimeFilter<"Valores"> | Date | string
    updated_at?: DateTimeFilter<"Valores"> | Date | string
  }, "id">

  export type ValoresOrderByWithAggregationInput = {
    id?: SortOrder
    consultorio?: SortOrder
    dentista?: SortOrder
    tipo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ValoresCountOrderByAggregateInput
    _max?: ValoresMaxOrderByAggregateInput
    _min?: ValoresMinOrderByAggregateInput
  }

  export type ValoresScalarWhereWithAggregatesInput = {
    AND?: ValoresScalarWhereWithAggregatesInput | ValoresScalarWhereWithAggregatesInput[]
    OR?: ValoresScalarWhereWithAggregatesInput[]
    NOT?: ValoresScalarWhereWithAggregatesInput | ValoresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Valores"> | string
    consultorio?: StringWithAggregatesFilter<"Valores"> | string
    dentista?: StringWithAggregatesFilter<"Valores"> | string
    tipo?: StringWithAggregatesFilter<"Valores"> | string
    created_at?: DateTimeWithAggregatesFilter<"Valores"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Valores"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    role?: StringFilter<"User"> | string
    banned?: BoolFilter<"User"> | boolean
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    role?: StringFilter<"User"> | string
    banned?: BoolFilter<"User"> | boolean
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    role?: StringWithAggregatesFilter<"User"> | string
    banned?: BoolWithAggregatesFilter<"User"> | boolean
    banReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    banExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type ConsultorioCreateInput = {
    id?: string
    cobranca: string
    nome: string
    cep: string
    numero: string
    email: string
    complemento?: string | null
    cep_entrega?: string | null
    numero_entrega?: string | null
    complemento_entrega?: string | null
    observacao?: string | null
    telefones?: ConsultorioCreatetelefonesInput | string[]
    dentistas?: ConsultorioCreatedentistasInput | string[]
    secretarias?: ConsultorioCreatesecretariasInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConsultorioUncheckedCreateInput = {
    id?: string
    cobranca: string
    nome: string
    cep: string
    numero: string
    email: string
    complemento?: string | null
    cep_entrega?: string | null
    numero_entrega?: string | null
    complemento_entrega?: string | null
    observacao?: string | null
    telefones?: ConsultorioCreatetelefonesInput | string[]
    dentistas?: ConsultorioCreatedentistasInput | string[]
    secretarias?: ConsultorioCreatesecretariasInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConsultorioUpdateInput = {
    cobranca?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    cep_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    numero_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    complemento_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    telefones?: ConsultorioUpdatetelefonesInput | string[]
    dentistas?: ConsultorioUpdatedentistasInput | string[]
    secretarias?: ConsultorioUpdatesecretariasInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultorioUncheckedUpdateInput = {
    cobranca?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    cep_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    numero_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    complemento_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    telefones?: ConsultorioUpdatetelefonesInput | string[]
    dentistas?: ConsultorioUpdatedentistasInput | string[]
    secretarias?: ConsultorioUpdatesecretariasInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultorioCreateManyInput = {
    id?: string
    cobranca: string
    nome: string
    cep: string
    numero: string
    email: string
    complemento?: string | null
    cep_entrega?: string | null
    numero_entrega?: string | null
    complemento_entrega?: string | null
    observacao?: string | null
    telefones?: ConsultorioCreatetelefonesInput | string[]
    dentistas?: ConsultorioCreatedentistasInput | string[]
    secretarias?: ConsultorioCreatesecretariasInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConsultorioUpdateManyMutationInput = {
    cobranca?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    cep_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    numero_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    complemento_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    telefones?: ConsultorioUpdatetelefonesInput | string[]
    dentistas?: ConsultorioUpdatedentistasInput | string[]
    secretarias?: ConsultorioUpdatesecretariasInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultorioUncheckedUpdateManyInput = {
    cobranca?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    cep_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    numero_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    complemento_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    telefones?: ConsultorioUpdatetelefonesInput | string[]
    dentistas?: ConsultorioUpdatedentistasInput | string[]
    secretarias?: ConsultorioUpdatesecretariasInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DentistaCreateInput = {
    id?: string
    nome: string
    cro: string
    email: string
    telefones?: DentistaCreatetelefonesInput | string[]
    especialidades?: DentistaCreateespecialidadesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DentistaUncheckedCreateInput = {
    id?: string
    nome: string
    cro: string
    email: string
    telefones?: DentistaCreatetelefonesInput | string[]
    especialidades?: DentistaCreateespecialidadesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DentistaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cro?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefones?: DentistaUpdatetelefonesInput | string[]
    especialidades?: DentistaUpdateespecialidadesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DentistaUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cro?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefones?: DentistaUpdatetelefonesInput | string[]
    especialidades?: DentistaUpdateespecialidadesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DentistaCreateManyInput = {
    id?: string
    nome: string
    cro: string
    email: string
    telefones?: DentistaCreatetelefonesInput | string[]
    especialidades?: DentistaCreateespecialidadesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DentistaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cro?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefones?: DentistaUpdatetelefonesInput | string[]
    especialidades?: DentistaUpdateespecialidadesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DentistaUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cro?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefones?: DentistaUpdatetelefonesInput | string[]
    especialidades?: DentistaUpdateespecialidadesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecialidadeCreateInput = {
    id?: string
    nome: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EspecialidadeUncheckedCreateInput = {
    id?: string
    nome: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EspecialidadeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecialidadeUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecialidadeCreateManyInput = {
    id?: string
    nome: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EspecialidadeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecialidadeUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecretariaCreateInput = {
    id?: string
    nome: string
    email: string
    telefones?: SecretariaCreatetelefonesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SecretariaUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    telefones?: SecretariaCreatetelefonesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SecretariaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefones?: SecretariaUpdatetelefonesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecretariaUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefones?: SecretariaUpdatetelefonesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecretariaCreateManyInput = {
    id?: string
    nome: string
    email: string
    telefones?: SecretariaCreatetelefonesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SecretariaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefones?: SecretariaUpdatetelefonesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecretariaUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefones?: SecretariaUpdatetelefonesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioCreateInput = {
    id?: string
    nome: string
    cep: string
    numero: string
    complemento?: string | null
    email: string
    rg: string
    cpf: string
    data_nascimento: string
    data_admissao: string
    data_recisao?: string | null
    observacao?: string | null
    telefones?: FuncionarioCreatetelefonesInput | string[]
    funcoes?: FuncionarioCreatefuncoesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FuncionarioUncheckedCreateInput = {
    id?: string
    nome: string
    cep: string
    numero: string
    complemento?: string | null
    email: string
    rg: string
    cpf: string
    data_nascimento: string
    data_admissao: string
    data_recisao?: string | null
    observacao?: string | null
    telefones?: FuncionarioCreatetelefonesInput | string[]
    funcoes?: FuncionarioCreatefuncoesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FuncionarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    data_admissao?: StringFieldUpdateOperationsInput | string
    data_recisao?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    telefones?: FuncionarioUpdatetelefonesInput | string[]
    funcoes?: FuncionarioUpdatefuncoesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    data_admissao?: StringFieldUpdateOperationsInput | string
    data_recisao?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    telefones?: FuncionarioUpdatetelefonesInput | string[]
    funcoes?: FuncionarioUpdatefuncoesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioCreateManyInput = {
    id?: string
    nome: string
    cep: string
    numero: string
    complemento?: string | null
    email: string
    rg: string
    cpf: string
    data_nascimento: string
    data_admissao: string
    data_recisao?: string | null
    observacao?: string | null
    telefones?: FuncionarioCreatetelefonesInput | string[]
    funcoes?: FuncionarioCreatefuncoesInput | string[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FuncionarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    data_admissao?: StringFieldUpdateOperationsInput | string
    data_recisao?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    telefones?: FuncionarioUpdatetelefonesInput | string[]
    funcoes?: FuncionarioUpdatefuncoesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data_nascimento?: StringFieldUpdateOperationsInput | string
    data_admissao?: StringFieldUpdateOperationsInput | string
    data_recisao?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    telefones?: FuncionarioUpdatetelefonesInput | string[]
    funcoes?: FuncionarioUpdatefuncoesInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncaoCreateInput = {
    id?: string
    nome: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FuncaoUncheckedCreateInput = {
    id?: string
    nome: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FuncaoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncaoUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncaoCreateManyInput = {
    id?: string
    nome: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FuncaoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncaoUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoCreateInput = {
    id?: string
    nome: string
    valor_sem_nota?: ServicoCreatevalor_sem_notaInput | number[]
    valor_com_nota?: ServicoCreatevalor_com_notaInput | number[]
    valor_unicid?: ServicoCreatevalor_unicidInput | number[]
    valor_pinheros?: ServicoCreatevalor_pinherosInput | number[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ServicoUncheckedCreateInput = {
    id?: string
    nome: string
    valor_sem_nota?: ServicoCreatevalor_sem_notaInput | number[]
    valor_com_nota?: ServicoCreatevalor_com_notaInput | number[]
    valor_unicid?: ServicoCreatevalor_unicidInput | number[]
    valor_pinheros?: ServicoCreatevalor_pinherosInput | number[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ServicoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    valor_sem_nota?: ServicoUpdatevalor_sem_notaInput | number[]
    valor_com_nota?: ServicoUpdatevalor_com_notaInput | number[]
    valor_unicid?: ServicoUpdatevalor_unicidInput | number[]
    valor_pinheros?: ServicoUpdatevalor_pinherosInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    valor_sem_nota?: ServicoUpdatevalor_sem_notaInput | number[]
    valor_com_nota?: ServicoUpdatevalor_com_notaInput | number[]
    valor_unicid?: ServicoUpdatevalor_unicidInput | number[]
    valor_pinheros?: ServicoUpdatevalor_pinherosInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoCreateManyInput = {
    id?: string
    nome: string
    valor_sem_nota?: ServicoCreatevalor_sem_notaInput | number[]
    valor_com_nota?: ServicoCreatevalor_com_notaInput | number[]
    valor_unicid?: ServicoCreatevalor_unicidInput | number[]
    valor_pinheros?: ServicoCreatevalor_pinherosInput | number[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ServicoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    valor_sem_nota?: ServicoUpdatevalor_sem_notaInput | number[]
    valor_com_nota?: ServicoUpdatevalor_com_notaInput | number[]
    valor_unicid?: ServicoUpdatevalor_unicidInput | number[]
    valor_pinheros?: ServicoUpdatevalor_pinherosInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    valor_sem_nota?: ServicoUpdatevalor_sem_notaInput | number[]
    valor_com_nota?: ServicoUpdatevalor_com_notaInput | number[]
    valor_unicid?: ServicoUpdatevalor_unicidInput | number[]
    valor_pinheros?: ServicoUpdatevalor_pinherosInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntradaCreateInput = {
    id?: string
    consultorio: string
    dentista: string
    paciente: string
    observacao?: string | null
    servicos?: XOR<ServicoEntradaListCreateEnvelopeInput, ServicoEntradaCreateInput> | ServicoEntradaCreateInput[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EntradaUncheckedCreateInput = {
    id?: string
    consultorio: string
    dentista: string
    paciente: string
    observacao?: string | null
    servicos?: XOR<ServicoEntradaListCreateEnvelopeInput, ServicoEntradaCreateInput> | ServicoEntradaCreateInput[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EntradaUpdateInput = {
    consultorio?: StringFieldUpdateOperationsInput | string
    dentista?: StringFieldUpdateOperationsInput | string
    paciente?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: XOR<ServicoEntradaListUpdateEnvelopeInput, ServicoEntradaCreateInput> | ServicoEntradaCreateInput[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntradaUncheckedUpdateInput = {
    consultorio?: StringFieldUpdateOperationsInput | string
    dentista?: StringFieldUpdateOperationsInput | string
    paciente?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: XOR<ServicoEntradaListUpdateEnvelopeInput, ServicoEntradaCreateInput> | ServicoEntradaCreateInput[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntradaCreateManyInput = {
    id?: string
    consultorio: string
    dentista: string
    paciente: string
    observacao?: string | null
    servicos?: XOR<ServicoEntradaListCreateEnvelopeInput, ServicoEntradaCreateInput> | ServicoEntradaCreateInput[]
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EntradaUpdateManyMutationInput = {
    consultorio?: StringFieldUpdateOperationsInput | string
    dentista?: StringFieldUpdateOperationsInput | string
    paciente?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: XOR<ServicoEntradaListUpdateEnvelopeInput, ServicoEntradaCreateInput> | ServicoEntradaCreateInput[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntradaUncheckedUpdateManyInput = {
    consultorio?: StringFieldUpdateOperationsInput | string
    dentista?: StringFieldUpdateOperationsInput | string
    paciente?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    servicos?: XOR<ServicoEntradaListUpdateEnvelopeInput, ServicoEntradaCreateInput> | ServicoEntradaCreateInput[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoteiroCreateInput = {
    id?: string
    data: string
    entregue?: boolean | null
    observacao?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoteiroUncheckedCreateInput = {
    id?: string
    data: string
    entregue?: boolean | null
    observacao?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoteiroUpdateInput = {
    data?: StringFieldUpdateOperationsInput | string
    entregue?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoteiroUncheckedUpdateInput = {
    data?: StringFieldUpdateOperationsInput | string
    entregue?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoteiroCreateManyInput = {
    id?: string
    data: string
    entregue?: boolean | null
    observacao?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoteiroUpdateManyMutationInput = {
    data?: StringFieldUpdateOperationsInput | string
    entregue?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoteiroUncheckedUpdateManyInput = {
    data?: StringFieldUpdateOperationsInput | string
    entregue?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FechamentoCreateInput = {
    id?: string
    fechado?: boolean
    data: Date | string
    adicional_consultorio?: XOR<AdicionalConsultorioFechamentoListCreateEnvelopeInput, AdicionalConsultorioFechamentoCreateInput> | AdicionalConsultorioFechamentoCreateInput[]
    adicional_dentista?: XOR<AdicionalDentistaFechamentoListCreateEnvelopeInput, AdicionalDentistaFechamentoCreateInput> | AdicionalDentistaFechamentoCreateInput[]
    valor: number
    observacao?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FechamentoUncheckedCreateInput = {
    id?: string
    fechado?: boolean
    data: Date | string
    adicional_consultorio?: XOR<AdicionalConsultorioFechamentoListCreateEnvelopeInput, AdicionalConsultorioFechamentoCreateInput> | AdicionalConsultorioFechamentoCreateInput[]
    adicional_dentista?: XOR<AdicionalDentistaFechamentoListCreateEnvelopeInput, AdicionalDentistaFechamentoCreateInput> | AdicionalDentistaFechamentoCreateInput[]
    valor: number
    observacao?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FechamentoUpdateInput = {
    fechado?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    adicional_consultorio?: XOR<AdicionalConsultorioFechamentoListUpdateEnvelopeInput, AdicionalConsultorioFechamentoCreateInput> | AdicionalConsultorioFechamentoCreateInput[]
    adicional_dentista?: XOR<AdicionalDentistaFechamentoListUpdateEnvelopeInput, AdicionalDentistaFechamentoCreateInput> | AdicionalDentistaFechamentoCreateInput[]
    valor?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FechamentoUncheckedUpdateInput = {
    fechado?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    adicional_consultorio?: XOR<AdicionalConsultorioFechamentoListUpdateEnvelopeInput, AdicionalConsultorioFechamentoCreateInput> | AdicionalConsultorioFechamentoCreateInput[]
    adicional_dentista?: XOR<AdicionalDentistaFechamentoListUpdateEnvelopeInput, AdicionalDentistaFechamentoCreateInput> | AdicionalDentistaFechamentoCreateInput[]
    valor?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FechamentoCreateManyInput = {
    id?: string
    fechado?: boolean
    data: Date | string
    adicional_consultorio?: XOR<AdicionalConsultorioFechamentoListCreateEnvelopeInput, AdicionalConsultorioFechamentoCreateInput> | AdicionalConsultorioFechamentoCreateInput[]
    adicional_dentista?: XOR<AdicionalDentistaFechamentoListCreateEnvelopeInput, AdicionalDentistaFechamentoCreateInput> | AdicionalDentistaFechamentoCreateInput[]
    valor: number
    observacao?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FechamentoUpdateManyMutationInput = {
    fechado?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    adicional_consultorio?: XOR<AdicionalConsultorioFechamentoListUpdateEnvelopeInput, AdicionalConsultorioFechamentoCreateInput> | AdicionalConsultorioFechamentoCreateInput[]
    adicional_dentista?: XOR<AdicionalDentistaFechamentoListUpdateEnvelopeInput, AdicionalDentistaFechamentoCreateInput> | AdicionalDentistaFechamentoCreateInput[]
    valor?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FechamentoUncheckedUpdateManyInput = {
    fechado?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    adicional_consultorio?: XOR<AdicionalConsultorioFechamentoListUpdateEnvelopeInput, AdicionalConsultorioFechamentoCreateInput> | AdicionalConsultorioFechamentoCreateInput[]
    adicional_dentista?: XOR<AdicionalDentistaFechamentoListUpdateEnvelopeInput, AdicionalDentistaFechamentoCreateInput> | AdicionalDentistaFechamentoCreateInput[]
    valor?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValoresCreateInput = {
    id?: string
    consultorio: string
    dentista: string
    tipo: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ValoresUncheckedCreateInput = {
    id?: string
    consultorio: string
    dentista: string
    tipo: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ValoresUpdateInput = {
    consultorio?: StringFieldUpdateOperationsInput | string
    dentista?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValoresUncheckedUpdateInput = {
    consultorio?: StringFieldUpdateOperationsInput | string
    dentista?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValoresCreateManyInput = {
    id?: string
    consultorio: string
    dentista: string
    tipo: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ValoresUpdateManyMutationInput = {
    consultorio?: StringFieldUpdateOperationsInput | string
    dentista?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValoresUncheckedUpdateManyInput = {
    consultorio?: StringFieldUpdateOperationsInput | string
    dentista?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    role?: string
    banned?: boolean
    banReason?: string | null
    banExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    role?: string
    banned?: boolean
    banReason?: string | null
    banExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    role?: string
    banned?: boolean
    banReason?: string | null
    banExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConsultorioCountOrderByAggregateInput = {
    id?: SortOrder
    cobranca?: SortOrder
    nome?: SortOrder
    cep?: SortOrder
    numero?: SortOrder
    email?: SortOrder
    complemento?: SortOrder
    cep_entrega?: SortOrder
    numero_entrega?: SortOrder
    complemento_entrega?: SortOrder
    observacao?: SortOrder
    telefones?: SortOrder
    dentistas?: SortOrder
    secretarias?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConsultorioMaxOrderByAggregateInput = {
    id?: SortOrder
    cobranca?: SortOrder
    nome?: SortOrder
    cep?: SortOrder
    numero?: SortOrder
    email?: SortOrder
    complemento?: SortOrder
    cep_entrega?: SortOrder
    numero_entrega?: SortOrder
    complemento_entrega?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConsultorioMinOrderByAggregateInput = {
    id?: SortOrder
    cobranca?: SortOrder
    nome?: SortOrder
    cep?: SortOrder
    numero?: SortOrder
    email?: SortOrder
    complemento?: SortOrder
    cep_entrega?: SortOrder
    numero_entrega?: SortOrder
    complemento_entrega?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DentistaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cro?: SortOrder
    email?: SortOrder
    telefones?: SortOrder
    especialidades?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DentistaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cro?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DentistaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cro?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EspecialidadeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EspecialidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EspecialidadeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SecretariaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefones?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SecretariaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SecretariaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FuncionarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cep?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    email?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    data_admissao?: SortOrder
    data_recisao?: SortOrder
    observacao?: SortOrder
    telefones?: SortOrder
    funcoes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FuncionarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cep?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    email?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    data_admissao?: SortOrder
    data_recisao?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FuncionarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cep?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    email?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    data_admissao?: SortOrder
    data_recisao?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FuncaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FuncaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FuncaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ServicoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    valor_sem_nota?: SortOrder
    valor_com_nota?: SortOrder
    valor_unicid?: SortOrder
    valor_pinheros?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServicoAvgOrderByAggregateInput = {
    valor_sem_nota?: SortOrder
    valor_com_nota?: SortOrder
    valor_unicid?: SortOrder
    valor_pinheros?: SortOrder
  }

  export type ServicoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServicoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServicoSumOrderByAggregateInput = {
    valor_sem_nota?: SortOrder
    valor_com_nota?: SortOrder
    valor_unicid?: SortOrder
    valor_pinheros?: SortOrder
  }

  export type ServicoEntradaCompositeListFilter = {
    equals?: ServicoEntradaObjectEqualityInput[]
    every?: ServicoEntradaWhereInput
    some?: ServicoEntradaWhereInput
    none?: ServicoEntradaWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type ServicoEntradaObjectEqualityInput = {
    idServicoEntrada: string
    servico: string
    valor: number
    desconto: number
    quantidade: number
    repeticao: number
    funcionario: string
    data_entrada: Date | string
    data_previsao: Date | string
    data_saida?: Date | string | null
    roteiro?: string | null
    entregue?: boolean | null
    fechamento?: string | null
  }

  export type ServicoEntradaOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type EntradaCountOrderByAggregateInput = {
    id?: SortOrder
    consultorio?: SortOrder
    dentista?: SortOrder
    paciente?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EntradaMaxOrderByAggregateInput = {
    id?: SortOrder
    consultorio?: SortOrder
    dentista?: SortOrder
    paciente?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EntradaMinOrderByAggregateInput = {
    id?: SortOrder
    consultorio?: SortOrder
    dentista?: SortOrder
    paciente?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type RoteiroCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    entregue?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoteiroMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    entregue?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoteiroMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    entregue?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AdicionalConsultorioFechamentoCompositeListFilter = {
    equals?: AdicionalConsultorioFechamentoObjectEqualityInput[]
    every?: AdicionalConsultorioFechamentoWhereInput
    some?: AdicionalConsultorioFechamentoWhereInput
    none?: AdicionalConsultorioFechamentoWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type AdicionalConsultorioFechamentoObjectEqualityInput = {
    idConsultorio: string
    desconto?: number[]
    observacao?: string | null
  }

  export type AdicionalDentistaFechamentoCompositeListFilter = {
    equals?: AdicionalDentistaFechamentoObjectEqualityInput[]
    every?: AdicionalDentistaFechamentoWhereInput
    some?: AdicionalDentistaFechamentoWhereInput
    none?: AdicionalDentistaFechamentoWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type AdicionalDentistaFechamentoObjectEqualityInput = {
    idDentista: string
    desconto?: number[]
    observacao?: string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AdicionalConsultorioFechamentoOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type AdicionalDentistaFechamentoOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type FechamentoCountOrderByAggregateInput = {
    id?: SortOrder
    fechado?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FechamentoAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type FechamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    fechado?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FechamentoMinOrderByAggregateInput = {
    id?: SortOrder
    fechado?: SortOrder
    data?: SortOrder
    valor?: SortOrder
    observacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FechamentoSumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type ValoresCountOrderByAggregateInput = {
    id?: SortOrder
    consultorio?: SortOrder
    dentista?: SortOrder
    tipo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ValoresMaxOrderByAggregateInput = {
    id?: SortOrder
    consultorio?: SortOrder
    dentista?: SortOrder
    tipo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ValoresMinOrderByAggregateInput = {
    id?: SortOrder
    consultorio?: SortOrder
    dentista?: SortOrder
    tipo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultorioCreatetelefonesInput = {
    set: string[]
  }

  export type ConsultorioCreatedentistasInput = {
    set: string[]
  }

  export type ConsultorioCreatesecretariasInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ConsultorioUpdatetelefonesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ConsultorioUpdatedentistasInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ConsultorioUpdatesecretariasInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DentistaCreatetelefonesInput = {
    set: string[]
  }

  export type DentistaCreateespecialidadesInput = {
    set: string[]
  }

  export type DentistaUpdatetelefonesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DentistaUpdateespecialidadesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SecretariaCreatetelefonesInput = {
    set: string[]
  }

  export type SecretariaUpdatetelefonesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FuncionarioCreatetelefonesInput = {
    set: string[]
  }

  export type FuncionarioCreatefuncoesInput = {
    set: string[]
  }

  export type FuncionarioUpdatetelefonesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FuncionarioUpdatefuncoesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ServicoCreatevalor_sem_notaInput = {
    set: number[]
  }

  export type ServicoCreatevalor_com_notaInput = {
    set: number[]
  }

  export type ServicoCreatevalor_unicidInput = {
    set: number[]
  }

  export type ServicoCreatevalor_pinherosInput = {
    set: number[]
  }

  export type ServicoUpdatevalor_sem_notaInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ServicoUpdatevalor_com_notaInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ServicoUpdatevalor_unicidInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ServicoUpdatevalor_pinherosInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ServicoEntradaListCreateEnvelopeInput = {
    set?: ServicoEntradaCreateInput | ServicoEntradaCreateInput[]
  }

  export type ServicoEntradaCreateInput = {
    idServicoEntrada: string
    servico: string
    valor: number
    desconto: number
    quantidade: number
    repeticao: number
    funcionario: string
    data_entrada?: Date | string
    data_previsao: Date | string
    data_saida?: Date | string | null
    roteiro?: string | null
    entregue?: boolean | null
    fechamento?: string | null
  }

  export type ServicoEntradaListUpdateEnvelopeInput = {
    set?: ServicoEntradaCreateInput | ServicoEntradaCreateInput[]
    push?: ServicoEntradaCreateInput | ServicoEntradaCreateInput[]
    updateMany?: ServicoEntradaUpdateManyInput
    deleteMany?: ServicoEntradaDeleteManyInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type AdicionalConsultorioFechamentoListCreateEnvelopeInput = {
    set?: AdicionalConsultorioFechamentoCreateInput | AdicionalConsultorioFechamentoCreateInput[]
  }

  export type AdicionalConsultorioFechamentoCreateInput = {
    idConsultorio: string
    desconto?: AdicionalConsultorioFechamentoCreatedescontoInput | number[]
    observacao?: string | null
  }

  export type AdicionalDentistaFechamentoListCreateEnvelopeInput = {
    set?: AdicionalDentistaFechamentoCreateInput | AdicionalDentistaFechamentoCreateInput[]
  }

  export type AdicionalDentistaFechamentoCreateInput = {
    idDentista: string
    desconto?: AdicionalDentistaFechamentoCreatedescontoInput | number[]
    observacao?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AdicionalConsultorioFechamentoListUpdateEnvelopeInput = {
    set?: AdicionalConsultorioFechamentoCreateInput | AdicionalConsultorioFechamentoCreateInput[]
    push?: AdicionalConsultorioFechamentoCreateInput | AdicionalConsultorioFechamentoCreateInput[]
    updateMany?: AdicionalConsultorioFechamentoUpdateManyInput
    deleteMany?: AdicionalConsultorioFechamentoDeleteManyInput
  }

  export type AdicionalDentistaFechamentoListUpdateEnvelopeInput = {
    set?: AdicionalDentistaFechamentoCreateInput | AdicionalDentistaFechamentoCreateInput[]
    push?: AdicionalDentistaFechamentoCreateInput | AdicionalDentistaFechamentoCreateInput[]
    updateMany?: AdicionalDentistaFechamentoUpdateManyInput
    deleteMany?: AdicionalDentistaFechamentoDeleteManyInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ServicoEntradaWhereInput = {
    AND?: ServicoEntradaWhereInput | ServicoEntradaWhereInput[]
    OR?: ServicoEntradaWhereInput[]
    NOT?: ServicoEntradaWhereInput | ServicoEntradaWhereInput[]
    idServicoEntrada?: StringFilter<"ServicoEntrada"> | string
    servico?: StringFilter<"ServicoEntrada"> | string
    valor?: IntFilter<"ServicoEntrada"> | number
    desconto?: IntFilter<"ServicoEntrada"> | number
    quantidade?: IntFilter<"ServicoEntrada"> | number
    repeticao?: IntFilter<"ServicoEntrada"> | number
    funcionario?: StringFilter<"ServicoEntrada"> | string
    data_entrada?: DateTimeFilter<"ServicoEntrada"> | Date | string
    data_previsao?: DateTimeFilter<"ServicoEntrada"> | Date | string
    data_saida?: DateTimeNullableFilter<"ServicoEntrada"> | Date | string | null
    roteiro?: StringNullableFilter<"ServicoEntrada"> | string | null
    entregue?: BoolNullableFilter<"ServicoEntrada"> | boolean | null
    fechamento?: StringNullableFilter<"ServicoEntrada"> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AdicionalConsultorioFechamentoWhereInput = {
    AND?: AdicionalConsultorioFechamentoWhereInput | AdicionalConsultorioFechamentoWhereInput[]
    OR?: AdicionalConsultorioFechamentoWhereInput[]
    NOT?: AdicionalConsultorioFechamentoWhereInput | AdicionalConsultorioFechamentoWhereInput[]
    idConsultorio?: StringFilter<"AdicionalConsultorioFechamento"> | string
    desconto?: IntNullableListFilter<"AdicionalConsultorioFechamento">
    observacao?: StringNullableFilter<"AdicionalConsultorioFechamento"> | string | null
  }

  export type AdicionalDentistaFechamentoWhereInput = {
    AND?: AdicionalDentistaFechamentoWhereInput | AdicionalDentistaFechamentoWhereInput[]
    OR?: AdicionalDentistaFechamentoWhereInput[]
    NOT?: AdicionalDentistaFechamentoWhereInput | AdicionalDentistaFechamentoWhereInput[]
    idDentista?: StringFilter<"AdicionalDentistaFechamento"> | string
    desconto?: IntNullableListFilter<"AdicionalDentistaFechamento">
    observacao?: StringNullableFilter<"AdicionalDentistaFechamento"> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ServicoEntradaUpdateManyInput = {
    where: ServicoEntradaWhereInput
    data: ServicoEntradaUpdateInput
  }

  export type ServicoEntradaDeleteManyInput = {
    where: ServicoEntradaWhereInput
  }

  export type AdicionalConsultorioFechamentoCreatedescontoInput = {
    set: number[]
  }

  export type AdicionalDentistaFechamentoCreatedescontoInput = {
    set: number[]
  }

  export type AdicionalConsultorioFechamentoUpdateManyInput = {
    where: AdicionalConsultorioFechamentoWhereInput
    data: AdicionalConsultorioFechamentoUpdateInput
  }

  export type AdicionalConsultorioFechamentoDeleteManyInput = {
    where: AdicionalConsultorioFechamentoWhereInput
  }

  export type AdicionalDentistaFechamentoUpdateManyInput = {
    where: AdicionalDentistaFechamentoWhereInput
    data: AdicionalDentistaFechamentoUpdateInput
  }

  export type AdicionalDentistaFechamentoDeleteManyInput = {
    where: AdicionalDentistaFechamentoWhereInput
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    role?: string
    banned?: boolean
    banReason?: string | null
    banExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    role?: string
    banned?: boolean
    banReason?: string | null
    banExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    role?: string
    banned?: boolean
    banReason?: string | null
    banExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    role?: string
    banned?: boolean
    banReason?: string | null
    banExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    banned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServicoEntradaUpdateInput = {
    idServicoEntrada?: StringFieldUpdateOperationsInput | string
    servico?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    desconto?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    repeticao?: IntFieldUpdateOperationsInput | number
    funcionario?: StringFieldUpdateOperationsInput | string
    data_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    data_previsao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roteiro?: NullableStringFieldUpdateOperationsInput | string | null
    entregue?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fechamento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdicionalConsultorioFechamentoUpdateInput = {
    idConsultorio?: StringFieldUpdateOperationsInput | string
    desconto?: AdicionalConsultorioFechamentoUpdatedescontoInput | number[]
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdicionalDentistaFechamentoUpdateInput = {
    idDentista?: StringFieldUpdateOperationsInput | string
    desconto?: AdicionalDentistaFechamentoUpdatedescontoInput | number[]
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdicionalConsultorioFechamentoUpdatedescontoInput = {
    set?: number[]
    push?: number | number[]
  }

  export type AdicionalDentistaFechamentoUpdatedescontoInput = {
    set?: number[]
    push?: number | number[]
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