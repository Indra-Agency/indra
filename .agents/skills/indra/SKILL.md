---
name: indra-ui-builder-skill
description: Constructs a high-end, RTL Arabic landing page for Indra Automation Agency using Next.js, Tailwind CSS v4, and Framer Motion.
---

# Indra UI Builder Skill

هذه المهارة مسؤولة عن بناء وتطوير واجهات صفحة الهبوط الخاصة بوكالة "Indra" لحلول الأتمتة والذكاء الاصطناعي، مع الالتزام الصارم بالهوية البصرية الداكنة (Dark Theme) ودعم اللغة العربية (RTL).

## When to use this skill
- عند الحاجة لبناء أو تعديل أقسام صفحة الهبوط (مثل Hero section, Services, Sectors).
- عند إنشاء مكونات واجهة (UI Components) جديدة تخص مشروع Indra.
- عند طلب إضافة حركات سينمائية (Animations) للعناصر أثناء التمرير.

## How to use it
1. تأكد من أن بيئة العمل تستخدم (Next.js App Router, Tailwind v4, Framer Motion).
2. قم بتوليد الهيكل الأساسي للمكون (Component Skeleton) باستخدام TypeScript.
3. طبق الهوية البصرية الصارمة:
   - استخدم `bg-background` للخلفيات (أسود).
   - استخدم `bg-surface` للبطاقات (رمادي داكن).
   - استخدم `text-emerald-400` للتمييز ولفت الانتباه.
   - استخدم `border-border` للحدود الخافتة.
4. أضف حركات `framer-motion` (مثل `initial={{ opacity: 0, y: 20 }}`) لتفعيل الظهور المتسلسل الأنيق.
5. تأكد من أن النصوص عربية بالكامل، وأن الكود يدعم اتجاه (RTL) بشكل سليم (استخدام `ml` بدلاً من `mr` أو استخدام الخصائص المنطقية مثل `ms` و `me`).
6. قسم الكود إلى مكونات صغيرة (Atomic Components) لسهولة الصيانة وإعادة الاستخدام.

## Conventions:
- لا تستخدم الألوان الصارخة أو الظلال القوية.
- اعتمد دائمًا على المسافات السلبية (Negative Space) لراحة العين.
- يجب أن تكون جميع المكونات مصممة للعمل بكفاءة على شاشات الجوال أولاً (Mobile-First Approach).
- جميع النصوص الوهمية (Placeholder text) يجب أن تكون باللغة العربية وتتعلق بمجال الأتمتة (Automation) والذكاء الاصطناعي.