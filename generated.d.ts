// tslint:disable
export type Maybe<T> = T | null;

export interface AdditionalEntityFields {
  path?: Maybe<string>;

  type?: Maybe<string>;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  foos?: Maybe<(Maybe<Foo>)[]>;

  bars?: Maybe<(Maybe<Bar>)[]>;
}

export interface Foo {
  id: string;

  foo?: Maybe<string>;
}

export interface Bar {
  id: string;

  bar?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================

import { ObjectID } from "mongodb";

export interface FooDbObject {}
import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    foos?: FoosResolver<Maybe<(Maybe<Foo>)[]>, TypeParent, Context>;

    bars?: BarsResolver<Maybe<(Maybe<Bar>)[]>, TypeParent, Context>;
  }

  export type FoosResolver<
    R = Maybe<(Maybe<Foo>)[]>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type BarsResolver<
    R = Maybe<(Maybe<Bar>)[]>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace FooResolvers {
  export interface Resolvers<Context = {}, TypeParent = Foo> {
    id?: IdResolver<string, TypeParent, Context>;

    foo?: FooResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = Foo, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type FooResolver<
    R = Maybe<string>,
    Parent = Foo,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace BarResolvers {
  export interface Resolvers<Context = {}, TypeParent = Bar> {
    id?: IdResolver<string, TypeParent, Context>;

    bar?: BarResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = Bar, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type BarResolver<
    R = Maybe<string>,
    Parent = Bar,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export type UnionDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  UnionDirectiveArgs,
  {}
>;
export interface UnionDirectiveArgs {
  discriminatorField?: Maybe<string>;
}

export type AbstractEntityDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  AbstractEntityDirectiveArgs,
  {}
>;
export interface AbstractEntityDirectiveArgs {
  discriminatorField: string;
}

export type EntityDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  EntityDirectiveArgs,
  {}
>;
export interface EntityDirectiveArgs {
  embedded?: Maybe<boolean>;

  additionalFields?: Maybe<(Maybe<AdditionalEntityFields>)[]>;
}

export type ColumnDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  ColumnDirectiveArgs,
  {}
>;
export interface ColumnDirectiveArgs {
  name?: Maybe<string>;

  overrideType?: Maybe<string>;

  overrideIsArray?: Maybe<boolean>;
}

export type IdDirectiveResolver<Result> = DirectiveResolverFn<Result, {}, {}>;
export type LinkDirectiveResolver<Result> = DirectiveResolverFn<Result, {}, {}>;
export type EmbeddedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  {},
  {}
>;
export type MapDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  MapDirectiveArgs,
  {}
>;
export interface MapDirectiveArgs {
  path: string;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  {}
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  {}
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  {}
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface IResolvers<Context = {}> {
  Query?: QueryResolvers.Resolvers<Context>;
  Foo?: FooResolvers.Resolvers<Context>;
  Bar?: BarResolvers.Resolvers<Context>;
}

export interface IDirectiveResolvers<Result> {
  union?: UnionDirectiveResolver<Result>;
  abstractEntity?: AbstractEntityDirectiveResolver<Result>;
  entity?: EntityDirectiveResolver<Result>;
  column?: ColumnDirectiveResolver<Result>;
  id?: IdDirectiveResolver<Result>;
  link?: LinkDirectiveResolver<Result>;
  embedded?: EmbeddedDirectiveResolver<Result>;
  map?: MapDirectiveResolver<Result>;
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
