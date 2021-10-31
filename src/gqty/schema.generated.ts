/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars["String"]>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars["String"]>;
}

/** Boolean expression to filter rows from the table "articles". All fields are combined with a logical 'AND'. */
export interface articles_bool_exp {
  _and?: Maybe<Array<articles_bool_exp>>;
  _not?: Maybe<articles_bool_exp>;
  _or?: Maybe<Array<articles_bool_exp>>;
  author_id?: Maybe<uuid_comparison_exp>;
  content?: Maybe<String_comparison_exp>;
  title?: Maybe<String_comparison_exp>;
}

/** input type for inserting data into table "articles" */
export interface articles_insert_input {
  author_id?: Maybe<Scalars["uuid"]>;
  content?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
}

/** Ordering options when selecting data from "articles". */
export interface articles_order_by {
  author_id?: Maybe<order_by>;
  content?: Maybe<order_by>;
  title?: Maybe<order_by>;
}

/** select columns of table "articles" */
export enum articles_select_column {
  /** column name */
  author_id = "author_id",
  /** column name */
  content = "content",
  /** column name */
  title = "title",
}

/** input type for updating data in table "articles" */
export interface articles_set_input {
  author_id?: Maybe<Scalars["uuid"]>;
  content?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
}

/** column ordering options */
export enum order_by {
  /** in ascending order, nulls last */
  asc = "asc",
  /** in ascending order, nulls first */
  asc_nulls_first = "asc_nulls_first",
  /** in ascending order, nulls last */
  asc_nulls_last = "asc_nulls_last",
  /** in descending order, nulls first */
  desc = "desc",
  /** in descending order, nulls first */
  desc_nulls_first = "desc_nulls_first",
  /** in descending order, nulls last */
  desc_nulls_last = "desc_nulls_last",
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  Int: true,
  String: true,
  articles_select_column: true,
  order_by: true,
  uuid: true,
};
export const generatedSchema = {
  String_comparison_exp: {
    _eq: { __type: "String" },
    _gt: { __type: "String" },
    _gte: { __type: "String" },
    _ilike: { __type: "String" },
    _in: { __type: "[String!]" },
    _iregex: { __type: "String" },
    _is_null: { __type: "Boolean" },
    _like: { __type: "String" },
    _lt: { __type: "String" },
    _lte: { __type: "String" },
    _neq: { __type: "String" },
    _nilike: { __type: "String" },
    _nin: { __type: "[String!]" },
    _niregex: { __type: "String" },
    _nlike: { __type: "String" },
    _nregex: { __type: "String" },
    _nsimilar: { __type: "String" },
    _regex: { __type: "String" },
    _similar: { __type: "String" },
  },
  articles: {
    __typename: { __type: "String!" },
    author_id: { __type: "uuid!" },
    content: { __type: "String" },
    title: { __type: "String" },
  },
  articles_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "articles_aggregate_fields" },
    nodes: { __type: "[articles!]!" },
  },
  articles_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: { columns: "[articles_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "articles_max_fields" },
    min: { __type: "articles_min_fields" },
  },
  articles_bool_exp: {
    _and: { __type: "[articles_bool_exp!]" },
    _not: { __type: "articles_bool_exp" },
    _or: { __type: "[articles_bool_exp!]" },
    author_id: { __type: "uuid_comparison_exp" },
    content: { __type: "String_comparison_exp" },
    title: { __type: "String_comparison_exp" },
  },
  articles_insert_input: {
    author_id: { __type: "uuid" },
    content: { __type: "String" },
    title: { __type: "String" },
  },
  articles_max_fields: {
    __typename: { __type: "String!" },
    author_id: { __type: "uuid" },
    content: { __type: "String" },
    title: { __type: "String" },
  },
  articles_min_fields: {
    __typename: { __type: "String!" },
    author_id: { __type: "uuid" },
    content: { __type: "String" },
    title: { __type: "String" },
  },
  articles_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[articles!]!" },
  },
  articles_order_by: {
    author_id: { __type: "order_by" },
    content: { __type: "order_by" },
    title: { __type: "order_by" },
  },
  articles_set_input: {
    author_id: { __type: "uuid" },
    content: { __type: "String" },
    title: { __type: "String" },
  },
  mutation: {
    __typename: { __type: "String!" },
    delete_articles: {
      __type: "articles_mutation_response",
      __args: { where: "articles_bool_exp!" },
    },
    insert_articles: {
      __type: "articles_mutation_response",
      __args: { objects: "[articles_insert_input!]!" },
    },
    insert_articles_one: {
      __type: "articles",
      __args: { object: "articles_insert_input!" },
    },
    update_articles: {
      __type: "articles_mutation_response",
      __args: { _set: "articles_set_input", where: "articles_bool_exp!" },
    },
  },
  query: {
    __typename: { __type: "String!" },
    articles: {
      __type: "[articles!]!",
      __args: {
        distinct_on: "[articles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[articles_order_by!]",
        where: "articles_bool_exp",
      },
    },
    articles_aggregate: {
      __type: "articles_aggregate!",
      __args: {
        distinct_on: "[articles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[articles_order_by!]",
        where: "articles_bool_exp",
      },
    },
  },
  subscription: {
    __typename: { __type: "String!" },
    articles: {
      __type: "[articles!]!",
      __args: {
        distinct_on: "[articles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[articles_order_by!]",
        where: "articles_bool_exp",
      },
    },
    articles_aggregate: {
      __type: "articles_aggregate!",
      __args: {
        distinct_on: "[articles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[articles_order_by!]",
        where: "articles_bool_exp",
      },
    },
  },
  uuid_comparison_exp: {
    _eq: { __type: "uuid" },
    _gt: { __type: "uuid" },
    _gte: { __type: "uuid" },
    _in: { __type: "[uuid!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "uuid" },
    _lte: { __type: "uuid" },
    _neq: { __type: "uuid" },
    _nin: { __type: "[uuid!]" },
  },
} as const;

