import React from "react";

type Props = {
  level: number;
  maxLevel: number;
};

export class SpellLevel extends React.Component<Props> {
  render() {
    return (
      <div
        className={
          "level-container shadow-md absolute bottom-0 ml-1 mb-1 w-6 h-6 rounded-md flex items-center justify-center font-bold border " +
          (this.isMaxLevel()
            ? "text-black border-yellow-300 bg-yellow-500"
            : "text-white border-gray-900 bg-gray-700")
        }
      >
        {this.props.level}
      </div>
    );
  }

  private isMaxLevel(): boolean {
    return this.props.level === this.props.maxLevel;
  }
}