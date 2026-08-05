import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Car, Bike, AlertTriangle, ShieldCheck, Fuel, Calendar, Wrench, ChevronRight, Zap } from 'lucide-react';

export default function VehicleGarageWidget() {
  const [activeVehicle, setActiveVehicle] = useState<'car' | 'bike'>('car');

  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 my-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-6 bg-pink-600 rounded-full inline-block"></span>
            Quản Lý Phương Tiện &amp; Tiện Ích Xe
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">Theo dõi hạn đăng kiểm, lịch bảo dưỡng, phạt nguội và chi phí sử dụng</p>
        </div>
        <Badge variant="outline" className="border-pink-200 text-pink-700 bg-pink-50/60 font-semibold px-3 py-1">
          <Zap className="w-3.5 h-3.5 mr-1 text-pink-600 inline" /> Smart Vehicle Hub
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Vehicle Garage Card */}
        <Card className="md:col-span-2 shadow-md border-slate-200/80 hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-bold">
                  {activeVehicle === 'car' ? <Car className="w-5 h-5" /> : <Bike className="w-5 h-5" />}
                </div>
                <div>
                  <CardTitle className="text-lg font-bold text-slate-900">
                    {activeVehicle === 'car' ? 'Toyota Camry 2.5Q' : 'Honda SH 160i ABS'}
                  </CardTitle>
                  <CardDescription className="text-xs font-medium">
                    Biển số: <span className="font-bold text-slate-800">{activeVehicle === 'car' ? '30H-888.99' : '59-S3 999.88'}</span>
                  </CardDescription>
                </div>
              </div>
              <Tabs defaultValue="car" onValueChange={(val) => setActiveVehicle(val as 'car' | 'bike')}>
                <TabsList className="bg-slate-100 p-1">
                  <TabsTrigger value="car" className="text-xs gap-1">
                    <Car className="w-3.5 h-3.5" /> Ô tô
                  </TabsTrigger>
                  <TabsTrigger value="bike" className="text-xs gap-1">
                    <Bike className="w-3.5 h-3.5" /> Xe máy
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>

          <CardContent className="pt-4 space-y-4">
            {/* Quick Status Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">Phạt Nguội</span>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 font-bold border-none">
                  <ShieldCheck className="w-3 h-3 mr-1 inline" /> Clean (0 lỗi)
                </Badge>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">Hạn Đăng Kiểm</span>
                <span className="text-xs font-bold text-slate-800 block">
                  {activeVehicle === 'car' ? '15/10/2026' : 'N/A'}
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold">Còn 620 ngày</span>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">Dư Nợ ePass</span>
                <span className="text-xs font-bold text-pink-600 block">
                  {activeVehicle === 'car' ? '450.000đ' : '0đ'}
                </span>
                <span className="text-[10px] text-slate-400">Tự động nạp OK</span>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">Lịch Bảo Dưỡng</span>
                <span className="text-xs font-bold text-amber-600 block">45.000 km</span>
                <span className="text-[10px] text-amber-600 font-medium">Cần thay nhớt</span>
              </div>
            </div>

            {/* Alert banner if maintenance needed */}
            <Alert variant="warning" className="py-2.5 px-3">
              <AlertTriangle className="w-4 h-4" />
              <div className="flex items-center justify-between w-full ml-2">
                <div>
                  <AlertTitle className="text-xs font-bold">Nhắc nhở bảo dưỡng định kỳ</AlertTitle>
                  <AlertDescription className="text-xs text-amber-800">
                    {activeVehicle === 'car' 
                      ? 'Xe của bạn đã đi được 44.850 km. Hãy đặt lịch bảo dưỡng mốc 45k km.'
                      : 'Nên kiểm tra thay nhớt máy & phanh sau mỗi 3.000 km.'}
                  </AlertDescription>
                </div>
                <a href="/tien-ich-giao-thong/bao-duong" className="flex-shrink-0">
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white text-xs h-7 px-2.5">
                    Đặt lịch <ChevronRight className="w-3 h-3 ml-0.5" />
                  </Button>
                </a>
              </div>
            </Alert>
          </CardContent>

          <CardFooter className="bg-slate-50/50 border-t border-slate-100 pt-3 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <a href="/phat-nguoi">
                <Button variant="outline" size="sm" className="text-xs border-slate-200 hover:border-pink-300 hover:text-pink-600">
                  Tra phạt nguội
                </Button>
              </a>
              <a href="/tien-ich-giao-thong/hang-xe">
                <Button variant="outline" size="sm" className="text-xs border-slate-200 hover:border-pink-300 hover:text-pink-600">
                  Tra cứu dòng xe
                </Button>
              </a>
            </div>
            <a href="/tien-ich-giao-thong/chuyen-di">
              <Button size="sm" className="bg-pink-600 hover:bg-pink-700 text-white text-xs gap-1 font-semibold">
                Tính chi phí chuyến đi <ChevronRight className="w-3 h-3" />
              </Button>
            </a>
          </CardFooter>
        </Card>

        {/* Side Widget: Gas & EV Charger Info */}
        <Card className="shadow-md border-slate-200/80 flex flex-col justify-between">
          <div>
            <CardHeader className="pb-3 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Fuel className="w-4 h-4 text-amber-600" /> Nhiên Liệu &amp; Trạm Sạc
                </CardTitle>
                <Badge variant="secondary" className="bg-amber-50 text-amber-700 text-[11px] font-bold">
                  Hôm nay
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="pt-4 space-y-3">
              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Giá RON 95-III</span>
                  <span className="text-[11px] text-slate-400">Kỳ điều chỉnh mới nhất</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-extrabold text-slate-900 block">22.850đ</span>
                  <span className="text-[10px] font-bold text-emerald-600">▼ 420đ/lít</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Trạm Sạc EV Gần Nhất</span>
                  <span className="text-[11px] text-slate-400">VinFast FastCharge (0.8km)</span>
                </div>
                <Badge className="bg-emerald-600 hover:bg-emerald-700 text-[10px] font-bold">
                  Còn 4 trụ
                </Badge>
              </div>
            </CardContent>
          </div>

          <CardFooter className="pt-3 pb-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <a href="/tien-ich-giao-thong/cay-xang" className="flex-1">
              <Button variant="outline" size="sm" className="w-full text-xs border-slate-200 hover:border-amber-400 hover:text-amber-700">
                Tìm cây xăng
              </Button>
            </a>
            <a href="/tien-ich-giao-thong/tram-sac" className="flex-1">
              <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs">
                Tìm trạm sạc EV
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
