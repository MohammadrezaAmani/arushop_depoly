import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/img/avatars/01.png" alt="آواتار" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">اولیویا مارتین</p>
          <p className="text-sm text-muted-foreground">
            olivia.martin@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+۱,۹۹۹.۰۰ دلار</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="آواتار" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">جکسون لی</p>
          <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
        </div>
        <div className="ml-auto font-medium">+۳۹.۰۰ دلار</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="آواتار" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">ایزابلا نگوین</p>
          <p className="text-sm text-muted-foreground">
            isabella.nguyen@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+۲۹۹.۰۰ دلار</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="آواتار" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">ویلیام کیم</p>
          <p className="text-sm text-muted-foreground">will@email.com</p>
        </div>
        <div className="ml-auto font-medium">+۹۹.۰۰ دلار</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="آواتار" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">صوفیا دیویس</p>
          <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
        </div>
        <div className="ml-auto font-medium">+۳۹.۰۰ دلار</div>
      </div>
    </div>
  );
}
