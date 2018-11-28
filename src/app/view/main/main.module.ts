import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { MainRoutingModule } from './main-routing.module';

import { HelloComponent } from './hello/hello.component';
import { GoodbyeComponent } from './goodbye/goodbye.component';

import { MainLayoutModule } from './shared/main-layout/main-layout.module';
import { EagerModule } from './eager/eager.module';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,

    MainLayoutModule,
    EagerModule
  ],
  declarations: [
    HelloComponent,
    GoodbyeComponent,
  ]
})
export class MainModule { }

// 在Module里面注释会使@angular/cli 生成错误的代码，故把注释移到这里。

// declarations里面的是没有下级Module的Entry Components，直接声明在跟Module。

// 有下级Module的Entry Components，必须引入其Module, 否则routing初始化时会报错。
// 同步加载的Feature Module须要导入，才能使用由该Module声明的Compoent来当做Entry Component， 注意Entry Component不须要Export。
// 个人理解，对于同步加载的Feature Module，其意义是精简目录结构，当Component太多的时候进行归类。个人还是倾向于使用Lazy Load的Module。
// 以此例来说，虽然EagerModule也可以定义自己的Routing Module, 但是放在这里的routing module统一管理会更方便维护。
