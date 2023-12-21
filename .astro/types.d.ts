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
"da/hvad-er-3d-animationer.md": {
	id: "da/hvad-er-3d-animationer.md";
  slug: "hvad-er-3d-animationer";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"da/hvad-er-3d-modellering.md": {
	id: "da/hvad-er-3d-modellering.md";
  slug: "hvad-er-3d-modellering";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"da/hvad-er-3d-renderinger.md": {
	id: "da/hvad-er-3d-renderinger.md";
  slug: "hvad-er-3d-renderinger";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"da/hvad-er-3d-visualiseringer.md": {
	id: "da/hvad-er-3d-visualiseringer.md";
  slug: "hvad-er-3d-visualiseringer";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"da/hvad-er-augmented-reality.md": {
	id: "da/hvad-er-augmented-reality.md";
  slug: "hvad-er-augmented-reality";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"da/hvad-er-cpq.md": {
	id: "da/hvad-er-cpq.md";
  slug: "hvad-er-cpq";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"da/hvad-er-en-gulvplanlægger.md": {
	id: "da/hvad-er-en-gulvplanlægger.md";
  slug: "hvad-er-en-gulvplanlægger";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"da/hvad-er-en-konfigurator.md": {
	id: "da/hvad-er-en-konfigurator.md";
  slug: "hvad-er-en-konfigurator";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"da/hvad-er-en-produktkonfigurator.md": {
	id: "da/hvad-er-en-produktkonfigurator.md";
  slug: "hvad-er-en-produktkonfigurator";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"da/hvad-er-en-rumdesigner.md": {
	id: "da/hvad-er-en-rumdesigner.md";
  slug: "hvad-er-en-rumdesigner";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"da/hvad-er-en-rumplanlægger.md": {
	id: "da/hvad-er-en-rumplanlægger.md";
  slug: "hvad-er-en-rumplanlægger";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"da/hvad-er-en-salgskonfigurator.md": {
	id: "da/hvad-er-en-salgskonfigurator.md";
  slug: "hvad-er-en-salgskonfigurator";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"da/hvad-er-en-virtuel-udstilling.md": {
	id: "da/hvad-er-en-virtuel-udstilling.md";
  slug: "hvad-er-en-virtuel-udstilling";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"da/hvad-er-mecura.md": {
	id: "da/hvad-er-mecura.md";
  slug: "hvad-er-mecura";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"da/hvad-er-mercura.md": {
	id: "da/hvad-er-mercura.md";
  slug: "hvad-er-mercura";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"da/hvad-er-visuel-cpq-da.md": {
	id: "da/hvad-er-visuel-cpq-da.md";
  slug: "hvad-er-visuel-cpq-da";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"de/qué-es-cpq-visual-es.md": {
	id: "de/qué-es-cpq-visual-es.md";
  slug: "qué-es-cpq-visual-es";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"de/was-ist-3d-modellierung.md": {
	id: "de/was-ist-3d-modellierung.md";
  slug: "was-ist-3d-modellierung";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"de/was-ist-augmented-reality.md": {
	id: "de/was-ist-augmented-reality.md";
  slug: "was-ist-augmented-reality";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"de/was-ist-cpq.md": {
	id: "de/was-ist-cpq.md";
  slug: "was-ist-cpq";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"de/was-ist-ein-konfigurator.md": {
	id: "de/was-ist-ein-konfigurator.md";
  slug: "was-ist-ein-konfigurator";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"de/was-ist-ein-produktkonfigurator.md": {
	id: "de/was-ist-ein-produktkonfigurator.md";
  slug: "was-ist-ein-produktkonfigurator";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"de/was-ist-ein-raumdesigner.md": {
	id: "de/was-ist-ein-raumdesigner.md";
  slug: "was-ist-ein-raumdesigner";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"de/was-ist-ein-raumplaner.md": {
	id: "de/was-ist-ein-raumplaner.md";
  slug: "was-ist-ein-raumplaner";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"de/was-ist-ein-verkaufskonfigurator.md": {
	id: "de/was-ist-ein-verkaufskonfigurator.md";
  slug: "was-ist-ein-verkaufskonfigurator";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"de/was-ist-ein-virtueller-showroom.md": {
	id: "de/was-ist-ein-virtueller-showroom.md";
  slug: "was-ist-ein-virtueller-showroom";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"de/was-ist-mecura.md": {
	id: "de/was-ist-mecura.md";
  slug: "was-ist-mecura";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"de/was-ist-mercura.md": {
	id: "de/was-ist-mercura.md";
  slug: "was-ist-mercura";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"de/was-sind-3d-animationen.md": {
	id: "de/was-sind-3d-animationen.md";
  slug: "was-sind-3d-animationen";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"de/was-sind-3d-renderings.md": {
	id: "de/was-sind-3d-renderings.md";
  slug: "was-sind-3d-renderings";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"de/was-sind-3d-visualisierungen.md": {
	id: "de/was-sind-3d-visualisierungen.md";
  slug: "was-sind-3d-visualisierungen";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"en/what-are-3d-animations.md": {
	id: "en/what-are-3d-animations.md";
  slug: "what-are-3d-animations";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"en/what-are-3d-renderings.md": {
	id: "en/what-are-3d-renderings.md";
  slug: "what-are-3d-renderings";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"en/what-are-3d-visualizations.md": {
	id: "en/what-are-3d-visualizations.md";
  slug: "what-are-3d-visualizations";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"en/what-is-3d-modelling.md": {
	id: "en/what-is-3d-modelling.md";
  slug: "what-is-3d-modelling";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"en/what-is-a-configurator.md": {
	id: "en/what-is-a-configurator.md";
  slug: "what-is-a-configurator";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"en/what-is-a-floor-planner.md": {
	id: "en/what-is-a-floor-planner.md";
  slug: "what-is-a-floor-planner";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"en/what-is-a-product-configurator.md": {
	id: "en/what-is-a-product-configurator.md";
  slug: "what-is-a-product-configurator";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"en/what-is-a-room-designer.md": {
	id: "en/what-is-a-room-designer.md";
  slug: "what-is-a-room-designer";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"en/what-is-a-room-planner.md": {
	id: "en/what-is-a-room-planner.md";
  slug: "what-is-a-room-planner";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"en/what-is-a-sales-configurator.md": {
	id: "en/what-is-a-sales-configurator.md";
  slug: "what-is-a-sales-configurator";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"en/what-is-a-virtual-showroom.md": {
	id: "en/what-is-a-virtual-showroom.md";
  slug: "what-is-a-virtual-showroom";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"en/what-is-augmented-reality.md": {
	id: "en/what-is-augmented-reality.md";
  slug: "what-is-augmented-reality";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"en/what-is-cpq.md": {
	id: "en/what-is-cpq.md";
  slug: "what-is-cpq";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"en/what-is-mecura.md": {
	id: "en/what-is-mecura.md";
  slug: "what-is-mecura";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"en/what-is-visual-cpq.md": {
	id: "en/what-is-visual-cpq.md";
  slug: "what-is-visual-cpq";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/que-es-cpq-visual-es.md": {
	id: "es/que-es-cpq-visual-es.md";
  slug: "que-es-cpq-visual";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/que-es-el-modelado-3d.md": {
	id: "es/que-es-el-modelado-3d.md";
  slug: "que-es-el-modelado-3d";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/que-es-un-configurador-es.md": {
	id: "es/que-es-un-configurador-es.md";
  slug: "que-es-un-configurador-es";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/que-son-las-animaciones-3d.md": {
	id: "es/que-son-las-animaciones-3d.md";
  slug: "que-son-las-animaciones-3d";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/que-son-las-visualizaciones-3d.md": {
	id: "es/que-son-las-visualizaciones-3d.md";
  slug: "que-son-las-visualizaciones-3d";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/que-son-los-renderings-3d.md": {
	id: "es/que-son-los-renderings-3d.md";
  slug: "que-son-los-renderings-3d";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/qué-es-cpq-es.md": {
	id: "es/qué-es-cpq-es.md";
  slug: "qué-es-cpq-es";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/qué-es-cpq-visual.md": {
	id: "es/qué-es-cpq-visual.md";
  slug: "qué-es-cpq-visual";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/qué-es-la-realidad-aumentada.md": {
	id: "es/qué-es-la-realidad-aumentada.md";
  slug: "qué-es-la-realidad-aumentada";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/qué-es-mecura.md": {
	id: "es/qué-es-mecura.md";
  slug: "qué-es-mecura";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/qué-es-mercura.md": {
	id: "es/qué-es-mercura.md";
  slug: "qué-es-mercura";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/qué-es-un-configurador-de-productos.md": {
	id: "es/qué-es-un-configurador-de-productos.md";
  slug: "qué-es-un-configurador-de-productos";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/qué-es-un-configurador-de-ventas.md": {
	id: "es/qué-es-un-configurador-de-ventas.md";
  slug: "qué-es-un-configurador-de-ventas";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/qué-es-un-diseñador-de-habitaciones.md": {
	id: "es/qué-es-un-diseñador-de-habitaciones.md";
  slug: "qué-es-un-diseñador-de-habitaciones";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/qué-es-un-planificador-de-habitaciones.md": {
	id: "es/qué-es-un-planificador-de-habitaciones.md";
  slug: "qué-es-un-planificador-de-habitaciones";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/qué-es-un-planificador-de-pisos-es.md": {
	id: "es/qué-es-un-planificador-de-pisos-es.md";
  slug: "qué-es-un-planificador-de-pisos-es";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
"es/qué-es-un-showroom-virtual.md": {
	id: "es/qué-es-un-showroom-virtual.md";
  slug: "qué-es-un-showroom-virtual";
  body: string;
  collection: "articles";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = never;
}
