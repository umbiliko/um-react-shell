import * as React from 'react';

interface ShellProops extends React.HtmlAttributes<HTMLMainElement> {
}

export default function ShellContainer(props: ShellProops) {
    return (
        <main>
            Shell
        </main>
    );
}