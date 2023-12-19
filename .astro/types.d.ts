declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
				import('astro/zod').ZodLiteral<'avif'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"articles": {
"da/what-are-3d-animations.md": {
	id: "da/what-are-3d-animations.md";
  slug: "what-are-3d-animations-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-are-3d-renderings.md": {
	id: "da/what-are-3d-renderings.md";
  slug: "what-are-3d-renderings-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-are-3d-visualizations.md": {
	id: "da/what-are-3d-visualizations.md";
  slug: "what-are-3d-visualizations-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-is-3d-modelling.md": {
	id: "da/what-is-3d-modelling.md";
  slug: "what-is-3d-modelling-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-is-a-configurator.md": {
	id: "da/what-is-a-configurator.md";
  slug: "what-is-a-configurator-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-is-a-floor-planner.md": {
	id: "da/what-is-a-floor-planner.md";
  slug: "what-is-a-floor-planner-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-is-a-product-configurator.md": {
	id: "da/what-is-a-product-configurator.md";
  slug: "what-is-a-product-configurator-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-is-a-room-designer.md": {
	id: "da/what-is-a-room-designer.md";
  slug: "what-is-a-room-designer-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-is-a-room-planner.md": {
	id: "da/what-is-a-room-planner.md";
  slug: "what-is-a-room-planner-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-is-a-sales-configurator.md": {
	id: "da/what-is-a-sales-configurator.md";
  slug: "what-is-a-sales-configurator-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-is-a-virtual-showroom.md": {
	id: "da/what-is-a-virtual-showroom.md";
  slug: "what-is-a-virtual-showroom-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-is-augmented-reality.md": {
	id: "da/what-is-augmented-reality.md";
  slug: "what-is-augmented-reality-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-is-cpq.md": {
	id: "da/what-is-cpq.md";
  slug: "what-is-cpq-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-is-mecura.md": {
	id: "da/what-is-mecura.md";
  slug: "what-is-mecura-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-is-mercura.md": {
	id: "da/what-is-mercura.md";
  slug: "da/what-is-mercura";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-is-merkura.md": {
	id: "da/what-is-merkura.md";
  slug: "what-is-merkura-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"da/what-is-visual-cpq.md": {
	id: "da/what-is-visual-cpq.md";
  slug: "hvad-er-visuel-cpq-da";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-are-3d-animations.md": {
	id: "de/what-are-3d-animations.md";
  slug: "what-are-3d-animations-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-are-3d-renderings.md": {
	id: "de/what-are-3d-renderings.md";
  slug: "what-are-3d-renderings-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-are-3d-visualizations.md": {
	id: "de/what-are-3d-visualizations.md";
  slug: "what-are-3d-visualizations-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-is-3d-modelling.md": {
	id: "de/what-is-3d-modelling.md";
  slug: "what-is-3d-modelling-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-is-a-configurator.md": {
	id: "de/what-is-a-configurator.md";
  slug: "what-is-a-configurator-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-is-a-floor-planner.md": {
	id: "de/what-is-a-floor-planner.md";
  slug: "what-is-a-floor-planner-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-is-a-product-configurator.md": {
	id: "de/what-is-a-product-configurator.md";
  slug: "what-is-a-product-configurator-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-is-a-room-designer.md": {
	id: "de/what-is-a-room-designer.md";
  slug: "what-is-a-room-designer-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-is-a-room-planner.md": {
	id: "de/what-is-a-room-planner.md";
  slug: "what-is-a-room-planner-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-is-a-sales-configurator.md": {
	id: "de/what-is-a-sales-configurator.md";
  slug: "what-is-a-sales-configurator-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-is-a-virtual-showroom.md": {
	id: "de/what-is-a-virtual-showroom.md";
  slug: "what-is-a-virtual-showroom-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-is-augmented-reality.md": {
	id: "de/what-is-augmented-reality.md";
  slug: "what-is-augmented-reality-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-is-cpq.md": {
	id: "de/what-is-cpq.md";
  slug: "what-is-cpq-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-is-mecura.md": {
	id: "de/what-is-mecura.md";
  slug: "what-is-mecura-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-is-mercura.md": {
	id: "de/what-is-mercura.md";
  slug: "de/what-is-mercura";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-is-merkura.md": {
	id: "de/what-is-merkura.md";
  slug: "what-is-merkura-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"de/what-is-visual-cpq.md": {
	id: "de/what-is-visual-cpq.md";
  slug: "was-ist-visuelle-cpq-de";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-are-3d-animations.md": {
	id: "en/what-are-3d-animations.md";
  slug: "what-are-3d-animations";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-are-3d-renderings.md": {
	id: "en/what-are-3d-renderings.md";
  slug: "what-are-3d-renderings";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-are-3d-visualizations.md": {
	id: "en/what-are-3d-visualizations.md";
  slug: "what-are-3d-visualizations";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-is-3d-modelling.md": {
	id: "en/what-is-3d-modelling.md";
  slug: "what-is-3d-modelling";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-is-a-configurator.md": {
	id: "en/what-is-a-configurator.md";
  slug: "what-is-a-configurator";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-is-a-floor-planner.md": {
	id: "en/what-is-a-floor-planner.md";
  slug: "what-is-a-floor-planner";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-is-a-product-configurator.md": {
	id: "en/what-is-a-product-configurator.md";
  slug: "what-is-a-product-configurator";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-is-a-room-designer.md": {
	id: "en/what-is-a-room-designer.md";
  slug: "what-is-a-room-designer";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-is-a-room-planner.md": {
	id: "en/what-is-a-room-planner.md";
  slug: "what-is-a-room-planner";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-is-a-sales-configurator.md": {
	id: "en/what-is-a-sales-configurator.md";
  slug: "what-is-a-sales-configurator";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-is-a-virtual-showroom.md": {
	id: "en/what-is-a-virtual-showroom.md";
  slug: "what-is-a-virtual-showroom";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-is-augmented-reality.md": {
	id: "en/what-is-augmented-reality.md";
  slug: "what-is-augmented-reality";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-is-cpq.md": {
	id: "en/what-is-cpq.md";
  slug: "what-is-cpq";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-is-mecura.md": {
	id: "en/what-is-mecura.md";
  slug: "what-is-mecura";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-is-mercura.md": {
	id: "en/what-is-mercura.md";
  slug: "en/what-is-mercura";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-is-merkura.md": {
	id: "en/what-is-merkura.md";
  slug: "what-is-merkura";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-is-visual-cpq copy 2.md": {
	id: "en/what-is-visual-cpq copy 2.md";
  slug: "en/what-is-visual-cpq-copy-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"en/what-is-visual-cpq.md": {
	id: "en/what-is-visual-cpq.md";
  slug: "what-is-visual-cpq";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/que-es-cpq-visual-es.md": {
	id: "es/que-es-cpq-visual-es.md";
  slug: "que-es-cpq-visual-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-are-3d-animations.md": {
	id: "es/what-are-3d-animations.md";
  slug: "what-are-3d-animations-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-are-3d-renderings.md": {
	id: "es/what-are-3d-renderings.md";
  slug: "what-are-3d-renderings-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-are-3d-visualizations.md": {
	id: "es/what-are-3d-visualizations.md";
  slug: "what-are-3d-visualizations-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-is-3d-modelling.md": {
	id: "es/what-is-3d-modelling.md";
  slug: "what-is-3d-modelling-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-is-a-configurator.md": {
	id: "es/what-is-a-configurator.md";
  slug: "what-is-a-configurator-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-is-a-floor-planner.md": {
	id: "es/what-is-a-floor-planner.md";
  slug: "what-is-a-floor-planner-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-is-a-product-configurator.md": {
	id: "es/what-is-a-product-configurator.md";
  slug: "what-is-a-product-configurator-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-is-a-room-designer.md": {
	id: "es/what-is-a-room-designer.md";
  slug: "what-is-a-room-designer-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-is-a-room-planner.md": {
	id: "es/what-is-a-room-planner.md";
  slug: "what-is-a-room-planner-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-is-a-sales-configurator.md": {
	id: "es/what-is-a-sales-configurator.md";
  slug: "what-is-a-sales-configurator-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-is-a-virtual-showroom.md": {
	id: "es/what-is-a-virtual-showroom.md";
  slug: "what-is-a-virtual-showroom-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-is-augmented-reality.md": {
	id: "es/what-is-augmented-reality.md";
  slug: "what-is-augmented-reality-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-is-cpq.md": {
	id: "es/what-is-cpq.md";
  slug: "what-is-cpq-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-is-mecura.md": {
	id: "es/what-is-mecura.md";
  slug: "what-is-mecura-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-is-mercura.md": {
	id: "es/what-is-mercura.md";
  slug: "es/what-is-mercura";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-is-merkura.md": {
	id: "es/what-is-merkura.md";
  slug: "what-is-merkura-es";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"es/what-is-visual-cpq.md": {
	id: "es/what-is-visual-cpq.md";
  slug: "es/what-is-visual-cpq";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
