"use client";
import { useEffect, useState } from 'react';

// Types and deletes each phrase in turn.
export default function Typewriter({ words, typingSpeed = 70, deletingSpeed = 40, pause = 1600 }) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index % words.length];
        let timeout;
        if (!deleting && text === word) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && text === '') {
            setDeleting(false);
            setIndex(i => i + 1);
        } else {
            timeout = setTimeout(
                () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
                deleting ? deletingSpeed : typingSpeed
            );
        }
        return () => clearTimeout(timeout);
    }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause]);

    return (
        <span>
            {text}
            <span className="ml-0.5 inline-block w-[2px] animate-blink bg-cyan-400 align-middle" style={{ height: '1em' }} />
        </span>
    );
}
