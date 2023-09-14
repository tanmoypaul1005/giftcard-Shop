/* eslint-disable react-hooks/exhaustive-deps */
import i18next from 'i18next';
import React, { useState, useEffect } from 'react';
import useUserAccountStore, { changeLanguage } from '../../app/stores/UserAccountStore.js';
import useAuthStore from '../../app/authStore.js';

const LanguageSwitch = () => {
    const { is_on, setIsOn } = useUserAccountStore();
    const { isLoggedIn } = useAuthStore();
    const [lang_code, setLangCode] = useState('en');
    const { setAppLanguage } = useUserAccountStore();

    const switchLanguage = async (e) => {
        console.log('switchLanguage', e.target.value);
        const code = e.target.value;
        if (isLoggedIn) {
            const is_success = await changeLanguage(code);
            if (is_success) {
                setLangCode(code)
                localStorage.setItem('gifty_app_lang_code', code);
                setAppLanguage(code);
            }
        } else {
            setLangCode(code)
            i18next.changeLanguage(code);
            localStorage.setItem('gifty_app_lang_code', code);
            setAppLanguage(code);
        }
    }

    useEffect(() => {
        const code = localStorage.getItem('gifty_app_lang_code');
        setLangCode(code)
        i18next.changeLanguage(code);
        setAppLanguage(code);
    }, []);


    useEffect(() => {
        const code = localStorage.getItem('gifty_app_lang_code');
        setLangCode(code)
        i18next.changeLanguage(code);
        setAppLanguage(code);
    }, [isLoggedIn])


    return (
        <select value={lang_code} onChange={switchLanguage} className='text-md font-archivo py-2 px-2 border-2 rounded-md border-gray-900'>
            <option value="en">English</option>
            <option value="ja">日本語</option>
            <option value="zh">中文</option>
            <option value="bn">বাংলা</option>
        </select>
    );
}

export default LanguageSwitch;