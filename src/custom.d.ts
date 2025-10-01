// custom.d.ts أو declarations.d.ts

/**
 * هذا السطر يخبر TypeScript بأن أي ملف ينتهي بـ .sql
 * يجب التعامل معه كوحدة (Module) تصدّر القيمة الافتراضية كـ string.
 */
declare module "*.sql" {
  const content: string;
  export default content;
}
