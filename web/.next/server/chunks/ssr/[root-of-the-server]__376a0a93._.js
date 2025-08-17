module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/components/home/TicketGrid.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>TicketGrid
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
// Componente para un solo boleto
function Ticket({ number, status, onClick }) {
    // Función para determinar el estilo según el estado del boleto
    const getStatusClasses = ()=>{
        switch(status){
            case 'ocupado':
                return 'bg-red-800 text-gray-500 cursor-not-allowed';
            case 'seleccionado':
                return 'bg-yellow-500 text-black font-bold scale-110 shadow-lg shadow-yellow-500/50';
            case 'disponible':
            default:
                return 'bg-gray-700 hover:bg-yellow-600';
        }
    };
    // Formateamos el número para que siempre tenga 3 dígitos (ej. 007, 025, 123)
    const formattedNumber = number.toString().padStart(3, '0');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>onClick(number),
        className: `p-2 rounded-md text-center font-mono transition-all duration-200 ${getStatusClasses()}`,
        disabled: status === 'ocupado',
        children: formattedNumber
    }, void 0, false, {
        fileName: "[project]/src/components/home/TicketGrid.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function TicketGrid() {
    // Datos de ejemplo que simulan boletos ocupados al azar
    const initialTickets = Array.from({
        length: 100
    }, (_, i)=>({
            number: i + 1,
            status: Math.random() < 0.2 ? 'ocupado' : 'disponible'
        }));
    // Hook useState para guardar los números de los boletos seleccionados por el usuario
    const [selectedTickets, setSelectedTickets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Función para manejar los clics en los boletos
    const handleTicketClick = (number)=>{
        setSelectedTickets((prevSelected)=>{
            // Si el boleto ya está seleccionado, lo quitamos del array (deseleccionar)
            if (prevSelected.includes(number)) {
                return prevSelected.filter((n)=>n !== number);
            } else {
                return [
                    ...prevSelected,
                    number
                ];
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12 w-full max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-3xl font-bold text-center mb-6",
                children: "Elige tus Boletos"
            }, void 0, false, {
                fileName: "[project]/src/components/home/TicketGrid.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-5 sm:grid-cols-10 md:grid-cols-10 lg:grid-cols-10 gap-2",
                children: initialTickets.map((ticket)=>{
                    // Determinamos el estado final del boleto para renderizarlo
                    const status = ticket.status === 'ocupado' ? 'ocupado' : selectedTickets.includes(ticket.number) ? 'seleccionado' : 'disponible';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Ticket, {
                        number: ticket.number,
                        status: status,
                        onClick: handleTicketClick
                    }, ticket.number, false, {
                        fileName: "[project]/src/components/home/TicketGrid.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/home/TicketGrid.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/TicketGrid.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__376a0a93._.js.map