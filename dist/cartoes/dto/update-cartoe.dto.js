"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCartoeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cartoe_dto_1 = require("./create-cartoe.dto");
class UpdateCartoeDto extends (0, mapped_types_1.PartialType)(create_cartoe_dto_1.CreateCartoeDto) {
}
exports.UpdateCartoeDto = UpdateCartoeDto;
//# sourceMappingURL=update-cartoe.dto.js.map