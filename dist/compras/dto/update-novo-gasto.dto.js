"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNovoGastoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_novo_gasto_dto_1 = require("./create-novo-gasto.dto");
class UpdateNovoGastoDto extends (0, mapped_types_1.PartialType)(create_novo_gasto_dto_1.CreateNovoGastoDto) {
}
exports.UpdateNovoGastoDto = UpdateNovoGastoDto;
//# sourceMappingURL=update-novo-gasto.dto.js.map