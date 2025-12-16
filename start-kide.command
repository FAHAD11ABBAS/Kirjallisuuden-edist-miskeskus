#!/bin/bash
cd "$(dirname "$0")"
echo "🚀 بدء تشغيل موقع KIDE..."
echo "📂 المشروع: Kirjallisuuden edistämiskeskus"
echo ""
echo "اختر طريقة التشغيل:"
echo "1. خادم التطوير (Development) - للتعديل على الكود"
echo "2. خادم محلي بسيط (Local Server) - لعرض النسخة النهائية"
echo ""
read -p "اختر (1 أو 2): " choice

if [ "$choice" == "1" ]; then
    echo ""
    echo "🔧 تشغيل خادم التطوير..."
    export PATH="/usr/local/bin:/bin:/usr/bin:$PATH"
    npm run dev
elif [ "$choice" == "2" ]; then
    echo ""
    echo "📦 بناء المشروع..."
    export PATH="/usr/local/bin:/bin:/usr/bin:$PATH"
    npm run build
    echo ""
    echo "🌐 تشغيل الخادم المحلي..."
    echo "افتح المتصفح على: http://localhost:8000"
    python3 -m http.server 8000 --directory dist
else
    echo "❌ اختيار غير صحيح"
fi
