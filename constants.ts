import { TownProblem, ToolType } from './types';

export const INITIAL_GOLD = 100;
export const MAX_HAPPINESS = 100;
export const MAX_ENVIRONMENT = 100;

export const TOWN_PROBLEMS: TownProblem[] = [
  {
    id: 1,
    title: "Bếp Gas Lửa Đỏ",
    description: "Một gia đình than phiền bếp gas bị lửa đỏ và tốn gas quá mức! Có thể do thiếu không khí.",
    correctTool: ToolType.FAN,
    isSolved: false,
    dialogueSuccess: "Tuyệt vời! Ngọn lửa đã chuyển sang màu xanh. Đốt cháy hoàn toàn giúp tiết kiệm gas.",
    dialogueFail: "Vẫn chưa được. Lửa đỏ chứng tỏ thiếu oxy để cháy hoàn toàn."
  },
  {
    id: 2,
    title: "Lò Nung Khói Đen",
    description: "Lò nung gạch đang xả khói đen mù mịt. Than chưa cháy hết.",
    correctTool: ToolType.FAN, // Increased air supply also helps here, but context implies "increase contact" or air
    isSolved: false,
    dialogueSuccess: "Khói đen đã giảm! Cung cấp đủ khí giúp than cháy sạch hơn.",
    dialogueFail: "Khói vẫn đen kịt. Cần thêm dưỡng khí!"
  },
  {
    id: 3,
    title: "Rò Rỉ Khí Gas",
    description: "Có mùi gas nồng nặc trong nhà bếp! Nguy hiểm quá!",
    correctTool: ToolType.VALVE,
    isSolved: false,
    dialogueSuccess: "Đã khóa van an toàn và mở cửa sổ. Bạn đã ngăn chặn một vụ nổ!",
    dialogueFail: "Nguy hiểm! Cần ngắt nguồn gas ngay lập tức."
  },
  {
    id: 4,
    title: "Sưởi Ấm Mùa Đông",
    description: "Một cụ già đang định đốt than tổ ong trong phòng kín để sưởi ấm.",
    correctTool: ToolType.WARNING,
    isSolved: false,
    dialogueSuccess: "Đã cảnh báo kịp thời! Đốt than trong phòng kín sinh ra khí CO cực độc gây ngạt.",
    dialogueFail: "Không can thiệp kịp thời có thể gây nguy hiểm tính mạng!"
  }
];