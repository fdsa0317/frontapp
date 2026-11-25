"use client"

import { useState } from "react";
import { MOCK_ANALYSES, MOCK_SUPPORT_BOOKMARKS } from "../../_component/mockData";

interface WithdrawModalProps {
    onClose: () => void;
}

// 회원 탈퇴 팝업 (비밀번호 확인 + 안내 확인 체크해야 탈퇴하기 활성화)
export default function WithdrawModal({onClose}: WithdrawModalProps) {
    const [password, setPassword] = useState("");
    const [agreed, setAgreed] = useState(false);
    const canWithdraw = password.length > 0 && agreed;

    const removedItems = [
        `저장한 분석 결과 ${MOCK_ANALYSES.length}건`,
        `관심 지원사업 ${MOCK_SUPPORT_BOOKMARKS.length}건 · 마감 알림`,
        "회원정보 (닉네임 · 사업자 상태)",
    ];

    // TODO: 회원 탈퇴 API 연결
    const handleWithdrawClick = () => {
        window.alert("회원 탈퇴 API 연결 전이에요.");
        onClose();
    }

    return (
        <div className="fixed inset-0 z-110 flex items-center justify-center bg-ink-900/50" onClick={onClose}>
            <div className="max-h-[calc(100vh-48px)] w-130 overflow-y-auto bg-white p-9" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-[28px] font-bold leading-[1.4] text-ink-900">사장님 어디가세요?</h2>
                <p className="mt-3.5 text-[17px] leading-[1.6] text-ink-800">
                    탈퇴하면 아래 정보가 모두 지워지고 되돌릴 수 없어요. 작성한 게시글과 댓글은 ‘탈퇴한 회원’으로 남아요.
                </p>

                <div className="mt-6 h-[1.2px] bg-line-gray" />
                <ul className="flex flex-col gap-3 py-5">
                    {removedItems.map((item) => (
                        <li key={item} className="flex items-center gap-4 text-[17px] leading-[1.6]">
                            <span className="font-semibold text-danger">—</span>
                            <span className="text-ink-900">{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="h-[1.2px] bg-line-gray" />

                <label className="mt-6 block">
                    <p className="text-xl font-semibold leading-normal text-ink-900">비밀번호 확인</p>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-4 h-13 w-full rounded-xl border-[1.2px] border-line-strong bg-white px-4.75 text-[22px] text-ink-900 focus:border-sub focus:outline-none"
                    />
                </label>

                <label className="mt-7 flex cursor-pointer items-center gap-1">
                    <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="sr-only" />
                    {agreed ? (
                        <span className="flex h-6.25 w-7.25 items-center justify-center rounded-md bg-main-dark text-[17px] font-bold text-white">✓</span>
                    ) : (
                        <span className="h-6.25 w-7.25 rounded-md border-[1.5px] border-[#C9D2DC] bg-white" />
                    )}
                    <span className="ml-1 text-xl leading-[1.6] text-ink-900">안내 내용을 확인했어요</span>
                </label>

                <div className="mt-9 flex justify-end gap-2.5">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-13 items-center rounded-full border border-line bg-white px-7.5 text-xl font-semibold text-ink-700 shadow-[0px_4px_14px_0px_rgba(11,27,51,0.05)]"
                    >
                        취소
                    </button>
                    <button
                        type="button"
                        onClick={handleWithdrawClick}
                        disabled={!canWithdraw}
                        className="flex h-13 items-center rounded-full bg-danger px-7.5 text-xl font-bold text-white shadow-[0px_6px_16px_0px_rgba(229,72,77,0.25)] disabled:opacity-40"
                    >
                        탈퇴하기
                    </button>
                </div>
            </div>
        </div>
    );
}
