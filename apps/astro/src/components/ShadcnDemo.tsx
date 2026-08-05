import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Heart } from 'lucide-react';

export default function ShadcnDemo() {
  const [likes, setLikes] = useState(0);

  return (
    <Card className="max-w-md w-full shadow-lg border-slate-200">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <Badge variant="default" className="bg-pink-600 hover:bg-pink-700">
            <Sparkles className="w-3 h-3 mr-1 inline" /> React + Astro
          </Badge>
          <span className="text-xs text-muted-foreground">shadcn/ui v4</span>
        </div>
        <CardTitle className="text-xl font-bold mt-2">Shadcn Component Demo</CardTitle>
        <CardDescription>
          Component React tương tác chạy mượt mà trong ứng dụng Astro.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-slate-600">
          Toàn bộ hệ thống design token, Tailwind CSS v4 và Radix UI Primitives đã được tích hợp hoàn chỉnh.
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-2 border-t">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setLikes(l => l + 1)}
          className="gap-2 text-pink-600 hover:text-pink-700 hover:bg-pink-50"
        >
          <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
          Yêu thích ({likes})
        </Button>
        <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
          Khám phá
        </Button>
      </CardFooter>
    </Card>
  );
}
