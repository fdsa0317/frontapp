interface MyPageToastProps {
    message: string | null; // null이면 숨김
}

// 화면 위쪽 가운데 알림 (예: "검토 보고서를 내려받았어요")
export default function MyPageToast({message}: MyPageToastProps) {
    if (!message) return null;

    return (
        <div className="fixed left-1/2 top-24 z-110 flex h-16.5 -translate-x-1/2 items-center gap-1 bg-ink-900 px-6">
            <span className="text-[22px] font-bold leading-normal text-mint">✓</span>
            <span className="text-xl font-semibold leading-normal text-white">{message}</span>
        </div>
    );
}
