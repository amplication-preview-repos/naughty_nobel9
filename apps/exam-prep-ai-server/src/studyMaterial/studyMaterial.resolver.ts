import * as graphql from "@nestjs/graphql";
import { StudyMaterialResolverBase } from "./base/studyMaterial.resolver.base";
import { StudyMaterial } from "./base/StudyMaterial";
import { StudyMaterialService } from "./studyMaterial.service";

@graphql.Resolver(() => StudyMaterial)
export class StudyMaterialResolver extends StudyMaterialResolverBase {
  constructor(protected readonly service: StudyMaterialService) {
    super(service);
  }
}
