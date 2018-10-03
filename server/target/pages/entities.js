"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
const BaseEntity_1 = require("typeorm/repository/BaseEntity");
const typeorm_1 = require("typeorm");
let Page = class Page extends BaseEntity_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Page.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('timestamp', { nullable: false }),
    __metadata("design:type", Date)
], Page.prototype, "publishedAt", void 0);
__decorate([
    typeorm_1.Column('timestamp'),
    __metadata("design:type", Date)
], Page.prototype, "unpublishedAt", void 0);
Page = __decorate([
    typeorm_1.Entity()
], Page);
exports.default = Page;
class PageContent extends BaseEntity_1.BaseEntity {
}
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PageContent.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", String)
], PageContent.prototype, "title", void 0);
__decorate([
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", String)
], PageContent.prototype, "body", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PageContent.prototype, "locale", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PageContent.prototype, "order", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PageContent.prototype, "iFrameUrl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PageContent.prototype, "slug", void 0);
exports.PageContent = PageContent;
class PageTitle extends BaseEntity_1.BaseEntity {
}
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PageTitle.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", String)
], PageTitle.prototype, "locale", void 0);
__decorate([
    typeorm_1.Column('text', { nullable: false }),
    __metadata("design:type", String)
], PageTitle.prototype, "content", void 0);
__decorate([
    typeorm_1.OneToOne(),
    __metadata("design:type", typeof (_a = typeof  !== "undefined" && ) === "function" ? _a : Object)
], PageTitle.prototype, "pageId", void 0);
exports.PageTitle = PageTitle;
//# sourceMappingURL=entities.js.map