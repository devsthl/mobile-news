import { useEffect, useState } from 'react';
import { AsyncStorageThemes } from '../Utils/AsyncStorageHelper';

export type Themes = 'default' | 'dark' | 'light' | 'old'
export default function useThemeColors() {
    const [themes, setThemes] = useState<Themes | null>('default')
    useEffect(() => {
        getThemes();
    });
    const getThemes = async () => {
        const listMenu: Themes | null = await AsyncStorageThemes.get()
        setThemes(listMenu || 'default')
    }
    return { themes }
}