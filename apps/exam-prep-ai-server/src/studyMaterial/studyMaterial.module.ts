import { Module } from "@nestjs/common";
import { StudyMaterialModuleBase } from "./base/studyMaterial.module.base";
import { StudyMaterialService } from "./studyMaterial.service";
import { StudyMaterialController } from "./studyMaterial.controller";
import { StudyMaterialResolver } from "./studyMaterial.resolver";

@Module({
  imports: [StudyMaterialModuleBase],
  controllers: [StudyMaterialController],
  providers: [StudyMaterialService, StudyMaterialResolver],
  exports: [StudyMaterialService],
})
export class StudyMaterialModule {}
