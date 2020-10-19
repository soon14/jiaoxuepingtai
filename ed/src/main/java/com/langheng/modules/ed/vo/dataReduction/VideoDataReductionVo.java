package com.langheng.modules.ed.vo.dataReduction;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class VideoDataReductionVo {
    @ApiModelProperty("弹幕统计")
    private List<Map> barrageData;
    @ApiModelProperty("观看统计")
    private List<Map> watchCountData;

}