/**
 * columns and relationships of "articles"
 */
export interface articles {
  __typename?: "articles";
  author_id: ScalarsEnums["uuid"];
  content?: Maybe<ScalarsEnums["String"]>;
  title?: Maybe<ScalarsEnums["String"]>;
}

/**
 * aggregated selection of "articles"
 */
export interface articles_aggregate {
  __typename?: "articles_aggregate";
  aggregate?: Maybe<articles_aggregate_fields>;
  nodes: Array<articles>;
}

/**
 * aggregate fields of "articles"
 */
export interface articles_aggregate_fields {
  __typename?: "articles_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<articles_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<articles_max_fields>;
  min?: Maybe<articles_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface articles_max_fields {
  __typename?: "articles_max_fields";
  author_id?: Maybe<ScalarsEnums["uuid"]>;
  content?: Maybe<ScalarsEnums["String"]>;
  title?: Maybe<ScalarsEnums["String"]>;
}

/**
 * aggregate min on columns
 */
export interface articles_min_fields {
  __typename?: "articles_min_fields";
  author_id?: Maybe<ScalarsEnums["uuid"]>;
  content?: Maybe<ScalarsEnums["String"]>;
  title?: Maybe<ScalarsEnums["String"]>;
}

/**
 * response of any mutation on the table "articles"
 */
export interface articles_mutation_response {
  __typename?: "articles_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<articles>;
}

export interface Mutation {
  __typename?: "Mutation";
  delete_articles: (args: {
    where: articles_bool_exp;
  }) => Maybe<articles_mutation_response>;
  insert_articles: (args: {
    objects: Array<articles_insert_input>;
  }) => Maybe<articles_mutation_response>;
  insert_articles_one: (args: {
    object: articles_insert_input;
  }) => Maybe<articles>;
  update_articles: (args: {
    _set?: Maybe<articles_set_input>;
    where: articles_bool_exp;
  }) => Maybe<articles_mutation_response>;
}

export interface Query {
  __typename?: "Query";
  articles: (args?: {
    distinct_on?: Maybe<Array<articles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<articles_order_by>>;
    where?: Maybe<articles_bool_exp>;
  }) => Array<articles>;
  articles_aggregate: (args?: {
    distinct_on?: Maybe<Array<articles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<articles_order_by>>;
    where?: Maybe<articles_bool_exp>;
  }) => articles_aggregate;
}

export interface Subscription {
  __typename?: "Subscription";
  articles: (args?: {
    distinct_on?: Maybe<Array<articles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<articles_order_by>>;
    where?: Maybe<articles_bool_exp>;
  }) => Array<articles>;
  articles_aggregate: (args?: {
    distinct_on?: Maybe<Array<articles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<articles_order_by>>;
    where?: Maybe<articles_bool_exp>;
  }) => articles_aggregate;
}

export interface SchemaObjectTypes {
  Mutation: Mutation;
  Query: Query;
  Subscription: Subscription;
  articles: articles;
  articles_aggregate: articles_aggregate;
  articles_aggregate_fields: articles_aggregate_fields;
  articles_max_fields: articles_max_fields;
  articles_min_fields: articles_min_fields;
  articles_mutation_response: articles_mutation_response;
}
export type SchemaObjectTypesNames =
  | "Mutation"
  | "Query"
  | "Subscription"
  | "articles"
  | "articles_aggregate"
  | "articles_aggregate_fields"
  | "articles_max_fields"
  | "articles_min_fields"
  | "articles_mutation_response";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  articles_select_column: articles_select_column | undefined;
  order_by: order_by | undefined;
}
