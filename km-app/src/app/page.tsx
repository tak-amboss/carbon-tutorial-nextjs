'use client';
import { Button } from '@carbon/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Hello Carbon! Well, not quite yet. This is the starting point for the Carbon
        React tutorial.
        <Button>Button</Button>
      </div>
    </main>
  );
}
